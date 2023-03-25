import api from "../../configs/api"

// get the token from the local storage
const token = localStorage.getItem("token")

// make a request to the get logs endpoint
const getLogs = async () => {
    try {
        const response = await api.get("/logs", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return response.data
    } catch (error) {
        return error
    }
}

export default getLogs
