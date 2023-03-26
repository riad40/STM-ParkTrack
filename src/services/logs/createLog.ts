import api from "../../configs/api"

// get the token from the local storage
const token = localStorage.getItem("token")

// make a request to the create log endpoint
const createLog = async (
    licensePlate: string,
    timeIn: string,
    timeOut: string,
    user: string
) => {
    try {
        const response = await api.post(
            "/logs",
            { licensePlate, timeIn, timeOut, user },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response
    } catch (error) {
        return error
    }
}

export default createLog
