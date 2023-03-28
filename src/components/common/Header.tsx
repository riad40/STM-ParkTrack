import useAuth from "../../hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"
import logout from "../../services/auth/logout"

const Header = (): JSX.Element => {
    const { auth, setAuth } = useAuth()

    const navigate = useNavigate()

    // handle logout
    const handleLogout = async () => {
        await logout()
        // clear the auth global state, && local storage
        localStorage.clear()
        setAuth({ token: null, user: null })

        // redirect user to the login page
        navigate("/")
    }

    return (
        <header className="w-full" style={{ backgroundColor: "#202442" }}>
            <nav className="flex flex-col sm:flex-row sm:justify-between items-center w-3/4 mx-auto py-5">
                <Link
                    to={auth?.token ? "/dashboard" : "/"}
                    className="brand-logo"
                >
                    <h1 className="text-white text-2xl">STM ParkTrack</h1>
                </Link>
                <Link
                    to="/login"
                    className="py-2 px-4 text-white bg-gray-500 rounded"
                >
                    {auth?.token ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <button>Login</button>
                    )}
                </Link>
            </nav>
        </header>
    )
}

export default Header
