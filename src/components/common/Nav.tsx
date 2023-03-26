import { NavOptions } from "../../@types"
import { Link } from "react-router-dom"
import { Button } from "../"

interface NavProps {
    items: NavOptions
}

const Nav = ({ items }: NavProps): JSX.Element => {
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
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-400 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        {items.map((item, index) => {
                            return (
                                <li>
                                    <Link
                                        to={item.name.toLocaleLowerCase()}
                                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
                                        aria-current="page"
                                    >
                                        <Button text={item.name} />
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
