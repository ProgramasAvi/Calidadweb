$(document).ready(function () {
  $(".btnConChillVerifi").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblconChillVerifi").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 1 },
        dataSrc: "",
      },
      columns: [
        { data: "ID" },
        { data: "FECHA" },
        { data: "HORA" },
        { data: "TIPOAVE" },
        { data: "C1" },
        { data: "C2" },
        { data: "C3" },
        { data: "C4" },
        { data: "C5" },
        { data: "C6" },
        { data: "C7" },
        { data: "C8" },
        { data: "C9" },
        { data: "C10" },
        { data: "C11" },
        { data: "C12" },
        { data: "C13" },
        { data: "C14" },
        { data: "C15" },
        { data: "C16" },
        { data: "C17" },
        { data: "tempPromedio" },
        { data: "OBSERVACIONES" },
        { data: "RESPONS_OBSER" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnConChiller").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblConChiller").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 2 },
        dataSrc: "",
      },
      columns: [
        { data: "ID" },
        { data: "FECHA" },
        { data: "HORA" },
        { data: "TIPO_AVE" },
        { data: "C1" },
        { data: "C2" },
        { data: "C3" },
        { data: "C4" },
        { data: "C5" },
        { data: "C6" },
        { data: "C7" },
        { data: "C8" },
        { data: "C9" },
        { data: "C10" },
        { data: "TEMP_PROM" },
        { data: "PORCENT_CUMPLI" },
        { data: "PH" },
        { data: "TEMP_PRECHILL" },
        { data: "REGISCLORO" },
        { data: "RESPONS" },
        { data: "CODIGO" },
        { data: "observaciones" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  //este archivo ajax se encarga mostrar la tabla el html, las columns se encarga de eso.
  $(".btnVerifiMari").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblVerifiMari").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 3 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "horaVerifi" },
        { data: "areaVeri" },
        { data: "observaHalla" },
        { data: "despresProduc" },
        { data: "despresTempe" },
        { data: "despresTempe1" },
        { data: "despresTempe2" },
        { data: "despresTempe3" },
        { data: "despresTempe4" },
        { data: "despresTempe5" },
        { data: "despresTempe6" },
        { data: "despresTempe7" },
        { data: "despresTempe8" },
        { data: "despresTempe9" },
        { data: "despresTempe10" },
        { data: "despresTempe11" },
        { data: "despresTempe12" },
        { data: "despresTempe13" },
        { data: "despresTempe14" },
        { data: "despresTempe15" },
        { data: "despresTempe16" },
        { data: "marinaProduc" },
        { data: "marinaTemp" },
        { data: "marinaTemp1" },
        { data: "marinaTemp2" },
        { data: "marinaTemp3" },
        { data: "marinaTemp4" },
        { data: "marinaTemp5" },
        { data: "marinaTemp6" },
        { data: "marinaTemp7" },
        { data: "marinaTemp8" },
        { data: "marinaTemp9" },
        { data: "marinaTemp10" },
        { data: "marinaTemp11" },
        { data: "marinaTemp12" },
        { data: "marinaTemp13" },
        { data: "marinaTemp14" },
        { data: "marinaTemp15" },
        { data: "marinaTemp16" },
        { data: "salmueTemp" },
        { data: "salmueTemp1" },
        { data: "salmueTemp2" },
        { data: "ambienTemp" },
        { data: "trazabiliLote" },
        { data: "trazabiliFV" },
        { data: "supervisor" },
        { data: "coordCalidad" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnReporMari").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblReporMari").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 4 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "hora" },
        { data: "area" },
        { data: "despresProduc" },
        { data: "despresTempe" },
        { data: "marinaProduc" },
        { data: "marinaTemp" },
        { data: "salmueTemp" },
        { data: "ambienTemp" },
        { data: "trazabiliLote" },
        { data: "trazabiliFV" },
        { data: "observacion" },
        { data: "accionCorrectiva" },
        { data: "responsable" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnVeriConProcesos").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblVeriConProcesos").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 5 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "horaVerifi" },
        { data: "areaVeri" },
        { data: "observaHalla" },
        { data: "muestraProducto" },
        { data: "muestraTemp1" },
        { data: "muestraTem2" },
        { data: "muestraTem3" },
        { data: "muestraTem4" },
        { data: "muestraTem5" },
        { data: "muestraTem6" },
        { data: "muestraTem7" },
        { data: "muestraTem8" },
        { data: "muestraTem9" },
        { data: "muestraTem10" },
        { data: "muestraTem11" },
        { data: "muestraTem12" },
        { data: "muestraTem13" },
        { data: "muestraTem14" },
        { data: "muestraTem15" },
        { data: "muestraTem16" },
        { data: "muestraTem17" },
        { data: "ambienTemp" },
        { data: "trazabiliLote" },
        { data: "trazabiliFV" },
        { data: "supervisor" },
        { data: "coordCalidad" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnReporConProceso").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblReporConProceso").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 6 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "hora" },
        { data: "area" },
        { data: "muestraProducto" },
        { data: "muestraTemp1" },
        { data: "muestraTem2" },
        { data: "muestraTem3" },
        { data: "muestraTem4" },
        { data: "muestraTem5" },
        { data: "ambienTemp" },
        { data: "trazabiliLote" },
        { data: "trazabiliFV" },
        { data: "observacion" },
        { data: "accionCorrectiva" },
        { data: "responsable" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnInspecAntemortem").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblInspecAntemortem").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 7 },
        dataSrc: "",
      },
      columns: [
        { data: "ID" },
        { data: "fecha" },
        { data: "lotProduc" },
        // { "data": "cantAves" },
        { data: "pollo" },
        { data: "pavo" },
        { data: "gallina" },
        { data: "viaje" },
        { data: "granja" },
        { data: "sexo" },
        { data: "edad" },
        { data: "avesCadena" },
        { data: "tiempoAyuno" },
        { data: "plumasErizadas" },
        { data: "inflamacionCabezaOjos" },
        { data: "secrecionNarizOjos" },
        { data: "edemaBarbilla" },
        { data: "sinRespEstimulo" },
        { data: "estornudos" },
        { data: "diarreaAcumulacionFecal" },
        { data: "lesionPiel" },
        { data: "heridaSupurante" },
        { data: "deshidratacion" },
        { data: "sintomasNerviosos" },
        { data: "golpesHematomas" },
        { data: "huesosEngrosados" },
        { data: "avesAsfixiadas" },
        { data: "observaciones" },
        { data: "accionesCorrectivas" },
        { data: "realiza" },
        { data: "aprueba" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnInspecPostmortem").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblInspecPostmortem").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 8 },
        dataSrc: "",
      },
      columns: [
        { data: "ID" },
        { data: "fecha" },
        //  { "data": "cantAves" },
        { data: "pollo" },
        { data: "pavo" },
        { data: "gallina" },
        { data: "viaje" },
        { data: "absesos" },
        { data: "aerosaculitis" },
        { data: "ascitis" },
        { data: "dermatitis" },
        { data: "procesoInflamatorio" },
        { data: "tumor" },
        { data: "contaminacion" },
        { data: "cianosis" },
        { data: "caquexia" },
        { data: "contusionFractura" },
        { data: "ictericia" },
        { data: "marek" },
        { data: "sobreEscaldado" },
        { data: "olor" },
        { data: "osteomielitis" },
        { data: "septicemia" },
        { data: "polloMalSangrado" },
        { data: "totalAveDecomisada" },
        { data: "observaciones" },
        { data: "accionesCorrectivas" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnRegFrente").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblRegFrente").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 9 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "frentViaje" },
        { data: "frentSexo" },
        { data: "frentGranja" },
        { data: "frentNAvesGranja" },
        { data: "tipoAveEvis" },
        { data: "dgranRLace" },
        { data: "dgranPerHema" },
        { data: "dgranAHema" },
        { data: "dgranAFract" },
        { data: "dgranALuxa" },
        { data: "dgranPechHema" },
        { data: "dgranPechGranu" },
        { data: "dgranOGranuPlant" },
        { data: "dgranOAlimen" },
        { data: "dgranOHiGraso" },
        { data: "dproPerHema" },
        { data: "dproPerFract" },
        { data: "dproAHema" },
        { data: "dproAPuntaRoja" },
        { data: "dproAFract" },
        { data: "dproALuxa" },
        { data: "dproPechHema" },
        { data: "petequias" },
        { data: "dproOPlumCanal" },
        { data: "canalCuticulaOtro" },
        { data: "dproORuptIntes" },
        { data: "dproOContaBili" },
        { data: "dproOPoCampPig" },
        { data: "dproOPoCampPar" },
        { data: "dcarRLace" },
        { data: "dcarPechHema" },
        { data: "dcarPerFract" },
        { data: "dcarPerHema" },
        { data: "dcarAFract" },
        { data: "dcarAHemat" },
        { data: "vproTEscal1" },
        { data: "vproTEscal2" },
        { data: "vproTEscalPatas" },
        { data: "vproVoltAtur" },
        { data: "vproAmpAtur" },
        { data: "vproFrecAtur" },
        { data: "aleteoMomentoCorte" },
        { data: "reflejosPalpebralPupilar" },
        { data: "presenciaDeglucion" },
        { data: "vproTiemEscal" },
        { data: "vproTiemSangra" },
        { data: "vproTiemPoVisce" },
        { data: "vproVelCade" },
        { data: "rvsObservacion" },
        { data: "rvsRealiza" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnConPesaje").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblConPesaje").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 11 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fechaProd" },
        { data: "referencia" },
        { data: "bachesProd" },
        { data: "consecutivo" },
        { data: "nomMPC" },
        { data: "loteIntMPC" },
        { data: "pesoMPC" },
        { data: "nombreMPNC" },
        { data: "loteIntMPNC" },
        { data: "pesoFormu" },
        { data: "pesoEncon" },
        { data: "observ" },
        { data: "respon" },
        { data: "horaI" },
        { data: "horaFn" },
        { data: "resPesaMPC" },
        { data: "resPesaMPNC" },
        { data: "verifSuperv" },
        { data: "observaciones" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnConMezclado").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblConMezclado").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 12 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "loteInt" },
        { data: "horaI" },
        { data: "horaFn" },
        { data: "numBache" },
        { data: "timeMezcla" },
        { data: "textura" },
        { data: "color" },
        { data: "responsable" },
        { data: "verificacion" },
        { data: "observacion" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnConEmbutido").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblConEmbutido").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 13 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "loteInt" },
        { data: "horaI" },
        { data: "horaFn" },
        { data: "numBache" },
        { data: "referencia" },
        { data: "lotePV" },
        { data: "cantidad" },
        { data: "pesoCrudo" },
        { data: "longitud" },
        { data: "diametro" },
        { data: "responsable" },
        { data: "verificacion" },
        { data: "observacion" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnConAhumado").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblConAhumado").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 14 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "loteInt" },
        { data: "cantBaches" },
        { data: "horaI" },
        { data: "horaFn" },
        { data: "hornoV" },
        { data: "hornoCT" },
        { data: "tanque" },
        { data: "controlTNP" },
        { data: "responsable" },
        { data: "timeCoccion" },
        { data: "verifiTNP" },
        { data: "responsable1" },
        { data: "observacion" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnConEmpaque").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblConEmpaque").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 15 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "loteInt" },
        { data: "T1" },
        { data: "H1" },
        { data: "R1" },
        { data: "T2" },
        { data: "H2" },
        { data: "R2" },
        { data: "T3" },
        { data: "H3" },
        { data: "R3" },
        { data: "T4" },
        { data: "H4" },
        { data: "R4" },
        { data: "T5" },
        { data: "H5" },
        { data: "R5" },
        { data: "T6" },
        { data: "H6" },
        { data: "R6" },
        { data: "color" },
        { data: "olor" },
        { data: "sabor" },
        { data: "textura" },
        { data: "responsable" },
        { data: "observacion" },
        { data: "producto" },
        { data: "lote" },
        { data: "FV" },
        { data: "cantidad" },
        { data: "matEmpaque" },
        { data: "lotePV" },
        { data: "horaI" },
        { data: "horaFn" },
        { data: "responsable1" },
        { data: "verifica" },
        { data: "fechaPeso" },
        { data: "peso1" },
        { data: "peso2" },
        { data: "peso3" },
        { data: "peso4" },
        { data: "peso5" },
        { data: "peso6" },
        { data: "peso7" },
        { data: "peso8" },
        { data: "peso9" },
        { data: "peso10" },
        { data: "verifiCalidad" },
        { data: "jefeProd" },
        { data: "jefeCalidad" },
        { data: "observaciones" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnFormDevoluciones").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblFormDevoluciones").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 16 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "tipo_devol" },
        { data: "producto" },
        { data: "documento" },
        { data: "nit" },
        { data: "cliente" },
        { data: "cantidad" },
        { data: "unidad" },
        { data: "lote" },
        { data: "fv" },
        { data: "temperatura" },
        { data: "destino" },
        { data: "causa_dest" },
        { data: "causa" },
        { data: "placa" },
        { data: "ruta" },
        { data: "vendedor" },
        { data: "calidad" },
        { data: "despachos" },
        { data: "observacion" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnConTPD").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblConTPD").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 17 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "hora" },
        { data: "tempAmbiente" },
        { data: "destino" },
        { data: "placas" },
        { data: "producto1" },
        { data: "lote1" },
        { data: "vencimiento1" },
        { data: "temperatura1" },
        { data: "producto2" },
        { data: "lote2" },
        { data: "vencimiento2" },
        { data: "temperatura2" },
        { data: "producto3" },
        { data: "lote3" },
        { data: "vencimiento3" },
        { data: "temperatura3" },
        { data: "producto4" },
        { data: "lote4" },
        { data: "vencimiento4" },
        { data: "temperatura4" },
        { data: "producto5" },
        { data: "lote5" },
        { data: "vencimiento5" },
        { data: "temperatura5" },
        { data: "producto6" },
        { data: "lote6" },
        { data: "vencimiento6" },
        { data: "temperatura6" },
        { data: "producto7" },
        { data: "lote7" },
        { data: "vencimiento7" },
        { data: "temperatura7" },
        { data: "producto8" },
        { data: "lote8" },
        { data: "vencimiento8" },
        { data: "temperatura8" },
        { data: "producto9" },
        { data: "lote9" },
        { data: "vencimiento9" },
        { data: "temperatura9" },
        { data: "producto10" },
        { data: "lote10" },
        { data: "vencimiento10" },
        { data: "temperatura10" },
        { data: "producto11" },
        { data: "lote11" },
        { data: "vencimiento11" },
        { data: "temperatura11" },
        { data: "producto12" },
        { data: "lote12" },
        { data: "vencimiento12" },
        { data: "temperatura12" },
        { data: "producto13" },
        { data: "lote13" },
        { data: "vencimiento13" },
        { data: "temperatura13" },
        { data: "producto14" },
        { data: "lote14" },
        { data: "vencimiento14" },
        { data: "temperatura14" },
        { data: "producto15" },
        { data: "lote15" },
        { data: "vencimiento15" },
        { data: "temperatura15" },
        { data: "producto16" },
        { data: "lote16" },
        { data: "vencimiento16" },
        { data: "temperatura16" },
        { data: "producto17" },
        { data: "lote17" },
        { data: "vencimiento17" },
        { data: "temperatura17" },
        { data: "realizo" },
        { data: "observacion" },
        { data: "correctivo" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnVeriConChillVisc").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.dataTable.isDataTable("#tblVeriConChillVisc")) {
      $("#tblVeriConChillVisc").DataTable().destroy();
    }

    $("#tblVeriConChillVisc").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 18 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "hora" },
        { data: "hm1" },
        { data: "hm2" },
        { data: "hm3" },
        { data: "hm4" },
        { data: "hm5" },
        { data: "hm6" },
        { data: "hm7" },
        { data: "hm8" },
        { data: "hm9" },
        { data: "hm10" },
        { data: "hm11" },
        { data: "hm12" },
        { data: "hm13" },
        { data: "hm14" },
        { data: "hm15" },
        { data: "hm16" },
        { data: "hm17" },
        { data: "htemp" },
        { data: "mm1" },
        { data: "mm2" },
        { data: "mm3" },
        { data: "mm4" },
        { data: "mm5" },
        { data: "mm6" },
        { data: "mm7" },
        { data: "mm8" },
        { data: "mm9" },
        { data: "mm10" },
        { data: "mm11" },
        { data: "mm12" },
        { data: "mm13" },
        { data: "mm14" },
        { data: "mm15" },
        { data: "mm16" },
        { data: "mm17" },
        { data: "mtemp" },
        { data: "pm1" },
        { data: "pm2" },
        { data: "pm3" },
        { data: "pm4" },
        { data: "pm5" },
        { data: "pm6" },
        { data: "pm7" },
        { data: "pm8" },
        { data: "pm9" },
        { data: "pm10" },
        { data: "pm11" },
        { data: "pm12" },
        { data: "pm13" },
        { data: "pm14" },
        { data: "pm15" },
        { data: "pm16" },
        { data: "pm17" },
        { data: "ptemp" },
        { data: "cm1" },
        { data: "cm2" },
        { data: "cm3" },
        { data: "cm4" },
        { data: "cm5" },
        { data: "cm6" },
        { data: "cm7" },
        { data: "cm8" },
        { data: "cm9" },
        { data: "cm10" },
        { data: "cm11" },
        { data: "cm12" },
        { data: "cm13" },
        { data: "cm14" },
        { data: "cm15" },
        { data: "cm16" },
        { data: "cm17" },
        { data: "ctemp" },
        { data: "observacion" },
        { data: "reponsable" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: "_all",
          defaultContent: "-",
        },
      ],

      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnConChillVisc").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblConChillVisc").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 19 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "hora" },
        { data: "tipoAve" },
        { data: "lote" },
        { data: "hm1" },
        { data: "hm2" },
        { data: "hm3" },
        { data: "hm4" },
        { data: "hm5" },

        { data: "htemp" },
        { data: "mm1" },
        { data: "mm2" },
        { data: "mm3" },
        { data: "mm4" },
        { data: "mm5" },

        { data: "mtemp" },
        { data: "pm1" },
        { data: "pm2" },
        { data: "pm3" },
        { data: "pm4" },
        { data: "pm5" },

        { data: "ptemp" },
        { data: "cm1" },
        { data: "cm2" },
        { data: "cm3" },
        { data: "cm4" },
        { data: "cm5" },

        { data: "ctemp" },

        { data: "codigo" },
        { data: "responsable" },
        { data: "observaciones" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnPreopePlataforma").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopePlataforma").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 20 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnPreopeEscaldados").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopeEscaldados").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 21 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnPreopeEvisc").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopeEvisc").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 22 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnPreopeEmpaque").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopeEmpaque").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 23 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnPreopeEnfria").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopeEnfria").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 24 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnPreopeFileteo").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopeFileteo").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 25 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnPreopeDesprese").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopeDesprese").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 26 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnPreopePavo").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopePavo").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 27 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnPreopePost").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopePost").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 28 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnPreopeHielo").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopeHielo").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 29 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  //$(".btnPreopeSalmuera").click(function (e) {
  // e.preventDefault();
  // swal({
  //   title: "Cargando Tabla",
  // icon: "success",
  // buttons: false,
  //timer: 800,
  //});
  //$('#tblPreopeSalmuera').DataTable({
  //  "ajax": {
  //    "url": "../models/controlTablas.php",
  //  "type": "POST",
  // "data": { opcion: 29 },
  // "dataSrc": ""
  //    },
  //      "columns": [
  //            { "data": "id" },
  //              { "data": "fecha" },
  //                { "data": "superficie" },
  //{ "data": "novedad" },
  //  { "data": "observacion" },
  //    { "data": "cumplimiento" },
  //      { "data": "cTotal" },
  //        { "data": "calidad" },
  //          { "data": "correccion" },
  //            { "data": "respon_invima" },
  //              { "data": "firm_invima" },

  //            ],

  //columnDefs:
  //[{
  //"targets": 10,
  //"data": 'firm_invima',
  //"render": function (data, type, row, meta) {
  //    return '<img src="' + data + '"  width="150"/>';
  //  }
  //}],
  //"autoWidth": false,
  //dom: 'Bfrtip',
  //buttons: [{
  //extend: 'pageLength',
  //  className: 'btnn btn-warning'
  //}, {
  //   extend: 'excelHtml5',
  //    autoFilter: true,
  //  sheetName: 'Exported data',
  //    text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
  //      className: 'btnn btn-success'
  //    }]
  //  });
  //});
  $(".btnPreopeAlimentacion").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopeAlimentacion").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 30 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnPreopeCanastilla").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopeCanastilla").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 31 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnPreopeLavanderia").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopeLavanderia").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 32 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnPreopeCarnesEspeciales").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopeCarnesEspeciales").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 33 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "superficie" },
        { data: "novedad" },
        { data: "observacion" },
        { data: "cumplimiento" },
        { data: "cTotal" },
        { data: "calidad" },
        { data: "correccion" },
        { data: "respon_invima" },
        { data: "firm_invima" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firm_invima",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
  $(".btnPreopeVerifi").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });
    $("#tblPreopeVerifi").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 34 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "ptoMuestreo" },
        { data: "hora" },
        { data: "cloro" },
        { data: "desinf" },
        { data: "esteriliza" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnFrenteBPM").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    // Intenta inicializar DataTables
    $("#tblFrentesBPM").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 35 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "nombre" },
        { data: "cedula" },
        { data: "cargo" },
        //{ "data": "ccosto" },
        { data: "descripcion" },
        { data: "verificacion" },
        { data: "cumplimiento" },
        { data: "fecHora" },
        { data: "responsable" },
        { data: "aprueba" },
        { data: "correctivo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnEmpaque").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    // Intenta inicializar DataTables
    $("#tblEmpaque").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 37 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "producto" },
        { data: "lote_producto_terminado" },
        { data: "fecha_de_vencimiento" },
        { data: "cantidad_unidades" },
        { data: "registro_sanitario" },
        { data: "material_de_empaque" },
        { data: "lote_material_de_empaque" },
        { data: "observacion" },
        { data: "responsable" },
        { data: "verifica" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnControlCloro").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    // Intenta inicializar DataTables
    $("#tblControlCloro").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 36 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "hora" },
        { data: "muestra" },
        { data: "cloro" },
        // { "data": "ph" },
        { data: "correctivo" },
        { data: "verifica" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  //-----------------------------------------------------------------------------------------------------------------------------------------------------
 $(".btnAuditoriaProceso").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tblAuditoriaProceso")) {
      $("#tblAuditoriaProceso").DataTable().clear().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblAuditoriaProceso").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 38 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha_creacion" },
        { data: "area" },
        { data: "categorias" },
        { data: "aspectosCategoria" },
        { data: "valorPorcentaje" },
        { data: "porcentaje_categoria" },
        { data: "observaciones_categoria" },
        { data: "observaciones" },
        { data: "calidadResponsable" },
        { data: "firma" },
        { data: "aprobo" },
      ],

      columnDefs: [
        {
          targets: 10,
          data: "firma",
          render: function (data, type, row, meta) {
            return '<img src="' + data + '"  width="150"/>';
          },
        },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });


  //-----------------------------------------------------------------------------------------------------------------------------------------------------------

  $(".btnInspeccionOperativa").click(function (e) {
    e.preventDefault();

    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tblInspeccionOperativa")) {
      $("#tblInspeccionOperativa").DataTable().clear().destroy();
    }

    $.ajax({
      url: "../models/controlTablas.php",
      type: "POST",
      data: { opcion: 39 },
      success: function (response) {
        console.log("Datos recibidos:", response);

        if (!response.data || !Array.isArray(response.data)) {
          console.error("Error: El formato de datos no es válido", response);
          return;
        }

        // Inicializar DataTable con los datos formateados
        $("#tblInspeccionOperativa").DataTable({
          destroy: true,
          data: response.data,
          columns: [
            { data: "id" },
            { data: "hora" },
            { data: "fecha" },
            { data: "area" },
            { data: "porcentaje" },
            { data: "observaciones" },
            { data: "responsableInspeccion" },
            { data: "firma" },
            { data: "asentador" },
            { data: "baldesRecoleccionVisceras" },
            { data: "bandaCangilones" },
            { data: "bandaConos" },
            { data: "bandaEmpaque" },
            { data: "bandaPinchos" },
            { data: "bandaEscurridorSalidaChiller" },
            { data: "bandaTransportadoraPresas" },
            { data: "bandaTransportadoraPavo" },
            { data: "bandejaIngresoCanalPrechiller" },
            { data: "bandejaToleranciaCero" },
            { data: "campanasProtectorasAntebrazo" },
            { data: "cajonesEmpaqueProducto" },
            { data: "canaletaEvisceracion" },
            { data: "conosMetalicos" },
            { data: "cortadoraCabeza" },
            { data: "cuchillosChairas" },
            { data: "delantales" },
            { data: "descolgadorPollo" },
            { data: "deshuesador" },
            { data: "desinfeccionSuperficiesAmbientes" },
            { data: "despresadoraAutomatica" },
            { data: "despresadoraManual" },
            { data: "embudos" },
            { data: "espatulas" },
            { data: "evisceradora" },
            { data: "escurridorTambor" },
            { data: "extractoraCloaca" },
            { data: "extractoraPulmones" },
            { data: "extractoraTraqueaBuche" },
            { data: "formadoraHamburguesas" },
            { data: "grameras" },
            { data: "guantesMetalicos" },
            { data: "maquinaQuiebreCortacuello" },
            { data: "marinadoraPresa" },
            { data: "mesaColgado" },
            { data: "mesaEmpaque" },
            { data: "mesaFileteo" },
            { data: "mesaInspeccion" },
            { data: "mesaRecuperacion" },
            { data: "mesas" },
            { data: "mesasCorte" },
            { data: "mesasEmbandejado" },
            { data: "mesasRecepcion" },
            { data: "mesasReciboCanal" },
            { data: "mesasDespresado" },
            { data: "molinoBaader" },
            { data: "palaHielo" },
            { data: "peladoraMollejas" },
            { data: "pistolaDestronconadora" },
            { data: "pistolaExtractoraCloaca" },
            { data: "pistolaSuccionPulmones" },
            { data: "quebrantadorCitalsa" },
            { data: "quebrantadorLima" },
            { data: "recipientes" },
            { data: "rejillaCaidaViscera" },
            { data: "seleccionadora" },
            { data: "sierra" },
            { data: "soporteGrameras" },
            { data: "tablasTeflon" },
            { data: "termometroPunzon" },
            { data: "tijeras" },
            { data: "tumbler" },
            { data: "aprobo" },
          ],

          columnDefs: [
            {
              targets: 7,

              data: "firma",
              render: function (data, type, row) {
                if (data === "Sin firma") {
                  return "Sin firma";
                } else {
                  return '<img src="' + data + '" width="100"/>';
                }
              },
            },
          ],

          autoWidth: false,
          dom: "Bfrtip",
          buttons: [
            {
              extend: "excelHtml5",
              text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
              className: "btnn btn-success",
            },
          ],
        });
      },
      error: function (xhr, status, error) {
        console.error("Error en AJAX:", status, error);
      },
    });
  });

  //---------------------------------------------------------------------------------------//--------------------------------------------------------------

  $(".btnDesinfeccion").click(function (e) {
    e.preventDefault();

    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    // ⚠️ Verificar si DataTable ya está inicializado antes de destruirlo
    if ($.fn.DataTable.isDataTable("#tblDesinfeccion")) {
      $("#tblDesinfeccion").DataTable().clear().destroy();
    }

    // 🔍 Verifica qué datos devuelve el servidor antes de cargar DataTables
    $.ajax({
      url: "../models/controlTablas.php",
      type: "POST",
      data: { opcion: 40 },

      success: function (response) {
        console.log("✅ Datos recibidos:", response);
        console.table(response.data);

        // ⚠️ Verifica si response realmente contiene la propiedad "data"
        if (!response.data || !Array.isArray(response.data)) {
          console.error("❌ Error: El formato de datos no es válido", response);
          return;
        }

        $("#tblDesinfeccion").DataTable({
          destroy: true,
          data: response.data, // ⚠️ Usamos directamente response.data
          columns: [
            { data: "id" },
            { data: "fecha_Desinfeccion" },
            { data: "Areas" },
            { data: "Desinfectante" }, // ⚠️ Verifica el nombre exacto en el JSON
            { data: "Observaciones" },
            { data: "Concentracion" },
            { data: "responsable_Desinfeccion" },
            { data: "aprobo" },
            //  { "data": "firma" }
          ],
          autoWidth: false,
          dom: "Bfrtip",
          buttons: [
            {
              extend: "pageLength",
              className: "btnn btn-warning",
            },
            {
              extend: "excelHtml5",
              autoFilter: true,
              sheetName: "Exported data",
              text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
              className: "btnn btn-success",
            },
          ],
        });
      },
      error: function (xhr, status, error) {
        console.error("❌ Error en AJAX:", status, error);
      },
    });
  });

  //-----------------------------------------------------------------//--------------------------------------------------------------------------------------------//--------------------------

  $(".btnDefectosCanal").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    // Destruye la tabla si ya ha sido inicializada
    if ($.fn.DataTable.isDataTable("#tblDefectosCanal")) {
      $("#tblDefectosCanal").DataTable().destroy();
    }

    $("#tblDefectosCanal").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 41 },
        dataSrc: function (data) {
          let newData = [];

          data.forEach(function (item) {
            try {
              let defectos = Object.entries(JSON.parse(item.defectos_granjas));
              let deficiencias = Object.entries(JSON.parse(item.deficiencia_proceso));

              let maxLength = Math.max(defectos.length, deficiencias.length);

              for (let i = 0; i < maxLength; i++) {
                newData.push({
                  ...item,
                  defecto: defectos[i] ? defectos[i][0] : "", // Nombre del defecto
                  cantidad_defecto: defectos[i] ? defectos[i][1] : "", // Cantidad del defecto
                  deficiencia: deficiencias[i] ? deficiencias[i][0] : "", // Nombre de la deficiencia
                  cantidad_deficiencia: deficiencias[i] ? deficiencias[i][1] : "", // Cantidad de la deficiencia
                });
              }
            } catch (e) {
              console.error("Error al procesar los datos:", e);
              newData.push({
                ...item,
                defecto: "",
                cantidad_defecto: "",
                deficiencia: "",
                cantidad_deficiencia: "",
              });
            }
          });

          return newData;
        },
      },
      columns: [
        { data: "ID" },
        { data: "fecha" },
        { data: "granjas" },
        { data: "viaje" },
        { data: "tipo_ave" },
        { data: "defecto", title: "Defecto Granja" },
        { data: "cantidad_defecto", title: "Cantidad" },
        { data: "porcentaje_granja" },
        { data: "deficiencia", title: "Deficiencia Proceso" },
        { data: "cantidad_deficiencia", title: "Cantidad" },
        { data: "porcentaje_proceso" },
        { data: "porcentaje_global" },
        { data: "verificado" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Defectos y Deficiencias",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  //---------------------- FOR-S-CCI-20-INSPECCIÓN CALIDAD PRODUCTO TERMINADO------------------------------------------------------------------------///-------------------------------------------------//----------------

  $(".btnsendinspeccionCalidad").click(function (e) {
    e.preventDefault();
    swal({
        title: "Cargando Tabla",
        icon: "success",
        buttons: false,
        timer: 800,
    });

    if ($.fn.dataTable.isDataTable("#tblinspeccionCalidad")) {
        // Si ya existe, solo recarga los datos
        $("#tblinspeccionCalidad").DataTable().ajax.reload();
    } else {
        // Inicializa la tabla por primera vez
        $("#tblinspeccionCalidad").DataTable({
            ajax: {
                url: "../models/controlTablas.php",
                type: "POST",
                data: { opcion: 42 },
                dataSrc: "",
            },
            columns: [
                { data: "id" },
                { data: "hora" },
                { data: "fecha" },
                { data: "productoInspeccion" },
                { data: "area" },
                { data: "tipo_ave" },
                { data: "loteInspeccion" },
                { data: "fechaVencimiento" },
                { data: "rotulacionIncompleta" },
                { data: "dislocacionInspeccion" },
                { data: "residualInspeccion" },
                { data: "plumasInspeccion" },
                { data: "pigmentacionInspeccion" },
                { data: "cuticulaInspeccion" },
                { data: "hematomasInspeccion" },
                { data: "elementosInspeccion" },
                { data: "embalajeInspeccion" },
                { data: "trazabilidadInspeccion" },
                { data: "rupturasInspeccion" },
                { data: "lixiviadoInspeccion" },
                { data: "selladoInspeccion" },
                { data: "productoFueraBandeja" },
                { data: "totalMuestras" },
                { data: "responsableInspeccion" },
                { data: "observacionInspeccion" },
                { data: "aprobo" },
                { data: "porcentajeInspeccion" },
            ],
            autoWidth: false,
            dom: "Bfrtip",
            buttons: [
                {
                    extend: "pageLength",
                    className: "btnn btn-warning",
                },
                {
                    extend: "excelHtml5",
                    autoFilter: true,
                    sheetName: "Exported data",
                    text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
                    className: "btnn btn-success",
                },
            ],
        });
    }
});

/* ----------------------------------------------------------------- */
  $(".btncontrolPuntos").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    // Destruye la tabla si ya ha sido inicializada
    if ($.fn.DataTable.isDataTable("#tblcontrolDesinfeccion")) {
      $("#tblcontrolDesinfeccion").DataTable().destroy();
    }

    // Función para transformar los valores según las reglas dadas
    function transformarValor(data, type, row, meta) {
      if (typeof data !== "string") return data; // Si no es string, devolver sin cambios

      let valor = data.trim().toLowerCase(); // Convertir a minúsculas y eliminar espacios

      // console.log(`Valor recibido: "${data}" -> Transformado: "${valor}"`); // Ver en consola

      if (valor === "cumple") return "1";
      if (valor === "no cumple") return "0";
      if (valor === "no cumple por limpieza") return "L";

      return data; // Si no coincide con ninguna regla, se mantiene igual
    }

    // Inicializar DataTables
    $("#tblcontrolDesinfeccion").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 43 },
        dataSrc: "",
      },
      columns: [
        { data: "ID" },
        { data: "fecha" },
        { data: "Hora" },
        { data: "zona_blanca", render: transformarValor },
        { data: "empaque_viscera1", render: transformarValor },
        { data: "empaque_viscera2", render: transformarValor },
        { data: "empaque_viscera_cuchillo", render: transformarValor },
        { data: "empaque_viscera_pala", render: transformarValor },
        { data: "empaque_canal1", render: transformarValor },
        { data: "empaque_canal2", render: transformarValor },
        { data: "empaque_canal3", render: transformarValor },
        { data: "empaque_canal4", render: transformarValor },
        { data: "pala_chiller", render: transformarValor },
        { data: "marinado1", render: transformarValor },
        { data: "marinado2", render: transformarValor },
        { data: "marinado3", render: transformarValor },
        { data: "marinado4", render: transformarValor },
        { data: "marinado5", render: transformarValor },
        { data: "marinado6", render: transformarValor },
        { data: "marinado_cuchillo1", render: transformarValor },
        { data: "marinado_cuchillo2", render: transformarValor },
        { data: "marinado_cuchillo3", render: transformarValor },
        { data: "marinado_cuchillo4", render: transformarValor },
        { data: "marinado_cuchillo5", render: transformarValor },
        { data: "marinado_cuchillo6", render: transformarValor },
        { data: "ducha_canastillas", render: transformarValor },
        { data: "carnes_molidas", render: transformarValor },
        { data: "entrada_trolley", render: transformarValor },
        { data: "salida_trolley", render: transformarValor },
        { data: "fileteo_pollo", render: transformarValor },
        { data: "fileteo_pollo_tablas", render: transformarValor },
        { data: "fileteo_pollo_cuchillo1", render: transformarValor },
        { data: "fileteo_pollo_cuchillo2", render: transformarValor },
        { data: "fileteo_pollo_cuchillo3", render: transformarValor },
        { data: "fileteo_pollo_cuchillo4", render: transformarValor },
        { data: "bascula_produccion", render: transformarValor },
        { data: "fileteo_pavos", render: transformarValor },
        { data: "fileteo_pavos2", render: transformarValor },
        { data: "fileteo_pavos_cuchillo1", render: transformarValor },
        { data: "fileteo_pavos_cuchillo2", render: transformarValor },
        { data: "fileteo_pavos_cuchillo3", render: transformarValor },
        { data: "fileteo_pavos_cuchillo4", render: transformarValor },
        { data: "fileteo_pavos_cuchillo5", render: transformarValor },
        { data: "fileteo_pavos_cuchillo6", render: transformarValor },
        { data: "fileteo_pavos_cuchillo7", render: transformarValor },
        { data: "fileteo_pavos_cuchillo8", render: transformarValor },
        { data: "fileteo_pavos_cuchillo9", render: transformarValor },
        { data: "fileteo_pavos_cuchillo10", render: transformarValor },
        { data: "fileteo_pavos_cuchillo11", render: transformarValor },
        { data: "fileteo_pavos_cuchillo12", render: transformarValor },
        { data: "fileteo_pavos_cuchillo13", render: transformarValor },
        { data: "fileteo_pavos_cuchillo14", render: transformarValor },
        { data: "despachos", render: transformarValor },
        { data: "iqf", render: transformarValor },
        { data: "cambio_empaque", render: transformarValor },
        { data: "iqf2", render: transformarValor },
        { data: "reseleccion", render: transformarValor },
        { data: "pediluvio_hielo", render: transformarValor },
        { data: "pala_hielo", render: transformarValor },
        { data: "pediluvio_posproceso1", render: transformarValor },
        { data: "pediluvio_posproceso2", render: transformarValor },
        { data: "posproceso1", render: transformarValor },
        { data: "posproceso2", render: transformarValor },
        { data: "posproceso_cuchillo", render: transformarValor },
        { data: "correctivo" },
        { data: "verifico" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });



