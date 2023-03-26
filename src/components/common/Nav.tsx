import { NavOptions } from "../../@types"
import { Link, useNavigate } from "react-router-dom"
import logout from "../../services/auth/logout"
import useAuth from "../../hooks/useAuth"

interface NavProps {
    items: NavOptions
}

const Nav = ({ items }: NavProps): JSX.Element => {
    const { setAuth } = useAuth()

    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        // clear the auth state
        setAuth({ token: null, user: null })

        // clear the token and the user from the local storage
        localStorage.removeItem("token")
        localStorage.removeItem("user")

        // redirect to home page
        navigate("/")
    }

    return (
        <nav className="bg-gray-400 border-gray-200 px-2 sm:px-4 py-2.5 ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-6 mr-3 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap ">
                        STM ParkTrack
                    </span>
                </a>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-400 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        {items.map((item, index) => {
                            return (
                                <li>
                                    <Link
                                        to={
                                            item.name === "Login"
                                                ? "/login"
                                                : "#"
                                        }
                                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
                                        aria-current="page"
                                    >
                                        {item.name === "logout" ? (
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={handleLogout}
                                            >
                                                {item.name}
                                            </button>
                                        ) : (
                                            <span>{item.name}</span>
                                        )}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
