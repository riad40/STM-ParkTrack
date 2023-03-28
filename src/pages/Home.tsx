import { Header } from "../components"
import { Link } from "react-router-dom"

const Home = (): JSX.Element => {
    return (
        <div>
            <Header />
            <section className="w-full flex justify-center items-center h-[80vh]">
                <div className="w-full mx-8 sm:w-1/2">
                    <h1 className="text-dark py-5 text-5xl text-center">
                        STM ParkTrack
                    </h1>
                    <p className="text-dark text-center text-xl py-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem modi non ullam est architecto molestiae sapiente
                        repellendus nemo voluptatibus! Ullam fuga dolor facilis
                        dolorem. Dolore voluptate odio facilis! Mollitia,
                        cupiditate!
                    </p>
                    <div className="flex justify-center">
                        <Link to="/register">
                            <button className="py-2 px-4 text-white bg-gray-800 rounded">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
