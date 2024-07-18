import { baseUrl } from "@/utils/apiUtils"
import axios from "axios"

export default {
    getLocalCycle({ username, password, cycle, date, correlative }) {
        return axios.get(`${baseUrl}/get-local-ciclo?username=${username}&password=${password}&numero_ciclo=${cycle}&fecha=${date}&correlativo=${correlative}`)
    }, getCycle({ cycle }) {
        return axios.get(`${baseUrl}/get-datos-ciclo?numero_ciclo=${cycle}`)
    }, nullCycle({ nullCycle,
        nullCycleDate,
        nullContainerType,
        nullRegistryNumber,
        nullWeightingType, }) {
        return axios.
            get(`${baseUrl}/anular-pesaje?ciclo=${nullCycle}&fecha=${nullCycleDate}&indicador=${nullContainerType}&numero_registro=${nullRegistryNumber}&tipo_pesaje=${nullWeightingType}`)
    },
    localNullCycle({
        nullCycle,
        nullCycleDate,
        username,
        password, }) {
        return axios.
            get(`${baseUrl}/actualizar-anulado?ciclo=${nullCycle}&fecha=${nullCycleDate}
                &username=${username}&password=${password}`)
    }, getPolicy({ cycle, bl }) {
        return axios.get(`${baseUrl}/get-datos-poliza?numero_ciclo=${cycle}&bl=${bl}`)
    }, getReportEmployees({ to, from, username, password }) {
        return axios.get(`${baseUrl}/get-excel?to=${to}&from=${from}&username=${username}&password=${password}`, { responseType: "blob" })
    }, getWeightData({ cycle, registryNumber }) {
        return axios.get(`${baseUrl}/get-datos-pesaje?numero_ciclo=${cycle}&numero_registro=${registryNumber}`)
    }, getBL({ duca }) {
        return axios.get(`${baseUrl}/get-datos-salida?no_duca=${duca}`)
    }, getAppointment({ containerNumber }) {
        return axios.get(`${baseUrl}/get-datos-cita?contenedor=${containerNumber}`)
    }

}