import api from "../../configs/api"

// get the token from the local storage
const token = localStorage.getItem("token")

const getCurrentGarageState = async () => {
    try {
        const response = await api.get("/logs/current", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response?.data
    } catch (error) {
        return error
    }
}

export default getCurrentGarageState
