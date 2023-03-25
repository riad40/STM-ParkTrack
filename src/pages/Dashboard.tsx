import useAuth from "../hooks/useAuth"
import { Header, Container, Table, Button } from "../components"
import { HeaderOpions } from "../@types"
import { Link } from "react-router-dom"

const Dashboard = (): JSX.Element => {
    // Get the auth global state
    const { auth } = useAuth()

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
                            data={[
                                {
                                    id: 1,
                                    name: "John Doe",
                                    email: "something@gmail.com",
                                    actions: ["edit", "delete"],
                                },
                            ]}
                            columns={[
                                { id: "id", label: "ID", minWidth: 100 },
                                { id: "name", label: "Name", minWidth: 170 },
                                { id: "email", label: "Email", minWidth: 100 },
                                {
                                    id: "actions",
                                    label: "Actions",
                                    minWidth: 100,
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
