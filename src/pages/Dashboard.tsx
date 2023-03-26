import useAuth from "../hooks/useAuth"
import { Header, Container, GarageLogs, ParkingLot } from "../components"
import { HeaderOpions } from "../@types"
import { useState, useEffect } from "react"

const Dashboard = (): JSX.Element => {
    // Get the auth global state
    const { auth } = useAuth()

    // active tab state
    const [activeTab, setActiveTab] = useState<string>("parking lot")

    // handle click
    const handleClick = (option: string) => {
        setActiveTab(option)
    }

    // based on the user role, render the appropriate content
    if (auth.user?.roles?.includes("super admin")) {
        return (
            <div>
                <Header option={HeaderOpions.Admin} />
                <div className="flex justify-between items-center w-2/4 mx-auto my-7">
                    <button
                        onClick={() => handleClick("parking lot")}
                        className={`${
                            activeTab === "parking lot"
                                ? "bg-gray-300"
                                : "bg-gray-100"
                        } px-2 py-1 rounded-md`}
                    >
                        Parking Lot
                    </button>

                    <button
                        onClick={() => handleClick("garage logs")}
                        className={`${
                            activeTab === "garage logs"
                                ? "bg-gray-300"
                                : "bg-gray-100"
                        } px-2 py-1 rounded-md`}
                    >
                        Garage Logs
                    </button>
                </div>
                <Container>
                    <>
                        {activeTab === "parking lot" && <ParkingLot />}
                        {activeTab === "garage logs" && <GarageLogs />}
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