/* ------------------------------------------------------------------------------------------------------------------------------ */

  $(".btnControlTemp").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    // Destruye la tabla si ya ha sido inicializada
    if ($.fn.DataTable.isDataTable("#tblControlTemp")) {
      $("#tblControlTemp").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblControlTemp").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 44 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "hora" },
        { data: "area" },
        { data: "temperatura" },
        { data: "correctivas" },
        { data: "verificado" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnsendinspeccionToleranciaCero").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    // Intenta inicializar DataTables
    $("#tblinspeccionTolerancia").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 45 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fechaVerifcaTolerancia" },
        { data: "granjaVerifcaTolerancia" },
        { data: "viajeVerifcaTolerancia" },
        { data: "tipoAveVerifcaTolerancia" },
        { data: "materialFecalVerifcaTolerancia" },
        { data: "monitoreoTolerancia" },
        { data: "responsableTolerancia" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnsendinspeccionVerificacion").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    // Intenta inicializar DataTables
    $("#tblinspeccionVerificacion").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 46 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha_verificacion" },
        { data: "concentracion" },
        { data: "granja_verificacion" },
        { data: "viaje_verificacion" },
        { data: "tipo_ave" },
        { data: "material_fecal" },
        { data: "monitoreo_verificacion" },
        { data: "responsable_verificacion" },
        { data: "concentracion_ducha" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  //-----------------------------------------------------------------------------------------------------------//--------------------------------------------------------------

  $(".btnPesoFrisby").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    // Destruye la tabla si ya ha sido inicializada
    if ($.fn.DataTable.isDataTable("#tblPesoFrisby")) {
      $("#tblPesoFrisby").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblPesoFrisby").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 47 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "lote1" },
        { data: "lote2" },
        { data: "lote1Fecha" },
        { data: "lote2Fecha" },
        { data: "fechaVencimiento" },
        { data: "destino" },
        { data: "cantidadTotal" },
        { data: "pesoPromedioPechuga" },
        { data: "pechugaMalCortada" },
        { data: "pechugaNocumplen" },
        { data: "pesoPresasPechuga" },
        { data: "pesoPromedioContramuslo" },
        { data: "contramusloMalCortado" },
        { data: "contramusloNocumplen" },
        { data: "pesoPresasContramuslo" },
        { data: "pesoPromedioMuslo" },
        { data: "musloMalCortado" },
        { data: "musloNocumplen" },
        { data: "pesoPresasMuslo" },
        { data: "pesoPromedioAla" },
        { data: "alaMalCortada" },
        { data: "alaNocumplen" },
        { data: "pesoPresasAla" },
        { data: "observaciones" },
        { data: "realizo" },
        { data: "aprobo" },
      ],

      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
          customize: function (xlsx) {
            var sheet = xlsx.xl.worksheets["sheet1.xml"];
            var rows = sheet.getElementsByTagName("row");

            // Recorremos todas las filas
            for (var i = 0; i < rows.length; i++) {
              var cells = rows[i].getElementsByTagName("c");
              // Recorremos todas las celdas
              for (var j = 0; j < cells.length; j++) {
                var cell = cells[j];
                var cellValue = cell.textContent || cell.innerText;

                // Si la celda es "pesoPromedioPechuga" y contiene comas
                if (cellValue && cellValue.includes(",")) {
                  // Envolvemos el valor de la celda entre comillas dobles para evitar que Excel lo separe
                  cell.textContent = '"' + cellValue + '"';
                }
              }
            }
          },
        },
      ],
    });
  });

  $(".btnControlTemperaturaCuartos").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tblControlTemperaturaCuartos")) {
      $("#tblControlTemperaturaCuartos").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblControlTemperaturaCuartos").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 48 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "hora" },
        { data: "fecha" },
        { data: "lugar" },
        { data: "numeroLugar" },
        { data: "producto" },
        { data: "lote" },
        { data: "fechaVencimiento" },
        { data: "temperaturaProducto" },
        { data: "producto2" },
        { data: "lote2" },
        { data: "fechaVencimiento2" },
        { data: "temperaturaProducto2" },
        { data: "temperaturaAmbienteCuarto" },
        { data: "productoExpuesto" },
        { data: "Observacion" },
        { data: "responsable" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnControlTemperaturaLiberacion").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tblControlTemperaturaLiberacion")) {
      $("#tblControlTemperaturaLiberacion").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblControlTemperaturaLiberacion").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 49 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "hora" },
        { data: "fecha" },
        { data: "tunel" },
        { data: "producto" },
        { data: "lote" },
        { data: "fechaVencimiento" },
        { data: "temperaturaProducto" },
        { data: "producto2" },
        { data: "lote2" },
        { data: "fechaVencimiento2" },
        { data: "temperaturaProducto2" },
        { data: "temperaturaTunel" },
        { data: "Observacion" },
        { data: "responsable" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btninventarioA").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tblinventarioA")) {
      $("#tblinventarioA").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblinventarioA").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 51 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "categoria" },
        { data: "numeroCuarto" },
        { data: "areaLimpiaOrdenada" },
        { data: "utensiliosEstado" },
        { data: "lavadoCronograma" },
        { data: "temperaturaAlmacenamientoNormatividad" },
        { data: "cuartoCirculacionModerada" },
        { data: "productoDesinfectado" },
        { data: "rotuloTrazabilidad" },
        { data: "almacenamientoRotaciones" },
        { data: "canastaProductoLimpia" },
        { data: "implementosAlmacena" },
        { data: "utensiliosLimpios" },
        { data: "pisoSuciedad" },
        { data: "canalesLimpiosOrganicos" },
        { data: "pisoLixiviados" },
        { data: "producto" },
        { data: "lote" },
        { data: "fechaBeneficio" },
        { data: "fechaEmpaque" },
        { data: "fechaVencimiento" },
        { data: "cantidad" },
        { data: "responsable" },
        { data: "observaciones" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnMaterialExtraño").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tblMaterialExtraño")) {
      $("#tblMaterialExtraño").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblMaterialExtraño").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 52 },
        dataSrc: "data",
      },
      columns: [
        { data: "id" },
        { data: "id_registro" },
        { data: "fecha" },
        { data: "responsable" },
        { data: "cedula" },
        { data: "planta" },
        { data: "area" },
        { data: "categoria" },
        { data: "aplica" },
        { data: "item" },
        { data: "observaciones" },
        { data: "porcentajeItem" },
        { data: "porcentajeCategoria" },
        { data: "porcentajeGlobal" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnControlLockers").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tblControlLockers")) {
      $("#tblControlLockers").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblControlLockers").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 53 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "planta" },
        { data: "area" },
        { data: "numeroLocker" },
        { data: "genero" },
        { data: "presenciaAlimentos" },
        { data: "presenciaPlagas" },
        { data: "presenciaOxido" },
        { data: "danos" },
        { data: "presenciaImplementos" },
        { data: "lockerCandado" },
        { data: "lockerCompartimiento" },
        { data: "lockerOrden" },
        { data: "correccion" },
        { data: "observaciones" },
        { data: "responsableVerificacion" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btnProductoNoconforme").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tblProductoNoconforme")) {
      $("#tblProductoNoconforme").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblProductoNoconforme").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 54 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "item" },
        { data: "procedencia" },
        { data: "cantidad" },
        { data: "unidades" },
        { data: "lote" },
        { data: "vencimiento" },
        { data: "destino" },
        { data: "causa" },
        { data: "responsable" },
        { data: "verifico" },
        { data: "observacion" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

  $(".btncontrolPuntosDesinfeccion").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tblcontrolDesinfeccionPlataforma")) {
      $("#tblcontrolDesinfeccionPlataforma").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblcontrolDesinfeccionPlataforma").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 55 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "hora" },
        { data: "plataforma" },
        { data: "deguelle" },
        { data: "patas" },
        { data: "escaldado1" },
        { data: "correctivo" },
        { data: "verifico" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });

/* ------------- Limpieza y desinfeccion de cuartos----------------  */

$(".btnlimpiezaCuartos").click(function (e) {
  e.preventDefault();
  swal({
    title: "Cargando Tabla",
    icon: "success",
    buttons: false,
    timer: 800,
  });

  if ($.fn.DataTable.isDataTable("#tblLimpiezaCuarto")) {
    $("#tblLimpiezaCuarto").DataTable().destroy();
  }

  // Inicializar DataTable
  $("#tblLimpiezaCuarto").DataTable({
    ajax: {
      url: "../models/controlTablas.php",
      type: "POST",
      data: { opcion: 56 },
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "fecha" },
      { data: "area" },
      { data: "lugar" },
      { data: "numero_lugar" },
      { data: "nombre_Detergente" },
      { data: "concentracion_Detergente" },
      { data: "nombre_Desinfectante" },
      { data: "concentracion_Desinfectante" },
      { data: "limpieza" },
      { data: "accion_correctiva" },
      { data: "responsable" },
      { data: "verifico" },
      { data: "aprobo" },
    ],

    // ✅ Firma Responsable y Verificación
    columnDefs: [
      {
        targets: 11,
        data: "responsable",
        render: function (data, type, row, meta) {
          return data
            ? '<img src="' + data + '" width="150"/>'
            : "Sin firma";
        },
      },
      {
        targets: 12,
        data: "verifico",
        render: function (data, type, row, meta) {
          return data
            ? '<img src="' + data + '" width="150"/>'
            : "Sin firma";
        },
      },
    ],

    autoWidth: false,
    dom: "Bfrtip",
    buttons: [
      {
        extend: "pageLength",
        className: "btnn btn-warning",
      },
      {
        extend: "excelHtml5",
        autoFilter: true,
        sheetName: "Exported data",
        text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
        className: "btnn btn-success",
      },
    ],
  });
});




