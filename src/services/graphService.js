import axios from "axios";
import { baseUrl } from "@/utils/apiUtils"

export default {
    dailyWeights({ to, from, username, password }) {
        return axios.get(`${baseUrl}/get-daily-weights?to=${to}&from=${from}&username=${username}&password=${password}`)
    }
}