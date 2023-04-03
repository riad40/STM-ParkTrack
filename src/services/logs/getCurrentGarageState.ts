import api from "../../configs/api"

const getCurrentGarageState = async (token: string) => {
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