// ----------  Frecuencia Inspeccion------------------
  // declarar la variable en scope superior para evitar ReferenceError
  // ===============================
// Cargar datos de inspección (case 69)
// ===============================
var tablaFrecuenciaDatos;

// 🔹 BOTÓN: CARGAR DATOS
$(".btnCargarFrecuenciaDatos").click(function (e) {
  e.preventDefault();

  const planta = $("#tipoPlantaSelect").val();
  const proceso = $("#procesoSelect").val();
  const frecuencia = $("#nivelInspeccion").val();

  if (!planta || !proceso || !frecuencia) {
    swal("Selecciona Planta, Proceso y Nivel de Inspección", "", "warning");
    return;
  }

  swal({
    title: "Cargando datos...",
    icon: "info",
    buttons: false,
    closeOnClickOutside: false,
    closeOnEsc: false
  });

  // 🔹 Reiniciar tabla si ya existe
  if ($.fn.DataTable.isDataTable("#tblFrecuenciaDatos")) {
    tablaFrecuenciaDatos.destroy();
    $("#tblFrecuenciaDatos tbody").empty();
  }

  tablaFrecuenciaDatos = $("#tblFrecuenciaDatos").DataTable({
    ajax: {
      url: "../models/controlTablas.php",
      type: "POST",
      data: {
        opcion: 69,
        planta: planta,
        proceso: proceso,
        frecuencia: frecuencia
      },
      dataSrc: function (json) {
        swal.close();

        // ✅ Maneja ambos formatos de respuesta:
        // { ok:true, sample:[...] }  o  [ ... ]
        if (json && json.ok && Array.isArray(json.sample)) {
          return json.sample;
        } else if (Array.isArray(json)) {
          return json;
        } else {
          console.error("⚠️ Respuesta inesperada del servidor:", json);
          swal("Error en los datos recibidos", "", "error");
          return [];
        }
      }
    },
    columns: [
      { data: "planta" },
      { data: "area" },
      { data: "detalle_material" },
      { data: "estado" },
      { data: "tipo_material" },
      { data: "frecuencia_inspeccion" },
      { data: "cantidad", render: data => `<input type="number" min="0" max="9999" maxlength="4" class="form-control inputCantidad text-center" style="width:80px" value="${data ?? ""}">` },
      { data: "ausentes", render: data => `<input type="number" min="0" max="9999" maxlength="4" class="form-control inputAusentes text-center" style="width:80px" value="${data ?? ""}">` },
      { data: "incompletos", render: data => `<input type="number" min="0" max="9999" maxlength="4" class="form-control inputIncompletos text-center" style="width:80px" value="${data ?? ""}">` }
    ],

    scrollX: true,
    initComplete: function () {
      swal("Datos cargados correctamente", "", "success");
    },
    autoWidth: false,
    paging: true,
    searching: true,
    info: false,
    dom: "t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>"
  });
});





