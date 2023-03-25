import useAuth from "../hooks/useAuth"

const Dashboard = (): JSX.Element => {
    // Get the auth global state
    const { auth } = useAuth()

    console.log(auth)

    // based on the user role, render the appropriate content
    if (auth.user?.roles?.includes("super admin")) {
        return (
            <div>
                <h1>Super Admin Dashboard</h1>
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
