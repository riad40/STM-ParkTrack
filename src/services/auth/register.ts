import { auth } from "../../configs/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

// make register function
const register = async (username: string, email: string, password: string) => {
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        return response
    } catch (error) {
        return error
    }
}

export default register