// ===============================
// Enviar datos al registro
// ===============================

var tablaFrecuenciaIn;

$(".btnfrecuenciaIn").click(function (e) {
  e.preventDefault();

  if (tablaFrecuenciaIn) {
    tablaFrecuenciaIn.destroy();
  }

  tablaFrecuenciaIn = $("#tblfrecuenciaIn").DataTable({
    ajax: {
      url: "../models/controlTablas.php", 
      type: "POST",
      data: { opcion: 70 },
      dataSrc: ""
    },
    columns: [
      { data: "id" },
      { data: "fecha" },
      { data: "planta" },
      { data: "area" },
      { data: "detalle_material" },
      { data: "estado" },
      { data: "tipo_material" },
      { data: "frecuencia_inspeccion" },
      { data: "cantidad" },
      { data: "ausentes" },
      { data: "incompletos" },
      { data: "nombreCalidadfrecuencia" },
      { data: "nombreCalidadfrecuencia1" }
    ],
    autoWidth: false,
    scrollY: "400px",        
    scrollX: true,           
    scrollCollapse: true,    
    dom: "Bfrtip",
    buttons: [
      {
        extend: "pageLength",
        className: "btnn btn-warning",
      },
      {
        extend: "excelHtml5",
        autoFilter: true,
        sheetName: "Exported data",
        text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
        className: "btnn btn-success",
      },
    ],
  });
});

