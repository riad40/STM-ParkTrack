import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const RightContainer = ({ title }: { title: string }) => {
    const [linkAndTitle, setLinkAndTitle] = useState({ link: "", title: "" })

    useEffect(() => {
        switch (title) {
            case "Login":
                setLinkAndTitle({ link: "/", title: "Home" })
                break
            case "Register":
                setLinkAndTitle({ link: "/", title: "Home" })
                break
            default:
                setLinkAndTitle({ link: "/dashboard", title: "Dashboard" })
                break
        }
    }, [title])

    return (
        <div className="flex items-center justify-center w-2/4 h-screen">
            <img
                src={require("../../assets/imgs/right.jpg")}
                alt="Right"
                className="w-full h-full object-cover object-cover"
            />

            <div className="flex flex-col items-center justify-center absolute">
                <h1 className="text-4xl font-bold text-blue-200">
                    STM ParkTrack
                </h1>

                <p className="text-center text-gray-800 font-bold text-lg w-3/4 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet
                </p>

                <Link to={linkAndTitle.link}>
                    <button className="py-2 px-4 text-white bg-gray-800 rounded w-full mt-4">
                        Back to {linkAndTitle.title}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default RightContainer
