import { FormContainer, Input, Alert } from "../components"
import { useState } from "react"
import register from "../services/auth/register"
import InputValidator from "../helpers/formValidator"
import { Link, useNavigate } from "react-router-dom"

const Register = (): JSX.Element => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    // set errors and success states
    const [err, setErr] = useState<any>("")
    const [success, setSuccess] = useState<any>("")

    // set navigate fucntion
    const navigate = useNavigate()

    // handle input change
    const setUsername = (username: string) => setData({ ...data, username })
    const setEmail = (email: string) => setData({ ...data, email })
    const setPassword = (password: string) => setData({ ...data, password })
    const setConfirmPassword = (confirmPassword: string) =>
        setData({ ...data, confirmPassword })

    const { username, email, password, confirmPassword } = data

    const validateInputs = (): boolean => {
        if (
            !InputValidator.isAllInputsFilled([
                username,
                email,
                password,
                confirmPassword,
            ])
        ) {
            setErr("All the fileds are required")
            return false
        }

        if (!InputValidator.isEmailValid(email)) {
            setErr("Email Invalid")
            return false
        }

        if (password !== confirmPassword) {
            setErr("Passwords must be matched")
            return false
        }
        return true
    }

    // Trigger the register function when the form is submitted
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validateInputs()) {
            const response = await register(username, email, password)
            // check if the response contains an error
            if (response?.response?.status == 400) {
                setErr(response?.response?.data?.message)
                return
            }

            setSuccess(`${response.message} Redirecting to login....`)
            setErr("")
            setTimeout(() => {
                navigate("/login")
            }, 3000)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <FormContainer
                title="Register"
                children={
                    <>
                        {err && <Alert content={err} success={false} />}
                        {success && <Alert content={success} success={true} />}
                        <form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                    setErr("")
                                }}
                            />
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    setErr("")
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
                                    setErr("")
                                }}
                            />
                            <Input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value)
                                    setErr("")
                                }}
                            />
                            <button
                                type="submit"
                                className="w-full py-2 px-4 text-white bg-gray-800 rounded mt-4"
                            >
                                Register
                            </button>
                            <p className="text-center py-3 text-gray-800">
                                Already Have An Account ?
                                <Link to="/login" className="font-bold px-2">
                                    Login
                                </Link>
                            </p>
                        </form>
                    </>
                }
            />
        </div>
    )
}

export default Register
