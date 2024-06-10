<template>
  <div class="bg-secondary p-3 m-3 rounded">
    <h3 class="text-center text-white fw-bold">Impresión de Boleta DUCA</h3>
    <div class="row mt-1">
      <div class="col">
        <div class="row">
          <label class="mb-2 text-white fw-bold">Ciclo</label>
          <div class="col">
            <input type="text" class="form-control" v-model="cycle" />
          </div>
          <label class="mb-2 text-white fw-bold">Numero de Registro</label>
          <div class="col">
            <input type="text" class="form-control" v-model="correlative" />
          </div>
        </div>
        <div class="row">
          <label class="mb-2 text-white fw-bold">Fecha</label>
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
    </div>
  </div>
</template>
  
  <script>
import cycleService from "@/services/cycleService";
import { ticketPDF } from "@/utils/pdfUtils";
import { linearAlert } from "@/utils/swalAlerts";

export default {
  data: () => ({
    date: null,
    cycle: null,
    correlative: null,
  }),
  methods: {
    async getCycleData() {
      try {
        const { date, cycle, correlative } = this;
        const resCycle = await cycleService.getCycle({
          date,
          cycle,
          correlative,
        });
        await linearAlert("Exito", "Ingresado con exito", "success");
        console.log("response", resCycle);
      } catch (error) {
        await linearAlert("Error", error, "error", 3000, false);
        console.log(error);
      }
    },
    printPDF() {
      const pdfMake = require("pdfmake/build/pdfmake");
      const pdfFonts = require("pdfmake/build/vfs_fonts");

      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      const docDefinition = {
        pageMargins: [0, 0, 0, 0],
        content: ticketPDF(),
        styles: {
          header: {
            fontSize: 10,
            alignment: "left",
            bold: true,
            margin: [55, 2, 0, 0],
          },
          subheader: {
            fontSize: 8,
            alignment: "left",
            bold: true,
            margin: [55, 2, 0, 0],
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
            margin: [55, 2, 0, 0],
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