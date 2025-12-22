function controlProcesoCanal() {
  document.getElementById("controlProcesoEnfriamiento").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-89-CONTROL DE PROCESO ENFRIAMIENTO DE CANAL";
  var b = document.getElementById("controlEnviar").setAttribute("name", "controlReporte");

  function cerrarcontrolProcesoCanal() {
    var w = (document.getElementById("controlProcesoEnfriamiento").style.display = "none");
    $(
      "#controlCb,#tipoAve,#controlCa,#controlCz,#controlCc,#controlCd,#controlCe,#controlCf,#controlCg,#controlCh,#controlCi,#controlCj,#controlCk,#controlCl,#controlCm,#controlCn,#controlCñ,#tempPromedio,#porcenCumplimiento,#registroPh,#registroT,#prechiCloro,#registroPPM,#registroTChiller,#pcchillerHoMuestreo,#chicanCodigo",
    ).attr("required", false);
    $(
      "#tipoAves,#chillConHRegis,#chillConVC1,#chillConVC2,#chillConVC3,#chillConVC4,#chillConVC5,#chillConVC6,#chillConVC7,#chillConVC8,#chillConVC9,#chillConVC10,#chillConVC11,#chillConVC12,#chillConVC13,#chillConVC14,#chillConVC15,#chillConVC16,#chillConVC17,#chillConVObser,#chillConVResObs",
    ).attr("required", false);
  }
  var r = document
    .getElementById("cancelarGeneral")
    .addEventListener("click", cerrarcontrolProcesoCanal, false);
}

function controlProcesoEnfri() {
  var b = document.getElementById("controlEnviar").setAttribute("name", "controlReporte");
  $(
    "#controlCb,#controlCa,#controlCz,#controlCc,#controlCd,#controlCe,#controlCf,#controlCg,#controlCh,#controlCi,#controlCj,#controlCk,#controlCl,#controlCm,#controlCn,#controlCñ,#tempPromedio,#porcenCumplimiento,#registroPh,#registroT,#prechiCloro,#registroPPM,#registroTChiller,#pcchillerHoMuestreo,#chicanCodigo",
  ).attr("required", true);
  $(
    "#tipoaAves,#chillConHRegis,#chillConVC1,#chillConVC2,#chillConVC3,#chillConVC4,#chillConVC5,#chillConVC6,#chillConVC7,#chillConVC8,#chillConVC9,#chillConVC10,#chillConVC11,#chillConVC12,#chillConVC13,#chillConVC14,#chillConVC15,#chillConVC16,#chillConVC17,#chicanAciPer,#chicanTempAgua,#chillConVObser,#chillConVResObs",
  ).attr("required", false);
}
function controlProcesoverific() {
  var l = document.getElementById("controlEnviar").setAttribute("name", "formConChillVerif");
  $(
    "#tipoAves,#chillConHRegis,#chillConVC1,#chillConVC2,#chillConVC3,#chillConVC4,#chillConVC5,#chillConVC6,#chillConVC7,#chillConVC8,#chillConVC9,#chillConVC10,#chillConVC11,#chillConVC12,#chillConVC13,#chillConVC14,#chillConVC15,#chillConVC16,#chillConVC17,#chillConVObser,#chillConVResObs",
  ).attr("required", true);
  $(
    "#controlCb,#controlCa,#controlCz,#controlCc,#controlCd,#controlCe,#controlCf,#controlCg,#controlCh,#controlCi,#controlCj,#controlCk,#controlCl,#controlCm,#controlCn,#controlCñ,#tempPromedio,#porcenCumplimiento,#registroPh,#registroT,#prechiCloro,#registroPPM,#registroTChiller,#pcchillerHoMuestreo,#chicanCodigo",
  ).attr("required", false);
}

function inspeccionVeterinaria() {
  document.getElementById("inspeccionVeterinaria").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-14-INSPECCION VETERINARIA";
  var l = document.getElementById("controlEnviar").setAttribute("name", "formInspVetAntemor");
  function cerrarinspeccionVeterinaria() {
    document.getElementById("inspeccionVeterinaria").style.display = "none";
  }
  document
    .getElementById("cancelarGeneral")
    .addEventListener("click", cerrarinspeccionVeterinaria, false);
}
function enviarAnteMorte() {
  var l = document.getElementById("controlEnviar").setAttribute("name", "formInspVetAntemor");
}
function enviarPostMorte() {
  var b = document.getElementById("controlEnviar").setAttribute("name", "formInspVetPostmor");
}

//-------------------------------------------------------------------------------------------------------------------------------------
function lesionesAsfixias() {
  document.getElementById("lesionesAsfixias").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-13-CLASIFICACION DE DEFECTOS DE CANAL - EVISCERACION";
  $(
    "#frentViaje,#frentSexo,#frentGranja,#frentNAvesGranja,#tipoAveEvis,#dgranRLace,#dgranPerHema,#dgranAHema,#dgranAFract,#dgranALuxa,#dgranPechHema,#dgranPechGranu,#dgranOGranuPlant,#dgranOAlimen,#dgranOHiGraso,#dproPerHema,#dproPerFract,#dproAHema,#dproAPuntaRoja,#dproAFract,#dproALuxa,#dproPechHema,#petequias,#dproOPlumCanal,#canalCuticulaOtro,#dproORuptIntes,#dproOContaBili,#dproOPoCampPig,#dproOPoCampPar,#dcarRLace,#dcarPerHema,#dcarPerFract,#dcarAHemat,#dcarAFract,#dcarPechHema,#vproTEscal1,#vproTEscal2,#vproTEscalPatas,#vproVoltAtur,#vproAmpAtur,#vproFrecAtur,#aleteoCorte,#reflejosPalpebral,#presenciaDeglucion,#vproTiemEscal,#vproTiemSangra,#vproTiemPoVisce,#vproVelCade,#lesAsObservacion,#lesAsrealizo,#lesAsAprobo",
  ).attr("required", true);
  var l = document
    .getElementById("controlEnviar")
    .setAttribute("name", "defectosCanalEvisceracion");
  function cerrarlesionesAsfixias() {
    document.getElementById("lesionesAsfixias").style.display = "none";
    $(
      "#frentViaje,#frentSexo,#frentGranja,#frentNAvesGranja,#tipoAveEvis,#dgranRLace,#dgranPerHema,#dgranAHema,#dgranAFract,#dgranALuxa,#dgranPechHema,#dgranPechGranu,#dgranOGranuPlant,#dgranOAlimen,#dgranOHiGraso,#dproPerHema,#dproPerFract,#dproAHema,#dproAPuntaRoja,#dproAFract,#dproALuxa,#dproPechHema,#petequias,#dproOPlumCanal,#canalCuticulaOtro,#dproORuptIntes,#dproOContaBili,#dproOPoCampPig,#dproOPoCampPar,#dcarRLace,#dcarPerHema,#dcarPerFract,#dcarAHemat,#dcarAFract,#dcarPechHema,#vproTEscal1,#vproTEscal2,#vproTEscalPatas,#vproVoltAtur,#vproAmpAtur,#vproFrecAtur,#aleteoCorte,#reflejosPalpebral,#presenciaDeglucion,#vproTiemEscal,#vproTiemSangra,#vproTiemPoVisce,#vproVelCade,#lesAsObservacion,#lesAsrealizo,#lesAsAprobo",
    ).attr("required", false);
  }
  document
    .getElementById("cancelarGeneral")
    .addEventListener("click", cerrarlesionesAsfixias, false);
}
// Mostrar mensaje si faltan campos requeridos
document.getElementById("controlEnviar").addEventListener("click", function (e) {
  var campos = document.querySelectorAll("#lesionesAsfixias [required]");
  for (var i = 0; i < campos.length; i++) {
    if (!campos[i].value) {
      e.preventDefault(); // evita envío
      alert("Falta llenar el campo: " + obtenerNombreCampo(campos[i]));
      campos[i].focus();
      return false;
    }
  }
});

// Función auxiliar para obtener nombre legible del campo
function obtenerNombreCampo(campo) {
  var label = document.querySelector('label[for="' + campo.id + '"]');
  return label ? label.textContent.trim() : campo.id;
}
//------------------------------------------------------------------------------------------------------------------------

