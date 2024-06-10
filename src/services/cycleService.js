import { baseUrl } from "@/utils/apiUtils"
import axios from "axios"

export default {
    getCycle({ username, password, cycle, date, correlative }) {
        return axios.get(`${baseUrl}/get-local-ciclo?username=${username}&password=${password}&numero_ciclo=${cycle}&fecha=${date}&correlativo=${correlative}`)
    }
}