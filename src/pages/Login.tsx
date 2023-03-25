import { FormContainer, Input, Button } from "../components"
import { useState } from "react"
import login from "../services/auth/login"
import useAuth from "../hooks/useAuth"
import { useNavigate, useLocation } from "react-router-dom"

const Login = (): JSX.Element => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    // Get the setAuth function
    const { setAuth } = useAuth()

    // Get the location && navigate functions
    const location = useLocation()
    const navigate = useNavigate()

    // Trigger the login function when the form is submitted
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await login(email, password)
        // check if the response dose not contain an error
        if (!response.error) {
            // get the token and the user from the response
            const { token, user } = response
            // set the token and the user in the local storage
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            // set the auth global state
            setAuth({
                isAuth: true,
                token,
                user,
            })
            // redirect the user to the dashboard page
            navigate(location.state?.from || "/dashboard")
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <FormContainer
                title="Login"
                children={
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button text="Login" type="submit" />
                    </form>
                }
            />
        </div>
    )
}

export default Login