/* //////////////////////////////////////////////////////////////////////////////// */
/* -----------------------------ENVIO DE FORMULARO-----------------------------------*/
/* //////////////////////////////////////////////////////////////////////////////// */
$(".btnGuardarFrecuencia").click(function (e) {
  e.preventDefault();

  if (!$.fn.DataTable.isDataTable("#tblFrecuenciaDatos")) {
    swal("Primero carga los datos antes de guardar.", "", "warning");
    return;
  }

  const tabla = $("#tblFrecuenciaDatos").DataTable();
  const registros = [];

  let filaError = null;

  tabla.rows().every(function (index) {
    const data = this.data();
    const $row = $(this.node());

    const cantidad = $row.find(".inputCantidad").val().trim();
    const ausentes = $row.find(".inputAusentes").val().trim();
    const incompletos = $row.find(".inputIncompletos").val().trim();

    // 🔥 VALIDACIÓN: si cualquiera está vacío → error
    if (cantidad === "" || ausentes === "" || incompletos === "") {
      filaError = index + 1; // número humano (no zero-based)
      return false; // rompe el recorrido
    }

    registros.push({
      planta: data.planta,
      proceso: data.area,
      detalle_material: data.detalle_material,
      estado: data.estado,
      tipo_material: data.tipo_material,
      frecuencia_inspeccion: data.frecuencia_inspeccion,
      cantidad: parseInt(cantidad),
      ausentes: parseInt(ausentes),
      incompletos: parseInt(incompletos),
    });
  });

  // SI HAY UN ERROR EN ALGUNA FILA ❌
  if (filaError !== null) {
    swal(
      "Campos incompletos",
      `Por favor llena todos los campos numéricos en la fila ${filaError}.`,
      "warning"
    );
    return;
  }

  if (registros.length === 0) {
    swal("No hay datos en la tabla para enviar.", "", "error");
    return;
  }

  $.ajax({
    url: "../controller/REGISTROS.php",
    type: "POST",
    data: {
      formFrecuenciaInspeccion: true,
      planta: registros.map(r => r.planta),
      proceso: registros.map(r => r.proceso),
      detalle_material: registros.map(r => r.detalle_material),
      estado: registros.map(r => r.estado),
      tipo_material: registros.map(r => r.tipo_material),
      frecuencia_inspeccion: registros.map(r => r.frecuencia_inspeccion),
      cantidad: registros.map(r => r.cantidad),
      ausentes: registros.map(r => r.ausentes),
      incompletos: registros.map(r => r.incompletos),
      nombreCalidadfrecuencia: $("#nombreCalidadfrecuencia").val().trim(),
      nombreCalidadfrecuencia1: $("#nombreCalidadfrecuencia1").val().trim()
    },
    success: function (respuesta) {
      console.log("Respuesta servidor:", respuesta);
      swal("Datos guardados correctamente", "", "success");

      setTimeout(() => {
        tabla.clear().draw();
      }, 1000);
    },
    error: function (xhr, status, error) {
      console.error("Error AJAX:", error);
      swal("Error al enviar los datos.", "", "error");
    }
  });
});




