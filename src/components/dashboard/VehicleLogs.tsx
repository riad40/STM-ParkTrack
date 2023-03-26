import { useState, useEffect } from "react"
import getVehicleLogs from "../../services/logs/getVehicleLogs"
import useAuth from "../../hooks/useAuth"

const VehicleLogs = () => {
    // get the user from the local storage
    const { auth } = useAuth()

    // disruct the _id from the user
    const { id } = auth?.user

    // create the state for the logs
    const [logs, setLogs] = useState<any>([])

    // fetch the logs
    const fetchVehicleLogs = async () => {
        const response = await getVehicleLogs(id as string)
        setLogs(response)
    }

    useEffect(() => {
        fetchVehicleLogs()
    }, [])

    if (!logs) {
        return (
            <center>
                <h1>Ur car never steped here</h1>
            </center>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center w-2/4">
                {logs &&
                    logs.map((log: any) => (
                        <div
                            key={log._id}
                            className="flex justify-between items-center w-full p-2 my-2 border-2 rounded-lg border-gray-400"
                        >
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-xl font-bold">
                                    {log.licensePlate}
                                </p>
                                <p className="text-sm">{log.timeIn}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-xl font-bold">
                                    {log.user.username}
                                </p>
                                <p className="text-sm">{log.timeOut}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default VehicleLogs
