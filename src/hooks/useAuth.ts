import { useSelector, useDispatch } from "react-redux"
import { rootState } from "../@types"

const useAuth = () => {
    const dispatch = useDispatch()

    const auth = useSelector((state: rootState) => state.auth)

    return { auth, dispatch }
}

export default useAuth
