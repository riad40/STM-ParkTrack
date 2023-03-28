import { useEffect, useState } from "react"
import getCurrentGarageState from "../../services/logs/getCurrentGarageState"
import { Loading } from "../"
import getOneLog from "../../services/logs/getOneLog"

const ParkingLot = () => {
    const [garageState, setGarageState] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchGarageState = async () => {
            const response = await getCurrentGarageState()
            setGarageState(response)
            setLoading(false)
        }
        fetchGarageState()
    }, [])

    const capacity = 50
    const filled = garageState.length

    const emptySpots = Array(capacity - filled).fill(null)
    const filledSpots = Array(filled).fill(null)

    if (loading) return <Loading />

    return (
        <>
            <div
                className="flex flex-wrap justify-center w-2/4 mx-auto"
                style={{ maxWidth: 570 }}
            >
                {filledSpots.map((spot, index) => (
                    <div
                        key={index}
                        className="w-10 h-10 m-2 rounded bg-blue-500"
                    />
                ))}
                {emptySpots.map((spot, index) => (
                    <div
                        key={index}
                        className="w-10 h-10 m-2 rounded bg-gray-400"
                    />
                ))}
            </div>
        </>
    )
}

export default ParkingLot
