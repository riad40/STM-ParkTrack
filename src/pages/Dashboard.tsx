import useAuth from "../hooks/useAuth"

const Dashboard = (): JSX.Element => {
    // Get the auth global state
    const { auth } = useAuth()

    console.log(auth)

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard
