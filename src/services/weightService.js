import axios from "axios";
import { baseUrl } from "@/utils/apiUtils"

export default {
    weight({ basculaNumber }) {
        return axios.get(`${baseUrl}/pesar?bascula=${basculaNumber}`)
    }
}