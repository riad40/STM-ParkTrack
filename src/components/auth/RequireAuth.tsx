import useAuth from "../../hooks/useAuth"
import { Navigate, Outlet } from "react-router-dom"

interface RequireAuthProps {
    roles?: string[]
}

const RequireAuth = ({ roles }: RequireAuthProps): JSX.Element => {
    // Get auth state
    const { auth } = useAuth()

    // get user roles
    const userRoles = auth.user?.roles

    // If user is not authenticated, redirect to login page
    if (!auth.token) {
        return <Navigate to="/login" />
    }

    // If user is authenticated but does not have the required role, redirect to home page
    if (roles && !roles.some((role) => userRoles?.includes(role))) {
        return <Navigate to="/" />
    }

    // If user is authenticated and has the required role, render the component
    return <Outlet />
}

export default RequireAuth
