import { use } from "react"
import { AuthContext } from "../Context"

const useAuth = () => {
    return use(AuthContext)
}
export default useAuth;