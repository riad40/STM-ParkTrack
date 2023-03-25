import api from "../../configs/api"

// make a request to the login endpoint
const login = async (email: string, password: string) => {
    try {
        const response = await api.post("/auth/login", { email, password })
        return response?.data
    } catch (error) {
        return error
    }
}

export default login
