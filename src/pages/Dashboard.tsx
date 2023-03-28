import useAuth from "../hooks/useAuth"
import {
    Header,
    Container,
    GarageLogs,
    ParkingLot,
    VehicleLogs,
} from "../components"
import { useState } from "react"

const Dashboard = (): JSX.Element => {
    // Get the auth global state
    const { auth } = useAuth()

    // active tab state
    const [activeTab, setActiveTab] = useState<string>("parking lot")

    // handle click
    const handleClick = (option: string) => {
        setActiveTab(option)
    }

    return (
        <>
            <Header />
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-center mt-5">
                    Welcome {auth?.user?.username}
                </h1>
                <div
                    className="flex justify-between items-center w-9/12 mx-auto my-7 px-2 py-2 rounded-md bg-gray-200 shadow-md"
                    style={{ maxWidth: 900 }}
                >
                    <button
                        onClick={() => handleClick("parking lot")}
                        className={`${
                            activeTab === "parking lot"
                                ? "bg-blue-300"
                                : "bg-gray-300"
                        } px-2 py-1 rounded`}
                    >
                        Parking Lot
                    </button>

                    <button
                        onClick={() => handleClick("logs")}
                        className={`${
                            activeTab === "logs" ? "bg-blue-300" : "bg-gray-300"
                        } px-2 py-1 rounded`}
                    >
                        {auth?.user?.roles?.includes("super admin")
                            ? "Garage Logs"
                            : "Vehicle Logs"}
                    </button>
                </div>
                <Container>
                    <>
                        {activeTab === "parking lot" && <ParkingLot />}
                        {activeTab === "logs" &&
                            (auth?.user?.roles?.includes("super admin") ? (
                                <GarageLogs />
                            ) : (
                                <VehicleLogs />
                            ))}
                    </>
                </Container>
            </div>
        </>
    )
}

export default Dashboard
