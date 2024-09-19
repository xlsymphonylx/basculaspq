const options = {
  timeZone: "UTC", // Usar UTC para asegurar consistencia
};
const formatterTime = (value) => {
  let date = new Date(value);
  date.setUTCHours(12, 0, 0, 0);
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  ).toLocaleDateString("es", options);
};
const generateTicket = (
  {
    username,
    weightDirection,
    correlative,
    VGM,
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

    movementEntryTicket,
    movementExitTicket,
    movementEntryBoleta,
    movementExitBoleta,
    //container
    containerNumber,
    containerTaraWeight,
  },
  qrData
) => {
  const date = new Date();
  const entryWeightData = [
    {
      text: "PESAJE ENTRADA",
      style: "header",
    },
    {
      text: "NUMERO DE BOLETA",
      style: "bodyText",
    },
    {
      text: `${(movementEntryBoleta ?? "0") + "-" + new Date().getFullYear()}`,
      style: "bodyText",
    },
    {
      text: "FECHA PESAJE",
      style: "bodyText",
    },
    {
      text: `${movementEntryDate} ${movementEntryTime}`,
      style: "bodyText",
    },
    {
      text: `BASCULA: ${movementEntryBascNumber}`,
      style: "bodyText",
    },
    {
      text: `EMPRESA: ${movementEntryBascName}`,
      style: "bodyText",
    },
    {
      text: `TICKET: ${movementEntryTicket}`,
      style: "bodyText",
    },
    {
      text: "\n",
      style: "",
    },
  ];
  const exitWeightData = [
    {
      text: `PESAJE DE SALIDA`,
      style: "header",
    },
    {
      text: "NUMERO DE BOLETA",
      style: "bodyText",
    },
    {
      text: `${(movementExitBoleta ?? "0") + "-" + new Date().getFullYear()}`,
      style: "bodyText",
    },
    {
      text: "FECHA PESAJE",
      style: "bodyText",
    },
    {
      text: `${movementExitDate} ${movementExitTime}`,
      style: "bodyText",
    },
    {
      text: `BASCULA: ${movementExitBascNumber}`,
      style: "bodyText",
    },
    {
      text: `EMPRESA: ${movementExitBascName}`,
      style: "bodyText",
    },
    {
      text: `TICKET: ${movementExitTicket ?? "--"}`,
      style: "bodyText",
    },
  ];
  const companyData = [
    { text: "NEPORSA", style: "header" },
    {
      text: "NIT:813288-7",
      style: "header",
    },
    {
      text: "\n",
      style: "",
    },
    {
      text: "FECHA DE IMPRESION",
      style: "bodyText",
    },
    {
      text: date.toLocaleString("es", options),
      style: "bodyText",
    },
    {
      text: "OPERADOR BASCULA",
      style: "bodyText",
    },
    {
      text: username,
      style: "bodyText",
    },
    {
      text: "\n",
      style: "",
    },
  ];
  const headerArray = [
    {
      text: "DATOS TRANSPORTE",
      style: "header",
    },
    {
      text: "NUMERO DE CICLO",
      style: "bodyText",
    },
    {
      text: `${headerCycleDate} ${headerCycle}`,
      style: "bodyText",
    },
    {
      text: "LICENCIA PILOTO",
      style: "bodyText",
    },
    {
      text: `${headerLicenseCountry} ${headerLicenseNumber}`,
      style: "bodyText",
    },
    {
      text: "NOMBRE PILOTO",
      style: "bodyText",
    },
    {
      text: headerPilot,
      style: "bodyText",
    },
    {
      text: "PLACAS VEHICULO",
      style: "bodyText",
    },
    {
      text: `${headerPlateCountry} ${headerPlateNumber}`,
      style: "bodyText",
    },
    {
      text: "TRANSPORTISTA",
      style: "bodyText",
    },
    {
      text: headerCompany,
      style: "bodyText",
    },
    {
      // text: "OBSERVACIONES"
      style: "bodyText",
    },
    {
      text: headerObservation,
      style: "bodyText",
    },
  ];

  const weightData = [
    {
      text: "DATOS PESAJE",
      style: "header",
    },
    {
      text: `REGISTRO ${movementRegistryNumber}`,
      style: "bodyText",
    },
    {
      text: "NUMERO DE CONTENEDOR",
      style: "bodyText",
    },
    {
      text: containerNumber,
      style: "bodyText",
    },
    {
      text: "\n",
      style: "",
    },
  ];
  const entryTicket = [
    ...companyData,
    {
      text: "..........................................",
      style: "header",
    },
    ...headerArray,
    {
      text: "..........................................",
      style: "header",
    },
    ...weightData,
    ...entryWeightData,
    {
      text: "\n",
      style: "",
    },
    {
      text: `ENTRADA: ${movementEntryWeight}`,
      style: "header",
    },
    {
      text: `TARA: ${containerTaraWeight}`,
      style: "header",
    },

    // {
    //     qr: qrData, fit: 170, alignment: "left",
    //     margin: [30, 2, 0, 0],
    // }
    // Additional content can be added here
  ];
  const exitTicket = [
    ...companyData,
    {
      text: "..........................................",
      style: "header",
    },
    ...headerArray,
    {
      text: "..........................................",
      style: "header",
    },
    ...weightData,
    ...entryWeightData,
    ...exitWeightData,
    {
      text: "\n",
      style: "",
    },
    {
      text: "\n",
      style: "",
    },
    {
      text: `ENTRADA: ${movementEntryWeight} TM`,
      style: "header",
    },
    {
      text: `SALIDA: ${movementExitWeight} TM`,
      style: "header",
    },
    {
      text: `TARA: ${containerTaraWeight} TM`,
      style: "header",
    },
    {
      text: `NETO: ${(
        parseFloat(movementEntryWeight) -
        (parseFloat(movementExitWeight) + parseFloat(containerTaraWeight))
      ).toFixed(3)} TM`,
      style: "header",
    },
    {
      text: "CERTIFICADO: BRM-CC-42473/19",
      style: "header",
    },
    {
      text: "\n",
      style: "",
    },
    // {
    //     qr: qrData, fit: 170, alignment: "left",
    //     margin: [30, 2, 0, 0],
    // }
    // Additional content can be added here
  ];
  console.log('weightDirection === "ENTRADA" ? entryTicket : exitTicket',weightDirection === "ENTRADA" ? entryTicket : exitTicket);
  return weightDirection === "ENTRADA" ? entryTicket : exitTicket;
};
export { generateTicket };

