<template>
  <div class="bg-white p-3 m-3 rounded shadow">
    <!-- Weighting section -->
    <section>
      <h3 class="text-center text-black fw-bold">Pesaje de Camiones</h3>
      <div class="row mt-1">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Ciclo</label>
            <div class="col">
              <input type="text" class="form-control writeable" v-model="headerCycle" :disabled="isLoading"
                @change="getHeaderAndWeightData" tabindex="1" />
            </div>
            <div class="col">
              <input type="text" class="form-control" v-model="headerCycleDate" readonly />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Licencia</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="headerLicenseCountry" />
            </div>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="headerLicenseNumber" />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Transporte</label>
            <div class="col">
              <input type="text" class="form-control" v-model="headerCompany" readonly />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Piloto</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="headerPilot" />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Placa</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="headerPlateCountry" />
            </div>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="headerPlateNumber" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Observación</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="headerObservation" />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1 border-bottom pb-2">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Ingreso Puerto</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="headerEntryDate" />
            </div>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="headerEntryHour" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Tipo Camión</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="headerTruckType" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Movements section -->
    <section>
      <div class="row mt-1">
        <h4 class="text-center text-black fw-bold">
          Información de Movimientos
        </h4>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Num. Registro</label>
            <div class="col">
              <input type="number" class="form-control" v-model="movementRegistryNumber" @change="getWeightData"
                readonly />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Peso E.</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="movementEntryWeight" />
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Fecha E.</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="movementEntryDate" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Hora E.</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="movementEntryTime" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Empresa E.</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="movementEntryBascName" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Bascula E.</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="movementEntryBascNumber" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Boleta E.</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="movementEntryBoleta" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Ticket E.</label>
            <div class="col">
              <input type="text" class="form-control writeable" v-model="movementEntryTicket" />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1 border-bottom pb-2">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Peso S.</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="movementExitWeight" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Fecha S.</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="movementExitDate" />
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Tiempo S.</label>

            <div class="col">
              <input type="text" class="form-control" readonly v-model="movementExitTime" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Empresa S.</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="movementExitBascName" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Bascula S.</label>

            <div class="col">
              <input type="text" class="form-control" readonly v-model="movementExitBascNumber" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Boleta S.</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="movementExitBoleta" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Ticket S.</label>
            <div class="col">
              <input type="text" class="form-control writeable" v-model="movementExitTicket" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Container section -->
    <section>
      <div class="row mt-1">
        <h4 class="text-center text-black fw-bold">
          Información de Contenedor
        </h4>

        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Num. de Contenedor</label>
            <div class="col">
              <input type="text" class="form-control writeable" v-model="containerNumber" tabindex="2"
                @keyup.enter="checkAppointment" @change="checkAppointment" :disabled="isLoading" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Peso Tara</label>
            <div class="col">
              <input type="text" class="form-control writeable" tabindex="3" v-model="containerTaraWeight"
                :disabled="isLoading" />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Peso Neto Carga</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="calculatedContainerNetWeight" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Buque</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="containerShip" />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1 border-bottom pb-2">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Tipo de Carga</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="containerLoadType" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Observaciones</label>
            <div class="col">
              <input type="text" class="form-control writeable" tabindex="4" v-model="containerObservations"
                :disabled="isLoading" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- DUCA section -->
    <section>
      <div class="row mt-1">
        <h4 class="text-center text-black fw-bold">Información de Poliza</h4>

        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">DUCA</label>
            <div class="col">
              <input type="text" class="form-control writeable" :disabled="isLoading" v-model="policyDucaNumber"
                @change="getDucaAndPolicyData" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">No. BL</label>
            <div class="col">
              <input type="text" class="form-control" v-model="policyBlNumber" readonly />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Consignatario</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="policyCosignee" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Manifiesto</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="policyManifest" />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Poliza</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="policyNumber" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Peso</label>
            <div class="col">
              <input type="text" class="form-control" readonly v-model="policyWeight" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="row text-center mt-4 justify-content-center gap-3 p-2">
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-lg btn-primary" @click="gotoFirstRegistryNumber"
          :disabled="!isGoBackARegistryNumberPossible">
          Primero
        </button>
        <button type="button" class="btn btn-lg btn-primary" @click="goBackARegistryNumber"
          :disabled="!isGoBackARegistryNumberPossible">
          Anterior
        </button>
        <button type="button" class="btn btn-lg btn-primary" @click="goUpARegistryNumber" :disabled="isLoading">
          Siguiente
        </button>
        <button type="button" class="btn btn-lg btn-primary" @click="getHeaderAndWeightData(false)"
          :disabled="isLoading">
          Ultimo
        </button>
      </div>
      <div class="btn-group" role="group"></div>

      <div class="btn-group" role="group">
        <button type="button" class="btn btn-warning btn-lg" @click="resetData" :disabled="isLoading">
          Limpiar
        </button>
        <button type="button" class="btn btn-success btn-lg" @click="createCycleRegistry">
          Guardar
        </button>
        <!-- <button
          type="button"
          class="btn btn-info btn-lg"
          @click="checkWeight"
          :disabled="isLoading"
        >
          Pesar
        </button>
        <button
          type="button"
          class="btn btn-info btn-lg"
          @click="checkAppointment"
          :disabled="isLoading"
        >
          Verificar Cita
        </button> -->
        <div class="btn-group" style="width: 33%">
          <button type="button" class="btn btn-info btn-lg dropdown-toggle" :disabled="isLoading"
            @click="actionsMenuActive = !actionsMenuActive">
            Opciones
          </button>
          <div :class="`dropdown-menu actions-menu ${actionsMenuActive ? 'show' : null
            }`">
            <a class="dropdown-item actions-menu-item" style="cursor: pointer" @click="checkWeight">Pesar</a>
            <a class="dropdown-item actions-menu-item" style="cursor: pointer" @click="checkAppointment">Verificar
              Cita</a>
            <a class="dropdown-item actions-menu-item" style="cursor: pointer" @click="streamTicket">Imprimir Ticket</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cycleService from "@/services/cycleService";
import weightService from "@/services/weightService";
import {
  linearAlert,
  linearToast,
  linearConfirmationAlert,
} from "@/utils/swalAlerts";
import {
  getFormattedDate,
  getFormattedTime,
  splitDate,
} from "@/utils/timeUtils";
import { generateTicket } from "@/utils/pdfUtils";
export default {
  data: () => ({
    isLoading: false,
    lastCycle: 1,
    VGM: "",
    weightDirection: null,
    actionsMenuActive: false,
    //header
    headerCycle: null,
    headerCycleDate: null,
    headerCompany: null,
    headerLicenseNumber: null,
    headerLicenseCountry: null,
    headerPilot: null,
    headerPlateCountry: null,
    headerPlateNumber: null,
    headerObservation: null,
    headerTruckType: null,
    headerEntryDate: null,
    headerEntryHour: null,
    //movements
    movementRegistryNumber: 1,
    movementEntryWeight: null,
    movementExitWeight: null,
    movementEntryDate: null,
    movementEntryTime: null,
    movementExitDate: null,
    movementExitTime: null,
    movementEntryBascName: null,
    movementEntryBascNumber: null,
    movementExitBascName: null,
    movementExitBascNumber: null,
    movementEntryBoleta: null,
    movementExitBoleta: null,
    movementEntryTicket: null,
    movementExitTicket: null,
    //container
    containerNumber: null,
    containerTaraWeight: null,
    containerLoadNetWeight: null,
    containerShip: null,
    containerLoadType: null,
    containerObservations: null,
    //policy
    policyDucaNumber: null,
    policyBlNumber: null,
    policyCosignee: null,
    policyManifest: null,
    policyNumber: null,
    policyWeight: null,
  }),
  methods: {
    checkObject(obj) {
      // Check if obj is a non-null object with at least one property
      return obj && typeof obj === "object" && Object.keys(obj).length > 0;
    },
    resetData() {
      this.isLoading = false;
      this.lastCycle = 1;
      //header
      this.headerCycle = null;
      this.headerCycleDate = null;
      this.headerCompany = null;
      this.headerLicenseNumber = null;
      this.headerLicenseCountry = null;
      this.headerPilot = null;
      this.headerPlateCountry = null;
      this.headerPlateNumber = null;
      this.headerObservation = null;
      this.headerTruckType = null;
      this.headerEntryDate = null;
      this.headerEntryHour = null;
      //movements
      this.movementRegistryNumber = 1;
      this.movementEntryWeight = null;
      this.movementExitWeight = null;
      this.movementEntryDate = null;
      this.movementEntryTime = null;
      this.movementExitDate = null;
      this.movementExitTime = null;
      this.movementEntryBascName = null;
      this.movementEntryBascNumber = null;
      this.movementExitBascName = null;
      this.movementExitBascNumber = null;
      this.movementEntryBoleta = null;
      this.movementExitBoleta = null;
      this.movementEntryTicket = null;
      this.movementExitTicket = null;
      //container
      this.containerNumber = null;
      this.containerTaraWeight = null;
      this.containerLoadNetWeight = null;
      this.containerShip = null;
      this.containerLoadType = null;
      this.containerObservations = null;
      //policy
      this.policyDucaNumber = null;
      this.policyBlNumber = null;
      this.policyCosignee = null;
      this.policyManifest = null;
      this.policyNumber = null;
      this.policyWeight = null;
    },
    setHeaderData({
      FECHA_CICLO,
      PAIS_LICENCIA,
      NUMERO_LICENCIA,
      PAIS_PLACA,
      NUMERO_PLACA,
      OBSERVACION_CICLO,
      FECHA_INGRESO,
      TIPO_CAMION,
      NOMBRE_PILOTO,
      NOMBRE_TRANSPORTISTA,
    }) {
      const cycleDate = splitDate(FECHA_CICLO);
      const entryDate = splitDate(FECHA_INGRESO);

      this.headerCycleDate = cycleDate["DATE"];
      this.headerLicenseCountry = PAIS_LICENCIA;
      this.headerLicenseNumber = NUMERO_LICENCIA;
      this.headerCompany = NOMBRE_TRANSPORTISTA;
      this.headerPilot = NOMBRE_PILOTO;
      this.headerPlateCountry = PAIS_PLACA;
      this.headerPlateNumber = NUMERO_PLACA;
      this.headerObservation = OBSERVACION_CICLO;
      this.headerEntryDate = entryDate["DATE"];
      this.headerEntryHour = entryDate["TIME"];
      this.headerTruckType = TIPO_CAMION;
    },
    setMovementData({
      PESO_ENTRADA,
      BASCULA_PESO_ENTRADA,
      EMPRESA_PESO_ENTRADA,
      FECHA_PESO_ENTRADA,
      BOLETA_PESO_ENTRADA,
      TICKET_FAC1,
      PESO_SALIDA,
      BASCULA_PESO_SALIDA,
      EMPRESA_PESO_SALIDA,
      FECHA_PESO_SALIDA,
      BOLETA_PESO_SALIDA,
      REGISTROS,
      TICKET_FAC2,
      VGM,
    }) {
      const entryDate = splitDate(FECHA_PESO_ENTRADA);
      const exitDate = splitDate(FECHA_PESO_SALIDA);

      this.movementEntryWeight = PESO_ENTRADA;
      this.movementExitWeight = PESO_SALIDA;
      this.movementEntryDate = entryDate["DATE"];
      this.movementEntryTime = entryDate["TIME"];
      this.movementExitDate = exitDate["DATE"];
      this.movementExitTime = exitDate["TIME"];
      this.movementEntryBascName = EMPRESA_PESO_ENTRADA;
      this.movementEntryBascNumber = BASCULA_PESO_ENTRADA;
      this.movementExitBascName = EMPRESA_PESO_SALIDA;
      this.movementExitBascNumber = BASCULA_PESO_SALIDA;
      this.movementEntryBoleta = BOLETA_PESO_ENTRADA;
      this.movementExitBoleta = BOLETA_PESO_SALIDA;
      this.movementEntryTicket = TICKET_FAC1;
      this.movementExitTicket = TICKET_FAC2;

      //ultimo cyclo
      this.lastCycle = Number.parseInt(REGISTROS);

      //VGM

      this.VGM = VGM;
    },
    setContainerData({
      NUMERO_CONTENEDOR,
      PESO_TARA_CONTE,
      OBSERVACION,
      INDICADOR_TABLA,
    }) {
      this.containerNumber = NUMERO_CONTENEDOR;
      this.containerTaraWeight = PESO_TARA_CONTE;
      this.containerObservations = OBSERVACION;
      this.containerLoadType = INDICADOR_TABLA;
    },
    setPolicyData({ POLIZA, NUMERO_MANIFIESTO, CONSIGNATARIO, PESO }) {
      this.policyNumber = POLIZA;
      this.policyManifest = NUMERO_MANIFIESTO;
      this.policyCosignee = CONSIGNATARIO;
      this.policyCosignee = CONSIGNATARIO;
      this.policyWeight = PESO;
    },
    setBlNumber({ BL }) {
      this.policyBlNumber = BL;
    },
    setNewWeightData(weight, correlative) {
      const { weightDirection } = this;
      const basculaNumber = localStorage.getItem("bascula");
      if (weightDirection === "ENTRADA") {
        this.movementEntryBascName = "NEPORSA";
        this.movementEntryBascNumber = basculaNumber;
        this.movementEntryBoleta = correlative;
        this.movementEntryDate = getFormattedDate();
        this.movementEntryTime = getFormattedTime();
        this.movementEntryWeight = weight;
      } else if (weightDirection === "SALIDA") {
        this.movementExitBascName = "NEPORSA";
        this.movementExitBascNumber = basculaNumber;
        this.movementExitBoleta = correlative;
        this.movementExitDate = getFormattedDate();
        this.movementExitTime = getFormattedTime();
        this.movementExitWeight = weight;
      } else {
        return new Error("No se ha detectado dirección de peso correcta");
      }
    },
    getNewWeightData() {
      const { weightDirection } = this;
      const machine = localStorage.getItem("maquina");

      if (weightDirection === "ENTRADA") {
        return {
          bascula: this.movementEntryBascName,
          basculaNumber: this.movementEntryBascNumber,
          boletaNumber: this.movementEntryBoleta,
          date: this.movementEntryDate,
          time: this.movementEntryTime,
          weight: this.movementEntryWeight,
          machine,
          registryNumber: this.movementRegistryNumber,
          weightType: weightDirection,
          observation: this.containerObservations,
          tara: this.containerTaraWeight,
          ticket: this.movementEntryTicket,
          container: this.containerNumber,
        };
      } else if (weightDirection === "SALIDA") {
        return {
          bascula: this.movementExitBascName,
          basculaNumber: this.movementExitBascNumber,
          boletaNumber: this.movementExitBoleta,
          date: this.movementExitDate,
          time: this.movementExitTime,
          weight: this.movementExitWeight,
          machine,
          registryNumber: this.movementRegistryNumber,
          weightType: weightDirection,
          observation: this.containerObservations,
          tara: this.containerTaraWeight,
          ticket: this.movementExitTicket,
          container: this.containerNumber,
        };
      } else {
        return new Error("No se ha detectado dirección de peso correcta");
      }
    },
    async getCycle() {
      if (this.isCycleNumberSet) {
        const { headerCycle } = this;
        try {
          const { data } = await cycleService.getCycle({ cycle: headerCycle });
          const { TIPO_RESPUESTA } = data;
          if (TIPO_RESPUESTA["RESULTADO"] === "01") {
            const { PARAMETROS_SALIDA } = data;
            return PARAMETROS_SALIDA;
          } else
            await linearAlert(
              "ERROR PORTUARIA:",
              TIPO_RESPUESTA["DESCRIPCION"],
              "warning"
            );
          return null;
        } catch (error) {
          await linearAlert("Error", error, "error", 3000, false);
          console.error(error);
          return null;
        }
      }
    },
    async getWeightData() {
      if (this.isCycleNumberAndRegistryNumberSet) {
        const { headerCycle, movementRegistryNumber } = this;
        try {
          const { data } = await cycleService.getWeightData({
            cycle: headerCycle,
            registryNumber: movementRegistryNumber,
          });
          const { TIPO_RESPUESTA } = data;
          if (TIPO_RESPUESTA["RESULTADO"] === "01") {
            const { PARAMETROS_SALIDA } = data;
            return PARAMETROS_SALIDA;
          } else
            await linearAlert(
              "ERROR PORTUARIA:",
              TIPO_RESPUESTA["DESCRIPCION"],
              "warning"
            );
          return null;
        } catch (error) {
          await linearAlert("Error", error, "error", 3000, false);
          console.error(error);
          return null;
        }
      }
    },
    async getPolicyData() {
      if (this.isCycleNumberAndBlNumberSet) {
        const { headerCycle, policyBlNumber } = this;
        try {
          const { data } = await cycleService.getPolicy({
            cycle: headerCycle,
            bl: policyBlNumber,
          });
          const { TIPO_RESPUESTA } = data;
          if (TIPO_RESPUESTA["RESULTADO"] === "01") {
            const { PARAMETROS_SALIDA } = data;
            return PARAMETROS_SALIDA;
          } else
            await linearAlert(
              "ERROR PORTUARIA:",
              TIPO_RESPUESTA["DESCRIPCION"],
              "warning"
            );
          return null;
        } catch (error) {
          await linearAlert("Error", error, "error", 3000, false);
          console.error(error);
          return null;
        }
      }
    },
    async getDucaData() {
      if (this.isDucaSet) {
        const { policyDucaNumber } = this;
        try {
          const { data } = await cycleService.getBL({ duca: policyDucaNumber });
          const { TIPO_RESPUESTA } = data;
          if (TIPO_RESPUESTA["RESULTADO"] === "01") {
            const { PARAMETROS_SALIDA } = data;
            return PARAMETROS_SALIDA;
          } else
            await linearAlert(
              "ERROR PORTUARIA:",
              TIPO_RESPUESTA["DESCRIPCION"],
              "warning"
            );
          return null;
        } catch (error) {
          await linearAlert("Error", error, "error", 3000, false);
          console.error(error);
          return null;
        }
      }
    },
    async getHeaderAndWeightData(noSkipHeader = true, getLastCycle = true) {
      this.isLoading = true;
      //funciones de datos
      const { getCycle, getWeightData } = this;
      //funciones de seteo de datos
      const { setHeaderData, setContainerData, setMovementData } = this;
      //validaciones
      const { checkRegistryNumber, checkObject } = this;
      try {
        await linearToast(
          `PROCESO: Inicia recuperacion de datos de peso y ciclo`,
          "warning"
        );


        if (noSkipHeader) {
          await linearToast(
            `DATOS: Recuperando de datos de ciclo`,
            "warning"
          );

          const headerData = await getCycle();
          if (!checkObject(headerData)) {
            await linearAlert(
              `ERROR:`,
              `Numero de ciclo ${this.headerCycle}, no valido`,
              "warning"
            );
            this.resetData();
            return;
          }
          setHeaderData(headerData);
        } else {
          await linearToast(
            `VALIDACIÓN: Datos de ciclo ${this.headerCycle}, ya se encuentran recuperados`,
            "warning"
          );
        }
        let weightData = await getWeightData();
        if (!checkObject(weightData)) {
          await linearAlert(
            `ERROR:`,
            `No se encontro información de pesajes, movimientos o contenedor con ciclo ${this.headerCycle}, abortando`,
            "warning"
          );
          this.resetData();
          return;
        }

        setContainerData(weightData);
        setMovementData(weightData);
        if (getLastCycle && checkRegistryNumber()) {
          await linearToast(
            `VALIDACIÓN: Numero de registro ${this.movementRegistryNumber}, ya contiene pesajes de salida y entrada, pasando al ultimo registro disponible, registro ${this.lastCycle}`,
            "warning"
          );
          this.movementRegistryNumber = this.lastCycle;
          weightData = await getWeightData();
          setContainerData(weightData);
          setMovementData(weightData);
        }
        await linearToast(`EXITO: Recopilación de datos de ciclo exitoso!`, "success");
        await linearToast(`DATOS: Recopilando información de peso`, "warning");
        await this.checkWeight();
      } catch (error) {
        await linearAlert("ERROR:", error, "error", 3000, false);
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async getDucaAndPolicyData() {
      this.isLoading = true;
      //funciones de datos
      const { getDucaData, getPolicyData } = this;
      //funciones de seteo de datos
      const { setBlNumber, setPolicyData } = this;
      //validaciones
      const { checkObject } = this;
      try {
        await linearToast(`PROCESO: Recopilando datos de poliza`, "warning");
        await linearToast(`DATOS: Recuperando numero de BL`, "warning");
        const blData = await getDucaData();
        if (!checkObject(blData)) {
          await linearAlert(
            `DATOS:`,
            `Numero de duca ${this.policyDucaNumber}, no valido, abortando`,
            "warning"
          );
          return;
        }
        setBlNumber(blData);
        await linearToast(
          `DATOS: Recuperando datos de poliza ${this.policyBlNumber}`,
          "warning"
        );
        let policyData = await getPolicyData();
        if (!checkObject(policyData)) {
          await linearAlert(
            `ERROR:`,
            `No se encontro información de poliza, abortando`,
            "warning"
          );
          this.setBlNumber({ BL: null });
          return;
        }
        setPolicyData(policyData);
        await linearToast(
          `EXITO: Recopilación de datos de poliza exitoso!`,
          "success"
        );
      } catch (error) {
        await linearAlert("ERROR:", error, "error", 3000, false);
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async policyDataHandler() {
      this.isLoading = true;
      //funciones de datos
      const { getPolicyData } = this;
      //funciones de seteo de datos
      const { setPolicyData } = this;
      //validaciones
      //datos
      try {
        await linearToast(
          `PROCESO: Recopilando información de poliza`,
          "warning"
        );
        const policyData = await getPolicyData();
        setPolicyData(policyData);
        await linearToast(`EXITO: Recuperacion de datos de ciclo exitoso!`, "success");
      } catch (error) {
        await linearAlert("Error", error, "error", 3000, false);
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async getAppointment() {
      if (this.isContainerNumberSet) {
        const { containerNumber } = this;
        try {
          const { data } = await cycleService.getAppointment({
            containerNumber: containerNumber,
          });
          const { TIPO_RESPUESTA } = data;
          if (TIPO_RESPUESTA["RESULTADO"] === "01") {
            const { PARAMETROS_SALIDA } = data;
            return PARAMETROS_SALIDA;
          } else
            await linearAlert(
              "ERROR PORTUARIA:",
              TIPO_RESPUESTA["DESCRIPCION"],
              "warning"
            );
          return null;
        } catch (error) {
          await linearAlert("Error", error, "error", 3000, false);
          console.error(error);
          return null;
        }
      } else {
        await linearAlert(
          "VALIDACION:",
          "La cita no se pudo verificar por falta de numero de contenedor, por favor ingreselo",
          "warning"
        );
      }
    },
    async checkAppointment() {
      this.isLoading = true;
      //funciones de datos
      const { getAppointment } = this;
      //validaciones
      const { checkObject } = this;

      try {
        await linearToast(
          `PROCESO: confirmando cita de contenedor`,
          "warning"
        );
        const appointmentData = await getAppointment();
        if (
          !checkObject(appointmentData) ||
          (!appointmentData["CITA"] && !appointmentData["PESOS"])
        ) {
          if (this.isContainerNumberSet) {
            await linearToast(
              `EXITO: Cita de contenedor no encontrada ${this.containerNumber}, proceda`,
              "success"
            );
          }
          return;
        } else {
          await linearAlert(
            `VALIDACION:`,
            `Cita de contenedor encontrada ${this.containerNumber}, información de cita ${appointmentData["CITA"]}, pesos ${appointmentData["PESOS"]}`,
            "warning"
          );
        }
      } catch (error) {
        await linearAlert("Error", error, "error", 3000, false);
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async getCorrelative() {
      const basculaNumber = localStorage.getItem("bascula");
      try {
        const { data } = await cycleService.getCorrelative({
          basculaNumber,
          companyNumber: 25,
        });
        const { TIPO_RESPUESTA } = data;
        if (TIPO_RESPUESTA["RESULTADO"] === "01") {
          const { PARAMETROS_SALIDA } = data;
          return PARAMETROS_SALIDA;
        } else
          await linearAlert(
            "ERROR PORTUARIA:",
            TIPO_RESPUESTA["DESCRIPCION"],
            "warning"
          );
        return null;
      } catch (error) {
        await linearAlert("Error", error, "error", 3000, false);
        console.error(error);
        return null;
      }
    },
    checkRegistryNumber() {
      return this.lastCycle !== 1;
    },
    goBackARegistryNumber() {
      this.movementRegistryNumber = this.movementRegistryNumber - 1;
      this.getHeaderAndWeightData(false, false);
    },
    gotoFirstRegistryNumber() {
      this.movementRegistryNumber = 1;
      this.getHeaderAndWeightData(false, false);
    },
    goUpARegistryNumber() {
      this.movementRegistryNumber = this.movementRegistryNumber + 1;

      this.getHeaderAndWeightData(false, false);
    },
    async checkWeight() {
      this.isLoading = true;
      try {
        const basculaNumber = localStorage.getItem("bascula");
        const username = localStorage.getItem("username");

        const { data } = await weightService.weight({ basculaNumber });
        // eslint-disable-next-line
        const [peso, maquina] = data.split("-");
        localStorage.setItem("maquina", maquina);
        if (peso) {
          const formattedPeso_Carga = (Number.parseFloat(peso) / 1000).toFixed(
            3
          );
          const { isConfirmed } = await linearConfirmationAlert(
            `Peso ${formattedPeso_Carga}`,
            `Confirmar Peso`,
            "warning",
            "Confirmar",
            "Volver A Pesar"
          );

          if (isConfirmed) {
            const { CORRELATIVO: correlative } = await this.getCorrelative();
            await linearToast(
              `PROCESO: Recopilando información de nuevo registro de peso`,
              "warning"
            );
            this.setWeightDirection();
            this.setNewWeightData(formattedPeso_Carga, correlative);
            const isNewDataCorrect =
              await this.confirmNewCycleWeightRegistryData();
            if (isNewDataCorrect) {
              await cycleService.createLocalCycleRegistry({
                machine: maquina,
                username,
                ...this.$data,
              });
              await linearToast(
                `EXITO: Registro de peso en local exitoso!`,
                "success"
              );
              await linearToast(
                `PROCESO: Atención, enviando información de ciclo a Portuaria`,
                "warning"
              );
              const { weightDirection } = this;
              const weightData = this.getNewWeightData();
              const cycleResponse = await cycleService.createCycleRegistry({
                weightDevice: basculaNumber,
                weight: weightData.weight,
                boleta: weightData.boletaNumber,
                date: weightData.date,
                weightType: weightDirection == "SALIDA" ? "S" : "E",
                machine: maquina,
                observation: weightData.observation,
                taraWeight: weightData.tara,
                ticket: weightData.ticket,
                containerNumber: weightData.container,
                ...this.$data,
              });
              const { TIPO_RESPUESTA } = cycleResponse;
              if (TIPO_RESPUESTA["RESULTADO"] === "01") {
                await linearToast(
                  `EXITO: Registro de peso en portuaria exitoso!`,
                  "success"
                );
              } else
                await linearAlert(
                  "ERROR PORTUARIA:",
                  TIPO_RESPUESTA["DESCRIPCION"],
                  "warning"
                );
            } else this.cleanNewWeightData();
          } else this.checkWeight();
        } else {
          await linearAlert(
            "ERROR:",
            "Error al Leer Peso, Intente de Nuevamente",
            "error"
          );
        }
      } catch (error) {
        this.isLoading = false;
        console.error("Error in checkWeight:", error);
        await linearAlert("ERROR:", error, "error");
      } finally {
        this.isLoading = false;
      }
    },
    async createCycleRegistry() {
      this.isLoading = true;

      try {
        await linearToast(
          `PROCESO: Ingresando ciclo en base de datos local`,
          "warning"
        );
        const username = localStorage.getItem("username");
        const machine = localStorage.getItem("maquina");
        const basculaNumber = localStorage.getItem("bascula");
        const { weightDirection } = this;
        const weightData = this.getNewWeightData();

        const { data } = await cycleService.createLocalCycleRegistry({
          machine,
          username,
          ...this.$data,
        });
        await linearToast(`EXITO: Registro de peso en local exitoso!`, "success");
        await linearToast(
          `PROCESO: Atención, ingresando ciclo en base de datos portuaria`,
          "warning"
        );
        const cycleResponse = await cycleService.createCycleRegistry({
          weightDevice: basculaNumber,
          weight: weightData.weight,
          boleta: weightData.boletaNumber,
          date: weightData.date,
          weightType: weightDirection == "SALIDA" ? "S" : "E",
          machine: machine,
          observation: weightData.observation,
          taraWeight: weightData.tara,
          ticket: weightData.ticket,
          containerNumber: weightData.container,
          ...this.$data,
        });
        const { TIPO_RESPUESTA } = cycleResponse;

        if (TIPO_RESPUESTA["RESULTADO"] === "01") {
          await linearToast(
            `EXITO: Registro de peso en portuaria exitoso!`,
            "success"
          );
        } else
          await linearAlert(
            "ERROR PORTUARIA:",
            TIPO_RESPUESTA["DESCRIPCION"],
            "warning"
          );
      } catch (error) {
        await linearAlert("ERROR", error, "error", 3000, false);
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async confirmNewCycleWeightRegistryData() {
      const weightData = this.getNewWeightData();
      const dataHtml = `
              <p><strong>Bascula:</strong> ${weightData.bascula || ""}</p>
              <p><strong>Número de Bascula:</strong> ${weightData.basculaNumber || ""
        }</p>
              <p><strong>Número de Boleta:</strong> ${weightData.boletaNumber || ""
        }</p>
              <p><strong>Fecha:</strong> ${weightData.date || ""}</p>
              <p><strong>Hora:</strong> ${weightData.time || ""}</p>
              <p><strong>Peso:</strong> ${weightData.weight || ""}</p>
              <p><strong>Computadora:</strong> ${weightData.machine || ""}</p>
              <p><strong>Numero de Registro:</strong> ${weightData.registryNumber || ""
        }</p>
              <p><strong>Tipo de Pesaje:</strong> ${weightData.weightType || ""
        }</p>
              <p><strong>Observación:</strong> ${weightData.observation || ""
        }</p>
              <p><strong>Tara:</strong> ${weightData.tara || ""}</p>
              <p><strong>Ticket:</strong> ${weightData.ticket || ""}</p>
              <p><strong>Contenedor:</strong> ${weightData.container || ""}</p>
            `;

      const { isConfirmed } = await linearConfirmationAlert(
        `Confirmar los siguientes datos a guardar`,
        null,
        "warning",
        "Guardar",
        "Cancelar",
        dataHtml
      );
      return isConfirmed;
    },
    cleanNewWeightData() {
      const { weightDirection } = this;
      if (weightDirection === "ENTRADA") {
        this.movementEntryBascName = null;
        this.movementEntryBascNumber = null;
        this.movementEntryBoleta = null;
        this.movementEntryDate = null;
        this.movementEntryTime = null;
        this.movementEntryWeight = null;
      } else if (weightDirection === "SALIDA") {
        this.movementExitBascName = null;
        this.movementExitBascNumber = null;
        this.movementExitBoleta = null;
        this.movementExitDate = null;
        this.movementExitTime = null;
        this.movementExitWeight = null;
      } else {
        return new Error("No se ha detectado dirección de peso correcta");
      }
    },
    setWeightDirection() {
      const { movementEntryWeight, movementExitWeight } = this;
      this.weightDirection =
        movementEntryWeight === "0"
          ? "ENTRADA"
          : movementExitWeight === "0"
            ? "SALIDA"
            : "NINGUNO";
    },
    async streamTicket() {
      const { weightDirection } = this;
      if (weightDirection !== "NINGUNO") {
        try {
          await linearToast(
            `PROCESO: Atención, generando ticket ${weightDirection}`,
            "warning"
          );
          const ticketData = generateTicket(this.$data);
          console.log("ticket data :", ticketData);
        } catch (error) {
          await linearAlert("ERROR:", error, "error", 3000, false);
          console.error(error);
          return null;
        }
      } else {
        await linearToast(`VALIDACION: Por favor ingrese un peso primero`, "error");
      }
    },
  },
  computed: {
    isCycleNumberSet() {
      return !!this.headerCycle;
    },
    getWeight() {
      const { weightDirection } = this;
      if (weightDirection === "ENTRADA") {
        return this.movementEntryWeight;
      }
      return this.movementExitWeight;
    },
    getBoleta() {
      const { weightDirection } = this;
      if (weightDirection === "ENTRADA") {
        return this.movementEntryBoleta;
      }
      return this.movementExitBoleta;
    },

    isCycleNumberAndBlNumberSet() {
      return this.headerCycle && this.policyBlNumber;
    },
    isCycleNumberAndRegistryNumberSet() {
      return this.headerCycle && this.movementRegistryNumber;
    },
    isContainerNumberSet() {
      return !!this.containerNumber;
    },
    isDucaSet() {
      return this.policyDucaNumber;
    },
    isGoBackARegistryNumberPossible() {
      return !this.isLoading || this.movementRegistryNumber > 1;
    },
    calculatedContainerNetWeight() {
      if (
        this.movementExitWeight &&
        this.movementEntryWeight &&
        this.containerTaraWeight
      ) {
        return (
          Number.parseFloat(this.movementExitWeight) -
          (Number.parseFloat(this.movementEntryWeight) +
            Number.parseFloat(this.containerTaraWeight))
        ).toFixed(2);
      } else {
        return null;
      }
    },
    allInputData() {
      const {
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
      } = this;

      return {
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
      };
    },
  },
};
</script>

<style scoped>
.writeable {
  font-weight: bold;
}

input:not(.writeable) {
  background-color: rgb(180, 180, 180);
  color: rgb(0, 0, 0);
  border: rgb(251, 253, 255);
  font-weight: bold;
}

.actions-menu {
  width: 100%;
  bottom: 100%;
  font-size: 1.5rem;
}

.actions-menu-item {
  cursor: pointer;
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Standard */
}

.swal2-title {
  font-size: 24px !important;
  /* Change the size as needed */
}
</style>
