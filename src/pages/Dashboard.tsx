import useAuth from "../hooks/useAuth"
import { Header, Container, Table, Button } from "../components"
import { HeaderOpions, CarLog } from "../@types"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import getLogs from "../services/logs/getLogs"
import deleteLog from "../services/logs/deleteLog"

const Dashboard = (): JSX.Element => {
    // Get the auth global state
    const { auth } = useAuth()

    // Get the logs
    const [logs, setLogs] = useState<any>([])
    useEffect(() => {
        const getLogsData = async () => {
            const response = await getLogs()
            setLogs(response)
        }
        getLogsData()
    }, [])

    // Delete the log
    const handleDelete = async (id: string) => {
        const response = await deleteLog(id)
        // update the logs state
        setLogs(logs.filter((log: CarLog) => log._id !== id))
    }

    // based on the user role, render the appropriate content
    if (auth.user?.roles?.includes("super admin")) {
        return (
            <div>
                <Header option={HeaderOpions.Admin} />
                <Container>
                    <>
                        <div className="flex justify-between items-center w-2/4 mx-auto">
                            <h1 className="text-2xl font-bold">
                                The garage current state
                            </h1>
                            <Link to="/logs/create">
                                <Button text="Add new Log" />
                            </Link>
                        </div>
                        <Table
                            data={logs.map((log: any) => {
                                return {
                                    _id: log._id,
                                    licensePlate: log.licensePlate,
                                    timeIn: log.timeIn,
                                    timeOut: log.timeOut,
                                    user: log.user.username,
                                    actions: [
                                        {
                                            type: "edit",
                                        },
                                        {
                                            type: "delete",
                                            onClick: () =>
                                                handleDelete(log._id),
                                        },
                                    ],
                                }
                            })}
                            columns={[
                                {
                                    id: "licensePlate",
                                    label: "License Plate",
                                },
                                { id: "user", label: "Owner" },
                                {
                                    id: "timeIn",
                                    label: "Time In",
                                },
                                {
                                    id: "timeOut",
                                    label: "Time Out",
                                },
                                {
                                    id: "actions",
                                    label: "Actions",
                                },
                            ]}
                        />
                    </>
                </Container>
            </div>
        )
    }

    return (
        <div>
            <h1>User Dashboard</h1>
        </div>
    )
}

export default Dashboard
