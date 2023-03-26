import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import getLogs from "../../services/logs/getLogs"
import deleteLog from "../../services/logs/deleteLog"
import { CarLog } from "../../@types"
import { Table, Button, Loading } from "../../components"

const GarageLogs = (): JSX.Element => {
    // Get the logs
    const [logs, setLogs] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const getLogsData = async () => {
            const response = await getLogs()
            setLogs(response)
            setLoading(false)
        }
        getLogsData()
    }, [])

    // Delete the log
    const handleDelete = async (id: string) => {
        const response = await deleteLog(id)
        // update the logs state
        setLogs(logs.filter((log: CarLog) => log._id !== id))
    }

    // handle the filter by license plate
    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filter = e.target.value.trim()

        // if the filter is empty, get all the logs
        if (!filter) {
            const getLogsData = async () => {
                const response = await getLogs()
                setLogs(response)
            }
            getLogsData()
            return
        }

        // filter the logs
        const filteredLogs = logs.filter((log: CarLog) => {
            return log.licensePlate.toLowerCase().includes(filter.toLowerCase())
        })
        setLogs(filteredLogs)
    }

    if (loading) return <Loading />

    return (
        <>
            <div className="flex justify-between items-center w-2/4 mx-auto my-7">
                <input
                    type="text"
                    placeholder="filter by license plate"
                    onChange={handleFilter}
                    className="border border-gray-300 rounded-md px-2 py-1"
                />
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
                        timeOut: log.timeOut ? log.timeOut : "Still in",
                        user: log.user.username,
                        actions: [
                            {
                                type: "edit",
                            },
                            {
                                type: "delete",
                                onClick: () => handleDelete(log._id),
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
    )
}

export default GarageLogs
