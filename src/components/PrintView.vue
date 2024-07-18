<template>
  <div class="bg-white p-3 m-3 rounded">
    <h3 class="text-center text-dark fw-bold">Impresión de Boleta DUCA</h3>
    <div class="row mt-1">
      <div class="col">
        <div class="row">
          <label class="mb-2 text-dark fw-bold">Ciclo</label>
          <div class="col">
            <input type="text" class="form-control" v-model="cycle" />
          </div>
          <label class="mb-2 text-dark fw-bold">Numero de Registro</label>
          <div class="col">
            <input type="text" class="form-control" v-model="correlative" />
          </div>
        </div>
        <div class="row">
          <label class="mb-2 text-dark fw-bold">Fecha</label>
          <div class="col">
            <input type="date" class="form-control" v-model="date" />
          </div>
        </div>
      </div>
    </div>

    <div class="m-3 text-center">
      <button
        type="button"
        class="btn btn-primary btn-lg me-2"
        @click="getCycleData"
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
import { ticketEntryPDF, ticketOutPDF } from "@/utils/pdfUtils";
import { linearAlert } from "@/utils/swalAlerts";

export default {
  data: () => ({
    date: null,
    cycle: null,
    correlative: null,
  }),
  methods: {
    goBack() {
      this.$emit("goBack");
    },
    async getCycleData() {
      try {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        const { date, cycle, correlative, transformDate, printPDF } = this;
        const transformedDate = transformDate(date);
        console.log("transformedDate", transformedDate);
        const { data } = await cycleService.getLocalCycle({
          username,
          password,
          date: transformedDate,
          cycle,
          correlative,
        });
        await linearAlert("Exito", "Ingresado con exito", "success");
        let { data: policyData } = await cycleService.getPolicy({
          cycle,
          bl: data["BL"],
        });
        policyData = policyData["PARAMETROS_SALIDA"];

        const qrData = `${policyData["POLIZA"]}|${policyData["NUMERO_BL"]}|${policyData["CONSIGNATARIO"]}|${cycle}|${policyData["NUMERO_MANIFIESTO"]}`;
        printPDF(data, qrData);
        console.log("response data", data);
      } catch (error) {
        await linearAlert("Error", error, "error", 3000, false);
        console.log(error);
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
    printPDF(data, qrData) {
      const pdfMake = require("pdfmake/build/pdfmake");
      const pdfFonts = require("pdfmake/build/vfs_fonts");

      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      const docDefinition = {
        pageMargins: [0, 0, 0, 0],
        content: data.FECHA_PESAJE_2
          ? ticketOutPDF(data, qrData)
          : ticketEntryPDF(data, qrData),
        styles: {
          header: {
            fontSize: 14,
            alignment: "left",
            bold: true,
            margin: [30, 2, 0, 0],
          },
          subheader: {
            fontSize: 12,
            alignment: "left",
            bold: true,
            margin: [30, 2, 0, 0],
          },
          spacer: {
            fontSize: 10,
            bold: true,
            alignment: "left",
            margin: [10, 10, 10, 10],
          },
          bodyText: {
            fontSize: 10,
            alignment: "left",
            margin: [30, 2, 0, 0],
          },
        },
      };

      pdfMake.createPdf(docDefinition).getBlob((blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url);
      });
    },
  },
};
</script>
  
  <style>
</style>