// ----------  Desinfeccion Guantes----------------------------------------


  $(".btndesinfeccionG").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tbldesinfeccionG")) {
      $("#tbldesinfeccionG").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tbldesinfeccionG").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 58 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "hora" },
        { data: "area" },
        { data: "cant_persona" },
        { data: "desinfectante" },
        { data: "concentracion" },
        { data: "observaciones" },
        { data: "responsable" },
        { data: "colaborador" },
        { data: "verefico" },
        { data: "aprobo" },
      ],

      
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
 

 
// ----------  Verificacion Canastillas---------------------------------


  $(".btnVerificacionC").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tblVerificacionC")) {
      $("#tblVerificacionC").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblVerificacionC").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 59 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "hora" },
        { data: "area" },
        { data: "tipo_canasta" },
        { data: "n_verificadas" },
        { data: "n_conformes" },
        { data: "n_desinfectadas" },
        { data: "n_rechazada_deterioro" },
        { data: "n_rechazada_limpieza" },
        { data: "desinfectante" },
        { data: "concentracion" },
        { data: "acciones" },
        { data: "responsable" },
        { data: "colaborador" },
        { data: "verefico" },
        { data: "aprobo" },
      ],

      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });
 
 
 
// ----------  puntos de desinfección evisceración 


  $(".btnDesinfeccionEvisceracion").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tblDesinfeccionEvisceracion")) {
      $("#tblDesinfeccionEvisceracion").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblDesinfeccionEvisceracion").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 60 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "HoraInicio" },
        { data: "HoraFin" },
        { data: "evisceracion" },
        { data: "colgado" },
        { data: "abdomen1" },
        { data: "abdomen2" },
        { data: "recuperacion" },
        { data: "dsColgado" },
        { data: "higado" },
        { data: "dcTolerancia" },
        { data: "dsTolerancia" },
        { data: "correctivo" },
        { data: "verifico" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });  
  

 
