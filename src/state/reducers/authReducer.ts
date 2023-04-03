import { setAuth } from "../actions"
import { AuthOptions } from "../../@types"

const initialState: AuthOptions = {
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") || "")
        : {},
    token: localStorage.getItem("token") || "",
}

type authActions = ReturnType<typeof setAuth>

const authReducer = (state = initialState, action: authActions) => {
    switch (action.type) {
        case "SET_AUTH":
            return action.payload
        default:
            return state
    }
}

export default authReducer
