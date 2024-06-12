const ticketEntryPDF = (data, qrData) => {
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
            text: date.toLocaleString(),
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
            text: `${new Date(data['FECHA_CICLO']).toLocaleString()} ${data['NUM_CICLO']}`,
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
            text: date.toLocaleString(),
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
            text: `${new Date(data['FECHA_CICLO']).toLocaleString()} ${data['NUM_CICLO']}`,
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
}
export { ticketEntryPDF }