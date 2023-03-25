import { FormContainer, Input, Button } from "../components"
import { useState } from "react"
import register from "../services/auth/register"

const Register = (): JSX.Element => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    // handle input change
    const setUsername = (username: string) => setData({ ...data, username })
    const setEmail = (email: string) => setData({ ...data, email })
    const setPassword = (password: string) => setData({ ...data, password })
    const setConfirmPassword = (confirmPassword: string) =>
        setData({ ...data, confirmPassword })

    const { username, email, password, confirmPassword } = data

    // Trigger the register function when the form is submitted
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await register(username, email, password)
        console.log(response)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <FormContainer
                title="Register"
                children={
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            type="email"
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
                        <Input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Button text="Register" type="submit" />
                    </form>
                }
            />
        </div>
    )
}

export default Register
