import { auth } from "../../configs/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

// make login function
const login = async (email: string, password: string) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        return response
    } catch (error) {
        return error
    }
}

export default login
