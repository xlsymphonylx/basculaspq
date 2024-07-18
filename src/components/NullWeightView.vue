<template>
  <div class="bg-white p-3 m-3 rounded shadow">
    <!-- Weighting section -->
    <section>
      <h3 class="text-center text-dark fw-bold">Anulación de Pesajes</h3>
      <div class="col">
        <div class="row">
          <div class="col">
            <label class="text-dark m-2 fw-bold">Ciclo</label>

            <input
              type="text"
              class="form-control"
              v-model="nullCycle"
              :disabled="isLoading"
            />
          </div>
          <div class="col">
            <label class="text-dark m-2 fw-bold">Fecha Ciclo</label>
            <input
              type="datetime-local"
              class="form-control"
              v-model="nullCycleDate"
              :disabled="isLoading"
            />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <label class="text-dark m-2 fw-bold">Carga</label>

            <input
              type="text"
              class="form-control"
              v-model="nullContainerType"
            />
          </div>
          <div class="col">
            <label class="text-dark m-2 fw-bold">Numero de Registro</label>
            <input
              type="text"
              class="form-control"
              v-model="nullRegistryNumber"
            />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <label class="text-dark m-2 fw-bold">Tipo de Pesaje</label>
            <select
              type="text"
              class="form-control"
              v-model="nullWeightingType"
            >
              <option value="E">Entrada</option>
              <option value="S">Salida</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <div class="m-3 text-center">
      <button
        type="button"
        class="btn btn-primary btn-lg me-2"
        @click="nullWeight"
      >
        Anular Pesaje
      </button>
      <button type="button" class="btn btn-danger btn-lg me-2" @click="goBack">
        Regresar
      </button>
    </div>
  </div>
</template>
  
  <script>
import cycleService from "@/services/cycleService";
import { linearAlert, linearToast } from "@/utils/swalAlerts";
import { formatDateToPortStandard } from "@/utils/timeUtils";
export default {
  data: () => ({
    isLoading: false,
    //header
    nullCycle: null,
    nullCycleDate: null,
    nullContainerType: null,
    nullRegistryNumber: null,
    nullWeightingType: null,
  }),
  methods: {
    goBack() {
      this.$emit("goBack");
    },
    async nullWeight() {
      if (this.isFormValid) {
        const {
          nullCycle,
          nullCycleDate,
          nullContainerType,
          nullRegistryNumber,
          nullWeightingType,
        } = this;
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        const formatedCycleDate = formatDateToPortStandard(nullCycleDate);
        this.isLoading = true;
        try {
          linearToast("Anulando Pesaje por favor espere", "warning");
          const { data } = await cycleService.nullCycle({
            nullCycle,
            nullCycleDate: formatedCycleDate,
            nullContainerType,
            nullRegistryNumber,
            nullWeightingType,
          });
          const { TIPO_RESPUESTA } = data;
          if (TIPO_RESPUESTA["RESULTADO"] === "01") {
            await linearToast(`Exito, pesaje ${nullCycle} anulado`, "success");
            await this.nullLocalWeight({
              nullCycle,
              formatedCycleDate,
              username,
              password,
            });
          } else
            await linearAlert(
              "Advertencia",
              TIPO_RESPUESTA["DESCRIPCION"],
              "warning"
            );
        } catch (error) {
          await linearAlert("Error", error, "error", 3000, false);
          console.log(error);
        } finally {
          this.isLoading = false;
        }
      } else {
        linearToast("Por favor ingrese todos los datos", "warning");
      }
    },
    async nullLocalWeight({
      nullCycle,
      formatedCycleDate,
      username,
      password,
    }) {
      try {
        linearToast(
          "Registrando anulación de pesaje en local por favor espere",
          "warning"
        );
        await cycleService.localNullCycle({
          nullCycle,
          nullCycleDate: formatedCycleDate,
          username,
          password,
        });
        await linearToast(
          `Exito, anulación de pesaje ${nullCycle} registrada`,
          "success"
        );
      } catch (error) {
        await linearToast(
          `Error al registrar anulación de pesaje local ${error}`,
          "error"
        );
      }
    },
  },
  computed: {
    isFormValid() {
      return (
        !!this.nullCycle &&
        !!this.nullCycleDate &&
        !!this.nullContainerType &&
        !!this.nullRegistryNumber &&
        !!this.nullWeightingType
      );
    },
  },
};
</script>
  
  <style>
</style>