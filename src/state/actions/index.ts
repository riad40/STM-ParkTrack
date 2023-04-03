import { AuthOptions } from "../../@types"

const setAuth = (auth: AuthOptions) => {
    return {
        type: "SET_AUTH",
        payload: auth,
    }
}

export { setAuth }
