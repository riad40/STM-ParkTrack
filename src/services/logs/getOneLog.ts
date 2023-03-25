import api from "../../configs/api"

// get the token from the local storage
const token = localStorage.getItem("token")

// make a request to the get one log endpoint
const getOneLog = async (id: string) => {
    try {
        const response = await api.get(`/logs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response?.data
    } catch (error) {
        return error
    }
}

export default getOneLog
