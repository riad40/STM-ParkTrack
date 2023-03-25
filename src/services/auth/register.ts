import api from "../../configs/api"

// make a request to the register endpoint
const register = async (username: string, email: string, password: string) => {
    try {
        const response = await api.post("/auth/register", {
            username,
            email,
            password,
        })
        return response.data
    } catch (error) {
        return error
    }
}

export default register