// ----------  Preparacion Salmuera


  $(".btnPreparacionSalmuera").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tblPreparacionSalmuera")) {
      $("#tblPreparacionSalmuera").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblPreparacionSalmuera").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 61 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "hora" },
        { data: "lote" },
        { data: "kg" },
        { data: "litros" },
        { data: "temp" },
        { data: "observaciones" },
        { data: "responsable" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });  
  


// ----------  limpieza y desinfeccion de las agujas de las inyectoras


  $(".btnInyectadora").click(function (e) {
    e.preventDefault();
    swal({
      title: "Cargando Tabla",
      icon: "success",
      buttons: false,
      timer: 800,
    });

    if ($.fn.DataTable.isDataTable("#tblInyectadora")) {
      $("#tblInyectadora").DataTable().destroy();
    }

    // Intenta inicializar DataTables
    $("#tblInyectadora").DataTable({
      ajax: {
        url: "../models/controlTablas.php",
        type: "POST",
        data: { opcion: 62 },
        dataSrc: "",
      },
      columns: [
        { data: "id" },
        { data: "fecha" },
        { data: "hora" },
        { data: "inyectora" },
        { data: "agujas" },
        { data: "condicion" },
        { data: "estado" },
        { data: "limpieza" },
        { data: "observaciones" },
        { data: "correccion" },
        { data: "responsable" },
        { data: "aprobo" },
      ],
      autoWidth: false,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "pageLength",
          className: "btnn btn-warning",
        },
        {
          extend: "excelHtml5",
          autoFilter: true,
          sheetName: "Exported data",
          text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
          className: "btnn btn-success",
        },
      ],
    });
  });   


