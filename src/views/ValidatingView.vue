<template>
  <div class="bg-secondary p-3 m-3 rounded">
    <h3 class="text-center text-white fw-bold">Validación de Datos Poliza</h3>
    <div class="row mt-1">
      <div class="col">
        <div class="row">
          <label class="mb-2 text-white fw-bold">Ciclo</label>
          <div class="col">
            <input type="text" class="form-control" v-model="cycle" />
          </div>
          <label class="mb-2 text-white fw-bold">BL</label>
          <div class="col">
            <input type="text" class="form-control" v-model="bl" />
          </div>
        </div>
      </div>
    </div>

    <div class="m-3 text-center">
      <button
        type="button"
        class="btn btn-primary btn-lg me-2"
        @click="validatePolicy"
      >
        Verificar
      </button>
      <button type="button" class="btn btn-danger btn-lg me-2" @click="goBack">
        Regresar
      </button>
    </div>
  </div>
</template>

<script>
import cycleService from "@/services/cycleService";
import { linearAlert } from "@/utils/swalAlerts";

export default {
  data: () => ({
    cycle: null,
    bl: null,
  }),
  methods: {
    goBack() {
      this.$emit("goBack");
    },
    async validatePolicy() {
      try {
        const { cycle, bl } = this;
        const { data: response } = await cycleService.getPolicy({ cycle, bl });
        const { TIPO_RESPUESTA } = response;
        if (TIPO_RESPUESTA["RESULTADO"] === "01")
          await linearAlert("Poliza", TIPO_RESPUESTA["DESCRIPCION"], "success");
        else
          await linearAlert(
            "Advertencia",
            TIPO_RESPUESTA["DESCRIPCION"],
            "warning"
          );
      } catch (error) {
        await linearAlert("Error", error, "error", 3000, false);
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>