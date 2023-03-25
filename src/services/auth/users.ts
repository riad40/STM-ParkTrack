import api from "../../configs/api"

// get the token from the local storage
const token = localStorage.getItem("token")

// make a request to users endpoint
const getUsers = async () => {
    try {
        const response = await api.get("/users", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return response.data
    } catch (error) {
        return error
    }
}

export default getUsers