/* LIMPIESA DE VEHICULOS DE POLLO Y PAVO EN PIE */

// Cargar tabla de control de vehículos
$(".btnControlRetiroVehiculo").click(function (e) {
  e.preventDefault();

  swal({
    title: "Cargando Tabla",
    icon: "success",
    buttons: false,
    timer: 800,
  });

  if ($.fn.DataTable.isDataTable("#tblControlRetiroVehiculo")) {
    $("#tblControlRetiroVehiculo").DataTable().destroy();
  }

  $("#tblControlRetiroVehiculo").DataTable({
    ajax: {
      url: "../models/controlTablas.php",
      type: "POST",
      data: { opcion: 63 }, // número único para esta tabla
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "fecha" },
      { data: "hora" },
      { data: "placa" },
      { data: "retiro_enjuague" },
      { data: "acciones" },
      { data: "responsables" },
      { data: "verifica" },
      { data: "aprobo" },
    ],

    autoWidth: false,
    dom: "Bfrtip",
    buttons: [
      {
        extend: "pageLength",
        className: "btnn btn-warning",
      },
      {
        extend: "excelHtml5",
        autoFilter: true,
        sheetName: "Vehículos",
        text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
        className: "btnn btn-success",
      },
    ],
  });
});
/* Desinfecion en huacales  */

$(".btnGuacalesdesinfeccion").click(function (e) {
  e.preventDefault();

  swal({
    title: "Cargando Tabla",
    icon: "success",
    buttons: false,
    timer: 800,
  });

  if ($.fn.DataTable.isDataTable("#tblGuacalesdesinfeccion")) {
    $("#tblGuacalesdesinfeccion").DataTable().destroy();
  }

  $("#tblGuacalesdesinfeccion").DataTable({
    ajax: {
      url: "../models/controlTablas.php",
      type: "POST",
      data: { opcion: 64 }, // número único para esta tabla
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "fecha" },
      { data: "hora" },
      { data: "viaje" },
      { data: "limpieza_veh" },
      { data: "limpieza_desi" },
      { data: "verificacion" },
      { data: "acciones_corre" },
      { data: "responsable" },
      { data: "aprobosi" },
    ],

    autoWidth: false,
    dom: "Bfrtip",
    buttons: [
      {
        extend: "pageLength",
        className: "btnn btn-warning",
      },
      {
        extend: "excelHtml5",
        autoFilter: true,
        sheetName: "Vehículos",
        text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
        className: "btnn btn-success",
      },
    ],
  });
});



/* CONTROL DE CONTRAMUESTRA  */

$(".btncontrolMuestra").click(function (e) {
  e.preventDefault();

  swal({
    title: "Cargando Tabla",
    icon: "success",
    buttons: false,
    timer: 800,
  });

  if ($.fn.DataTable.isDataTable("#tblcontrolMuestra")) {
    $("#tblcontrolMuestra").DataTable().destroy();
  }

  $("#tblcontrolMuestra").DataTable({
    ajax: {
      url: "../models/controlTablas.php",
      type: "POST",
      data: { opcion: 65 }, // número único para esta tabla
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "fecha" },
      { data: "hora" },
      { data: "producto" },
      { data: "lote" },
      { data: "fecha_produ" },
      { data: "fecha_venci" },
      { data: "peso_inicial" },
      { data: "color" },
      { data: "olor" },
      { data: "empaque" },
      { data: "apariencia" },
      { data: "temperatura" },
      { data: "dias_almace" },
      { data: "peso_final" },
      { data: "acciones_correcti" },
      { data: "veri_por" },
      { data: "aprobado" },
    ],


    autoWidth: false,
    dom: "Bfrtip",
    buttons: [
      {
        extend: "pageLength",
        className: "btnn btn-warning",
      },
      {
        extend: "excelHtml5",
        autoFilter: true,
        sheetName: "ContraMuestra",
        text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
        className: "btnn btn-success",
      },
    ],
  });
});


/* ROTURA Y CONDICION */
$(".btnroturacondicion").click(function (e) {
  e.preventDefault();

  swal({
    title: "Cargando Tabla",
    icon: "success",
    buttons: false,
    timer: 800,
  });

  if ($.fn.DataTable.isDataTable("#tblroturacondicion")) {
    $("#tblroturacondicion").DataTable().destroy();
  }

  $("#tblroturacondicion").DataTable({
    ajax: {
      url: "../models/controlTablas.php",
      type: "POST",
      data: { opcion: 68 }, // número único para esta tabla
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "fecha" },
      { data: "hora" },
      { data: "planta_recondi" },
      { data: "areas_recondi" },
      { data: "tipo_reporte" },
      { data: "tipos_reportes" },
      { data: "preguntas_rotura" },
      { data: "decripcion" },
      { data: "nombre_proceso" },
      { data: "nombre_calidad" },
      { data: "area_liberada" },
      { data: "area_siono" },
      { data: "descripcion_extra" },
      { data: "descripcion_extra1" },
      { data: "descripcion_extra2" },
      { data: "descripcion_extra3" },
      { data: "descripcion_extra4" },
      { data: "descripcion_extra5" },
      { data: "descripcion_extra6" },
      { data: "descripcion_extra7" },
      { data: "descripcion_extra8" },
      { data: "descripcion_extra9" },
      { data: "img_condicion" },
      { data: "img_condicion1" },
      { data: "fecha_despues" },
      { data: "hora_despues" },

    ],
    columnDefs: [
    {
        targets: 23, // Asumiendo que esta es la posición correcta
        data: "img_condicion",

        // 1. Usamos render para dar el dato en HTML cuando es para mostrar
        render: function (data, type, row, meta) {
            // Cuando es para la pantalla (display), devolvemos el HTML de la imagen
            if (type === 'display') {
                return data
                    ? '<img src="' + data + '" width="150" style="max-width: 150px; height: auto;"/>'
                    : '';
            } 
            
   
            if (type === 'sort' || type === 'filter' || type === 'export') {
                return data ? 'Imagen Adjunta' : '';
            }

            return data;
        },
        
        type: 'html', 

        createdCell: function (td, cellData, rowData, row, col) {
            
            if (cellData && cellData.startsWith('data:image/')) {
                $(td).html('<img src="' + cellData + '" width="150" style="max-width: 150px; height: auto;"/>');
            } else if (cellData) {
                // Si por alguna razón el dato no es Base64, aún lo mostramos
                $(td).html(cellData); 
            } else {
                $(td).html(''); // Celda vacía
            }
        }
    },
    {
        targets: 24, // Asumiendo que esta es la posición correcta
        data: "img_condicion1",

        // 1. Usamos render para dar el dato en HTML cuando es para mostrar
        render: function (data, type, row, meta) {
            // Cuando es para la pantalla (display), devolvemos el HTML de la imagen
            if (type === 'display') {
                return data
                    ? '<img src="' + data + '" width="150" style="max-width: 150px; height: auto;"/>'
                    : '';
            } 
            
   
            if (type === 'sort' || type === 'filter' || type === 'export') {
                return data ? 'Imagen Adjunta' : '';
            }

            return data;
        },
        
        type: 'html', 

        createdCell: function (td, cellData, rowData, row, col) {
            
            if (cellData && cellData.startsWith('data:image/')) {
                $(td).html('<img src="' + cellData + '" width="150" style="max-width: 150px; height: auto;"/>');
            } else if (cellData) {
                // Si por alguna razón el dato no es Base64, aún lo mostramos
                $(td).html(cellData); 
            } else {
                $(td).html(''); // Celda vacía
            }
        }
    },
  
],
    autoWidth: false,
    dom: "Bfrtip",
    buttons: [
      {
        extend: "pageLength",
        className: "btnn btn-warning",
      },
      {
        extend: "excelHtml5",
        autoFilter: true,
        sheetName: "Vehículos",
        text: '<i class="fa-lg fa-solid fa-file-excel"></i> GENERAR EXCEL',
        className: "btnn btn-success",
      },
    ],
  });
});

  
}); // ← Este cierra todos los switch Completamnete
