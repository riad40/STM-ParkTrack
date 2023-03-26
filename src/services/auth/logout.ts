import api from "../../configs/api"

// make a request to the server to logout
const logout = async () => {
    try {
        const response = await api.get("/auth/logout")
        return response?.data
    } catch (error) {
        return error
    }
}

export default logout
