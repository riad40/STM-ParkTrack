import api from "../../configs/api"

// get the token from the local storage
const token = localStorage.getItem("token")

// make a request to the delete log endpoint
const deleteLog = async (id: string) => {
    try {
        const response = await api.delete(`/logs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response?.data
    } catch (error) {
        return error
    }
}

export default deleteLog