function reporteNecropsia() {
  document.getElementById("reporteNecropsia").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "REPORTE DE NECROPSIA";
  var l = document.getElementById("controlEnviar").setAttribute("name", "formReporteNecropsia");
  function cerrarreporteNecropsia() {
    document.getElementById("reporteNecropsia").style.display = "none";
  }
  document
    .getElementById("cancelarGeneral")
    .addEventListener("click", cerrarreporteNecropsia, false);
}
function btnAdvert1() {
  var q = document.getElementById("registroPPM").value;
  if (q < 11) {
    document.getElementById("registroPPM").style.backgroundColor = "red";
    document.getElementById("registroPPM").style.fontWeight = "800";
    var cho3 = document.getElementById("chicanCodigo").value;
    document.getElementById("chicanCodigo").value = cho3 + " CHO3 ";
    swal(
      "ADVERTENCIA",
      "EL VALOR DEL ACIDO PERACETICO SE ENCUENTRA POR DEBAJO DE LOS LIMITES ESTABLECIDOS, POR FAVOR REALIZAR LA ACCION CORRECTIVA",
      "error",
    );
  } else {
    if (q > 23) {
      document.getElementById("registroPPM").style.backgroundColor = "red";
      document.getElementById("registroPPM").style.fontWeight = "800";
      var cho4 = document.getElementById("chicanCodigo").value;
      document.getElementById("chicanCodigo").value = cho4 + " CHO4 ";
      swal(
        "ADVERTENCIA",
        "EL VALOR DEL ACIDO PERACETICO SE ENCUENTRA POR ENCIMA DE LOS LIMITES ESTABLECIDOS, POR FAVOR REALIZAR LA ACCION CORRECTIVA",
        "error",
      );
    } else {
      document.getElementById("registroPPM").style.fontWeight = "400";
      document.getElementById("registroPPM").style.backgroundColor = "#e8ecef";
    }
  }
}
function btnAdvert2() {
  var q1 = document.getElementById("registroTChiller").value;
  if (q1 > 2) {
    document.getElementById("registroTChiller").style.backgroundColor = "red";
    document.getElementById("registroTChiller").style.fontWeight = "800";
    var cho2 = document.getElementById("chicanCodigo").value;
    document.getElementById("chicanCodigo").value = cho2 + " CHO2 ";
    swal(
      "ADVERTENCIA",
      "EL VALOR DE LA TEMPERATURA DEL AGUA DE ENFRIAMIENTO DE CHILLER SE ENCUENTRA FUERA DE LOS LIMITES ESTABLECIDOS, POR FAVOR REALIZAR LA ACCION CORRECTIVA",
      "error",
    );
  } else {
    document.getElementById("registroTChiller").style.fontWeight = "400";
    document.getElementById("registroTChiller").style.backgroundColor = "#e8ecef";
  }
}
function btnAdvert3() {
  var q2 = document.getElementById("porcenCumplimiento").style.backgroundColor;
  if (q2 == "red") {
    var cho1 = document.getElementById("chicanCodigo").value;
    console.log(cho1);
    document.getElementById("chicanCodigo").value = cho1 + " CHO1 ";
    swal(
      "ADVERTENCIA",
      "EL VALOR DEL PORCENTAJE DE CUMPLIMIENTO SE ENCUENTRA FUERA DE LOS LIMITES ESTABLECIDOS, POR FAVOR REALIZAR LA ACCION CORRECTIVA",
      "error",
    );
  }
}
function VI01() {
  var q2 = document.getElementById("cumplimientoEvisce").style.backgroundColor;
  if (q2 == "red") {
    var vi01 = document.getElementById("pccEvisCodigo").value;
    console.log(vi01);
    document.getElementById("pccEvisCodigo").value = vi01 + " VIO1 ";
    swal("ADVERTENCIA", "SE HA GENERADO UNA ACCION CORRECTIVA", "error");
  }
}
function VI0304() {
  var hcloro = document.getElementById("HCloroPPM").value;
  var mcloro = document.getElementById("MCloroPPM").value;
  var pcloro = document.getElementById("PCloroPPM").value;
  var ccloro = document.getElementById("CCloroPPM").value;
  var chcloro = document.getElementById("HCloroPPM").style.backgroundColor;
  var cmcloro = document.getElementById("MCloroPPM").style.backgroundColor;
  var cpcloro = document.getElementById("PCloroPPM").style.backgroundColor;
  var cccloro = document.getElementById("CCloroPPM").style.backgroundColor;
  if (chcloro == "red" || cmcloro == "red" || cpcloro == "red" || cccloro == "red") {
    if (hcloro < 3 || mcloro < 3 || pcloro < 3 || ccloro < 3) {
      var vi03 = document.getElementById("pccEvisCodigo").value;
      console.log(vi03);
      document.getElementById("pccEvisCodigo").value = vi03 + " VIO3 ";
      swal("ADVERTENCIA", "SE TIENE EN CUENTA ACCION CORRECTIVA", "error");
    }
    if (hcloro > 5 || mcloro > 5 || pcloro > 5 || ccloro > 5) {
      var vi04 = document.getElementById("pccEvisCodigo").value;
      console.log(vi04);
      document.getElementById("pccEvisCodigo").value = vi04 + " VIO4 ";
      swal("ADVERTENCIA", "SE HA GENERADO UNA ACCION CORRECTIVA ACCION CORRECTIVA", "error");
    }
  }
}
function VI02() {
  var htemp = document.getElementById("HTemperaturaC").value;
  var mtemp = document.getElementById("MTemperaturaC").value;
  var ptemp = document.getElementById("PTemperaturaC").value;
  var ctemp = document.getElementById("CTemperaturaC").value;
  if (htemp > 2 || mtemp > 2 || ptemp > 2 || ctemp > 2) {
    var vi02 = document.getElementById("pccEvisCodigo").value;
    console.log(vi02);
    document.getElementById("pccEvisCodigo").value = vi02 + " VIO2 ";
    swal("ADVERTENCIA", "SE TIENE EN CUENTA ACCION CORRECTIVA", "error");
  }
}
function controlMariAdoba() {
  document.getElementById("controlMariAdoba").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-E-CCI-11-CONTROL MARINADO Y ADOBADO";
  $(
    "#cMariHorRegis,#cMariArea,#cMariDespreProduc,#cMariDespreTem,#cMariAdoProduc,#cMariAdoTem, #cMariSalmuTem,#cMariAmbieTem,#cMariTrazaLote,#cMariTrazaFV,#cMariRespons",
  ).attr("required", true);
  $(
    "#cMariHoraVeri,#cMariAreaVeri, #cMariObserHallaz, #cMariVDesprProdu, #cMariVDesprTemp,#cMariVDesprTemp1, #cMariVDesprTemp2, #cMariVDesprTemp3, #cMariVDesprTemp4, #cMariVDesprTemp5, #cMariVDesprTemp6, #cMariVDesprTemp7, #cMariVDesprTemp8, #cMariVDesprTemp9,#cMariVDesprTemp10, #cMariVDesprTemp11, #cMariVDesprTemp12, #cMariVDesprTemp13,#cMariVDesprTemp14,#cMariVDesprTemp15,#cMariVDesprTemp16, #cMariAdoVProduc, #cMariVAdoTemp,#cMariVSalmuTemp,#cMariVSalmuTemp1,#cMariVSalmuTemp2, #cMariVAmbTemp, #cMariVTrazaLote, #cMariVTrazaFV, #cMariSupervi, #cMariCoordCali",
  ).attr("required", false);
  var l = document.getElementById("controlEnviar").setAttribute("name", "formcontrolMariAdoba");
  function cerrarcontrolMariAdoba() {
    document.getElementById("controlMariAdoba").style.display = "none";
    $(
      "#cMariHorRegis,#cMariArea,#cMariDespreProduc,#cMariDespreTem,#cMariAdoProduc,#cMariAdoTem,#cMariSalmuTem,#cMariAmbieTem,#cMariTrazaLote,#cMariTrazaFV,#cMariRespons",
    ).attr("required", false);
  }
  document
    .getElementById("cancelarGeneral")
    .addEventListener("click", cerrarcontrolMariAdoba, false);
}
function formConMariVerifi() {
  document.getElementById("controlMariAdoba").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-E-CCI-11-CONTROL MARINADO Y ADOBADO";
  $(
    "#cMariHorRegis,#cMariArea,#cMariDespreProduc,#cMariDespreTem,#cMariAdoProduc,#cMariAdoTem,#cMariSalmuTem,#cMariAmbieTem,#cMariTrazaLote,#cMariTrazaFV,#cMariRespons",
  ).attr("required", false);
  $(
    "#cMariHoraVeri,#cMariAreaVeri, #cMariObserHallaz, #cMariVDesprProdu, #cMariVDesprTemp, #cMariAdoVProduc, #cMariVAdoTemp, #cMariVSalmuTemp, #cMariVAmbTemp, #cMariVTrazaLote, #cMariVTrazaFV, #cMariSupervi, #cMariCoordCali",
  ).attr("required", true);
  var l = document.getElementById("controlEnviar").setAttribute("name", "formConMariVerifi");
  function cerrarcontrolMariAdoba() {
    document.getElementById("controlMariAdoba").style.display = "none";
    $(
      "#cMariHoraVeri,#cMariAreaVeri, #cMariObserHallaz, #cMariVDesprProdu, #cMariVDesprTemp, #cMariAdoVProduc, #cMariVAdoTemp, #cMariVSalmuTemp, #cMariVAmbTemp, #cMariVTrazaLote, #cMariVTrazaFV, #cMariSupervi, #cMariCoordCali",
    ).attr("required", false);
  }
  document
    .getElementById("cancelarGeneral")
    .addEventListener("click", cerrarcontrolMariAdoba, false);
}
function controlProcesos() {
  document.getElementById("VistacontrolProceso").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-19-CONTROL DE PROCESO";
  $(
    "#cProcVHora,#cProcVArea,#cProcVObHalla,#cProcVMuesProd,#cProcVMuestTem1,#cProcVMuesTem2,#cProcVMuesTem3,#cProcVMuesTem4,#cProcVMuesTem5,#cProcVAmbiTem,#cProcVLote,#cProcVFv,#cProcVSuperv,#cProcVCoordCali",
  ).attr("required", false);
  $(
    "#cProsHoraR,#cProcArea,#cProcMuesProd,#cProcMuesTem1,#cProcMuesTem2,#cProcMuesTem3,#cProcMuesTem4,#cProcMuesTem5,#cProcAmbiTemp,#cProcLote,#cProcFv,#cProcRespon",
  ).attr("required", true);
  var l = document.getElementById("controlEnviar").setAttribute("name", "formcontrolProcesos");
  function cerrarcontrolProceso() {
    document.getElementById("VistacontrolProceso").style.display = "none";
    $(
      "#cProsHoraR,#cProcArea,#cProcMuesProd,#cProcMuesTem1,#cProcMuesTem2,#cProcMuesTem3,#cProcMuesTem4,#cProcMuesTem5,#cProcAmbiTemp,#cProcLote,#cProcFv,#cProcRespon",
    ).attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}
function controlVerifiProcesos() {
  document.getElementById("VistacontrolProceso").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-E-CTR-16-CONTROL DE PROCESO";
  $(
    "#cProcVHora,#cProcVArea,#cProcVObHalla,#cProcVMuesProd,#cProcVMuestTem1,#cProcVMuesTem2,#cProcVMuesTem3,#cProcVMuesTem4,#cProcVMuesTem5,#cProcVAmbiTem,#cProcVLote,#cProcVFv,#cProcVSuperv,#cProcVCoordCali",
  ).attr("required", true);
  $(
    "#cProsHoraR,#cProcArea,#cProcMuesProd,#cProcMuesTem1,#cProcMuesTem2,#cProcMuesTem3,#cProcMuesTem4,#cProcMuesTem5,#cProcAmbiTemp,#cProcLote,#cProcFv,#cProcRespon",
  ).attr("required", false);
  var l = document
    .getElementById("controlEnviar")
    .setAttribute("name", "formcontrolVerifiProcesos");
  function cerrarcontrolProceso() {
    document.getElementById("VistacontrolProceso").style.display = "none";
    $(
      "#cProsHoraR,#cProcArea,#cProcMuesProd,#cProcMuesTem1,#cProcMuesTem2,#cProcMuesTem3,#cProcMuesTem4,#cProcMuesTem5,#cProcAmbiTemp,#cProcLote,#cProcFv,#cProcRespon",
    ).attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}
function controlProduccion() {
  document.getElementById("controlProduccion").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "03PD-F01-CONTROL DE PRODUCCION";
  /* 
        $('#cProcVHora,#cProcVObHalla,#cProcVMuesProd,#cProcVMuestTem1,#cProcVMuesTem2,#cProcVMuesTem3,#cProcVMuesTem4,#cProcVMuesTem5,#cProcVAmbiTem,#cProcVLote,#cProcVFv,#cProcVSuperv,#cProcVCoordCali').attr("required", true);
        $('#cProsHoraR,#cProcArea,#cProcMuesProd,#cProcMuesTem1,#cProcMuesTem2,#cProcMuesTem3,#cProcMuesTem4,#cProcMuesTem5,#cProcAmbiTemp,#cProcLote,#cProcFv,#cProcRespon').attr("required", false);
     */
  function cerrarcontrolProduccion() {
    document.getElementById("controlProduccion").style.display = "none";
    $(
      "#pesaBache,#pesaLotIntMPC,#pesaPeso,#pesaNomMPNC,#pesaLotIntMPNC,#pesaPesoForm,#pesaPesoEncon,#pesaResponMPNC,#pesaHoraI,#pesaHoraFn,#responPesaMPC,#pesaResponsaMPNC,#pesaVeriSuper",
    ).attr("required", false);
    $(
      "#mezLotInt,#mezHoraI,#mezHoraFn,#mezBache,#tiempMezcl,#mezTextura,#mezColor,#mezRespon,#mezVeri",
    ).attr("required", false);
    $(
      "#embuLotInt,#embuHoraI,#embuHoraFn,#embuBache,#embuRef,#embuLotPV,#embuCant,#embuPesoCrudo,#embuLong,#embuDiam,#embuRespon,#embuVerifi",
    ).attr("required", false);
    $(
      "#coAhuLotInt,#coAhuBache,#coAhuHoraI,#coAhuHoraFn,#coAhuHornoV,#coAhuHornoCT,#coAhuTanque,#coAhuTNuProCon,#coAhuResponCon,#coAhuTiCoccion,#coAhuTNuProVeri,#coAhuResponVeri",
    ).attr("required", false);
    $(
      "#empLotInt,#empTemp1,#empHora1,#empResp1,#empTemp2,#empHora2,#empResp2,#empResponsa1,#empProduc,#empLote,#empFV,#empCant,#empMatEmpa,#empLotPV,#empResponsa2,#empVerifi,#empFechaPeso,#empPeso1,#empPeso2,#empPeso3,#empPeso4 ,#empVeriCali,#empAprobJProdu,#empAprobJCali",
    ).attr("required", false);
    /*  $('#cProsHoraR,#cProcArea,#cProcMuesProd,#cProcMuesTem1,#cProcMuesTem2,#cProcMuesTem3,#cProcMuesTem4,#cProcMuesTem5,#cProcAmbiTemp,#cProcLote,#cProcFv,#cProcRespon').attr("required", false); */
  }
  document
    .getElementById("cancelarGeneral")
    .addEventListener("click", cerrarcontrolProduccion, false);
}
function btnPesaje() {
  var b = document.getElementById("controlEnviar").setAttribute("name", "formProducPesaje");
  $(
    "#pesaBache,#pesaLotIntMPC,#pesaPeso,#pesaNomMPNC,#pesaLotIntMPNC,#pesaPesoForm,#pesaPesoEncon,#pesaResponMPNC,#pesaHoraI,#pesaHoraFn,#responPesaMPC,#pesaResponsaMPNC,#pesaVeriSuper",
  ).attr("required", true);
  /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  $(
    "#mezLotInt,#mezHoraI,#mezHoraFn,#mezBache,#tiempMezcl,#mezTextura,#mezColor,#mezRespon,#mezVeri",
  ).attr("required", false);
  $(
    "#embuLotInt,#embuHoraI,#embuHoraFn,#embuBache,#embuRef,#embuLotPV,#embuCant,#embuPesoCrudo,#embuLong,#embuDiam,#embuRespon,#embuVerifi",
  ).attr("required", false);
  $(
    "#coAhuLotInt,#coAhuBache,#coAhuHoraI,#coAhuHoraFn,#coAhuHornoV,#coAhuHornoCT,#coAhuTanque,#coAhuTNuProCon,#coAhuResponCon,#coAhuTiCoccion,#coAhuTNuProVeri,#coAhuResponVeri",
  ).attr("required", false);
  $(
    "#empLotInt,#empTemp1,#empHora1,#empResp1,#empTemp2,#empHora2,#empResp2,#empResponsa1,#empProduc,#empLote,#empFV,#empCant,#empMatEmpa,#empLotPV,#empResponsa2,#empVerifi,#empFechaPeso,#empPeso1,#empPeso2,#empPeso3,#empPeso4 ,#empVeriCali,#empAprobJProdu,#empAprobJCali",
  ).attr("required", false);
}
function btnMezclado() {
  var b = document.getElementById("controlEnviar").setAttribute("name", "formProducMezclado");
  $(
    "#mezLotInt,#mezHoraI,#mezHoraFn,#mezBache,#tiempMezcl,#mezTextura,#mezColor,#mezRespon,#mezVeri",
  ).attr("required", true);
  /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  $(
    "#pesaBache,#pesaLotIntMPC,#pesaPeso,#pesaNomMPNC,#pesaLotIntMPNC,#pesaPesoForm,#pesaPesoEncon,#pesaResponMPNC,#pesaHoraI,#pesaHoraFn,#responPesaMPC,#pesaResponsaMPNC,#pesaVeriSuper",
  ).attr("required", false);
  $(
    "#embuLotInt,#embuHoraI,#embuHoraFn,#embuBache,#embuRef,#embuLotPV,#embuCant,#embuPesoCrudo,#embuLong,#embuDiam,#embuRespon,#embuVerifi",
  ).attr("required", false);
  $(
    "#coAhuLotInt,#coAhuBache,#coAhuHoraI,#coAhuHoraFn,#coAhuHornoV,#coAhuHornoCT,#coAhuTanque,#coAhuTNuProCon,#coAhuResponCon,#coAhuTiCoccion,#coAhuTNuProVeri,#coAhuResponVeri",
  ).attr("required", false);
  $(
    "#empLotInt,#empTemp1,#empHora1,#empResp1,#empTemp2,#empHora2,#empResp2,#empResponsa1,#empProduc,#empLote,#empFV,#empCant,#empMatEmpa,#empLotPV,#empResponsa2,#empVerifi,#empFechaPeso,#empPeso1,#empPeso2,#empPeso3,#empPeso4 ,#empVeriCali,#empAprobJProdu,#empAprobJCali",
  ).attr("required", false);
}
function btnEmbutido() {
  var b = document.getElementById("controlEnviar").setAttribute("name", "formProducEmbutido");
  $(
    "#embuLotInt,#embuHoraI,#embuHoraFn,#embuBache,#embuRef,#embuLotPV,#embuCant,#embuPesoCrudo,#embuLong,#embuDiam,#embuRespon,#embuVerifi",
  ).attr("required", true);
  /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  $(
    "#pesaBache,#pesaLotIntMPC,#pesaPeso,#pesaNomMPNC,#pesaLotIntMPNC,#pesaPesoForm,#pesaPesoEncon,#pesaResponMPNC,#pesaHoraI,#pesaHoraFn,#responPesaMPC,#pesaResponsaMPNC,#pesaVeriSuper",
  ).attr("required", false);
  $(
    "#mezLotInt,#mezHoraI,#mezHoraFn,#mezBache,#tiempMezcl,#mezTextura,#mezColor,#mezRespon,#mezVeri",
  ).attr("required", false);
  $(
    "#coAhuLotInt,#coAhuBache,#coAhuHoraI,#coAhuHoraFn,#coAhuHornoV,#coAhuHornoCT,#coAhuTanque,#coAhuTNuProCon,#coAhuResponCon,#coAhuTiCoccion,#coAhuTNuProVeri,#coAhuResponVeri",
  ).attr("required", false);
  $(
    "#empLotInt,#empTemp1,#empHora1,#empResp1,#empTemp2,#empHora2,#empResp2,#empResponsa1,#empProduc,#empLote,#empFV,#empCant,#empMatEmpa,#empLotPV,#empResponsa2,#empVerifi,#empFechaPeso,#empPeso1,#empPeso2,#empPeso3,#empPeso4 ,#empVeriCali,#empAprobJProdu,#empAprobJCali",
  ).attr("required", false);
}
function btnCoAhu() {
  var b = document.getElementById("controlEnviar").setAttribute("name", "formProducCoAhu");
  $(
    "#coAhuLotInt,#coAhuBache,#coAhuHoraI,#coAhuHoraFn,#coAhuHornoV,#coAhuHornoCT,#coAhuTanque,#coAhuTNuProCon,#coAhuResponCon,#coAhuTiCoccion,#coAhuTNuProVeri,#coAhuResponVeri",
  ).attr("required", true);
  /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  $(
    "#embuLotInt,#embuHoraI,#embuHoraFn,#embuBache,#embuRef,#embuLotPV,#embuCant,#embuPesoCrudo,#embuLong,#embuDiam,#embuRespon,#embuVerifi",
  ).attr("required", false);
  $(
    "#pesaBache,#pesaLotIntMPC,#pesaPeso,#pesaNomMPNC,#pesaLotIntMPNC,#pesaPesoForm,#pesaPesoEncon,#pesaResponMPNC,#pesaHoraI,#pesaHoraFn,#responPesaMPC,#pesaResponsaMPNC,#pesaVeriSuper",
  ).attr("required", false);
  $(
    "#mezLotInt,#mezHoraI,#mezHoraFn,#mezBache,#tiempMezcl,#mezTextura,#mezColor,#mezRespon,#mezVeri",
  ).attr("required", false);
  $(
    "#empLotInt,#empTemp1,#empHora1,#empResp1,#empTemp2,#empHora2,#empResp2,#empResponsa1,#empProduc,#empLote,#empFV,#empCant,#empMatEmpa,#empLotPV,#empResponsa2,#empVerifi,#empFechaPeso,#empPeso1,#empPeso2,#empPeso3,#empPeso4 ,#empVeriCali,#empAprobJProdu,#empAprobJCali",
  ).attr("required", false);
}
function btnEmpaque() {
  var b = document.getElementById("controlEnviar").setAttribute("name", "formProducEmpaque");
  $(
    "#empLotInt,#empTemp1,#empHora1,#empResp1,#empTemp2,#empHora2,#empResp2,#empResponsa1,#empProduc,#empLote,#empFV,#empCant,#empMatEmpa,#empLotPV,#empResponsa2,#empVerifi,#empFechaPeso,#empPeso1,#empPeso2,#empPeso3,#empPeso4 ,#empVeriCali,#empAprobJProdu,#empAprobJCali",
  ).attr("required", true);
  /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  $(
    "#coAhuLotInt,#coAhuBache,#coAhuHoraI,#coAhuHoraFn,#coAhuHornoV,#coAhuHornoCT,#coAhuTanque,#coAhuTNuProCon,#coAhuResponCon,#coAhuTiCoccion,#coAhuTNuProVeri,#coAhuResponVeri",
  ).attr("required", false);
  $(
    "#embuLotInt,#embuHoraI,#embuHoraFn,#embuBache,#embuRef,#embuLotPV,#embuCant,#embuPesoCrudo,#embuLong,#embuDiam,#embuRespon,#embuVerifi",
  ).attr("required", false);
  $(
    "#pesaBache,#pesaLotIntMPC,#pesaPeso,#pesaNomMPNC,#pesaLotIntMPNC,#pesaPesoForm,#pesaPesoEncon,#pesaResponMPNC,#pesaHoraI,#pesaHoraFn,#responPesaMPC,#pesaResponsaMPNC,#pesaVeriSuper",
  ).attr("required", false);
  $(
    "#mezLotInt,#mezHoraI,#mezHoraFn,#mezBache,#tiempMezcl,#mezTextura,#mezColor,#mezRespon,#mezVeri",
  ).attr("required", false);
}
function devoluciones() {
  document.getElementById("vistaDevoluciones").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-57-DEVOLUCIONES";
  $(
    "#devolReco,#devolProduc,#devolDocum,#devolClient,#devolCant,#devolUnidad,#devolLot,#devolFv,#devolTemp,#devolDestino,#devolCausa,#devolPlaca,#devolRuta,#devolRespCali,#devolRespDesp,#vendedor",
  ).attr("required", true);
  var l = document.getElementById("controlEnviar").setAttribute("name", "formDevoluciones");
  function cerrarcontrolProceso() {
    document.getElementById("vistaDevoluciones").style.display = "none";
    $(
      "#devolReco,#devolProduc,#devolDocum,#devolClient,#devolCant,#devolUnidad,#devolLot,#devolFv,#devolTemp,#devolDestino,#devolCausa,#devolPlaca,#devolRuta,#devolRespCali,#devolRespDesp,#vendedor",
    ).attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}
function ContTempDespa() {
  document.getElementById("vistaTempDespa").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-28-CONTROL TEMPERATURA PRODUCTOS DESPACHADOS";
  $(
    "#tpdHora,#tpdTempAmb,#tpdDestino,#tpdPlacas,#tempDesPro1,#tpdLote1,#tpdVenci1,#tpdTemp1,#tempDesPro2,#tpdLote2,#tpdVenci2,#tpdTemp2,#tempDesPro3,#tpdLote3,#tpdVenci3,#tpdTemp3,#tempDesPro4,#tpdLote4,#tpdVenci4,#tpdTemp4,#tempDesPro5,#tpdLote5,#tpdVenci5,#tpdTemp5,#tpdRealizo",
  ).attr("required", true);
  var l = document.getElementById("controlEnviar").setAttribute("name", "formTempDespa");
  function cerrarcontrolProceso() {
    document.getElementById("vistaTempDespa").style.display = "none";
    $(
      "#tpdHora,#tpdTempAmb,#tpdDestino,#tpdPlacas,#tempDesPro1,#tpdLote1,#tpdVenci1,#tpdTemp1,#tempDesPro2,#tpdLote2,#tpdVenci2,#tpdTemp2,#tempDesPro3,#tpdLote3,#tpdVenci3,#tpdTemp3,#tempDesPro4,#tpdLote4,#tpdVenci4,#tpdTemp4,#tempDesPro5,#tpdLote5,#tpdVenci5,#tpdTemp5,#tpdRealizo",
    ).attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

function pccVisceras() {
  document.getElementById("pccVisceras").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-90 -CONTROL DE PROCESO ENFRIAMIENTO DE VISCERAS";
  function cerrarcontrolProceso() {
    document.getElementById("pccVisceras").style.display = "none";
    $(
      "#pccViscHora,#tipoAveConvis,#pccVisclote,#HM01,#HM02,#HM03,#HM04,#HM05,#HTemperaturaC,#MM01,#MM02,#MM03,#MM04,#MM05,#MTemperaturaC,#PM01,#PM02,#PM03,#PM04,#PM05,#PTemperaturaC,#CM01,#CM02,#CM03,#CM04,#CM05,#CTemperaturaC,#pccEviscMuestreo,#pccEvisCodigo,#pccViscRespo,#pccObservaciones",
    ).attr("required", false);
    $(
      "#evisVerifiHora,#VHM1,#VHM2,#VHM3,#VHTemperaturaC,#VMM1,#VMM2,#VMM3,#VMTemperaturaC,#VPM1,#VPM2,#VPM3,#VPTemperaturaC,#VCM1,#VCM2,#VCM3,#VCTemperaturaC,#pccEviscResposanble",
    ).attr("required", false);
    // document.getElementById("cumplimientoEvisce").style.fontWeight = "400";
    // document.getElementById("cumplimientoEvisce").style.backgroundColor = "#e8ecef";
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}
function pccEviscera() {
  var l = document.getElementById("controlEnviar").setAttribute("name", "formPccEviscera");
  $(
    "#pccViscHora,#tipoAveConvis,#pccVisclote,#HM01,#HM02,#HM03,#HM04,#HM05,#HTemperaturaC,#MM01,#MM02,#MM03,#MM04,#MM05,#MTemperaturaC,#PM01,#PM02,#PM03,#PM04,#PM05,#PTemperaturaC,#CM01,#CM02,#CM03,#CM04,#CM05,#CTemperaturaC,#pccEviscMuestreo,#pccEvisCodigo,#pccViscRespo,#pccObservaciones",
  ).attr("required", false);
  $(
    "#evisVerifiHora,#VHM1,#VHM2,#VHM3,#VHTemperaturaC,#VMM1,#VMM2,#VMM3,#VMTemperaturaC,#VPM1,#VPM2,#VPM3,#VPTemperaturaC,#VCM1,#VCM2,#VCM3,#VCTemperaturaC,#pccEviscResposanble",
  ).attr("required", false);
}
function pccViscerasVerifi() {
  var l = document.getElementById("controlEnviar").setAttribute("name", "formPccEviscVerifi");
  $(
    "#evisVerifiHora,#VHM1,#VHM2,#VHM3,#VHTemperaturaC,#VMM1,#VMM2,#VMM3,#VMTemperaturaC,#VPM1,#VPM2,#VPM3,#VPTemperaturaC,#VCM1,#VCM2,#VCM3,#VCTemperaturaC,#pccEviscResposanble",
  ).attr("required", true);
  $(
    "#pccViscHora,#pccViscRespo,#HM01,#HM02,#HM03,#HM04,#HM05,#HTemperaturaC,#MM01,#MM02,#MM03,#MM04,#MM05,#MTemperaturaC,#PM01,#PM02,#PM03,#PM04,#PM05,#PTemperaturaC,#CM01,#CM02,#CM03,#CM04,#CM05,#CTemperaturaC,#pccEviscMuestreo,#pccEvisCodigo",
  ).attr("required", false);
}

function preOperativo() {
  document.getElementById("preOperativo").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-64-INSPECCION PRE OPERATIVO PLANTA DE SACRIFICIO";
  document.getElementById("controlEnviar").setAttribute("name", "formPreOperativo");
  $("#calidadPreOpe,#correctivoPreOpe,#invimaPreOpe").attr("required", true);
  $(
    "#muestreoPreOpe1,#muestreoPreOpe2,#muestreoPreOpe3,#muestreoPreOpe4,#horaPreOpe1,#horaPreOpe2,#horaPreOpe3,#horaPreOpe4,#cloroPreOpe1,#cloroPreOpe2,#cloroPreOpe3,#cloroPreOpe4",
  ).attr("required", false);

  function cerrarcontrolProceso() {
    document.getElementById("preOperativo").style.display = "none";
    $("#calidadPreOpe,#correctivoPreOpe,#invimaPreOpe").attr("required", false);
    $("#controlEnviar").off();
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

function sendFormVariablesProc() {
  $("#controlEnviar").off();
  document.getElementById("controlEnviar").setAttribute("name", "formVariablesProc");
  $("#calidadPreOpe,#correctivoPreOpe,#invimaPreOpe").attr("required", false);

  $(
    "#muestreoPreOpe1,#muestreoPreOpe2,#muestreoPreOpe3,#muestreoPreOpe4,#horaPreOpe1,#horaPreOpe2,#horaPreOpe3,#horaPreOpe4,#cloroPreOpe1,#cloroPreOpe2,#cloroPreOpe3,#cloroPreOpe4",
  ).attr("required", true);

  function cerrarcontrolProceso() {
    document.getElementById("preOperativo").style.display = "none";
    $(
      "#muestreoPreOpe1,#muestreoPreOpe2,#muestreoPreOpe3,#muestreoPreOpe4,#horaPreOpe1,#horaPreOpe2,#horaPreOpe3,#horaPreOpe4,#cloroPreOpe1,#cloroPreOpe2,#cloroPreOpe3,#cloroPreOpe4",
    ).attr("required", false);
    $("#controlEnviar").off();
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

function verificaBPM() {
  document.getElementById("verficaBPM").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-11-VERIFICACION DE DOTACION Y BPM";
  /* $('#devolProduc,#devolDocum,#devolClient,#devolCant,#devolUnidad,#devolLot,#devolFv,#devolTemp,#devolDestino,#devolCausa,#devolPlaca,#devolRuta,#devolRespCali,#devolRespDesp,#vendedor').attr("required", true); */
  var l = document.getElementById("controlEnviar").setAttribute("name", "formVeriFrenteBPM");
  function cerrarcontrolProceso() {
    document.getElementById("verficaBPM").style.display = "none";
    /* $('#devolProduc,#devolDocum,#devolClient,#devolCant,#devolUnidad,#devolLot,#devolFv,#devolTemp,#devolDestino,#devolCausa,#devolPlaca,#devolRuta,#devolRespCali,#devolRespDesp,#vendedor').attr("required", false); */
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

function ControlEmpaque() {
  document.getElementById("ControlEmpaque").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-E-CTR-122-CONTROL-MATERIAL-DE-EMPAQUE";
  $(
    "#ControlEmpaFecha,#ControlEmpaProduct,#ControlEmpaTermi,#ControlEmpaFechaV,#ControlEmpaCanti,#ControlEmpaRegis,#ControlEmpaMate,#ControlEmpaLibe,#ControlEmpaObser,#ContorlEmpaRespo,#ControlEmpaVerificado",
  ).attr("required", true);
  document.getElementById("controlEnviar").setAttribute("name", "formEmpaque");

  function cerrarcontrolProceso() {
    document.getElementById("ControlEmpaque").style.display = "none";
    $(
      "#ControlEmpaFecha,#ControlEmpaProduct,#ControlEmpaTermi,#ControlEmpaFechaV,#ControlEmpaCanti,#ControlEmpaRegis,#ControlEmpaMate,#ControlEmpaLibe,#ControlEmpaObser,#ContorlEmpaRespo,#ControlEmpaVerificado",
    ).attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

function AuditoriaProceso() {
  document.getElementById("auditoriaProceso").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-27-AUDITORIA DE PROCESO";
  $("#area, #categoria, #porcentaje, #auditoriaCalidad, #auditoriaObservaciones").attr(
    "required",
    true,
  );
  var l = document.getElementById("controlEnviar").setAttribute("name", "formAuditoriaProceso");

  function cerrarcontrolProceso() {
    document.getElementById("auditoriaProceso").style.display = "none";
    $("#area, #categoria, #porcentaje, #auditoriaCalidad, #auditoriaObservaciones").attr(
      "required",
      false,
    );
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

function ControlCloro() {
  document.getElementById("controlCloro").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-21-CONTROL CLORO RESIDUAL AGUA POTABLE";
  $(
    "#ControlCloroFecha,#ControlCloroHora,#ControlCloroMuestra,#ControlCloroCloro,#ControlCloroPH,#ControlCloroCorrectivas,#ControlCloroVerificado",
  ).attr("required", true);
  var l = document.getElementById("controlEnviar").setAttribute("name", "formControlCloro");
  function cerrarcontrolProceso() {
    document.getElementById("controlCloro").style.display = "none";
    $(
      "#ControlCloroFecha,#ControlCloroHora,#ControlCloroMuestra,#ControlCloroCloro,#ControlCloroPH,#ControlCloroCorrectivas,#ControlCloroVerificado",
    ).attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}
function InspeccionOperativa() {
  document.getElementById("inspeccionOperativa").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-65-INSPECCION OPERATIVA POES";
  inspeccionPoess();

  function cerrarinspeccionOperativa() {
    document.getElementById("inspeccionOperativa").style.display = "none";
    $(
      "#inspeccionHora,#fechaInspeccion,#Area,#inspeccionCalidad,#firmaCorrectivo,#inspeccionObservaciones",
    ).attr("required", false);
    $(
      "#fechaDesinfeccion,#Areas,#desinfectante,#ControlConcentracion,#ControlObservaciones,#ControlResponsable",
    ).attr("required", false);
  }
  document
    .getElementById("cancelarGeneral")
    .addEventListener("click", cerrarinspeccionOperativa, false);
}
function inspeccionPoess() {
  var l = document.getElementById("controlEnviar").setAttribute("name", "formInspeccionPoes");
  $(
    "#inspeccionHora,#fechaInspeccion,#Area,#inspeccionCalidad,#firmaCorrectivo,#inspeccionObservaciones",
  ).attr("required", true);
  $(
    "#fechaDesinfeccion,#Areas,#desinfectante,#ControlConcentracion,#ControlObservaciones,#ControlResponsable",
  ).attr("required", false);
}
function desinfeccionDelantales() {
  var b = document
    .getElementById("controlEnviar")
    .setAttribute("name", "formDesinfeccionDelantales");
  $(
    "#fechaDesinfeccion,#Areas,#desinfectante,#ControlConcentracion,#ControlObservaciones,#ControlResponsable",
  ).attr("required", true);
  $(
    "#inspeccionHora,#fechaInspeccion,#Area,#inspeccionCalidad,#firmaCorrectivo,#inspeccionObservaciones",
  ).attr("required", false);
}
function DefectosCanal() {
  document.getElementById("defectosCanal").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-38-CONTROL DEFECTOS CANAL SALIDA CHILLER";
  $(
    "#ControlDefectosFecha,#granjas,#ControlViaje,#tipoAve,#canalVerificado,#decomisoParcial,#pigmentacion,#hematomaPechuga,#hematomaPernil,#hematomaAla,#parchudo,#fracturaAla,#puntaAla,#canalViscera,#canalPlumas,#canalCuticula,#dañoEquipo",
  ).attr("required", true);
  var l = document.getElementById("controlEnviar").setAttribute("name", "formControlDefectosCanal");
  function cerrarcontrolProceso() {
    document.getElementById("defectosCanal").style.display = "none";
    $(
      "#ControlDefectosFecha,#granjas,#ControlViaje,#tipoAve,#canalVerificado,#decomisoParcial,#pigmentacion,#hematomaPechuga,#hematomaPernil,#hematomaAla,#parchudo,#fracturaAla,#puntaAla,#canalViscera,#canalPlumas,#canalCuticula,#dañoEquipo",
    ).attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}
function InspeccionCalidadProducto() {
  document.getElementById("InspeccionCalidadProducto").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-20-INSPECCIÓN CALIDAD PRODUCTO SEMI ELABORADO Y TERMINADO";
 $(
    "#horaInspeccionCalidad, #fechaInspeccionCalidad, #productoInspeccionCalidad, #loteInspeccionCalidad, #areaproducto2, #fechaVencimientoCalidad, #dislocacionInspeccionCalidad, #residualInspeccionCalidad, #plumasInspeccionCalidad, #pigmentacionInspeccionCalidad, #cuticulaInspeccionCalidad, #hematomasInspeccionCalidad, #elementosInspeccionCalidad, #trazabilidadInspeccionCalidad, #rupturasInspeccionCalidad, #lixiviadoInspeccionCalidad, #selladoInspeccionCalidad, #fueraInspeccionCalidad, #CalidadinspeccionCalidadProducto, #ObservacionesinspeccionCalidadProducto, #muestrasInspeccionCalidad"
  ).attr("required", true);
  var l = document.getElementById("controlEnviar").setAttribute("name", "forminspeccionCalidad");
  function cerrarcontrolProceso() {
    document.getElementById("InspeccionCalidadProducto").style.display = "none";
    $(
      "#horaInspeccionCalidad, #fechaInspeccionCalidad, #productoInspeccionCalidad, #loteInspeccionCalidad, #fechaVencimientoCalidad, #dislocacionInspeccionCalidad, #residualInspeccionCalidad, #plumasInspeccionCalidad, #pigmentacionInspeccionCalidad, #cuticulaInspeccionCalidad, #hematomasInspeccionCalidad, #elementosInspeccionCalidad, #trazabilidadInspeccionCalidad, #rupturasInspeccionCalidad, #lixiviadoInspeccionCalidad, #selladoInspeccionCalidad, #fueraInspeccionCalidad, #CalidadinspeccionCalidadProducto, #ObservacionesinspeccionCalidadProducto, #muestrasInspeccionCalidad",
    ).attr("required", false);
  }

  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}
/* --------------------------------------------- */
function controlPuntosDesinfeccion() {
  document.getElementById("controlPuntosEnfriamineto").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-66-CONTROL CLORO RESIDUAL PUNTOS DE DESINFECCION";
  $(
    "#horaCumplimiento, #zonaBlanca, #empaqueViscera1, #empaqueViscera2, #empaqueVisceraCuchillo, #empaqueVisceraPala,#empaqueCanal1,#empaqueCanal2,#empaqueCanal3,#empaqueCanal4,#palaChiller,#marinado1,#marinado2,#marinado3,#marinado4,#marinado5,#marinado6,#marinadoCuchillo1,#marinadoCuchillo2,#marinadoCuchillo3,#marinadoCuchillo4,#marinadoCuchillo5,#marinadoCuchillo6,#duchaCanastillas,#carnesMolidas,#entradaTrolley,#salidaTrolley,#fileteoPollo,#fileteoPolloTablas,#fileteoPolloCuchillo1,#fileteoPolloCuchillo2,#fileteoPolloCuchillo3,#fileteoPolloCuchillo4,#basculaProduccion,#fileteoPavosTablas,#fileteoPavos,#fileteoPavosCuchillo1,#fileteoPavosCuchillo2,#fileteoPavosCuchillo3,#fileteoPavosCuchillo4,#fileteoPavosCuchillo5,#fileteoPavosCuchillo6,#fileteoPavosCuchillo7,#fileteoPavosCuchillo8,#fileteoPavosCuchillo9,#fileteoPavosCuchillo10,#fileteoPavosCuchillo11,#fileteoPavosCuchillo12,#fileteoPavosCuchillo13,#fileteoPavosCuchillo14,#fileteoPavosCuchillo15,#despachos,#iqf,#iqf2,#cambioEmpaque,#reseleccion,#pediluvioHielo,#palaHielo,#pediluvioPosproceso1,#pediluvioPosproceso2,#posproceso1,#posproceso2,#posprocesoCuchillo,#controlCorrectivo,#controlVerifico",
  ).attr("required", true);
  var l = document.getElementById("controlEnviar").setAttribute("name", "formcontrolDesinfec");
  function cerrarcontrolProceso() {
    document.getElementById("controlPuntosEnfriamineto").style.display = "none";
    document.querySelectorAll("#controlPuntosEnfriamineto select").forEach((select) => {
      if (select.options.length > 0) {
        select.selectedIndex = 0;
      }
    });
    $(
      "#horaCumplimiento, #zonaBlanca, #empaqueViscera1, #empaqueViscera2, #empaqueVisceraCuchillo, #empaqueVisceraPala,#empaqueCanal1,#empaqueCanal2,#empaqueCanal3,#empaqueCanal4,#palaChiller,#marinado1,#marinado2,#marinado3,#marinado4,#marinado5,#marinado6,#marinadoCuchillo1,#marinadoCuchillo2,#marinadoCuchillo3,#marinadoCuchillo4,#marinadoCuchillo5,#marinadoCuchillo6,#duchaCanastillas,#carnesMolidas,#entradaTrolley,#salidaTrolley,#fileteoPollo,#fileteoPolloTablas,#fileteoPolloCuchillo1,#fileteoPolloCuchillo2,#fileteoPolloCuchillo3,#fileteoPolloCuchillo4,#basculaProduccion,#fileteoPavosTablas,#fileteoPavos,#fileteoPavosCuchillo1,#fileteoPavosCuchillo2,#fileteoPavosCuchillo3,#fileteoPavosCuchillo4,#fileteoPavosCuchillo5,#fileteoPavosCuchillo6,#fileteoPavosCuchillo7,#fileteoPavosCuchillo8,#fileteoPavosCuchillo9,#fileteoPavosCuchillo10,#fileteoPavosCuchillo11,#fileteoPavosCuchillo12,#fileteoPavosCuchillo13,#fileteoPavosCuchillo14,#fileteoPavosCuchillo15,#despachos,#iqf,#cambioEmpaque,#reseleccion,#pediluvioHielo,#palaHielo,#pediluvioPosproceso1,#pediluvioPosproceso2,#posproceso1,#posproceso2,#posprocesoCuchillo,#controlCorrectivo,#controlVerifico",
    ).attr("required", false);
  }
  document
    .getElementById("controlPuntosEnfriamineto")
    .querySelectorAll("input, select")
    .forEach((el) => {
      el.style.backgroundColor = "";
      el.style.fontWeight = "";
    });
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}
/* -------------------------------------------------------------------------------------- */

function controlTemperaturaProcesos() {
  document.getElementById("controlTempProcesos").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-23- CONTROL DE TEMPERATURA DE AREAS DE PROCESO";
  $(
    "#areaTemperatura, #areaControlTemp, #horaTemperatura, #controlTempCorrectivas, #controlTempVerificado",
  ).attr("required", true);
  var l = document.getElementById("controlEnviar").setAttribute("name", "formControlTemp");
  function cerrarcontrolProceso() {
    document.getElementById("controlTempProcesos").style.display = "none";
    $(
      "#areaTemperatura, #areaControlTemp, #horaTemperatura, #controlTempCorrectivas, #controlTempVerificado",
    ).attr("required", false);
  }

  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

function InspeccionToleranciaCero() {
  document.getElementById("InspeccionToleranciaCero").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-33-CONTROL DE INSPECCIÓN DE TOLERANCIA CERO";
  toleranciaCero();

  function cerrarcontrolProceso() {
    document.getElementById("InspeccionToleranciaCero").style.display = "none";
    $(
      "#fechaToleranciaCero, #granjasTolerancia, #viajeToleranciaCero, #tipoAveTolerancia, #materialFecalToleranciaCero, #monitoreoToleranciaCero, #responsableToleranciaCero, #observacionToleranciaCero",
    ).attr("required", false);
    $(
      "#fechaVerificacionCero,#granjasVerificacion,viajeVerificacionCero,#tipoAveVerificacion,#materialFecalVerificacion,#monitoreoVerificacionCero,responsableVerificacionToleranciaCero,#concentracionDuchaClorada",
    ).attr("required", false);
  }

  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}
function toleranciaCero() {
  var l = document
    .getElementById("controlEnviar")
    .setAttribute("name", "forminspeccionToleranciaCero");
  $(
    "#fechaToleranciaCero, #granjasTolerancia, #viajeToleranciaCero, #tipoAveTolerancia, #materialFecalToleranciaCero, #monitoreoToleranciaCero, #responsableToleranciaCero, #observacionToleranciaCero",
  ).attr("required", true);
  $(
    "#fechaVerificacionCero,#granjasVerificacion,viajeVerificacionCero,#tipoAveVerificacion,#materialFecalVerificacion,#monitoreoVerificacionCero,responsableVerificacionToleranciaCero,#concentracionDuchaClorada",
  ).attr("required", false);
}
function verificacionCero() {
  var b = document.getElementById("controlEnviar").setAttribute("name", "formVerificacionCero");
  $(
    "#fechaVerificacionCero,#granjasVerificacion,viajeVerificacionCero,#tipoAveVerificacion,#materialFecalVerificacion,#monitoreoVerificacionCero,responsableVerificacionToleranciaCero,#concentracionDuchaClorada",
  ).attr("required", true);
  $(
    "#fechaToleranciaCero, #granjasTolerancia, #viajeToleranciaCero, #tipoAveTolerancia, #materialFecalToleranciaCero, #monitoreoToleranciaCero, #responsableToleranciaCero, #observacionToleranciaCero",
  ).attr("required", false);
}

function controlPesoFrisby() {
  document.getElementById("controlFrisby").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-E-CCI-15- CONTROL PESO PRODUCTO ADOBADO FRISBY";
  $(
    "#fechaVencimiento,#destino2,#cantidadTotal,#pechugasMalCortadas,#contramuslosMalCortados,#muslosMalCortados,#alasMalCortadas,#observacionesdFrisby,#realizoFrisby",
  ).attr("required", true);
  var l = document
    .getElementById("controlEnviar")
    .setAttribute("name", "formControlProductoFrisby");
  function cerrarcontrolProceso() {
    document.getElementById("controlFrisby").style.display = "none";
    $(
      "#fechaVencimiento,#destino2,#cantidadTotal,#pechugasMalCortadas,#contramuslosMalCortados,#muslosMalCortados,#alasMalCortadas,#observacionesdFrisby,#realizoFrisby",
    ).attr("required", false);
  }

  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

function ControlProductosFrios() {
  document.getElementById("ControlProductos").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-26-CONTROL TEMPERATURA DE PRODUCTOS EN CUARTOS FRIOS";
  $(
    "#controlTempHora,#controlContainer,#loteControlTemperatura,#productoControlCuartos,#ControlFechaVencimiento,#controlTempProducto,#TempAmbienteCuarto,#productoExpControl,#controlTempObservaciones,#controlResponsable2",
  ).attr("required", true);
  document.getElementById("controlEnviar").setAttribute("name", "formTemperaturaCuartos");

  function cerrarcontrolProceso() {
    document.getElementById("ControlProductos").style.display = "none";
    $(
      "#controlTempHora,#controlContainer,#loteControlTemperatura,#productoControlCuartos,#ControlFechaVencimiento,#controlTempProducto,#TempAmbienteCuarto,#productoExpControl,#controlTempObservaciones,#controlResponsable2",
    ).attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

function ControlLiberacionTuneles() {
  document.getElementById("controlLiberacion").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-44 CONTROL DE TEMPERATURA LIBERACION DE PRODUCTOS DE TUNELES";
  $(
    "#liberacionHora,#controlTunel,#loteLiberacion,#productoControlLiberacion,#liberacionFechaVencimiento,#controlTempLiberacion,#loteLiberacion2,#productoControlLiberacion2,#liberacionFechaVencimiento2,#controlTempLiberacion2,#TempAmbienteTunel,#liberacionTempObservaciones,#liberacionResponsable",
  ).attr("required", true);
  document.getElementById("controlEnviar").setAttribute("name", "formTemperaturaLiberacion");

  function cerrarcontrolProceso() {
    document.getElementById("controlLiberacion").style.display = "none";
    $(
      "#liberacionHora,#controlTunel,#loteLiberacion,#productoControlLiberacion,#liberacionFechaVencimiento,#controlTempLiberacion,#loteLiberacion2,#productoControlLiberacion2,#liberacionFechaVencimiento2,#controlTempLiberacion2,#TempAmbienteTunel,#liberacionTempObservaciones,#liberacionResponsable",
    ).attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

function auditoriaCuartos() {
  document.getElementById("auditoriaCuartosAlmacenamiento").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-45-AUDITORIA DE CUARTOS DE ALMACENAMIENTO";

  document.getElementById("controlEnviar").setAttribute("name", "forminventarioAlmacenamiento");
  function cerrarcontrolProceso() {
    document.getElementById("auditoriaCuartosAlmacenamiento").style.display = "none";
    $().attr("required", false);
    //"#productoAlmacenamiento,#loteAlmacenamiento,#fechaBeneficio,#fechaEmpaque,#fechaVencimientoAuditoria,#cantidadAlmacenamiento,#responsableAlmacenam,#observacionesInventario",
    $().attr("required", false);
    // "#aspectosAlmacenamiento,#auditoriaCuarto,#responsableAlmacenamiento,#observacionesAlmacenamiento",
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

function listaChequeo() {
  document.getElementById("listaDchequeo").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-103 - LISTA DE CHEQUEO - MATERIAL EXTRAÑO";
  $(
    "#plantaChequeo,#areasChequeo,#observacionesInstrumentos,#observacionesccae,#observacionesBaldes",
  ).attr("required", true);
  document.getElementById("controlEnviar").setAttribute("name", "formMaterialExtraño");

  function cerrarcontrolProceso() {
    document.getElementById("listaDchequeo").style.display = "none";
    $(
      "#plantaChequeo,#areasChequeo,#observacionesInstrumentos,#observacionesccae,#observacionesBaldes",
    ).attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

function verificacionLockers() {
  document.getElementById("verificacionLocker").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-63 - VERIFICACION DE LOCKERS";
  $(
    "#numeroLocker,#arealockers,#generoLockers,#presenciaAlimentos,#presenciaPlagas,#presenciaOxido,#dañosLocker,#presenciaImplementos,#lockerCandado,#lockerOrden,#lockerCompartimiento,#observacionesLocker,#responsableLocker",
  ).attr("required", true);
  document.getElementById("controlEnviar").setAttribute("name", "formVerificacionLockers");

  function cerrarLockers() {
    document.getElementById("verificacionLocker").style.display = "none";
    $(
      "#numeroLocker,#arealockers,#generoLockers,#presenciaAlimentos,#presenciaPlagas,#presenciaOxido,#dañosLocker,#presenciaImplementos,#lockerCandado,#lockerOrden,#lockerCompartimiento,#observacionesLocker,#responsableLocker",
    ).attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarLockers, false);
}

function productoNoconforme() {
  document.getElementById("ProductoNoconforme").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-99 - PRODUCTO NO CONFORME";
  // $('#numeroLocker,#arealockers,#generoLockers,#presenciaAlimentos,#presenciaPlagas,#presenciaOxido,#dañosLocker,#presenciaImplementos,#lockerCandado,#lockerOrden,#lockerCompartimiento,#observacionesLocker,#responsableLocker').attr("required", true);
  document.getElementById("controlEnviar").setAttribute("name", "formProductoNoconforme");

  function cerrarProducto() {
    document.getElementById("ProductoNoconforme").style.display = "none";
    // $('#numeroLocker,#arealockers,#generoLockers,#presenciaAlimentos,#presenciaPlagas,#presenciaOxido,#dañosLocker,#presenciaImplementos,#lockerCandado,#lockerOrden,#lockerCompartimiento,#observacionesLocker,#responsableLocker').attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarProducto, false);
}
function controlDesinfeccionPlataforma() {
  document.getElementById("controlPuntosPlataforma").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-68 - CONTROL CLORO RESIDUAL PUNTOS DESINFECCION PLATAFORMA";
  $(
    "#horaCumplimientoPlataforma,#plataforma,#deguelle,#patas,#desinfeccionEscaldado,#controlCorrectivoPlataforma,#controlVerificoPlataforma,#controlAproboPlataforma",
  ).attr("required", true);
  document.getElementById("controlEnviar").setAttribute("name", "formcontrolDesinfecPlataforma");

  function cerrarProducto() {
    document.getElementById("controlPuntosPlataforma").style.display = "none";
    $(
      "#horaCumplimientoPlataforma,#plataforma,#deguelle,#patas,#desinfeccionEscaldado,#controlCorrectivoPlataforma,#controlVerificoPlataforma,#controlAproboPlataforma",
    ).attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarProducto, false);
}
/* -------------------------------------------------------------------------------- */
function limpiezaCuartos() {
  document.getElementById("LimpiezaCuartos2").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-70 - LIMPIEZA Y DESINFECCION DE CUARTOS";
  $(
    "#cuartoArea,#cuartoLugar,#cuartoNumero,#cuartoNombreDetergente,#cuartoConcentracionDetergente,#cuartoNombreDesinfectante,#cuartoConcentracionDesinfectante,#cuartoLimpieza,#cuartoAccion,#cuartoResponsable,#cuartoVerifico,#cuartoAprobo",
  ).attr("required", true);
  document.getElementById("controlEnviar").setAttribute("name", "formLimpiezaCuarto");

  function cerrarProducto() {
    document.getElementById("LimpiezaCuartos2").style.display = "none";
    $(
      "#cuartoArea,#cuartoLugar,#cuartoNumero,#cuartoNombreDetergente,#cuartoConcentracionDetergente,#cuartoNombreDesinfectante,#cuartoConcentracionDesinfectante,#cuartoLimpieza,#cuartoAccion,#cuartoResponsable,#cuartoVerifico,#cuartoAprobo",
    ).attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarProducto, false);
}
/* --------------- FRECUENCIA INPECCION ---------------------------------------------------------------------------------------------- */
function frecuenciaInspeccion() {
  // Mostrar la vista correspondiente
  document.getElementById("frecuenciaInspeccion").style.display = "block";

  // Cambiar el título de la cabecera
  const cabecera = document.getElementById("cabeceraGeneral");
  if (cabecera) cabecera.innerHTML = "FOR-S-CCI-17 FRECUENCIA INSPECCIÓN";

  // Asignar el name correcto al botón de envío
  const botonEnviar = document.getElementById("controlEnviar");
  if (botonEnviar) botonEnviar.setAttribute("name", "formFrecuenciaInspeccion");

  // 🔹 Hacer que los campos sean obligatorios
  $(".inputCantidad, .inputAusentes, .inputIncompletos").attr({
    required: true,
    min: 0,
    type: "number"
  });

  // Función para cerrar la vista y limpiar estados
  function cerrarcontrolProceso() {
    document.getElementById("frecuenciaInspeccion").style.display = "none";

    // Limpiar el name del botón para evitar conflictos con otros formularios
    if (botonEnviar) botonEnviar.removeAttribute("name");

    // Quitar los "required" de los campos al cerrar
    $(".inputCantidad, .inputAusentes, .inputIncompletos").attr("required", false);
  }

  // Asociar evento al botón cancelar (evita duplicar listeners)
  const btnCancelar = document.getElementById("cancelarGeneral");
  if (btnCancelar) {
    btnCancelar.removeEventListener("click", cerrarcontrolProceso);
    btnCancelar.addEventListener("click", cerrarcontrolProceso);
  }
}


/* ------------------------------------------------------------------------------------------------ */


function desinfeccionGuantes() {
  document.getElementById("desinfeccionGuantes").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-100 DESINFECCION DE GUANTES";
  //$('#areaDesinfeccionG,#personaDesinfeccionG,#dDesinfeccionG,#concentracionDesinfeccionG,#responsableDesinfeccionG,#verificoDesinfeccionG,#ObsDesinfeccionG,#aproboDesinfeccionG').attr("required", true);
  document.getElementById("controlEnviar").setAttribute("name", "formDesinfeccionGuantes");

  function cerrarcontrolProceso() {
    document.getElementById("desinfeccionGuantes").style.display = "none";
    //$('#areaDesinfeccionG,#personaDesinfeccionG,#dDesinfeccionG,#concentracionDesinfeccionG,#responsableDesinfeccionG,#verificoDesinfeccionG,#ObsDesinfeccionG,#aproboDesinfeccionG').attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}




function verificacionCanastas() {
  document.getElementById("verificacionCanastas").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-82 VERIFICACION CANASTILLAS";
  //$('#areaDesinfeccionG,#personaDesinfeccionG,#dDesinfeccionG,#concentracionDesinfeccionG,#responsableDesinfeccionG,#verificoDesinfeccionG,#ObsDesinfeccionG,#aproboDesinfeccionG').attr("required", true);
  document.getElementById("controlEnviar").setAttribute("name", "formVerificacionCanastas");

  function cerrarcontrolProceso() {
    document.getElementById("verificacionCanastas").style.display = "none";
    //$('#areaDesinfeccionG,#personaDesinfeccionG,#dDesinfeccionG,#concentracionDesinfeccionG,#responsableDesinfeccionG,#verificoDesinfeccionG,#ObsDesinfeccionG,#aproboDesinfeccionG').attr("required", false);
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}


// Control de cloro residual puntos de desinfección evisceración 
function controlDesinfeccionEvisceracion() {
  document.getElementById("controlPuntosEvisceracion").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-67 - CONTROL CLORO RESIDUAL PUNTOS DESINFECCION EVISCERACION";

  document.getElementById("controlEnviar").setAttribute("name", "formcontrolDesinfecEvisceracion");

  function cerrarProducto() {
    document.getElementById("controlPuntosEvisceracion").style.display = "none";

  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarProducto, false);
}

// Control preparación de salmuera
function preparacionSalmuera() {
  document.getElementById("preparacionSalmuera").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-E-CCI-12 CONTROL PREPARACION SALMUERA";
  
  document.getElementById("controlEnviar").setAttribute("name", "formPreparacionSalmuera");

  function cerrarcontrolProceso() {
    document.getElementById("preparacionSalmuera").style.display = "none";
 
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

// limpieza y desinfeccion de las agujas de las inyectoras
function limpiezaInyectadora() {
  document.getElementById("limpiezaInyectadora").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR-S-CCI-74 LIMPIEZA Y DESINFECCION DE LAS AGUJAS INYECTADORAS";
  
  document.getElementById("controlEnviar").setAttribute("name", "formInyectadora");

  function cerrarcontrolProceso() {
    document.getElementById("limpiezaInyectadora").style.display = "none";
 
  }
  document.getElementById("cancelarGeneral").addEventListener("click", cerrarcontrolProceso, false);
}

/* LIMOPIEZA Y DESINFECCION DE VEHUCLOS DE POLLO Y PAVO EN PIE  */
function retiroSolidosVehiculo() {
  document.getElementById("retiroSolidosVehiculo").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR_S_CCI_72 LIMPIEZA Y DESINFECCIÓN DE VEHÍCULOS";

  $(
    "#placaVehiculoestado,#retiroEstadovehiculo,#retiroAccionesestado,#retiroResponsablesestado,#retiroVerificaestado,#retiroAproboestado",
  ).attr("required", true)

  document.getElementById("controlEnviar").setAttribute("name", "formRetiroVehiculo");

  function cerrarcontrolProceso() {
    document.getElementById("retiroSolidosVehiculo").style.display = "none";
    $(
      "#placaVehiculoestado,#retiroEstadovehiculo,#retiroAccionesestado,#retiroResponsablesestado,#retiroVerificaestado,#retiroAproboestado",
   ).attr("required", false)

  }

  // Asignar evento al botón cancelar
  var btnCancelar = document.getElementById("cancelarGeneral");
  if (btnCancelar) {
    btnCancelar.addEventListener("click", cerrarcontrolProceso, false);
  }
}

/* DESINFECCION DE HUACALES  */
function retiroGuacales() {
  document.getElementById("retiroGuacales").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR_S_CCI_73 LIMPIEZA Y DESINFECCIÓN DE HUACALES";

  $("#viajeguacales,#guacalesvehiculo,#guacalesDesinfeccion,#guacalesVerificacion,#guacalesAcciones,#guacalesResponsable,#guacalesAprobo")
  .attr("required", true)

  document.getElementById("controlEnviar").setAttribute("name", "guacalesForm");

  function cerrarcontrolProceso() {
    document.getElementById("retiroGuacales").style.display = "none";
    $(
      "#viajeguacales,#guacalesvehiculo,#guacalesDesinfeccion,#guacalesVerificacion,#guacalesAcciones,#guacalesResponsable,#guacalesAprobo")
    .attr("required", false)

    
  }

  // Asignar evento al botón cancelar
  var btnCancelar = document.getElementById("cancelarGeneral");
  if (btnCancelar) {
    btnCancelar.addEventListener("click", cerrarcontrolProceso, false);
  }
}



/* CONTROL DE CONTRAMUESTRA */
function contraMuestra() {
  document.getElementById("contraMuestra").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR_E_CCI_13 CONTROL CONTRAMUESTRA";

  // Solo los primeros campos son obligatorios al inicio
  $("#horacontraMuestra, #productocontraMuestra, #lotecontraMuestra, #produccioncontraMuestra, #vencimientocontraMuestra, #pesocontraMuestra")
    .attr("required", true);

  
  $("#colorcontraMuestra, #olorcontraMuestra, #empaquecontraMuestra, #aparienciacontraMuestra, #temperacontraMuestra, #diascontraMuestra, #finalcontraMuestra, #accionescontraMuestra, #verificadocontraMuestra, #aprobocontraMuestra")
    .prop("disabled", true)
    .prop("required", false);

  document.getElementById("controlEnviar").setAttribute("name", "contraMuestraform");

  function cerrarcontrolProceso() {
    document.getElementById("contraMuestra").style.display = "none";
    $(
      "#horacontraMuestra,#productocontraMuestra,#lotecontraMuestra,#produccioncontraMuestra,#vencimientocontraMuestra,#pesocontraMuestra,#colorcontraMuestra,#olorcontraMuestra,#empaquecontraMuestra,#aparienciacontraMuestra,#temperacontraMuestra,#diascontraMuestra,#finalcontraMuestra,#accionescontraMuestra,#verificadocontraMuestra,#aprobocontraMuestra"
    ).attr("required", false);
  }

  var btnCancelar = document.getElementById("cancelarGeneral");
  if (btnCancelar) {
    btnCancelar.addEventListener("click", cerrarcontrolProceso, false);
  }
}

/* ROTURA CONDICION */
function roturaCondicion() {
  document.getElementById("roturaCondicion").style.display = "block";
  var m = document.getElementById("cabeceraGeneral");
  m.innerHTML = "FOR_S_CCI_95 ROTURA Y CONDICION ";
 $(
   "#plantaroturacondi,#areasroturacondi,#tipoReporte,#detalleReporte,#decripcionrotura,#nombreProceso,#nombreCalidad"
  ).attr("required", true);


  document.getElementById("controlEnviar").setAttribute("name", "formRoturacondicion");

  function cerrarcontrolProceso() {
    document.getElementById("roturaCondicion").style.display = "none";
    $(
     "#plantaroturacondi,#areasroturacondi,#tipoReporte,#detalleReporte,#decripcionrotura,#nombreProceso,#nombreCalidad,#comentarioArea3,#comentarioArea4,#comentarioArea5"
    ).attr("required", false); 
  }

  // Asignar evento al botón cancelar
  var btnCancelar = document.getElementById("cancelarGeneral");

  if (btnCancelar) {
    btnCancelar.addEventListener("click", cerrarcontrolProceso, false);
  }
}
