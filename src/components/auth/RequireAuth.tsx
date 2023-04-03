import useAuth from "../../hooks/useAuth"
import { Navigate, Outlet } from "react-router-dom"

interface RequireAuthProps {
    roles?: string[]
}

const RequireAuth = ({ roles }: RequireAuthProps): JSX.Element => {
    // const token = localStorage.getItem("token")
    // const user = JSON.parse(localStorage.getItem("user") || "{}")
    const { auth } = useAuth()

    const userRoles = auth?.user?.roles

    // check if token exist
    if (!auth?.token) {
        return <Navigate to="/login" />
    }

    // check if the user has the required role
    if (roles && !roles.some((role) => userRoles?.includes(role))) {
        return <Navigate to="/" />
    }

    return <Outlet />
}

export default RequireAuth
