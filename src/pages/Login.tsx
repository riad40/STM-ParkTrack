import { FormContainer, Input, Button } from "../components"
import { useState } from "react"

const Login = (): JSX.Element => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="flex justify-center items-center h-screen">
            <FormContainer
                title="Login"
                children={
                    <form>
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
