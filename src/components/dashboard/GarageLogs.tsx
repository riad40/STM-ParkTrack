import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import getLogs from "../../services/logs/getLogs"
import deleteLog from "../../services/logs/deleteLog"
import { CarLog } from "../../@types"
import { Table, Loading } from "../../components"
import formatDate from "../../helpers/formatDate"

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
        const confirm = window.confirm(
            "Are you sure you want to delete this log?"
        )
        if (!confirm) return
        await deleteLog(id)
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
        <div
            className="w-9/12 mx-auto flex flex-col gap-4"
            style={{ maxWidth: 900 }}
        >
            <div className="w-full flex justify-between items-center">
                <input
                    type="text"
                    placeholder="filter by license plate"
                    onChange={handleFilter}
                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 w-1/2"
                />
                <button className="text-white bg-blue-500 px-2 py-1 rounded">
                    <Link to="/logs/create">Create Log</Link>
                </button>
            </div>

            {logs.length === 0 ? (
                <div className="text-center text-gray-500">No logs found</div>
            ) : (
                <Table
                    data={logs.map((log: any) => {
                        return {
                            _id: log._id,
                            licensePlate: log.licensePlate,
                            timeIn: formatDate(log.timeIn, false),
                            timeOut: log.timeOut
                                ? formatDate(log.timeOut, false)
                                : "-",
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
                            minWidth: 170,
                        },
                        { id: "user", label: "Owner" },
                        {
                            id: "timeIn",
                            label: "Time In",
                            minWidth: 170,
                        },
                        {
                            id: "timeOut",
                            label: "Time Out",
                            minWidth: 170,
                        },
                        {
                            id: "actions",
                            label: "Actions",
                            minWidth: 170,
                        },
                    ]}
                />
            )}
        </div>
    )
}

export default GarageLogs
