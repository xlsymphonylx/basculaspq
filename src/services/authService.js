import { baseUrl } from "@/utils/apiUtils"
import axios from "axios"

export default {
    login({ username, password }) {
        return axios.get(`${baseUrl}/login?username=${username}&password=${password}`)
    }
}