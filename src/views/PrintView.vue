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
import { generateTicket } from "@/utils/pdfUtils";
import { linearAlert } from "@/utils/swalAlerts";
import { splitDate } from "@/utils/timeUtils";

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
        const { date, cycle, correlative, transformDate, printPDF } = this;
        const transformedDate = transformDate(date);
        const { data } = await cycleService.getLocalCycleInNewDB({
          date: transformedDate,
          cycle,
          correlative,
        });
        console.log("data from axios", data);
        await linearAlert("Exito", "Ingresado con exito", "success");
        const qrData = ``;
        printPDF(data, qrData);
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
    printPDF(data, qrData) {
      const username = localStorage.getItem("username");

      const pdfMake = require("pdfmake/build/pdfmake");
      const pdfFonts = require("pdfmake/build/vfs_fonts");
      const entryDate = splitDate(data["fecha_pesaje_entrada"]);
      const exitDate = splitDate(data["fecha_pesaje_salida"]);
      const pdfData = {
        username,
        weightDirection: data["tipo_operacion"],
        correlative: data["no_registro"],
        VGM: data["vgm"],
        //header
        headerCycle: data["num_ciclo"],
        headerCycleDate: data["fecha_ciclo"],
        headerCompany: data["nombre_transportista"],
        headerLicenseNumber: data["numero_licencia_piloto"],
        headerLicenseCountry: data["cod_pais_placa"],
        headerPilot: data["nombre_piloto"],
        headerPlateCountry: data["cod_pais_placa"],
        headerPlateNumber: data["numero_placa"],
        headerObservation: data["observacion_ciclo"],
        //movements
        movementRegistryNumber: data["no_registro"],
        movementEntryWeight: data["peso_entrada"],
        movementExitWeight: data["peso_salida"],
        movementEntryDate: entryDate["DATE"],
        movementEntryTime: entryDate["TIME"],
        movementExitDate: exitDate["DATE"],
        movementEntryBascName: data["empresa_entrada"],
        movementEntryBascNumber: data["bascula_entrada"],
        movementExitBascNumber: data["bascula_salida"],

        movementEntryTicket: data["ticket_entrada"],
        movementExitTicket: data["ticket_salida"],
        //container
        containerNumber: data["identif_contenedor"],
        containerTaraWeight: data["peso_tara_contened"],
      };
      console.log("pdfData", pdfData);
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      const docDefinition = {
        pageMargins: [0, 0, 0, 0],
        content: generateTicket(pdfData),
        styles: {
          header: {
            fontSize: 14,
            alignment: "center",
            bold: true,
            margin: [10, 10, 10, 10],
          },
          subheader: {
            fontSize: 12,
            alignment: "center",
            bold: true,
            margin: [10, 10, 10, 10],
          },
          spacer: {
            fontSize: 10,
            bold: true,
            alignment: "center",
            margin: [10, 10, 10, 10],
          },
          bodyText: {
            fontSize: 10,
            alignment: "center",
            margin: [10, 10, 10, 10],
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

<style></style>

