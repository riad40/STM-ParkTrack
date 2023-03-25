import api from "../../configs/api"

// get the token from the local storage
const token = localStorage.getItem("token")

// make a request to the update log endpoint
const updateLog = async (
    licensePlate: string,
    timeIn: string,
    timeOut: string,
    user: string,
    id: string
) => {
    try {
        const response = await api.put(
            `/logs/${id}`,
            { licensePlate, timeIn, timeOut, user },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response?.data
    } catch (error) {
        return error
    }
}

export default updateLog
