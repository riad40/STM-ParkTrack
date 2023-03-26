import api from "../../configs/api"

// get the token from the local storage
const token = localStorage.getItem("token")

// make a request to the get vehicle logs endpoint
const getVehicleLogs = async (id: string) => {
    try {
        const response = await api.get(`/logs/user/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response?.data
    } catch (error) {
        return error
    }
}

export default getVehicleLogs
