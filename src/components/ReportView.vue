<template>
  <div class="bg-secondary p-3 m-3 rounded">
    <h3 class="text-center text-white fw-bold">Generación de Reporte</h3>
    <div class="row mt-1">
      <div class="col">
        <div class="row">
          <label class="mb-2 text-white fw-bold">Desde</label>
          <div class="col">
            <input type="text" class="form-control" v-model="from" />
          </div>
          <label class="mb-2 text-white fw-bold">Hacias</label>
          <div class="col">
            <input type="text" class="form-control" v-model="to" />
          </div>
        </div>
      </div>
    </div>

    <div class="m-3 text-center">
      <button
        type="button"
        class="btn btn-primary btn-lg me-2"
        @click="getEmployeesReport"
      >
        Generar Reporte
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
    from: null,
    to: null,
  }),
  methods: {
    goBack() {
      this.$emit("goBack");
    },
    async getEmployeesReport() {
      try {
        const { to, from } = this;
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        const response = await cycleService.getReportEmployees({
          to,
          from,
          username,
          password,
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "data.xlsx"); // Filename for the downloaded filedocument.body.appendChild(link);
        link.click();
        link.remove();
      } catch (error) {
        await linearAlert("Error", error, "error", 3000, false);
        console.log(error);
      }
    },
  },
};
</script>
  
  <style>
</style>