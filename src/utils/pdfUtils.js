const options = {
    timeZone: 'UTC' // Usar UTC para asegurar consistencia
}
const formatterTime =
    (value) => {
        let date = new Date(value);
        date.setUTCHours(12, 0, 0, 0);
        return new Date(date.getFullYear(), date.getMonth(), date.getDate()).toLocaleDateString('es', options);

    }
const ticketEntryPDF = ({
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
    movementEntryBascName,
    movementEntryBascNumber,
    movementExitBascNumber,

    movementEntryTicket,
    movementExitTicket,
    //container
    containerNumber,
    containerTaraWeight,

}, qrData) => {
    const date = new Date();
    const companyData = [{ text: "NEPORSA", style: "header" },
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
        text: date.toLocaleString('es', options),
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
    },]
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
            text: `${formatterTime(headerCycleDate)} ${headerCycle}`,
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
            text: "OBSERVACIONES",
            style: "bodyText",
        },
        {
            text: headerObservation,
            style: "bodyText",
        },]

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
        {
            text: "PESAJE ENTRADA",
            style: "header",
        },
        {
            text: "NUMERO DE BOLETA",
            style: "bodyText",
        },
        {
            text: `${correlative}-${new Date().getFullYear()}`,
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
    ]
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
        {
            text: "------------------------------------",
            style: "header",
        },
        {
            text: "Corte con cuidado esta sección",
            style: "subheader",
        },
        {
            text: "------------------------------------",
            style: "header",
        },
        ...companyData,
        {
            text: "------------------------------------",
            style: "header",
        },
        ...headerArray,
        {
            text: "..........................................",
            style: "header",
        },
        ...weightData,
        {
            text: "\n",
            style: "",
        },
        {
            text: "\n",
            style: "",
        },
        {
            text: `ENTRADA: ${data['PESO_BRUTO']}`,
            style: "header",
        },
        {
            text: "CERTIFICADO: BRM-CC-42473/19",
            style: "header",
        }, {
            text: "BRM-CC-42473/19",
            style: "header",
        },
        {
            text: `VGM: ${data['VGM']} Kg`,
            style: "header",
        }, {
            text: "\n",
            style: "",
        },
        {
            qr: qrData, fit: 170, alignment: "left",
            margin: [30, 2, 0, 0],
        }
        // Additional content can be added here
    ]
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

        {
            text: "------------------------------------",
            style: "header",
        },
        {
            text: "Corte con cuidado esta sección",
            style: "subheader",
        },
        {
            text: "------------------------------------",
            style: "header",
        },
        ...companyData,
        {
            text: "------------------------------------",
            style: "header",
        },
        ...headerArray,
        {
            text: "..........................................",
            style: "header",
        },
        ...weightData,
        {
            text: `PESAJE DE SALIDA`,
            style: "header",
        },
        {
            text: "NUMERO DE BOLETA",
            style: "bodyText",
        },
        {
            text: `${movementExitTicket}-${new Date().getFullYear()}`,
            style: "bodyText",
        },
        {
            text: "FECHA PESAJE",
            style: "bodyText",
        },
        {
            text: `${formatterTime(movementExitDate)} `,
            style: "bodyText",
        },
        {
            text: `BASCULA: ${movementExitBascNumber}`,
            style: "bodyText",
        },
        {
            text: "TICKET: --",
            style: "bodyText",
        },
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
            text: `NETO: ${(parseFloat(movementEntryWeight) - (parseFloat(movementExitWeight) + parseFloat(containerTaraWeight))).toFixed(3)}TM`,
            style: "header",
        },
        {
            text: "CERTIFICADO: BRM-CC-42473/19",
            style: "header",
        },
        {
            text: `VGM: ${VGM} Kg`,
            style: "header",
        }
        , {
            text: "\n",
            style: "",
        },
        {
            qr: qrData, fit: 170, alignment: "left",
            margin: [30, 2, 0, 0],
        }
        // Additional content can be added here
    ]
    return weightDirection === "ENTRADA" ? entryTicket : exitTicket
}
const ticketOutPDF = (data, qrData) => {
    const date = new Date();
    return [
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
            text: date.toLocaleString('es', options),
            style: "bodyText",
        },
        {
            text: "OPERADOR BASCULA",
            style: "bodyText",
        },
        {
            text: data['USUARIO'],
            style: "bodyText",
        },
        {
            text: "\n",
            style: "",
        },
        {
            text: "..........................................",
            style: "header",
        },
        {
            text: "DATOS TRANSPORTE",
            style: "header",
        },
        {
            text: "NUMERO DE CICLO",
            style: "bodyText",
        },
        {
            text: `${formatterTime(data['FECHA_CICLO'])} ${data['NUM_CICLO']}`,
            style: "bodyText",
        },
        {
            text: "LICENCIA PILOTO",
            style: "bodyText",
        },
        {
            text: `${data['COD_PAIS_PLACA']} ${data['NUMERO_LICENCIA_PILOTO']}`,
            style: "bodyText",
        },
        {
            text: "NOMBRE PILOTO",
            style: "bodyText",
        },
        {
            text: data['NOMBRE_PILOTO'],
            style: "bodyText",
        },
        {
            text: "PLACAS VEHICULO",
            style: "bodyText",
        },
        {
            text: `${data['COD_PAIS_PLACA']} ${data['NUMERO_PLACA']}`,
            style: "bodyText",
        },
        {
            text: "TRANSPORTISTA",
            style: "bodyText",
        },
        {
            text: data['NOMBRE_TRANSPORTISTA'],
            style: "bodyText",
        },
        {
            text: "OBSERVACIONES",
            style: "bodyText",
        },
        {
            text: data['DESCRIPCION'],
            style: "bodyText",
        },
        {
            text: "..........................................",
            style: "header",
        },
        {
            text: "DATOS PESAJE",
            style: "header",
        },
        {
            text: `REGISTRO ${data['CORRELATIVO9']}`,
            style: "bodyText",
        },
        {
            text: "NUMERO DE CONTENEDOR",
            style: "bodyText",
        },
        {
            text: data['IDENTIF_CONTENEDOR'],
            style: "bodyText",
        },
        {
            text: "\n",
            style: "",
        },
        {
            text: "PESAJE ENTRADA",
            style: "header",
        },
        {
            text: "NUMERO DE BOLETA",
            style: "bodyText",
        },
        {
            text: `${data['TICKET1']}-${new Date().getFullYear()}`,
            style: "bodyText",
        },
        {
            text: "FECHA PESAJE",
            style: "bodyText",
        },
        {
            text: data['FECHA_PESAJE_1'],
            style: "bodyText",
        },
        {
            text: `BASCULA: ${data['NUM_BASCULA_1']}`,
            style: "bodyText",
        },
        {
            text: "EMPRESA: BAGAGO",
            style: "bodyText",
        },
        {
            text: "TICKET: --",
            style: "bodyText",
        },
        {
            text: "\n",
            style: "",
        },
        {
            text: "\n",
            style: "",
        },
        {
            text: `ENTRADA: ${data['PESO_BRUTO']}`,
            style: "header",
        },
        {
            text: `TARA: ${data['PESO_TARA_CONTENED']}`,
            style: "header",
        },
        {
            text: "------------------------------------",
            style: "header",
        },
        {
            text: "Corte con cuidado esta sección",
            style: "subheader",
        },
        {
            text: "------------------------------------",
            style: "header",
        },
        {
            text: "NEPORSA",
            style: "header",
        },
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
            text: date.toLocaleString('es', options),
            style: "bodyText",
        },
        {
            text: "OPERADOR BASCULA",
            style: "bodyText",
        },
        {
            text: data['USUARIO'],
            style: "bodyText",
        },
        {
            text: "\n",
            style: "",
        },
        {
            text: "------------------------------------",
            style: "header",
        },
        {
            text: "DATOS TRANSPORTE",
            style: "header",
        },
        {
            text: "NUMERO DE CICLO",
            style: "bodyText",
        },
        {
            text: `${formatterTime(data['FECHA_CICLO'])} ${data['NUM_CICLO']}`,
            style: "bodyText",
        },
        {
            text: "LICENCIA PILOTO",
            style: "bodyText",
        },
        {
            text: `${data['COD_PAIS_PLACA']} ${data['NUMERO_LICENCIA_PILOTO']}`,
            style: "bodyText",
        },
        {
            text: "NOMBRE PILOTO",
            style: "bodyText",
        },
        {
            text: data['NOMBRE_PILOTO'],
            style: "bodyText",
        },
        {
            text: "PLACAS VEHICULO",
            style: "bodyText",
        },
        {
            text: `${data['COD_PAIS_PLACA']} ${data['NUMERO_PLACA']}`,
            style: "bodyText",
        },
        {
            text: "TRANSPORTISTA",
            style: "bodyText",
        },
        {
            text: data['NOMBRE_TRANSPORTISTA'],
            style: "bodyText",
        },
        {
            text: "OBSERVACIONES",
            style: "bodyText",
        },
        {
            text: data['DESCRIPCION'],
            style: "bodyText",
        },
        {
            text: "..........................................",
            style: "header",
        },
        {
            text: "DATOS PESAJE",
            style: "header",
        },
        {
            text: `REGISTRO ${data['CORRELATIVO9']}`,
            style: "bodyText",
        },
        {
            text: "NUMERO DE CONTENEDOR",
            style: "bodyText",
        },
        {
            text: data['IDENTIF_CONTENEDOR'],
            style: "bodyText",
        },
        {
            text: "\n",
            style: "",
        },
        {
            text: `PESAJE DE ENTRADA`,
            style: "header",
        },
        {
            text: "NUMERO DE BOLETA",
            style: "bodyText",
        },
        {
            text: `${data['TICKET1']}-${new Date().getFullYear()}`,
            style: "bodyText",
        },
        {
            text: "FECHA PESAJE",
            style: "bodyText",
        },
        {
            text: `${formatterTime(data['FECHA_PESAJE_1'])} `,
            style: "bodyText",
        },
        {
            text: `BASCULA: ${data['NUM_BASCULA_1']}`,
            style: "bodyText",
        },
        {
            text: "TICKET: --",
            style: "bodyText",
        },
        {
            text: "\n",
            style: "",
        },
        {
            text: `PESAJE DE SALIDA`,
            style: "header",
        },
        {
            text: "NUMERO DE BOLETA",
            style: "bodyText",
        },
        {
            text: `${data['TICKET2']}-${new Date().getFullYear()}`,
            style: "bodyText",
        },
        {
            text: "FECHA PESAJE",
            style: "bodyText",
        },
        {
            text: `${formatterTime(data['FECHA_PESAJE_2'])} `,
            style: "bodyText",
        },
        {
            text: `BASCULA: ${data['NUM_BASCULA_2']}`,
            style: "bodyText",
        },
        {
            text: "TICKET: --",
            style: "bodyText",
        },
        {
            text: "\n",
            style: "",
        },
        {
            text: "\n",
            style: "",
        },
        {
            text: `ENTRADA: ${data['PESO_BRUTO']} TM`,
            style: "header",
        },
        {
            text: `SALIDA: ${data['PESO_TARA']} TM`,
            style: "header",
        },
        {
            text: `TARA: ${data['PESO_TARA_CONTENED']} TM`,
            style: "header",
        },
        {
            text: `NETO: ${(parseFloat(data['PESO_TARA']) - (parseFloat(data['PESO_BRUTO']) + parseFloat(data['PESO_TARA_CONTENED']))).toFixed(3)}TM`,
            style: "header",
        },
        {
            text: "CERTIFICADO: BRM-CC-42473/19",
            style: "header",
        },
        {
            text: `VGM: ${data['VGM']} Kg`,
            style: "header",
        }
        , {
            text: "\n",
            style: "",
        },
        {
            qr: qrData, fit: 170, alignment: "left",
            margin: [30, 2, 0, 0],
        }
        // Additional content can be added here
    ]
}

export { ticketEntryPDF, ticketOutPDF }