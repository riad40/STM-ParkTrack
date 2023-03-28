import { FormContainer, Input, Alert } from "../components"
import { useState } from "react"
import login from "../services/auth/login"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import InputValidator from "../helpers/formValidator"
import { Link } from "react-router-dom"

const Login = (): JSX.Element => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<any>()
    const [success, setSuccess] = useState<any>("")

    const navigate = useNavigate()

    // Get the setAuth function
    const { setAuth } = useAuth()

    // input validation
    const validateInputs = (): boolean => {
        if (!InputValidator.isAllInputsFilled([email, password])) {
            setError("All the fileds are required")
            return false
        }

        if (!InputValidator.isEmailValid(email)) {
            setError("Email Invalid")
            return false
        }
        return true
    }

    // Trigger the login function when the form is submitted
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!validateInputs()) return
        const response = await login(email, password)

        console.log(response)

        // check if the response contains an error
        if (response?.response?.status == 400) {
            setError(response?.response?.data?.message)
            return
        }

        // get the token and the user from the response
        const { token, user } = response

        // set the token and the user in the local storage
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))

        // set the auth global state
        setAuth({ token, user })

        // set the error to an empty string
        setError("")

        // set success message and redirect user to the dashboard
        setSuccess(`${response.message} Redirecting to dashboard....`)
        navigate("/dashboard")
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <FormContainer
                title="Login"
                children={
                    <>
                        {error && <Alert content={error} success={false} />}
                        {success && <Alert content={success} success={true} />}
                        <form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    setError("")
                                }}
                            />
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setError("")
                                }}
                            />
                            <button
                                type="submit"
                                className="py-2 px-4 text-white bg-gray-800 rounded w-full mt-4"
                            >
                                Log in
                            </button>
                            <p className="text-center py-3 text-gray-800">
                                First Time Here ?
                                <Link to="/register" className="font-bold px-2">
                                    Register
                                </Link>
                            </p>
                        </form>
                    </>
                }
            />
        </div>
    )
}

export default Login
