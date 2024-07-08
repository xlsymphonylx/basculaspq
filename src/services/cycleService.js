import { baseUrl } from "@/utils/apiUtils"
import axios from "axios"

export default {
    getLocalCycle({ username, password, cycle, date, correlative }) {
        return axios.get(`${baseUrl}/get-local-ciclo?username=${username}&password=${password}&numero_ciclo=${cycle}&fecha=${date}&correlativo=${correlative}`)
    }, getPolicy({ cycle, bl }) {
        return axios.get(`${baseUrl}/get-datos-poliza?numero_ciclo=${cycle}&bl=${bl}`)
    }, getReportEmployees({ to, from, username, password }) {
        return axios.get(`${baseUrl}/get-excel?to=${to}&from=${from}&username=${username}&password=${password}`, { responseType: "blob" })
    },

}