import { FormContainer, Input, Button } from "../components"
import { useState } from "react"
import login from "../services/auth/login"

const Login = (): JSX.Element => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    // Trigger the login function when the form is submitted
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await login(username, password)
        console.log(response)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <FormContainer
                title="Login"
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
