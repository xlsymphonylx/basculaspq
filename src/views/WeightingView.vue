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
              <input
                type="text"
                class="form-control writeable"
                v-model="headerCycle"
                :disabled="isLoading"
                @change="getHeaderAndWeightData"
                tabindex="1"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="headerCycleDate"
                readonly
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Licencia</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="headerLicenseCountry"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="headerLicenseNumber"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Transporte</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="headerCompany"
                readonly
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Piloto</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="headerPilot"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Placa</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="headerPlateCountry"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="headerPlateNumber"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Observación</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="headerObservation"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1 border-bottom pb-2">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Ingreso Puerto</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="headerEntryDate"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="headerEntryHour"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Tipo Camión</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="headerTruckType"
              />
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
              <input
                type="number"
                class="form-control"
                v-model="movementRegistryNumber"
                @change="getWeightData"
                readonly
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Peso Entrada</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="movementEntryWeight"
              />
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Tiempo Entrada</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="movementEntryDate"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="movementEntryDate"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Bascula Entrada</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="movementEntryBascName"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="movementEntryBascNumber"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Boleta Entrada</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="movementEntryBoleta"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Ticket Entrada</label>
            <div class="col">
              <input
                type="text"
                class="form-control writeable"
                v-model="movementEntryTicket"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1 border-bottom pb-2">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Peso Salida</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="movementExitWeight"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Tiempo Salida</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="movementExitDate"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="movementExitDate"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Bascula Salida</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="movementExitBascName"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="movementExitBascNumber"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Boleta Salida</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="movementExitBoleta"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Ticket Salida</label>
            <div class="col">
              <input
                type="text"
                class="form-control writeable"
                v-model="movementExitTicket"
              />
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
              <input
                type="text"
                class="form-control writeable"
                v-model="containerNumber"
                tabindex="2"
                @keyup.enter="checkAppointment"
                @change="checkAppointment"
                :disabled="isLoading"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Peso Tara</label>
            <div class="col">
              <input
                type="text"
                class="form-control writeable"
                tabindex="3"
                v-model="containerTaraWeight"
                :disabled="isLoading"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Peso Neto Carga</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="calculatedContainerNetWeight"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Buque</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="containerShip"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1 border-bottom pb-2">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Tipo de Carga</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="containerLoadType"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Observaciones</label>
            <div class="col">
              <input
                type="text"
                class="form-control writeable"
                tabindex="4"
                v-model="containerObservations"
                :disabled="isLoading"
              />
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
              <input
                type="text"
                class="form-control writeable"
                :disabled="isLoading"
                v-model="policyDucaNumber"
                @change="getDucaAndPolicyData"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">No. BL</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="policyBlNumber"
                readonly
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Consignatario</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="policyCosignee"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Manifiesto</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="policyManifest"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Poliza</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="policyNumber"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="mb-2 text-black fw-bold">Peso</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                v-model="policyWeight"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      class="row text-center mt-4 justify-content-center gap-3 overflow-auto p-2"
    >
      <div class="btn-group" role="group">
        <button
          type="button"
          class="btn btn-lg btn-primary"
          @click="gotoFirstRegistryNumber"
          :disabled="!isGoBackARegistryNumberPossible"
        >
          Primero
        </button>
        <button
          type="button"
          class="btn btn-lg btn-primary"
          @click="goBackARegistryNumber"
          :disabled="!isGoBackARegistryNumberPossible"
        >
          Anterior
        </button>
        <button
          type="button"
          class="btn btn-lg btn-primary"
          @click="goUpARegistryNumber"
        >
          Siguiente
        </button>
        <button
          type="button"
          class="btn btn-lg btn-primary"
          @click="getHeaderAndWeightData(false)"
        >
          Ultimo
        </button>
      </div>

      <div class="btn-group" role="group">
        <button type="button" class="btn btn-warning btn-lg" @click="resetData">
          Limpiar
        </button>
        <button type="button" class="btn btn-success btn-lg">Guardar</button>
        <button type="button" class="btn btn-info btn-lg" @click="checkWeight">
          Pesar
        </button>
        <button
          type="button"
          class="btn btn-info btn-lg"
          @click="checkAppointment"
        >
          Verificar Cita
        </button>
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
import { splitDate } from "@/utils/timeUtils";
export default {
  data: () => ({
    isLoading: false,
    lastCycle: 1,
    VGM: "",
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
    setNewWeightData() {
      const { weightDirection } = this;

      console.log("weightDirection", weightDirection);
    },
    getNewWeightData() {},
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
              "Advertencia",
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
              "Advertencia",
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
              "Advertencia",
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
              "Advertencia",
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
        if (noSkipHeader) {
          await linearToast(
            `Atención, recopilando información de ciclo`,
            "warning"
          );

          const headerData = await getCycle();
          if (!checkObject(headerData)) {
            await linearAlert(
              `Advertencia`,
              `Numero de ciclo ${this.headerCycle}, no valido, abortando`,
              "warning"
            );
            this.resetData();
            return;
          }
          setHeaderData(headerData);
        } else {
          await linearToast(
            `Atención, saltando recopilación de datos de encabezado de ciclo ${this.headerCycle}`,
            "warning"
          );
        }
        let weightData = await getWeightData();
        if (!checkObject(weightData)) {
          await linearAlert(
            `Advertencia`,
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
            `Atención, numero de registro ${this.movementRegistryNumber}, ya contiene pesajes de salida y entrada, pasando al ultimo registro disponible, registro ${this.lastCycle}`,
            "warning"
          );
          this.movementRegistryNumber = this.lastCycle;
          weightData = await getWeightData();
          setContainerData(weightData);
          setMovementData(weightData);
        }

        await linearToast(`Recopilación de datos de ciclo exitoso!`, "success");
      } catch (error) {
        await linearAlert("Error", error, "error", 3000, false);
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
        await linearToast(`Atención, recopilando numero de BL`, "warning");

        const blData = await getDucaData();
        if (!checkObject(blData)) {
          await linearAlert(
            `Advertencia`,
            `Numero de duca ${this.policyDucaNumber}, no valido, abortando`,
            "warning"
          );
          return;
        }
        setBlNumber(blData);
        await linearToast(
          `Atención, recopilando datos de poliza con numero de BL ${this.policyBlNumber}`,
          "warning"
        );
        let policyData = await getPolicyData();
        if (!checkObject(policyData)) {
          await linearAlert(
            `Advertencia`,
            `No se encontro información de poliza, abortando`,
            "warning"
          );
          this.setBlNumber({ BL: null });
          return;
        }
        setPolicyData(policyData);
        await linearToast(
          `Recopilación de datos de poliza exitoso!`,
          "success"
        );
      } catch (error) {
        await linearAlert("Error", error, "error", 3000, false);
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
          `Atención, recopilando información de poliza`,
          "warning"
        );
        const policyData = await getPolicyData();
        setPolicyData(policyData);
        await linearToast(`Recopilación de datos de ciclo exitoso!`, "success");
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
              "Advertencia",
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
          "Advertencia",
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
          `Atención, confirmando cita de contenedor`,
          "warning"
        );
        const appointmentData = await getAppointment();
        if (
          !checkObject(appointmentData) ||
          (!appointmentData["CITA"] && !appointmentData["PESOS"])
        ) {
          if (this.isContainerNumberSet) {
            await linearToast(
              `Cita de contenedor no encontrada ${this.containerNumber}, proceda`,
              "success"
            );
          }
          return;
        } else {
          await linearAlert(
            `Advertencia`,
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
            "Advertencia",
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
      try {
        const basculaNumber = localStorage.getItem("bascula");
        const { data } = await weightService.weight({ basculaNumber });
        // eslint-disable-next-line
        const [peso, maquina] = data.split("-");

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
            const correlative = await this.getCorrelative();
            console.log("correlative", correlative);
            this.setNewWeightData();
          } else this.checkWeight();
        } else {
          await linearAlert(
            "ERROR AL LEER PESO",
            "Error al Leer Peso, Intente de Nuevamente",
            "error"
          );
        }
      } catch (error) {
        console.error("Error in checkWeight:", error);
        await linearAlert("ERROR", "An unexpected error occurred", "error");
      }
    },
    async createCycleRegistry() {
      this.isLoading = true;
      //validaciones
      const { checkObject } = this;
      const { allInputData } = this;
      try {
        await linearToast(
          `Atención, ingresando ciclo en base de datos local`,
          "warning"
        );
      } catch (error) {
        await linearAlert("Error", error, "error", 3000, false);
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  computed: {
    isCycleNumberSet() {
      return !!this.headerCycle;
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
      return this.movementRegistryNumber > 1;
    },
    weightDirection() {
      const { movementEntryWeight, movementExitWeight } = this;
      return movementEntryWeight === "0"
        ? "ENTRADA"
        : movementExitWeight === "0"
        ? "SALIDA"
        : "NINGUNO";
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

.swal2-title {
  font-size: 24px !important; /* Change the size as needed */
}
</style>