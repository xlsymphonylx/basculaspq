<template>
  <div class="bg-secondary p-3 m-3 rounded">
    <h3 class="text-center text-white fw-bold">Generación de Reporte</h3>
    <div class="row mt-1">
      <div class="col">
        <div class="row">
          <label class="mb-2 text-white fw-bold">Desde</label>
          <div class="col">
            <input type="date" class="form-control" v-model="from" />
          </div>
          <label class="mb-2 text-white fw-bold">Hacias</label>
          <div class="col">
            <input type="date" class="form-control" v-model="to" />
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
    toParsed: null,
    fromParsed: null,
  }),
  watch: {
    from(newValue) {
      this.fromParsed = this.transformDate(newValue);
    },
    to(newValue) {
      this.toParsed = this.transformDate(newValue);
    },
  },
  methods: {
    goBack() {
      this.$emit("goBack");
    },
    async getEmployeesReport() {
      try {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        const { fromParsed, toParsed } = this;
        const response = await cycleService.getReportEmployees({
          to: toParsed,
          from: fromParsed,
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
        console.error(error);
      }
    },
    transformDate(inputDate) {
      // Split the input date into its components
      const [year, month, day] = inputDate.split("-");

      // Get the last two digits of the year
      const shortYear = year.slice(-2);

      // Format the date in DD/MM/YY
      const formattedDate = `${day}/${month}/${shortYear}`;

      return formattedDate;
    },
  },
};
</script>
  
  <style>
</style>