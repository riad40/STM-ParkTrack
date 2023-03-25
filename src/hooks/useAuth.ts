import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

const useAuth = () => {
    // set context type
    const context = useContext(AuthContext)

    // check if context is undefined
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider")
    }

    // return context
    return context
}

export default useAuth
