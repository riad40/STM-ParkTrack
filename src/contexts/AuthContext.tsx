import { createContext, useState } from "react"
import { AuthOptions, AuthContextType } from "../@types"

// Create the context
const AuthContext = createContext<AuthContextType>({} as AuthContextType)

// Create the provider
interface AuthProviderProps {
    children: JSX.Element
}
const AuthProvider = ({ children }: AuthProviderProps) => {
    // Create the state
    const [auth, setAuth] = useState<AuthOptions>({} as AuthOptions)

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
