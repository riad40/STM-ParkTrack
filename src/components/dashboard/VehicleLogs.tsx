import { useState, useEffect } from "react"
import getVehicleLogs from "../../services/logs/getVehicleLogs"
import useAuth from "../../hooks/useAuth"
import { Loading, Table } from "../"
import formatDate from "../../helpers/formatDate"

const VehicleLogs = () => {
    // get the user from the local storage
    const { auth } = useAuth()

    // disruct the _id from the user
    const id = auth?.user?.id

    // create the state for the logs
    const [logs, setLogs] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)

    // fetch the logs
    const fetchVehicleLogs = async () => {
        const response = await getVehicleLogs(id as string)
        setLogs(response)
        setLoading(false)
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

    if (loading) return <Loading />

    return (
        <div className="w-9/12 mx-auto" style={{ maxWidth: 900 }}>
            <Table
                data={logs.map((log: any) => {
                    return {
                        _id: log._id,
                        licensePlate: log.licensePlate,
                        timeIn: formatDate(log.timeIn, false),
                        timeOut: log.timeOut
                            ? formatDate(log.timeOut, false)
                            : "-",
                    }
                })}
                columns={[
                    {
                        id: "licensePlate",
                        label: "License Plate",
                        minWidth: 170,
                    },
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
                ]}
            />
        </div>
    )
}

export default VehicleLogs
