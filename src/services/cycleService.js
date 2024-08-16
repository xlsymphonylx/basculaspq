import { baseUrl, secondaryUrl } from "@/utils/apiUtils";
import { combineDateTime } from "@/utils/timeUtils";
import axios from "axios";

export default {
  getLocalCycle({ username, password, cycle, date, correlative }) {
    return axios.get(
      `${baseUrl}/get-local-ciclo?username=${username}&password=${password}&numero_ciclo=${cycle}&fecha=${date}&correlativo=${correlative}`
    );
  },
  getCycle({ cycle }) {
    return axios.get(`${baseUrl}/get-datos-ciclo?numero_ciclo=${cycle}`);
  },
  nullCycle({
    nullCycle,
    nullCycleDate,
    nullContainerType,
    nullRegistryNumber,
    nullWeightingType,
    username,
    machine,
  }) {
    return axios.get(
      `${baseUrl}/anular-pesaje?ciclo=${nullCycle}&fecha=${nullCycleDate}&usuario_crea=${username}&maquina=${machine}&
        indicador=${nullContainerType}&numero_registro=${nullRegistryNumber}&tipo_pesaje=${nullWeightingType}`
    );
  },
  localNullCycle({ nullCycle, nullCycleDate, username, password }) {
    return axios.get(`${baseUrl}/actualizar-anulado?ciclo=${nullCycle}&fecha=${nullCycleDate}
                &username=${username}&password=${password}`);
  },
  getPolicy({ cycle, bl }) {
    return axios.get(
      `${baseUrl}/get-datos-poliza?numero_ciclo=${cycle}&bl=${bl}`
    );
  },
  getReportEmployees({ to, from, username, password }) {
    return axios.get(
      `${baseUrl}/get-excel?to=${to}&from=${from}&username=${username}&password=${password}`,
      { responseType: "blob" }
    );
  },
  getWeightData({ cycle, registryNumber }) {
    return axios.get(
      `${baseUrl}/get-datos-pesaje?numero_ciclo=${cycle}&numero_registro=${registryNumber}`
    );
  },
  getBL({ duca }) {
    return axios.get(`${baseUrl}/get-datos-salida?no_duca=${duca}`);
  },
  getAppointment({ containerNumber }) {
    return axios.get(`${baseUrl}/get-datos-cita?contenedor=${containerNumber}`);
  },
  getCorrelative({ basculaNumber, companyNumber }) {
    return axios.get(
      `${baseUrl}/get-correlativo?empresa=${companyNumber}&bascula=${basculaNumber}`
    );
  },
  createLocalCycleRegistry({
    username,
    machine,
    weightDirection,
    //header
    headerCycle,
    headerCycleDate,
    headerCompany,
    headerLicenseNumber,
    headerLicenseCountry,
    headerPilot,
    headerPlateCountry,
    headerPlateNumber,
    headerObservation,
    headerTruckType,
    headerEntryDate,
    headerEntryHour,
    //movements
    movementRegistryNumber,
    movementEntryWeight,
    movementExitWeight,
    movementEntryDate,
    movementEntryTime,
    movementExitDate,
    movementExitTime,
    movementEntryBascName,
    movementEntryBascNumber,
    movementExitBascName,
    movementExitBascNumber,
    movementEntryBoleta,
    movementExitBoleta,
    movementEntryTicket,
    movementExitTicket,
    //container
    containerNumber,
    containerTaraWeight,
    containerLoadNetWeight,
    containerShip,
    containerLoadType,
    containerObservations,
    //policy
    policyDucaNumber,
    policyBlNumber,
    policyCosignee,
    policyManifest,
    policyNumber,
    policyWeight,
  }) {
    return axios.post(`${secondaryUrl}/api/pesaje`, {
      usuario: username,
      maquina: machine,
      fecha_ciclo: headerCycleDate,
      num_ciclo: headerCycle,
      no_registro: movementRegistryNumber,
      identif_contenedor: containerNumber,
      peso_tara_contened: containerTaraWeight,
      peso_entrada: movementEntryWeight,
      fecha_pesaje_entrada: combineDateTime({
        DATE: movementEntryDate,
        TIME: movementEntryTime,
      }),
      ticket_entrada: movementEntryTicket,
      bascula_entrada: movementEntryBascNumber,
      empresa_entrada: movementEntryBascName,
      peso_salida: movementExitWeight,
      fecha_pesaje_salida: combineDateTime({
        DATE: movementExitDate,
        TIME: movementExitTime,
      }),
      ticket_salida: movementExitTicket,
      bascula_salida: movementExitBascNumber,
      empresa_salida: movementExitBascName,
      nombre_transportista: headerCompany,
      nombre_piloto: headerPilot,
      cod_pais_piloto: headerLicenseCountry,
      numero_licencia_piloto: headerLicenseNumber,
      cod_pais_placa: headerPlateCountry,
      numero_placa: headerPlateNumber,
      observacion_ciclo: headerObservation,
      observacion_contenedor: containerObservations,
      tipo_contenedor: containerLoadType,
      tipo_operacion: weightDirection,
    });
  },
  createCycleRegistry({
    weightDevice,
    headerCycle,
    headerCycleDate,
    movementRegistryNumber,
    weight,
    boleta,
    date,
    weightType,
    machine,
    observation,
    taraWeight,
    ticket,
    containerNumber,
  }) {
    return axios.post(`${baseUrl}/ingreso_peso`, {
      empresa: "NEPORSA",
      bascula: weightDevice || "",
      numero: headerCycle || "",
      fecha_ciclo: headerCycleDate || "",
      numero_registro: movementRegistryNumber || "",
      peso: weight || "",
      boleta: boleta || "",
      fecha: date || "",
      tipo_pesaje: weightType || "",
      maquina: machine || "",
      observacion: observation || "",
      tara: taraWeight || "",
      ticket: ticket || "",
      contenedor: containerNumber || "",
    });
  },
};
