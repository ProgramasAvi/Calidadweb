<?php /**/
require_once "../models/BD.php";
require_once "../controller/validarusuario.php";
include "../prueba/connect.php";

// Habilitar errores de PDO para debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);
$bdc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


/* if (isset($_POST['habilitado'])) {
    $habilitar = $_POST['habilitado'];
} */
/* if ($habilitar == 'ABIERTO') { */

if (isset($_POST["controlReporte"])) {
  $hour = $_POST["controlCb"];
  $ave = $_POST["tipoAvez"];
  $c1 = $_POST["controlCa"];
  $c2 = $_POST["controlCz"];
  $c3 = $_POST["controlCc"];
  $c4 = $_POST["controlCd"];
  $c5 = $_POST["controlCe"];
  $c6 = $_POST["controlCf"];
  $c7 = $_POST["controlCg"];
  $c8 = $_POST["controlCh"];
  $c9 = $_POST["controlCi"];
  $c10 = $_POST["controlCj"];
  $tempProm = $_POST["tempPromedio"];
  $porcenCumplimiento = $_POST["porcenCumplimiento"];
  $registroPh = $_POST["registroPh"];
  $registroT = $_POST["registroT"];
  $prechiCloro = $_POST["prechiCloro"];
  $responsableRegis = $_POST["responsableRegis"];
  $chicanCodigo = $_POST["chicanCodigo"];
  $observacionesCpec = $_POST["observacionesCpec"];
  $aproboCpec = $_POST["aproboCpec"];

  $lll = "INSERT INTO `02hc-f01`( `FECHA`, `HORA`, `TIPO_AVE`, `C1`, `C2`, `C3`, `C4`, `C5`, `C6`, `C7`, `C8`, `C9`, `C10`,`TEMP_PROM`,
     `PORCENT_CUMPLI`, `PH`, `TEMP_PRECHILL`, `REGISCLORO`, `RESPONS`, `CODIGO`, `observaciones`, `aprobo`)
     VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  $sente = $bdc->prepare($lll);
  $sente->execute([
    $hour,
    $ave,
    $c1,
    $c2,
    $c3,
    $c4,
    $c5,
    $c6,
    $c7,
    $c8,
    $c9,
    $c10,
    $tempProm,
    $porcenCumplimiento,
    $registroPh,
    $registroT,
    $prechiCloro,
    $responsableRegis,
    $chicanCodigo,
    $observacionesCpec,
    $aproboCpec,
  ]);

  if ($sente->rowCount()) {
    $_SESSION["mensaje"] = "¡¡¡Registro Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/*ENVIO DE FORMULARIO VERIFICACION CONTROL PROCESO DE ENFRIAMIENTO DE CANAL
 /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

if (isset($_POST["formConChillVerif"])) {
  $chillConHRegis = $_POST["chillConHRegis"];
  $chillConVC1 = $_POST["chillConVC1"];
  $chillConVC2 = $_POST["chillConVC2"];
  $chillConVC3 = $_POST["chillConVC3"];
  $chillConVC4 = $_POST["chillConVC4"];
  $chillConVC5 = $_POST["chillConVC5"];
  $chillConVC6 = $_POST["chillConVC6"];
  $chillConVC7 = $_POST["chillConVC7"];
  $chillConVC8 = $_POST["chillConVC8"];
  $chillConVC9 = $_POST["chillConVC9"];
  $chillConVC10 = $_POST["chillConVC10"];
  $chillConVC11 = $_POST["chillConVC11"];
  $chillConVC12 = $_POST["chillConVC12"];
  $chillConVC13 = $_POST["chillConVC13"];
  $chillConVC14 = $_POST["chillConVC14"];
  $chillConVC15 = $_POST["chillConVC15"];
  $chillConVC16 = $_POST["chillConVC16"];
  $chillConVC17 = $_POST["chillConVC17"];
  $chillConVObser = $_POST["chillConVObser"];
  $chillConVResObs = $_POST["chillConVResObs"];
  $TipoAves = $_POST["tipoAves"];
  $tempPromedio = $_POST["tempPromedio2"];
  $aprobo = $_POST["chillConAprobo"];

  $VVV = "INSERT INTO `02hc-f01 verificaciones`(`FECHA`, `HORA`, `C1`, `C2`, `C3`, `C4`, `C5`, `C6`, `C7`, `C8`, `C9`, `C10`, `C11`, `C12`, `C13`, `C14`,
     `C15`, `C16`, `C17`, `OBSERVACIONES`, `RESPONS_OBSER`, `TIPOAVE`, `tempPromedio`,`aprobo`) 
     VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  $senteV = $bdc->prepare($VVV);
  $senteV->execute([
    $chillConHRegis,
    $chillConVC1,
    $chillConVC2,
    $chillConVC3,
    $chillConVC4,
    $chillConVC5,
    $chillConVC6,
    $chillConVC7,
    $chillConVC8,
    $chillConVC9,
    $chillConVC10,
    $chillConVC11,
    $chillConVC12,
    $chillConVC13,
    $chillConVC14,
    $chillConVC15,
    $chillConVC16,
    $chillConVC17,
    $chillConVObser,
    $chillConVResObs,
    $TipoAves,
    $tempPromedio,
    $aprobo,
  ]);

  if ($senteV->rowCount()) {
    $_SESSION["mensaje"] = "¡¡¡Verificaciones Realizadas de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/*ENVIO DE FORMULARIO INSPECCION VETERINARIA */
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
if (isset($_POST["formInspVetAntemor"])) {
  $antMor1 = $_POST["antMorLotProduc"];
  $antMor3 = $_POST["antMorPollo"];
  $antMor4 = $_POST["antMorPavo"];
  $antMor5 = $_POST["antMorGallina"];
  $antMor6 = $_POST["antMorViaje"];
  $antMor7 = $_POST["antMorGranja"];
  $antMor8 = $_POST["sex"];
  $antMor9 = $_POST["antMorEdad"];
  $antMor10 = $_POST["antMorCadenaAves"];
  $antMor11 = $_POST["antMorAyuno"];
  $antMor12 = $_POST["plumasErizadas"];
  $antMor13 = $_POST["inflamOjoCabe"];
  $antMor14 = $_POST["secreNarizOjo"];
  $antMor15 = $_POST["edemaBarbilla"];
  $antMor16 = $_POST["FaltaRespEstim"];
  $antMor17 = $_POST["estornudo"];
  $antMor18 = $_POST["deshidratado"];
  $antMor19 = $_POST["lesionPiel"];
  $antMor20 = $_POST["heridaSupurante"];
  $antMor21 = $_POST["diarreaAcumulaFecal"];
  $antMor22 = $_POST["sintomaNervio"];
  $antMor23 = $_POST["golpeHematoma"];
  $antMor24 = $_POST["huesoEngrosado"];
  $antMor25 = $_POST["asfis"];
  $antMor26 = $_POST["antMorObserv"];
  $antMor27 = $_POST["antMorCorrec"];
  $antMor28 = $_POST["Anterealizo"];
  $antMor29 = $_POST["Anteaprobo"];

  $sss = "INSERT INTO `02iv-f01 antemortem`( `fecha`, `lotProduc`, `pollo`, `pavo`, `gallina`, `viaje`, `granja`, `sexo`, `edad`, `avesCadena`,
     `tiempoAyuno`, `plumasErizadas`, `inflamacionCabezaOjos`, `secrecionNarizOjos`, `edemaBarbilla`, `sinRespEstimulo`, `estornudos`, `diarreaAcumulacionFecal`,
      `lesionPiel`, `heridaSupurante`, `deshidratacion`, `sintomasNerviosos`, `golpesHematomas`, `huesosEngrosados`, `avesAsfixiadas`, `observaciones`, `accionesCorrectivas`, 
      `realiza`, `aprueba`) 
      VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $sent = $bdc->prepare($sss);
  $sent->execute([
    $antMor1,
    $antMor3,
    $antMor4,
    $antMor5,
    $antMor6,
    $antMor7,
    $antMor8,
    $antMor9,
    $antMor10,
    $antMor11,
    $antMor12,
    $antMor13,
    $antMor14,
    $antMor15,
    $antMor16,
    $antMor17,
    $antMor18,
    $antMor19,
    $antMor20,
    $antMor21,
    $antMor22,
    $antMor23,
    $antMor24,
    $antMor25,
    $antMor26,
    $antMor27,
    $antMor28,
    $antMor29,
  ]);

  if ($sent->rowCount()) {
    $_SESSION["mensaje"] = "¡¡¡Registro Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
if (isset($_POST["formInspVetPostmor"])) {
  $postMor2 = $_POST["postPollo"];
  $postMor3 = $_POST["postPavo"];
  $postMor4 = $_POST["postGallina"];
  $postMor5 = $_POST["postViaje"];
  $postMor6 = $_POST["absceso"];
  $postMor7 = $_POST["aerosaculitis"];
  $postMor8 = $_POST["ascitis"];
  $postMor9 = $_POST["dermatitis"];
  $postMor10 = $_POST["procesoInflamator"];
  $postMor11 = $_POST["tumor"];
  $postMor12 = $_POST["contaminacion"];
  $postMor13 = $_POST["cianosis"];
  $postMor14 = $_POST["caquexia"];
  $postMor15 = $_POST["contusionFractura"];
  $postMor16 = $_POST["ictericia"];
  $postMor17 = $_POST["marek"];
  $postMor18 = $_POST["sobreEscalado"];
  $postMor19 = $_POST["olor"];
  $postMor20 = $_POST["osteomielitis"];
  $postMor21 = $_POST["septicemia"];
  $postMor22 = $_POST["malSangrado"];
  $postMor23 = $_POST["avesDecomisadas"];
  $postMor24 = $_POST["postObservacion"];
  $postMor25 = $_POST["postCorrec"];
  $postMor26 = $_POST["postAprobo"];

  $sll = "INSERT INTO `02iv-f01 postmortem`(`fecha`, `pollo`, `pavo`, `gallina`, `viaje`, `absesos`, `aerosaculitis`, `ascitis`, `dermatitis`, `procesoInflamatorio`, `tumor`, `contaminacion`,
     `cianosis`, `caquexia`, `contusionFractura`, `ictericia`, `marek`, `sobreEscaldado`, `olor`, `osteomielitis`, `septicemia`, `polloMalSangrado`, `totalAveDecomisada`, `observaciones`, `accionesCorrectivas`, `aprobo`)
     VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $sen = $bdc->prepare($sll);

  $sen->execute([
    $postMor2,
    $postMor3,
    $postMor4,
    $postMor5,
    $postMor6,
    $postMor7,
    $postMor8,
    $postMor9,
    $postMor10,
    $postMor11,
    $postMor12,
    $postMor13,
    $postMor14,
    $postMor15,
    $postMor16,
    $postMor17,
    $postMor18,
    $postMor19,
    $postMor20,
    $postMor21,
    $postMor22,
    $postMor23,
    $postMor24,
    $postMor25,
    $postMor26,
  ]);

  if ($sen->rowCount()) {
    $_SESSION["mensaje"] = "¡¡¡Registro Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/*ENVIO DE FORMULARIO LESIONES ASFIXIAS MEDICIONES DE EQUIPOS - CLASIFICACION DE DEFECTOS DE CANAL - EVISCERACION*/
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

if (isset($_POST["defectosCanalEvisceracion"])) {
  $Frente1 = $_POST["frentViaje"] ?? null;
  $Frente2 = $_POST["frentSexo"] ?? null;
  $Frente3 = $_POST["frentGranja"] ?? null;
  $Frente4 = $_POST["frentNAvesGranja"] ?? null;
  $Frente5 = $_POST["tipoAveEvis"] ?? null;
  $Frente6 = $_POST["dgranRLace"] ?? null;
  $Frente7 = $_POST["dgranPerHema"] ?? null;
  $Frente8 = $_POST["dgranAHema"] ?? null;
  $Frente9 = $_POST["dgranAFract"] ?? null;
  $Frente10 = $_POST["dgranALuxa"] ?? null;
  $Frente11 = $_POST["dgranPechHema"] ?? null;
  $Frente12 = $_POST["dgranPechGranu"] ?? null;
  $Frente13 = $_POST["dgranOGranuPlant"] ?? null;
  $Frente15 = $_POST["dgranOAlimen"] ?? null;
  $Frente16 = $_POST["dgranOHiGraso"] ?? null;
  $Frente17 = $_POST["dproPerHema"] ?? null;
  $Frente18 = $_POST["dproPerFract"] ?? null;
  $Frente19 = $_POST["dproAHema"] ?? null;
  $Frente20 = $_POST["dproAPuntaRoja"] ?? null;
  $Frente21 = $_POST["dproAFract"] ?? null;
  $Frente22 = $_POST["dproALuxa"] ?? null;
  $Frente23 = $_POST["dproPechHema"] ?? null;
  $Frente29 = $_POST["petequias"] ?? null;
  $Frente24 = $_POST["dproOPlumCanal"] ?? null;
  $Frente14 = $_POST["canalCuticulaOtro"] ?? null;
  $Frente25 = $_POST["dproORuptIntes"] ?? null;
  $Frente26 = $_POST["dproOContaBili"] ?? null;
  $Frente27 = $_POST["dproOPoCampPig"] ?? null;
  $Frente28 = $_POST["dproOPoCampPar"] ?? null;
  $Reves2 = $_POST["dcarRLace"] ?? null;
  $Reves3 = $_POST["dcarPerHema"] ?? null;
  $Reves4 = $_POST["dcarPerFract"] ?? null;
  $Reves5 = $_POST["dcarAHemat"] ?? null;
  $Reves6 = $_POST["dcarAFract"] ?? null;
  $Reves7 = $_POST["dcarPechHema"] ?? null;
  $Reves8 = $_POST["vproTEscal1"] ?? null;
  $Reves9 = $_POST["vproTEscal2"] ?? null;
  $Reves10 = $_POST["vproTEscalPatas"] ?? null;
  $Reves11 = $_POST["vproVoltAtur"] ?? null;
  $Reves12 = $_POST["vproAmpAtur"] ?? null;
  $Reves13 = $_POST["vproFrecAtur"] ?? null;
  $Reves1 = $_POST["aleteoCorte"] ?? null;
  $Reves18 = $_POST["reflejosPalpebral"] ?? null;
  $Reves20 = $_POST["presenciaDeglucion"] ?? null;
  $Reves14 = $_POST["vproTiemEscal"] ?? null;
  $Reves15 = $_POST["vproTiemSangra"] ?? null;
  $rvs16 = $_POST["vproTiemPoVisce"] ?? null;
  $Reves17 = $_POST["vproVelCade"] ?? null;
  $Reves19 = $_POST["lesAsObservacion"] ?? null;
  $Reves21 = $_POST["lesAsrealizo"] ?? null;
  $Reves22 = $_POST["lesAsAprobo"] ?? null;

  $consult = "INSERT INTO `02iv_f02_frente` ( `fecha`, `frentViaje`, `frentSexo`, `frentGranja`, `frentNAvesGranja`, `tipoAveEvis`, `dgranRLace`,
`dgranPerHema`, `dgranAHema`, `dgranAFract`, `dgranALuxa`, `dgranPechHema`, `dgranPechGranu`, `dgranOGranuPlant`,
`dgranOAlimen`, `dgranOHiGraso`, `dproPerHema`, `dproPerFract`, `dproAHema`, `dproAPuntaRoja`, `dproAFract`, `dproALuxa`, `dproPechHema`, `petequias`,
`dproOPlumCanal`, `canalCuticulaOtro`, `dproORuptIntes`, `dproOContaBili`, `dproOPoCampPig`, `dproOPoCampPar`, `dcarRLace`, `dcarPerHema`, `dcarPerFract`,
 `dcarAHemat`, `dcarAFract`, `dcarPechHema`, `vproTEscal1`, `vproTEscal2`, `vproTEscalPatas`, `vproVoltAtur`, `vproAmpAtur`, `vproFrecAtur`,
  `aleteoMomentoCorte`, `reflejosPalpebralPupilar`, `presenciaDeglucion`, `vproTiemEscal`, `vproTiemSangra`, `vproTiemPoVisce`, `vproVelCade`,
   `rvsObservacion`, `rvsRealiza`, `aprobo`)  
VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $InspeccionC = $bdc->prepare($consult);
  try {
    $InspeccionC->execute([
      $Frente1,
      $Frente2,
      $Frente3,
      $Frente4,
      $Frente5,
      $Frente6,
      $Frente7,
      $Frente8,
      $Frente9,
      $Frente10,
      $Frente11,
      $Frente12,
      $Frente13,
      $Frente15,
      $Frente16,
      $Frente17,
      $Frente18,
      $Frente19,
      $Frente20,
      $Frente21,
      $Frente22,
      $Frente23,
      $Frente29,
      $Frente24,
      $Frente14,
      $Frente25,
      $Frente26,
      $Frente27,
      $Frente28,
      $Reves2,
      $Reves3,
      $Reves4,
      $Reves5,
      $Reves6,
      $Reves7,
      $Reves8,
      $Reves9,
      $Reves10,
      $Reves11,
      $Reves12,
      $Reves13,
      $Reves1,
      $Reves18,
      $Reves20,
      $Reves14,
      $Reves15,
      $rvs16,
      $Reves17,
      $Reves19,
      $Reves21,
      $Reves22,
    ]);

    // Verificar si la consulta fue exitosa
    if ($InspeccionC->rowCount() > 0) {
      $_SESSION["mensaje"] = "Registro realizado con éxito!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";
    } else {
      $_SESSION["mensaje"] = "No se insertaron datos en la base de datos.";
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";
    }
  } catch (PDOException $e) {
    // Capturar el error y mostrarlo
    $_SESSION["mensaje"] = "Error al insertar datos: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
    // Imprimir el error completo para depurar
    echo "Error: " . $e->getMessage();
  }
}


if (isset($_POST["formcontrolMariAdoba"])) {
  $cMariHorRegis = $_POST["cMariHorRegis"];
  $cMariArea = $_POST["cMariArea"];
  $cMariDespreProduc = $_POST["cMariDespreProduc"];
  $cMariDespreTem = $_POST["cMariDespreTem"];
  $cMariAdoProduc = $_POST["cMariAdoProduc"];
  $cMariAdoTem = $_POST["cMariAdoTem"];
  $cMariSalmuTem = $_POST["cMariSalmuTem"];
  $cMariAmbieTem = $_POST["cMariAmbieTem"];
  $cMariTrazaLote = $_POST["cMariTrazaLote"];
  $cMariTrazaFV = $_POST["cMariTrazaFV"];
  $cMariObserva = $_POST["cMariObserva"];
  $cMariAcciCorrec = $_POST["cMariAcciCorrec"];
  $cMariRespons = $_POST["cMariRespons"];
  $cMariAprobo = $_POST["cMariAprobo"];

  $sql = "INSERT INTO `02tz-f06`(`fecha`, `hora`, `area`, `despresProduc`, `despresTempe`, `marinaProduc`, `marinaTemp`, `salmueTemp`, `ambienTemp`, `trazabiliLote`,
     `trazabiliFV`, `observacion`, `accionCorrectiva`, `responsable`, `aprobo`) 
    VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $sentencia = $bdc->prepare($sql);

  try {
    $sentencia->execute([
      $cMariHorRegis,
      $cMariArea,
      $cMariDespreProduc,
      $cMariDespreTem,
      $cMariAdoProduc,
      $cMariAdoTem,
      $cMariSalmuTem,
      $cMariAmbieTem,
      $cMariTrazaLote,
      $cMariTrazaFV,
      $cMariObserva,
      $cMariAcciCorrec,
      $cMariRespons,
      $cMariAprobo,
    ]);

    $_SESSION["mensaje"] = "¡¡¡Registro Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } catch (PDOException $e) {
    file_put_contents("debug.txt", $e->getMessage(), FILE_APPEND);
    $_SESSION["mensaje"] = "Ha ocurrido un error en la base de datos.";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

if (isset($_POST["formConMariVerifi"])) {
  $cMariHoraVeri = $_POST["cMariHoraVeri"];
  $cMariAreaVeri = $_POST["cMariAreaVeri"];
  $cMariObserHallaz = $_POST["cMariObserHallaz"];
  $cMariVDesprProdu = $_POST["cMariVDesprProdu"];
  $cMariVDesprTemp = $_POST["cMariVDesprTemp"]; //temperatura de desprese
  $cMariVDesprTemp1 = $_POST["cMariVDesprTemp1"];
  $cMariVDesprTemp2 = $_POST["cMariVDesprTemp2"];
  $cMariVDesprTemp3 = $_POST["cMariVDesprTemp3"];
  $cMariVDesprTemp4 = $_POST["cMariVDesprTemp4"];
  $cMariVDesprTemp5 = $_POST["cMariVDesprTemp5"];
  $cMariVDesprTemp6 = $_POST["cMariVDesprTemp6"];
  $cMariVDesprTemp7 = $_POST["cMariVDesprTemp7"];
  $cMariVDesprTemp8 = $_POST["cMariVDesprTemp8"];
  $cMariVDesprTemp9 = $_POST["cMariVDesprTemp9"];
  $cMariVDesprTemp10 = $_POST["cMariVDesprTemp10"];
  $cMariVDesprTemp11 = $_POST["cMariVDesprTemp11"];
  $cMariVDesprTemp12 = $_POST["cMariVDesprTemp12"];
  $cMariVDesprTemp13 = $_POST["cMariVDesprTemp13"];
  $cMariVDesprTemp14 = $_POST["cMariVDesprTemp14"];
  $cMariVDesprTemp15 = $_POST["cMariVDesprTemp15"];
  $cMariVDesprTemp16 = $_POST["cMariVDesprTemp16"];

  $cMariAdoVProduc = $_POST["cMariAdoVProduc"];
  $cMariVAdoTemp = $_POST["cMariVAdoTemp"]; // temperatura de marinado
  $cMariVAdoTemp1 = $_POST["cMariVAdoTemp1"];
  $cMariVAdoTemp2 = $_POST["cMariVAdoTemp2"];
  $cMariVAdoTemp3 = $_POST["cMariVAdoTemp3"];
  $cMariVAdoTemp4 = $_POST["cMariVAdoTemp4"];
  $cMariVAdoTemp5 = $_POST["cMariVAdoTemp5"];
  $cMariVAdoTemp6 = $_POST["cMariVAdoTemp6"];
  $cMariVAdoTemp7 = $_POST["cMariVAdoTemp7"];
  $cMariVAdoTemp8 = $_POST["cMariVAdoTemp8"];
  $cMariVAdoTemp9 = $_POST["cMariVAdoTemp9"];
  $cMariVAdoTemp10 = $_POST["cMariVAdoTemp10"];
  $cMariVAdoTemp11 = $_POST["cMariVAdoTemp11"];
  $cMariVAdoTemp12 = $_POST["cMariVAdoTemp12"];
  $cMariVAdoTemp13 = $_POST["cMariVAdoTemp13"];
  $cMariVAdoTemp14 = $_POST["cMariVAdoTemp14"];
  $cMariVAdoTemp15 = $_POST["cMariVAdoTemp15"];
  $cMariVAdoTemp16 = $_POST["cMariVAdoTemp16"];

  $cMariVSalmuTemp = $_POST["cMariVSalmuTemp"];
  $cMariVSalmuTemp1 = $_POST["cMariVSalmuTemp1"];
  $cMariVSalmuTemp2 = $_POST["cMariVSalmuTemp2"];
  $cMariVAmbTemp = $_POST["cMariVAmbTemp"];
  $cMariVTrazaLote = $_POST["cMariVTrazaLote"];
  $cMariVTrazaFV = $_POST["cMariVTrazaFV"];
  $cMariSupervi = $_POST["cMariSupervi"];
  $cMariCoordCali = $_POST["cMariCoordCali"];
  $cMariAproboo = $_POST["cMariAproboo"];

  $sql = "INSERT INTO `02tz-f06 verificaciones`(`fecha`, `horaVerifi`, `areaVeri`, `observaHalla`, 
    `despresProduc`, `despresTempe`, `despresTempe1`, `despresTempe2`, `despresTempe3`, `despresTempe4`,
    `despresTempe5`,`despresTempe6`,`despresTempe7`,`despresTempe8`,`despresTempe9`,`despresTempe10`,
    `despresTempe11`,`despresTempe12`,`despresTempe13`,`despresTempe14`,`despresTempe15`,`despresTempe16`,  
    `marinaProduc`, `marinaTemp`, `marinaTemp1`, `marinaTemp2`, `marinaTemp3`, `marinaTemp4`,`marinaTemp5`,
    `marinaTemp6`,`marinaTemp7`,`marinaTemp8`,`marinaTemp9`,`marinaTemp10`,`marinaTemp11`,`marinaTemp12`,
    `marinaTemp13`,`marinaTemp14`,`marinaTemp15`,`marinaTemp16`,   `salmueTemp`, `salmueTemp1`, `salmueTemp2`, 
    `ambienTemp`, `trazabiliLote`, `trazabiliFV`, `supervisor`, `coordCalidad`, `aprobo`) 
    VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $sentencia = $bdc->prepare($sql);

  $sentencia->execute([
    $cMariHoraVeri,
    $cMariAreaVeri,
    $cMariObserHallaz,
    $cMariVDesprProdu,
    $cMariVDesprTemp,
    $cMariVDesprTemp1,
    $cMariVDesprTemp2,
    $cMariVDesprTemp3,
    $cMariVDesprTemp4,
    $cMariVDesprTemp5,
    $cMariVDesprTemp6,
    $cMariVDesprTemp7,
    $cMariVDesprTemp8,
    $cMariVDesprTemp9,
    $cMariVDesprTemp10,
    $cMariVDesprTemp11,
    $cMariVDesprTemp12,
    $cMariVDesprTemp13,
    $cMariVDesprTemp14,
    $cMariVDesprTemp15,
    $cMariVDesprTemp16,
    $cMariAdoVProduc,
    $cMariVAdoTemp,
    $cMariVAdoTemp1,
    $cMariVAdoTemp2,
    $cMariVAdoTemp3,
    $cMariVAdoTemp4,
    $cMariVAdoTemp5,
    $cMariVAdoTemp6,
    $cMariVAdoTemp7,
    $cMariVAdoTemp8,
    $cMariVAdoTemp9,
    $cMariVAdoTemp10,
    $cMariVAdoTemp11,
    $cMariVAdoTemp12,
    $cMariVAdoTemp13,
    $cMariVAdoTemp14,
    $cMariVAdoTemp15,
    $cMariVAdoTemp16,
    $cMariVSalmuTemp,
    $cMariVSalmuTemp1,
    $cMariVSalmuTemp2,
    $cMariVAmbTemp,
    $cMariVTrazaLote,
    $cMariVTrazaFV,
    $cMariSupervi,
    $cMariCoordCali,
    $cMariAproboo,
  ]);

  if ($sentencia->rowCount()) {
    $_SESSION["mensaje"] = "¡¡¡Verificaciones Realizadas de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
//---------------------------------------------------------------//-----------------------------------------------------
if (isset($_POST["formcontrolProcesos"])) {
  $cProsHoraR = $_POST["cProsHoraR"];
  $cProcArea = $_POST["cProcArea"];
  $cProcMuesProd = $_POST["cProcMuesProd"];
  $cProcMuesTem1 = $_POST["cProcMuesTem1"];
  $cProcMuesTem2 = $_POST["cProcMuesTem2"];
  $cProcMuesTem3 = $_POST["cProcMuesTem3"];
  $cProcMuesTem4 = $_POST["cProcMuesTem4"];
  $cProcMuesTem5 = $_POST["cProcMuesTem5"];
  $cProcAmbiTemp = $_POST["cProcAmbiTemp"];
  $cProcLote = $_POST["cProcLote"];
  $cProcFv = $_POST["cProcFv"];
  $cProcObserva = $_POST["cProcObserva"];
  $cProcAccCorrec = $_POST["cProcAccCorrec"];
  $cProcRespon = $_POST["cProcRespon"];
  $cProcAprobo = $_POST["cProcAprobo"];

  $sql = "INSERT INTO `02tz-f02`( `fecha`, `hora`, `area`, `muestraProducto`, `muestraTemp1`, `muestraTem2`, `muestraTem3`, `muestraTem4`,
     `muestraTem5`, `ambienTemp`, `trazabiliLote`, `trazabiliFV`, `observacion`, `accionCorrectiva`, `responsable`, `aprobo`)
     VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $sentencia = $bdc->prepare($sql);

  $sentencia->execute([
    $cProsHoraR,
    $cProcArea,
    $cProcMuesProd,
    $cProcMuesTem1,
    $cProcMuesTem2,
    $cProcMuesTem3,
    $cProcMuesTem4,
    $cProcMuesTem5,
    $cProcAmbiTemp,
    $cProcLote,
    $cProcFv,
    $cProcObserva,
    $cProcAccCorrec,
    $cProcRespon,
    $cProcAprobo,
  ]);

  if ($sentencia->rowCount()) {
    $_SESSION["mensaje"] = "¡¡¡Registro Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
if (isset($_POST["formcontrolVerifiProcesos"])) {
  $cProcVHora = $_POST["cProcVHora"];
  $cProcVArea = $_POST["cProcVArea"];
  $cProcVObHalla = $_POST["cProcVObHalla"];
  $cProcVMuesProd = $_POST["cProcVMuesProd"];
  $cProcVMuestTem1 = $_POST["cProcVMuestTem1"];
  $cProcVMuesTem2 = $_POST["cProcVMuesTem2"];
  $cProcVMuesTem3 = $_POST["cProcVMuesTem3"];
  $cProcVMuesTem4 = $_POST["cProcVMuesTem4"];
  $cProcVMuesTem5 = $_POST["cProcVMuesTem5"];
  $cProcVMuesTem6 = $_POST["cProcVMuesTem6"];
  $cProcVMuesTem7 = $_POST["cProcVMuesTem7"];
  $cProcVMuesTem8 = $_POST["cProcVMuesTem8"];
  $cProcVMuesTem9 = $_POST["cProcVMuesTem9"];
  $cProcVMuesTem10 = $_POST["cProcVMuesTem10"];
  $cProcVMuesTem11 = $_POST["cProcVMuesTem11"];
  $cProcVMuesTem12 = $_POST["cProcVMuesTem12"];
  $cProcVMuesTem13 = $_POST["cProcVMuesTem13"];
  $cProcVMuesTem14 = $_POST["cProcVMuesTem14"];
  $cProcVMuesTem15 = $_POST["cProcVMuesTem15"];
  $cProcVMuesTem16 = $_POST["cProcVMuesTem16"];
  $cProcVMuesTem17 = $_POST["cProcVMuesTem17"];
  $cProcVAmbiTem = $_POST["cProcVAmbiTem"];
  $cProcVLote = $_POST["cProcVLote"];
  $cProcVFv = $_POST["cProcVFv"];
  $cProcVSuperv = $_POST["cProcVSuperv"];
  $cProcVCoordCali = $_POST["cProcVCoordCali"];
  $cProcAproboo = $_POST["cProcAproboo"];

  $sql = "INSERT INTO `02tz-f02 verificaciones`(`fecha`, `horaVerifi`, `areaVeri`, `observaHalla`, 
    `muestraProducto`, `muestraTemp1`, `muestraTem2`, `muestraTem3`, `muestraTem4`, `muestraTem5`, `muestraTem6`,`muestraTem7`,`muestraTem8`,`muestraTem9`,`muestraTem10`,
    `muestraTem11`,`muestraTem12`,`muestraTem13`,`muestraTem14`,`muestraTem15`,`muestraTem16`,`muestraTem17`,
    `ambienTemp`, `trazabiliLote`, `trazabiliFV`, `supervisor`, `coordCalidad`, `aprobo`) 
    VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $sentencia = $bdc->prepare($sql);

  $sentencia->execute([
    $cProcVHora,
    $cProcVArea,
    $cProcVObHalla,
    $cProcVMuesProd,
    $cProcVMuestTem1,
    $cProcVMuesTem2,
    $cProcVMuesTem3,
    $cProcVMuesTem4,
    $cProcVMuesTem5,
    $cProcVMuesTem6,
    $cProcVMuesTem7,
    $cProcVMuesTem8,
    $cProcVMuesTem9,
    $cProcVMuesTem10,
    $cProcVMuesTem11,
    $cProcVMuesTem12,
    $cProcVMuesTem13,
    $cProcVMuesTem14,
    $cProcVMuesTem15,
    $cProcVMuesTem16,
    $cProcVMuesTem17,
    $cProcVAmbiTem,
    $cProcVLote,
    $cProcVFv,
    $cProcVSuperv,
    $cProcVCoordCali,
    $cProcAproboo,
  ]);

  if ($sentencia->rowCount()) {
    $_SESSION["mensaje"] = "¡¡¡Verificaciones Realizadas de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
if (isset($_POST["formProducPesaje"])) {
  $pesaRef = $_POST["pesaRef"];
  $pesaBache = $_POST["pesaBache"];
  $pesaConse = $_POST["pesaConse"];
  $pesaNomMPC = $_POST["pesaNomMPC"];
  $pesaLotIntMPC = $_POST["pesaLotIntMPC"];
  $pesaPeso = $_POST["pesaPeso"];
  $pesaNomMPNC = $_POST["pesaNomMPNC"];
  $pesaLotIntMPNC = $_POST["pesaLotIntMPNC"];
  $pesaPesoForm = $_POST["pesaPesoForm"];
  $pesaPesoEncon = $_POST["pesaPesoEncon"];
  $pesaObsMPNC = $_POST["pesaObsMPNC"];
  $pesaResponMPNC = $_POST["pesaResponMPNC"];
  $pesaHoraI = $_POST["pesaHoraI"];
  $pesaHoraFn = $_POST["pesaHoraFn"];
  $responPesaMPC = $_POST["responPesaMPC"];
  $pesaResponsaMPNC = $_POST["pesaResponsaMPNC"];
  $pesaVeriSuper = $_POST["pesaVeriSuper"];
  $pesajeObser = $_POST["pesajeObser"];

  $sqlPesa = "INSERT INTO `03pd-f01 pesaje`( `fechaProd`, `referencia`, `bachesProd`, `consecutivo`, `nomMPC`, `loteIntMPC`, `pesoMPC`, `nombreMPNC`, `loteIntMPNC`, `pesoFormu`,
     `pesoEncon`, `observ`, `respon`, `horaI`, `horaFn`, `resPesaMPC`, `resPesaMPNC`, `verifSuperv`, `observaciones`)
      VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $senPesaje = $bdc->prepare($sqlPesa);
  $senPesaje->execute([
    $pesaRef,
    $pesaBache,
    $pesaConse,
    $pesaNomMPC,
    $pesaLotIntMPC,
    $pesaPeso,
    $pesaNomMPNC,
    $pesaLotIntMPNC,
    $pesaPesoForm,
    $pesaPesoEncon,
    $pesaObsMPNC,
    $pesaResponMPNC,
    $pesaHoraI,
    $pesaHoraFn,
    $responPesaMPC,
    $pesaResponsaMPNC,
    $pesaVeriSuper,
    $pesajeObser,
  ]);

  if ($senPesaje->rowCount()) {
    $_SESSION["mensaje"] = "¡¡¡Formato Pesaje Enviado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
if (isset($_POST["formProducMezclado"])) {
  $mezLotInt = $_POST["mezLotInt"];
  $mezHoraI = $_POST["mezHoraI"];
  $mezHoraFn = $_POST["mezHoraFn"];
  $mezBache = $_POST["mezBache"];
  $tiempMezcl = $_POST["tiempMezcl"];
  $mezTextura = $_POST["mezTextura"];
  $mezColor = $_POST["mezColor"];
  $mezRespon = $_POST["mezRespon"];
  $mezVeri = $_POST["mezVeri"];
  $mezObserv = $_POST["mezObserv"];

  $sqlPesa = "INSERT INTO `03pd-f01 mezclado`(`fecha`, `loteInt`, `horaI`, `horaFn`, `numBache`, `timeMezcla`, `textura`, `color`,
     `responsable`, `verificacion`, `observacion`) 
     VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?)";

  $senPesaje = $bdc->prepare($sqlPesa);
  $bdc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $senPesaje->execute([
    $mezLotInt,
    $mezHoraI,
    $mezHoraFn,
    $mezBache,
    $tiempMezcl,
    $mezTextura,
    $mezColor,
    $mezRespon,
    $mezVeri,
    $mezObserv,
  ]);

  if ($senPesaje->rowCount()) {
    $_SESSION["mensaje"] = "¡¡¡Formato Mezclado Enviado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
if (isset($_POST["formProducEmbutido"])) {
  $embuLotInt = $_POST["embuLotInt"];
  $embuHoraI = $_POST["embuHoraI"];
  $embuHoraFn = $_POST["embuHoraFn"];
  $embuBache = $_POST["embuBache"];
  $embuRef = $_POST["embuRef"];
  $embuLotPV = $_POST["embuLotPV"];
  $embuCant = $_POST["embuCant"];
  $embuPesoCrudo = $_POST["embuPesoCrudo"];
  $embuLong = $_POST["embuLong"];
  $embuDiam = $_POST["embuDiam"];
  $embuRespon = $_POST["embuRespon"];
  $embuVerifi = $_POST["embuVerifi"];
  $embuObserv = $_POST["embuObserv"];

  $sqlPesa = "INSERT INTO `03pd-f01 embutido`(`fecha`, `loteInt`, `horaI`, `horaFn`, `numBache`, `referencia`, `lotePV`, `cantidad`, `pesoCrudo`, `longitud`, `diametro`,
     `responsable`, `verificacion`, `observacion`) 
     VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $senPesaje = $bdc->prepare($sqlPesa);

  $senPesaje->execute([
    $embuLotInt,
    $embuHoraI,
    $embuHoraFn,
    $embuBache,
    $embuRef,
    $embuLotPV,
    $embuCant,
    $embuPesoCrudo,
    $embuLong,
    $embuDiam,
    $embuRespon,
    $embuVerifi,
    $embuObserv,
  ]);

  if ($senPesaje->rowCount()) {
    $_SESSION["mensaje"] = "¡¡¡Formato Embutido Enviado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
if (isset($_POST["formProducCoAhu"])) {
  $coAhuLotInt = $_POST["coAhuLotInt"];
  $coAhuBache = $_POST["coAhuBache"];
  $coAhuHoraI = $_POST["coAhuHoraI"];
  $coAhuHoraFn = $_POST["coAhuHoraFn"];
  $coAhuHornoV = $_POST["coAhuHornoV"];
  $coAhuHornoCT = $_POST["coAhuHornoCT"];
  $coAhuTanque = $_POST["coAhuTanque"];
  $coAhuTNuProCon = $_POST["coAhuTNuProCon"];
  $coAhuResponCon = $_POST["coAhuResponCon"];
  $coAhuTiCoccion = $_POST["coAhuTiCoccion"];
  $coAhuTNuProVeri = $_POST["coAhuTNuProVeri"];
  $coAhuResponVeri = $_POST["coAhuResponVeri"];
  $coAhuObserv = $_POST["coAhuObserv"];

  /* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  $sqlPesa = "INSERT INTO `03pd-f01 coaccion_ahumado`(`fecha`, `loteInt`, `cantBaches`, `horaI`, `horaFn`, `hornoV`, `hornoCT`, `tanque`, `controlTNP`, `responsable`,
     `timeCoccion`, `verifiTNP`, `responsable1`, `observacion`) 
     VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $senPesaje = $bdc->prepare($sqlPesa);
  $car = $senPesaje;

  $senPesaje->execute([
    $coAhuLotInt,
    $coAhuBache,
    $coAhuHoraI,
    $coAhuHoraFn,
    $coAhuHornoV,
    $coAhuHornoCT,
    $coAhuTanque,
    $coAhuTNuProCon,
    $coAhuResponCon,
    $coAhuTiCoccion,
    $coAhuTNuProVeri,
    $coAhuResponVeri,
    $coAhuObserv,
  ]);

  if ($senPesaje->rowCount()) {
    $_SESSION["mensaje"] = "¡¡¡Formato Coaccion y Ahumado Enviado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
if (isset($_POST["formProducEmpaque"])) {
  $empLotInt = $_POST["empLotInt"];
  $empTemp1 = $_POST["empTemp1"];
  $empHora1 = $_POST["empHora1"];
  $empResp1 = $_POST["empResp1"];
  $empTemp2 = $_POST["empTemp2"];
  $empHora2 = $_POST["empHora2"];
  $empResp2 = $_POST["empResp2"];
  $empTemp3 = $_POST["empTemp3"];
  $empHora3 = $_POST["empHora3"];
  $empResp3 = $_POST["empResp3"];
  $empTemp4 = $_POST["empTemp4"];
  $empHora4 = $_POST["empHora4"];
  $empResp4 = $_POST["empResp4"];
  $empTemp5 = $_POST["empTemp5"];
  $empHora5 = $_POST["empHora5"];
  $empResp5 = $_POST["empResp5"];
  $empTemp6 = $_POST["empTemp6"];
  $empHora6 = $_POST["empHora6"];
  $empResp6 = $_POST["empResp6"];
  $empColor = $_POST["empColor"];
  $empOlor = $_POST["empOlor"];
  $empSabor = $_POST["empSabor"];
  $empTextura = $_POST["empTextura"];
  $empResponsa1 = $_POST["empResponsa1"];
  $empObser1 = $_POST["empObser1"];
  $empProduc = $_POST["empProduc"];
  $empLote = $_POST["empLote"];
  $empFV = $_POST["empFV"];
  $empCant = $_POST["empCant"];
  $empMatEmpa = $_POST["empMatEmpa"];
  $empLotPV = $_POST["empLotPV"];
  $empHoraI = $_POST["empHoraI"];
  $empHotaFn = $_POST["empHotaFn"];
  $empResponsa2 = $_POST["empResponsa2"];
  $empVerifi = $_POST["empVerifi"];
  $empFechaPeso = $_POST["empFechaPeso"];
  $empPeso1 = $_POST["empPeso1"];
  $empPeso2 = $_POST["empPeso2"];
  $empPeso3 = $_POST["empPeso3"];
  $empPeso4 = $_POST["empPeso4"];
  $empPeso5 = $_POST["empPeso5"];
  $empPeso6 = $_POST["empPeso6"];
  $empPeso7 = $_POST["empPeso7"];
  $empPeso8 = $_POST["empPeso8"];
  $empPeso9 = $_POST["empPeso9"];
  $empPeso10 = $_POST["empPeso10"];
  $empVeriCali = $_POST["empVeriCali"];
  $empAprobJProdu = $_POST["empAprobJProdu"];
  $empAprobJCali = $_POST["empAprobJCali"];
  $empObs2 = $_POST["empObs2"];
  /* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  $sqlPesa =
    "INSERT INTO `03pd-f01 empaque`( `fecha`, `loteInt`, `T1`, `H1`, `R1`, `T2`, `H2`, `R2`, `T3`, `H3`, `R3`, `T4`, `H4`, `R4`, `T5`, `H5`, `R5`, `T6`, `H6`, `R6`, `color`, `olor`, `sabor`, `textura`, `responsable`, `observacion`, `producto`, `lote`, `FV`, `cantidad`, `matEmpaque`, `lotePV`, `horaI`, `horaFn`, `responsable1`, `verifica`, `fechaPeso`, `peso1`, `peso2`, `peso3`, `peso4`, `peso5`, `peso6`, `peso7`, `peso8`, `peso9`, `peso10`, `verifiCalidad`, `jefeProd`, `jefeCalidad`, `observaciones`) VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  /*  VALUES (CURRENT_DATE(),[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11],[value-12],[value-13],[value-14],[value-15],[value-16],[value-17],[value-18],[value-19],[value-20]) */

  $senPesaje = $bdc->prepare($sqlPesa);
  $car = $senPesaje;

  $senPesaje->execute([
    $empLotInt,
    $empTemp1,
    $empHora1,
    $empResp1,
    $empTemp2,
    $empHora2,
    $empResp2,
    $empTemp3,
    $empHora3,
    $empResp3,
    $empTemp4,
    $empHora4,
    $empResp4,
    $empTemp5,
    $empHora5,
    $empResp5,
    $empTemp6,
    $empHora6,
    $empResp6,
    $empColor,
    $empOlor,
    $empSabor,
    $empTextura,
    $empResponsa1,
    $empObser1,
    $empProduc,
    $empLote,
    $empFV,
    $empCant,
    $empMatEmpa,
    $empLotPV,
    $empHoraI,
    $empHotaFn,
    $empResponsa2,
    $empVerifi,
    $empFechaPeso,
    $empPeso1,
    $empPeso2,
    $empPeso3,
    $empPeso4,
    $empPeso5,
    $empPeso6,
    $empPeso7,
    $empPeso8,
    $empPeso9,
    $empPeso10,
    $empVeriCali,
    $empAprobJProdu,
    $empAprobJCali,
    $empObs2,
  ]);

  if ($senPesaje->rowCount()) {
    $_SESSION["mensaje"] = "¡¡¡Formato Empaque Enviado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
if (isset($_POST["formDevoluciones"])) {
  $tipo = $_POST["devolReco"];
  $productos = $_POST["devolProduc"];
  $documentos = $_POST["devolDocum"];
  $NIT = $_POST["clientNit"];
  $clientes = $_POST["devolClient"];
  $cantidades = $_POST["devolCant"];
  $unidades = $_POST["devolUnidad"];
  $lotes = $_POST["devolLot"];
  $fvs = $_POST["devolFv"];
  $temperaturas = $_POST["devolTemp"];
  $destinos = $_POST["devolDestino"];
  $causas = $_POST["devolCausa"];
  $causaDestino = $_POST["devolCausaDestino"];
  $placas = $_POST["devolPlaca"];
  $rutas = $_POST["devolRuta"];
  $vendedores = $_POST["vendedor"];
  $devolRespCalis = $_POST["devolRespCali"];
  $devolRespDesps = $_POST["devolRespDesp"];
  $observaciones = $_POST["ObservDevol"];

  /* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  try {
    $sql =
      "INSERT INTO `02sqr-f01-devoluciones` (fecha, tipo_devol, producto, documento, nit, cliente, cantidad, unidad, lote, fv, temperatura, destino, causa, causa_dest, placa, ruta, vendedor, calidad, despachos, observacion) VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    $stmt = $con->prepare($sql);

    for ($i = 0; $i < count($productos); $i++) {
      $stmt->execute([
        $tipo[$i],
        $productos[$i],
        $documentos[$i],
        $NIT[$i],
        $clientes[$i],
        $cantidades[$i],
        $unidades[$i],
        $lotes[$i],
        $fvs[$i],
        $temperaturas[$i],
        $destinos[$i],
        $causas[$i],
        $causaDestino[$i],
        $placas[$i],
        $rutas[$i],
        $vendedores[$i],
        $devolRespCalis[$i],
        $devolRespDesps[$i],
        $observaciones[$i],
      ]);
    }

    if ($stmt->rowCount()) {
      $_SESSION["mensaje"] = "¡¡¡Devolucion Realizada de Manera Exitosa!!!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";
    } else {
      $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";
    }

    $_SESSION["form_submitted"] = true;

    echo "<script type='text/javascript'>";
    echo "alert('Submitted successfully')";
    echo "</script>";

    // header("Location: " . $_SERVER['REQUEST_URI']);
    // exit();
  } catch (PDOException $e) {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
if (isset($_POST["formTempDespa"])) {
  $tpdHora = $_POST["tpdHora"];
  $tpdTempAmb = $_POST["tpdTempAmb"];
  $tpdDestino = $_POST["tpdDestino"];
  $tpdPlacas = $_POST["tpdPlacas"];

  $tempDesPro1 = $_POST["tempDesPro1"];
  $tpdLote1 = $_POST["tpdLote1"];
  $tpdVenci1 = $_POST["tpdVenci1"];
  $tpdTemp1 = $_POST["tpdTemp1"];

  $tempDesPro2 = $_POST["tempDesPro2"];
  $tpdLote2 = $_POST["tpdLote2"];
  $tpdVenci2 = $_POST["tpdVenci2"];
  $tpdTemp2 = $_POST["tpdTemp2"];

  $tempDesPro3 = $_POST["tempDesPro3"];
  $tpdLote3 = $_POST["tpdLote3"];
  $tpdVenci3 = $_POST["tpdVenci3"];
  $tpdTemp3 = $_POST["tpdTemp3"];

  $tempDesPro4 = $_POST["tempDesPro4"];
  $tpdLote4 = $_POST["tpdLote4"];
  $tpdVenci4 = $_POST["tpdVenci4"];
  $tpdTemp4 = $_POST["tpdTemp4"];

  $tempDesPro5 = $_POST["tempDesPro5"];
  $tpdLote5 = $_POST["tpdLote5"];
  $tpdVenci5 = $_POST["tpdVenci5"];
  $tpdTemp5 = $_POST["tpdTemp5"];

  $tempDesPro6 = $_POST["tempDesPro6"];
  $tpdLote6 = $_POST["tpdLote6"];
  $tpdVenci6 = $_POST["tpdVenci6"];
  $tpdTemp6 = $_POST["tpdTemp6"];

  $tempDesPro7 = $_POST["tempDesPro7"];
  $tpdLote7 = $_POST["tpdLote7"];
  $tpdVenci7 = $_POST["tpdVenci7"];
  $tpdTemp7 = $_POST["tpdTemp7"];

  $tempDesPro8 = $_POST["tempDesPro8"];
  $tpdLote8 = $_POST["tpdLote8"];
  $tpdVenci8 = $_POST["tpdVenci8"];
  $tpdTemp8 = $_POST["tpdTemp8"];

  $tempDesPro9 = $_POST["tempDesPro9"];
  $tpdLote9 = $_POST["tpdLote9"];
  $tpdVenci9 = $_POST["tpdVenci9"];
  $tpdTemp9 = $_POST["tpdTemp9"];

  $tempDesPro10 = $_POST["tempDesPro10"];
  $tpdLote10 = $_POST["tpdLote10"];
  $tpdVenci10 = $_POST["tpdVenci10"];
  $tpdTemp10 = $_POST["tpdTemp10"];

  $tempDesPro11 = $_POST["tempDesPro11"];
  $tpdLote11 = $_POST["tpdLote11"];
  $tpdVenci11 = $_POST["tpdVenci11"];
  $tpdTemp11 = $_POST["tpdTemp11"];

  $tempDesPro12 = $_POST["tempDesPro12"];
  $tpdLote12 = $_POST["tpdLote12"];
  $tpdVenci12 = $_POST["tpdVenci12"];
  $tpdTemp12 = $_POST["tpdTemp12"];

  $tempDesPro13 = $_POST["tempDesPro13"];
  $tpdLote13 = $_POST["tpdLote13"];
  $tpdVenci13 = $_POST["tpdVenci13"];
  $tpdTemp13 = $_POST["tpdTemp13"];

  $tempDesPro14 = $_POST["tempDesPro14"];
  $tpdLote14 = $_POST["tpdLote14"];
  $tpdVenci14 = $_POST["tpdVenci14"];
  $tpdTemp14 = $_POST["tpdTemp14"];

  $tempDesPro15 = $_POST["tempDesPro15"];
  $tpdLote15 = $_POST["tpdLote15"];
  $tpdVenci15 = $_POST["tpdVenci15"];
  $tpdTemp15 = $_POST["tpdTemp15"];

  $tempDesPro16 = $_POST["tempDesPro16"];
  $tpdLote16 = $_POST["tpdLote16"];
  $tpdVenci16 = $_POST["tpdVenci16"];
  $tpdTemp16 = $_POST["tpdTemp16"];

  $tempDesPro17 = $_POST["tempDesPro17"];
  $tpdLote17 = $_POST["tpdLote17"];
  $tpdVenci17 = $_POST["tpdVenci17"];
  $tpdTemp17 = $_POST["tpdTemp17"];

  $tpdRealizo = $_POST["tpdRealizo"];
  $tpdObserv = $_POST["tpdObserv"];
  $tpdCorrect = $_POST["tpdCorrect"];
  $tpdAprobo = $_POST["tpdAprobo"];

  /* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  $sqlTempDesp = "INSERT INTO `02tz-f01 temp_produc_despa`(`fecha`, `hora`, `tempAmbiente`, `destino`, `placas`, `producto1`, `lote1`, `vencimiento1`, `temperatura1`,
     `producto2`, `lote2`, `vencimiento2`, `temperatura2`, `producto3`, `lote3`, `vencimiento3`, `temperatura3`, `producto4`, `lote4`, `vencimiento4`, `temperatura4`,
      `producto5`, `lote5`, `vencimiento5`, `temperatura5`, `producto6`, `lote6`, `vencimiento6`, `temperatura6`, `producto7`, `lote7`, `vencimiento7`, `temperatura7`,
       `producto8`, `lote8`, `vencimiento8`, `temperatura8`, `producto9`, `lote9`, `vencimiento9`, `temperatura9`, `producto10`, `lote10`, `vencimiento10`, `temperatura10`,
       `producto11`, `lote11`, `vencimiento11`, `temperatura11`, `producto12`, `lote12`, `vencimiento12`, `temperatura12`, `producto13`, `lote13`, `vencimiento13`, `temperatura13`,
       `producto14`, `lote14`, `vencimiento14`, `temperatura14`, `producto15`, `lote15`, `vencimiento15`, `temperatura15`, `producto16`, `lote16`, `vencimiento16`, `temperatura16`,
        `producto17`, `lote17`, `vencimiento17`, `temperatura17`, `realizo`, `observacion`, `correctivo`, `aprobo`) 
        VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $senTempDesp = $bdc->prepare($sqlTempDesp);
  $car = $senTempDesp;

  $senTempDesp->execute([
    $tpdHora,
    $tpdTempAmb,
    $tpdDestino,
    $tpdPlacas,
    $tempDesPro1,
    $tpdLote1,
    $tpdVenci1,
    $tpdTemp1,
    $tempDesPro2,
    $tpdLote2,
    $tpdVenci2,
    $tpdTemp2,
    $tempDesPro3,
    $tpdLote3,
    $tpdVenci3,
    $tpdTemp3,
    $tempDesPro4,
    $tpdLote4,
    $tpdVenci4,
    $tpdTemp4,
    $tempDesPro5,
    $tpdLote5,
    $tpdVenci5,
    $tpdTemp5,
    $tempDesPro6,
    $tpdLote6,
    $tpdVenci6,
    $tpdTemp6,
    $tempDesPro7,
    $tpdLote7,
    $tpdVenci7,
    $tpdTemp7,
    $tempDesPro8,
    $tpdLote8,
    $tpdVenci8,
    $tpdTemp8,
    $tempDesPro9,
    $tpdLote9,
    $tpdVenci9,
    $tpdTemp9,
    $tempDesPro10,
    $tpdLote10,
    $tpdVenci10,
    $tpdTemp10,
    $tempDesPro11,
    $tpdLote11,
    $tpdVenci11,
    $tpdTemp11,
    $tempDesPro12,
    $tpdLote12,
    $tpdVenci12,
    $tpdTemp12,
    $tempDesPro13,
    $tpdLote13,
    $tpdVenci13,
    $tpdTemp13,
    $tempDesPro14,
    $tpdLote14,
    $tpdVenci14,
    $tpdTemp14,
    $tempDesPro15,
    $tpdLote15,
    $tpdVenci15,
    $tpdTemp15,
    $tempDesPro16,
    $tpdLote16,
    $tpdVenci16,
    $tpdTemp16,
    $tempDesPro17,
    $tpdLote10,
    $tpdVenci10,
    $tpdTemp10,
    $tpdRealizo,
    $tpdObserv,
    $tpdCorrect,
    $tpdAprobo,
  ]);

  if ($senTempDesp->rowCount()) {
    $_SESSION["mensaje"] =
      "¡¡¡Control Temperatura Productos Despachados Realizada de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
if (isset($_POST["formPccEviscera"])) {
  $debug = fopen("debug.txt", "a+");
  fwrite($debug, "Entró al if del formulario\n");
  fwrite($debug, "== Registro de Formulario: " . date("Y-m-d H:i:s") . " ==\n");

  $campos = [
    "pccViscHora",
    "tipoAveConVis",
    "pccViscRespo",
    "HM01",
    "HM02",
    "HM03",
    "HM04",
    "HM05",
    "HTemperaturaC",
    "MM01",
    "MM02",
    "MM03",
    "MM04",
    "MM05",
    "MTemperaturaC",
    "PM01",
    "PM02",
    "PM03",
    "PM04",
    "PM05",
    "PTemperaturaC",
    "CM01",
    "CM02",
    "CM03",
    "CM04",
    "CM05",
    "CTemperaturaC",
    "pccEvisCodigo",
    "pccVisclote",
    "pccObservaciones",
    "pccViscAprobo",
  ];

  // Captura de variables y log
  foreach ($campos as $campo) {
    $$campo = $_POST[$campo] ?? null;
    fwrite($debug, "$campo: " . $$campo . "\n");
  }

  // Consulta sin campos de cloro ni porcentaje
  $sqlEvisc = "INSERT INTO `02hc_f02_visceras` 
    (`fecha`, `hora`, `tipoAve`, `responsable`, 
    `hm1`, `hm2`, `hm3`, `hm4`, `hm5`, `htemp`,
    `mm1`, `mm2`, `mm3`, `mm4`, `mm5`, `mtemp`,
    `pm1`, `pm2`, `pm3`, `pm4`, `pm5`, `ptemp`,
    `cm1`, `cm2`, `cm3`, `cm4`, `cm5`, `ctemp`,
    `codigo`, `lote`, `observaciones`, `aprobo`) 
    VALUES (CURRENT_DATE(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  $senEvisc = $bdc->prepare($sqlEvisc);
  fwrite($debug, "Consulta preparada correctamente\n");

  $senEvisc->execute([
    $pccViscHora,
    $tipoAveConVis,
    $pccViscRespo,
    $HM01,
    $HM02,
    $HM03,
    $HM04,
    $HM05,
    $HTemperaturaC,
    $MM01,
    $MM02,
    $MM03,
    $MM04,
    $MM05,
    $MTemperaturaC,
    $PM01,
    $PM02,
    $PM03,
    $PM04,
    $PM05,
    $PTemperaturaC,
    $CM01,
    $CM02,
    $CM03,
    $CM04,
    $CM05,
    $CTemperaturaC,
    $pccEvisCodigo,
    $pccVisclote,
    $pccObservaciones,
    $pccViscAprobo,
  ]);

  fwrite($debug, "Consulta ejecutada\n");
  fwrite($debug, "Filas insertadas: " . $senEvisc->rowCount() . "\n");
  fclose($debug);

  if ($senEvisc->rowCount()) {
    $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
if (isset($_POST["formPccEviscVerifi"])) {
  $evisVerifiHora = $_POST["evisVerifiHora"];
  $VHM1 = $_POST["VHM1"];
  $VHM2 = $_POST["VHM2"];
  $VHM3 = $_POST["VHM3"];
  $VHM4 = $_POST["VHM4"];
  $VHM5 = $_POST["VHM5"];
  $VHM6 = $_POST["VHM6"];
  $VHM7 = $_POST["VHM7"];
  $VHM8 = $_POST["VHM8"];
  $VHM9 = $_POST["VHM9"];
  $VHM10 = $_POST["VHM10"];
  $VHM11 = $_POST["VHM11"];
  $VHM12 = $_POST["VHM12"];
  $VHM13 = $_POST["VHM13"];
  $VHM14 = $_POST["VHM14"];
  $VHM15 = $_POST["VHM15"];
  $VHM16 = $_POST["VHM16"];
  $VHM17 = $_POST["VHM17"];
  $VHTemperaturaC = $_POST["VHTemperaturaC"];
  $VMM1 = $_POST["VMM1"];
  $VMM2 = $_POST["VMM2"];
  $VMM3 = $_POST["VMM3"];
  $VMM4 = $_POST["VMM4"];
  $VMM5 = $_POST["VMM5"];
  $VMM6 = $_POST["VMM6"];
  $VMM7 = $_POST["VMM7"];
  $VMM8 = $_POST["VMM8"];
  $VMM9 = $_POST["VMM9"];
  $VMM10 = $_POST["VMM10"];
  $VMM11 = $_POST["VMM11"];
  $VMM12 = $_POST["VMM12"];
  $VMM13 = $_POST["VMM13"];
  $VMM14 = $_POST["VMM14"];
  $VMM15 = $_POST["VMM15"];
  $VMM16 = $_POST["VMM16"];
  $VMM17 = $_POST["VMM17"];
  $VMTemperaturaC = $_POST["VMTemperaturaC"];
  $VPM1 = $_POST["VPM1"];
  $VPM2 = $_POST["VPM2"];
  $VPM3 = $_POST["VPM3"];
  $VPM4 = $_POST["VPM4"];
  $VPM5 = $_POST["VPM5"];
  $VPM6 = $_POST["VPM6"];
  $VPM7 = $_POST["VPM7"];
  $VPM8 = $_POST["VPM8"];
  $VPM9 = $_POST["VPM9"];
  $VPM10 = $_POST["VPM10"];
  $VPM11 = $_POST["VPM11"];
  $VPM12 = $_POST["VPM12"];
  $VPM13 = $_POST["VPM13"];
  $VPM14 = $_POST["VPM14"];
  $VPM15 = $_POST["VPM15"];
  $VPM16 = $_POST["VPM16"];
  $VPM17 = $_POST["VPM17"];
  $VPTemperaturaC = $_POST["VPTemperaturaC"];
  $VCM1 = $_POST["VCM1"];
  $VCM2 = $_POST["VCM2"];
  $VCM3 = $_POST["VCM3"];
  $VCM4 = $_POST["VCM4"];
  $VCM5 = $_POST["VCM5"];
  $VCM6 = $_POST["VCM6"];
  $VCM7 = $_POST["VCM7"];
  $VCM8 = $_POST["VCM8"];
  $VCM9 = $_POST["VCM9"];
  $VCM10 = $_POST["VCM10"];
  $VCM11 = $_POST["VCM11"];
  $VCM12 = $_POST["VCM12"];
  $VCM13 = $_POST["VCM13"];
  $VCM14 = $_POST["VCM14"];
  $VCM15 = $_POST["VCM15"];
  $VCM16 = $_POST["VCM16"];
  $VCM17 = $_POST["VCM17"];
  $VCTemperaturaC = $_POST["VCTemperaturaC"];
  $pccEviscObserv = $_POST["pccEviscObserv"];
  $pccEviscResposanble = $_POST["pccEviscResposanble"];
  $pccEviscAprobo = $_POST["pccEviscAprobo"];

  $sqlEviVeri = "INSERT INTO `02hc-f02 verificacion_visceras`(`fecha`, `hora`, `hm1`, `hm2`, `hm3`, `hm4`,`hm5`,`hm6`,`hm7`,`hm8`,`hm9`,`hm10`,`hm11`,
    `hm12`,`hm13`,`hm14`,`hm15`,`hm16`,`hm17`, `htemp`, `mm1`, `mm2`, `mm3`,`mm4`, `mm5`, `mm6`, `mm7`, `mm8`, `mm9`, `mm10`, `mm11`, `mm12`, `mm13`, `mm14`,
     `mm15`, `mm16`, `mm17`,  `mtemp`, `pm1`, `pm2`, `pm3`,`pm4`,`pm5`,`pm6`,`pm7`,`pm8`,`pm9`,`pm10`,`pm11`,`pm12`,`pm13`,`pm14`, `pm15`,`pm16`,`pm17`,
      `ptemp`, `cm1`, `cm2`, `cm3`,`cm4`,`cm5`,`cm6`,`cm7`,`cm8`,`cm9`,`cm10`,`cm11`,`cm12`,`cm13`,`cm14`,`cm15`,`cm16`,`cm17`, `ctemp`, `observacion`,
       `reponsable`, `aprobo`) 
    VALUES (CURRENT_DATE(),?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,
    ?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $senEviVeri = $bdc->prepare($sqlEviVeri);
  $car = $senEviVeri;

  $senEviVeri->execute([
    $evisVerifiHora,
    $VHM1,
    $VHM2,
    $VHM3,
    $VHM4,
    $VHM5,
    $VHM6,
    $VHM7,
    $VHM8,
    $VHM9,
    $VHM10,
    $VHM11,
    $VHM12,
    $VHM13,
    $VHM14,
    $VHM15,
    $VHM16,
    $VHM17,
    $VHTemperaturaC,
    $VMM1,
    $VMM2,
    $VMM3,
    $VMM4,
    $VMM5,
    $VMM6,
    $VMM7,
    $VMM8,
    $VMM9,
    $VMM10,
    $VMM11,
    $VMM12,
    $VMM13,
    $VMM14,
    $VMM15,
    $VMM16,
    $VMM17,
    $VMTemperaturaC,
    $VPM1,
    $VPM2,
    $VPM3,
    $VPM4,
    $VPM5,
    $VPM6,
    $VPM7,
    $VPM8,
    $VPM9,
    $VPM10,
    $VPM11,
    $VPM12,
    $VPM13,
    $VPM14,
    $VPM15,
    $VPM16,
    $VPM17,
    $VPTemperaturaC,
    $VCM1,
    $VCM2,
    $VCM3,
    $VCM4,
    $VCM5,
    $VCM6,
    $VCM7,
    $VCM8,
    $VCM9,
    $VCM10,
    $VCM11,
    $VCM12,
    $VCM13,
    $VCM14,
    $VCM15,
    $VCM16,
    $VCM17,
    $VCTemperaturaC,
    $pccEviscObserv,
    $pccEviscResposanble,
    $pccEviscAprobo,
  ]);

  if ($senEviVeri->rowCount()) {
    $_SESSION["mensaje"] = "Verificacion Realizada de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "Ha Ocurrido Un Error En El Envio del Formulario";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

//------------------------- inspeccion pre operativo planta de sacrificio -----------------------------
if (isset($_POST["formPreOperativo"])) {
  $selectEsc = $_POST["selectEsc"];
  $spfEsc = implode(" , ", $selectEsc);
  $pcEscaldado = $_POST["pcEscaldado"];
  $correctivoEscaldado = $_POST["correctivoEscaldado"];
  $novedadEscaldado = $_POST["novedadEscaldado"];

  $selectEscaldados = $_POST["selectEscaldados"];
  $spfEscaldados = implode(" , ", $selectEscaldados);
  $pcEscaldados = $_POST["pcEscaldados"];
  $correctivoEscaldados = $_POST["correctivoEscaldados"];
  $novedadEscaldados = $_POST["novedadEscaldados"];

  $selectEvisc = $_POST["selectEvisc"];
  $spfEvisc = implode(" , ", $selectEvisc);
  $pcEviscera = $_POST["pcEviscera"];
  $correctivoEviscera = $_POST["correctivoEviscera"];
  $novedadEviscera = $_POST["novedadEviscera"];

  $selectViscera = $_POST["selectViscera"];
  $spfViscera = implode(" , ", $selectViscera);
  $pcVisceras = $_POST["pcVisceras"];
  $correctivoVisceras = $_POST["correctivoVisceras"];
  $novedadVisceras = $_POST["novedadVisceras"];

  $selectEnfri = $_POST["selectEnfri"];
  $spfEnfri = implode(" , ", $selectEnfri);
  $pcEnfriamiento = $_POST["pcEnfriamiento"];
  $correctivoEnfriamiento = $_POST["correctivoEnfriamiento"];
  $novedadEnfriamiento = $_POST["novedadEnfriamiento"];

  $selectDespre = $_POST["selectDespre"];
  $spfDesprese = implode(" , ", $selectDespre);
  $pcDesprese = $_POST["pcDesprese"];
  $correctivoDesprese = $_POST["correctivoDesprese"];
  $novedadDesprese = $_POST["novedadDesprese"];

  $selectDeshuese = $_POST["selectDeshuese"];
  $spfDeshuese = implode(" , ", $selectDeshuese);
  $pcDeshuese = $_POST["pcDeshuese"];
  $correctivoDeshuese = $_POST["correctivoDeshuese"];
  $novedadDeshuese = $_POST["novedadDeshuese"];

  $selectFileteo = $_POST["selectFileteo"];
  $spfFileteo = implode(" , ", $selectFileteo);
  $pcFileteo = $_POST["pcFileteo"];
  $correctivoFileteo = $_POST["correctivoFileteo"];
  $novedadFileteo = $_POST["novedadFileteo"];

  $selectPosProc = $_POST["selectPosProc"];
  $spfPosProc = implode(" , ", $selectPosProc);
  $pcProceso = $_POST["pcProceso"];
  $correctivoProceso = $_POST["correctivoProceso"];
  $novedadProceso = $_POST["novedadProceso"];

  $selectHielo = $_POST["selectHielo"];
  $spfHielo = implode(" , ", $selectHielo);
  $pcHielo = $_POST["pcHielo"];
  $correctivoHielo = $_POST["correctivoHielo"];
  $novedadHielo = $_POST["novedadHielo"];

  $selectAlimen = $_POST["selectAlimen"];
  $spfAlimen = implode(" , ", $selectAlimen);
  $pcAlimenta = $_POST["pcAlimenta"];
  $correctivoAlimentacion = $_POST["correctivoAlimentacion"];
  $novedadAlimentacion = $_POST["novedadAlimentacion"];
  
  $selectCanast = $_POST["selectCanast"];
  $spfCanast = implode(" , ", $selectCanast);
  $pcCanastilla = $_POST["pcCanastilla"];
  $correctivoCanastilla = $_POST["correctivoCanastilla"];
  $novedadCanastilla = $_POST["novedadCanastilla"];
  
  $selectLavan = $_POST["selectLavan"];
  $spfLavan = implode(" , ", $selectLavan);
  $pcLavanderia = $_POST["pcLavanderia"];
  $correctivoLavanderia = $_POST["correctivoLavanderia"];
  $novedadLavanderia = $_POST["novedadLavanderia"];

  $selectCarnes = $_POST['selectCarnes'];
  $spfCarnes = implode(" , ",$selectCarnes);
  $pcCarnes = $_POST['pcCarnes'];
  $correctivoCarnes = $_POST['correctivoCarnes'];
  $novedadCarnes = $_POST['novedadCarnes'];
  
  $calidadPreOpe = $_POST["calidadPreOpe"];
  $cumplimientoFinal = $_POST["pCumplimientoPreOpe"];
  $correctivoPreOpe = $_POST["correctivoPreOpe"];
  $invimaPreOpe = $_POST["invimaPreOpe"];
  $aproboPreOpe = $_POST["aproboPreOpe"];
  $img = $_POST["base64"];  
  
 $inserts = [

   "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES(CURRENT_DATE(),'1','$spfEsc','$novedadEscaldado', '$correctivoEscaldado','$pcEscaldado','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')",

    "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES(CURRENT_DATE(),'2','$spfEscaldados','$novedadEscaldados', '$correctivoEscaldados','$pcEscaldados','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')",
    
    "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES (CURRENT_DATE(),'3','$spfEvisc', '$novedadEviscera', '$correctivoEviscera','$pcEviscera','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')",

    "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES (CURRENT_DATE(),'4','$spfViscera', '$novedadVisceras', '$correctivoVisceras','$pcVisceras','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')",

    "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES (CURRENT_DATE(),'5','$spfEnfri', '$novedadEnfriamiento', '$correctivoEnfriamiento','$pcEnfriamiento','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')",

    "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES (CURRENT_DATE(),'6','$spfDeshuese', '$novedadDeshuese', '$correctivoDeshuese','$pcDeshuese','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')",

    "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES (CURRENT_DATE(),'7','$spfDesprese', '$novedadDesprese', '$correctivoDesprese','$pcDesprese','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')",

    "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES (CURRENT_DATE(),'8','$spfFileteo', '$novedadFileteo', '$correctivoFileteo','$pcFileteo','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')",

    "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES (CURRENT_DATE(),'9','$spfPosProc', '$novedadProceso', '$correctivoProceso','$pcProceso','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')",

    "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES (CURRENT_DATE(),'10','$spfHielo', '$novedadHielo', '$correctivoHielo','$pcHielo','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')",

    "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES (CURRENT_DATE(),'11','$spfAlimen', '$novedadAlimentacion', '$correctivoAlimentacion','$pcAlimenta','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')",

    "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES (CURRENT_DATE(),'12','$spfCanast', '$novedadCanastilla', '$correctivoCanastilla','$pcCanastilla','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')",

    "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES (CURRENT_DATE(),'13','$spfLavan', '$novedadLavanderia', '$correctivoLavanderia','$pcLavanderia','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')",

    "INSERT INTO `02ld-f01 pre_operativo`( `fecha`, `area`, `superficie`, `novedad`, `observacion`, `cumplimiento`, `cTotal`, `calidad`, `correccion`, `respon_invima`, `aprobo`, `firm_invima`) VALUES (CURRENT_DATE(),'14','$spfCarnes', '$novedadCarnes', '$correctivoCarnes','$pcCarnes','$cumplimientoFinal','$calidadPreOpe','$correctivoPreOpe','$invimaPreOpe','$aproboPreOpe','$img')"
  ];

try {
      $bdc->beginTransaction(); // inicia transacción

      foreach ($inserts as $sql) {
          $stmt = $bdc->prepare($sql);
          $stmt->execute();
      }

      $bdc->commit(); // confirma si todo salió bien
      $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";

  } catch (PDOException $e) {
      $bdc->rollBack(); // deshace si hay error
      $_SESSION["mensaje"] = "Error al guardar: " . $e->getMessage();
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";
  }
  
}

//-------------------------------------------------------------------------------------------------------
if (isset($_POST["formVariablesProc"])) {
  $muestreoPreOpe1 = $_POST["muestreoPreOpe1"];
  $muestreoPreOpe2 = $_POST["muestreoPreOpe2"];
  $muestreoPreOpe3 = $_POST["muestreoPreOpe3"];
  $muestreoPreOpe4 = $_POST["muestreoPreOpe4"];

  $horaPreOpe1 = $_POST["horaPreOpe1"];
  $horaPreOpe2 = $_POST["horaPreOpe2"];
  $horaPreOpe3 = $_POST["horaPreOpe3"];
  $horaPreOpe4 = $_POST["horaPreOpe4"];

  $cloroPreOpe1 = $_POST["cloroPreOpe1"];
  $cloroPreOpe2 = $_POST["cloroPreOpe2"];
  $cloroPreOpe3 = $_POST["cloroPreOpe3"];
  $cloroPreOpe4 = $_POST["cloroPreOpe4"];

  $desinPreOpe1 = $_POST["desinPreOpe1"];
  $desinPreOpe2 = $_POST["desinPreOpe2"];
  $desinPreOpe3 = $_POST["desinPreOpe3"];
  $desinPreOpe4 = $_POST["desinPreOpe4"];

  $esterilizaPreOpe1 = $_POST["esterilizaPreOpe1"];
  $esterilizaPreOpe2 = $_POST["esterilizaPreOpe2"];
  $esterilizaPreOpe3 = $_POST["esterilizaPreOpe3"];
  $esterilizaPreOpe4 = $_POST["esterilizaPreOpe4"];

  $vProceso = "INSERT INTO `02ld-f01 preope_variable`(`fecha`, `ptoMuestreo`, `hora`, `cloro`, `desinf`, `esteriliza`) VALUES (CURRENT_DATE(),'$muestreoPreOpe1','$horaPreOpe1','$cloroPreOpe1','$desinPreOpe1','$esterilizaPreOpe1');

    INSERT INTO `02ld-f01 preope_variable`(`fecha`, `ptoMuestreo`, `hora`, `cloro`, `desinf`, `esteriliza`) VALUES (CURRENT_DATE(),'$muestreoPreOpe2','$horaPreOpe2','$cloroPreOpe2','$desinPreOpe2','$esterilizaPreOpe2');

    INSERT INTO `02ld-f01 preope_variable`(`fecha`, `ptoMuestreo`, `hora`, `cloro`, `desinf`, `esteriliza`) VALUES (CURRENT_DATE(),'$muestreoPreOpe3','$horaPreOpe3','$cloroPreOpe3','$desinPreOpe3','$esterilizaPreOpe3');

    INSERT INTO `02ld-f01 preope_variable`(`fecha`, `ptoMuestreo`, `hora`, `cloro`, `desinf`, `esteriliza`) VALUES (CURRENT_DATE(),'$muestreoPreOpe4','$horaPreOpe4','$cloroPreOpe4','$desinPreOpe4','$esterilizaPreOpe4');";

  try {
    /* $bdc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     $bdc->setAttribute(PDO::ATTR_EMULATE_PREPARES, false); */
    $VariablePro = $bdc->prepare($vProceso);
    $VariablePro->execute();
  } catch (Exception $e) {
    $_SESSION["mensaje"] = $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }

  if ($VariablePro->rowCount()) {
    $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } /* else {
        $_SESSION['mensaje'] = "$bdc->errorInfo()";
        $_SESSION['tipo'] = 'danger';
        $_SESSION['icon'] = 'exclamation-triangle-fill';
    } */
}

if (isset($_POST["formVeriFrenteBPM"])) {
  $inpNombreBPM = $_POST["inpNombreBPM"];
  $QRCEDULA = $_POST["QRCEDULA"];
  $inpCargoBPM = $_POST["inpCargoBPM"];
  $inpCcostoBPM = $_POST["inpCcostoBPM"];
  $inpDescripcionBPM = $_POST["inpDescripcionBPM"];
  $selectFrenteBPM = $_POST["selectFrenteBPM"];
  $sfBPM = implode(" , ", $selectFrenteBPM);
  $pcBPM = $_POST["pcBPM"];
  $responsableFrenteBPM = $_POST["responsableFrenteBPM"];
  $apruebaFrenteBPM = $_POST["apruebaFrenteBPM"];
  $firmabpm = $_POST["base64BPM"];
  $selectRevesBPM = $_POST["selectRevesBPM"];
  $sfBPM1 = implode(" , ", $selectRevesBPM);

  $consultar = "INSERT INTO `02ees_f02_frente_bpm`( `nombre`, `cedula`, `cargo`, `ccosto`, `descripcion`, `verificacion`, `cumplimiento`, `fecHora`, `responsable`, `aprueba`, `firma`, `correctivo`)
     VALUES ('$inpNombreBPM','$QRCEDULA','$inpCargoBPM','$inpCcostoBPM','$inpDescripcionBPM','$sfBPM','$pcBPM',CURRENT_TIMESTAMP(),'$responsableFrenteBPM','$apruebaFrenteBPM','$firmabpm','$sfBPM1')";

  $consu = $bdc->prepare($consultar);
  $consu->execute();

  if ($consu->rowCount()) {
    $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "$bdc->$errorInfo()";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

if (isset($_POST["formEmpaque"])) {
  $fecha = $_POST["ControlEmpaFecha"];
  $producto = $_POST["ControlEmpaProduct"];
  $lote_producto_terminado = $_POST["ControlEmpaTermi"];
  $fecha_de_vencimiento = $_POST["ControlEmpaFechaV"];
  $cantidad_unidades = $_POST["ControlEmpaCanti"];
  $registro_sanitario = $_POST["ControlEmpaRegis"];
  $material_de_empaque = $_POST["ControlEmpaMate"];
  $lote_material_de_empaque = $_POST["ControlEmpaLibe"];
  $observacion = $_POST["ControlEmpaObser"];
  $responsable = $_POST["ControlEmpaRespo"];
  $verifica = $_POST["ControlEmpaVerificado"];
  $aprobo = $_POST["ControlEmpaAprobó"];

  $consult = "INSERT INTO `for-e-ctr-122-control-material-empaque`(`fecha`, `producto`, `lote_producto_terminado`, `fecha_de_vencimiento`, `cantidad_unidades`, `registro_sanitario`,
     `material_de_empaque`, `lote_material_de_empaque`, `observacion`, `responsable`, `verifica`, `aprobo`) 
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

  $Empaque = $bdc->prepare($consult);
  $Empaque->execute([
    $fecha,
    $producto,
    $lote_producto_terminado,
    $fecha_de_vencimiento,
    $cantidad_unidades,
    $registro_sanitario,
    $material_de_empaque,
    $lote_material_de_empaque,
    $observacion,
    $responsable,
    $verifica,
    $aprobo,
  ]);

  //$Empaque -> execute();

  if ($Empaque->rowCount()) {
    $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "No se pudo enviar el reporte";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

if (isset($_POST["formControlCloro"])) {
  try {
    $fechaCloro = $_POST["ControlCloroFecha"];
    $horaCloro = $_POST["ControlCloroHora"];
    $muestraCloro = $_POST["ControlCloroMuestra"];
    $cloroCloro = $_POST["ControlCloroCloro"];
    $correctivasCloro = $_POST["ControlCloroCorrectivas"];
    $verificaCloro = $_POST["ControlCloroVerificado"];
    $aprobo = $_POST["ControlCloroAprobo"];

    $consultar = "INSERT INTO `for-e-ctr-22-control-cloro`
            (`fecha`, `hora`, `muestra`, `cloro`, `correctivo`, `verifica`, `aprobo`) 
            VALUES (?, ?, ?, ?, ?, ?, ?)";

    $consu = $bdc->prepare($consultar);
    $consu->execute([
      $fechaCloro,
      $horaCloro,
      $muestraCloro,
      $cloroCloro,
      $correctivasCloro,
      $verificaCloro,
      $aprobo,
    ]);

    if ($consu->rowCount()) {
      $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";
    } else {
      $_SESSION["mensaje"] = "No se insertaron registros.";
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";
    }
  } catch (PDOException $e) {
    $_SESSION["mensaje"] = "Error: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

//---------------------------------------------------------------------------------------//-----------------------------------------------------------------------

if (isset($_POST["formAuditoriaProceso"])) {

    // =============================================
    // DATOS GENERALES (se repiten en todas las filas)
    // =============================================
    $area = $_POST["area"];
    $observacionesGenerales = $_POST["observaciones"] ?? ""; // ← OBSERVACIONES GENERALES
    $auditoriaFecha = isset($_POST["fecha_creacion"]) ? $_POST["fecha_creacion"] : date("Y-m-d");
    $auditoriaCalidad = $_POST["calidadResponsable"];
    $porcentajeGlobal = $_POST["porcentaje"]; // ← PORCENTAJE GLOBAL
    $firma = isset($_POST["base64Auditoria"]) ? $_POST["base64Auditoria"] : null;
    $aprobo = $_POST["calidadAprobo"];
    
    // =============================================
    // DECODIFICAR JSON CON DETALLE DE CATEGORÍAS
    // =============================================
    $detalle_json = $_POST["detalle_categorias_json"] ?? "";
    $categorias_array = json_decode($detalle_json, true);
    
    if (!$categorias_array || !is_array($categorias_array) || empty($categorias_array)) {
        $_SESSION["mensaje"] = "No hay categorías para guardar.";
        $_SESSION["tipo"] = "warning";
        $_SESSION["icon"] = "exclamation-triangle-fill";
        exit;
    }

    try {
        // =============================================
        // PREPARAR INSERT
        // =============================================
        $consultar = "INSERT INTO `auditoria-proceso` 
             (`area`, `categorias`, `observaciones`, `observaciones_categoria`, 
              `fecha_creacion`, `calidadResponsable`, `aspectosCategoria`, 
              `valorPorcentaje`, `porcentaje_categoria`, `firma`, `aprobo`)
             VALUES 
             (:area, :categorias, :observaciones, :observaciones_categoria, 
              :fecha_creacion, :calidadResponsable, :aspectosCategoria, 
              :valorPorcentaje, :porcentaje_categoria, :firma, :aprobo)";

        $stmt = $bdc->prepare($consultar);
        
        $registrosInsertados = 0;
        
        // =============================================
        // RECORRER CADA CATEGORÍA Y HACER UN INSERT
        // =============================================
        foreach ($categorias_array as $categoria_detalle) {
            
            $nombreCategoria = $categoria_detalle['categoria'];
            $porcentajeDeEstaCategoria = $categoria_detalle['porcentaje']; // ← % DE ESTA CATEGORÍA
            $observacionesDeEstaCategoria = $categoria_detalle['observaciones'] ?? ""; // ← OBS DE ESTA CATEGORÍA
            
            // Obtener aspectos específicos de esta categoría
            $aspectosArray = $categoria_detalle['aspectos'] ?? [];
            $aspectos_string = empty($aspectosArray) 
                ? "Sin incumplimiento de aspectos" 
                : implode(", ", $aspectosArray);
            
            // =============================================
            // EJECUTAR INSERT PARA ESTA CATEGORÍA
            // =============================================
            $stmt->bindParam(":area", $area);
            $stmt->bindParam(":categorias", $nombreCategoria);
            $stmt->bindParam(":observaciones", $observacionesGenerales); // ← Obs GENERALES
            $stmt->bindParam(":observaciones_categoria", $observacionesDeEstaCategoria); // ← Obs DE LA CATEGORÍA
            $stmt->bindParam(":aspectosCategoria", $aspectos_string);
            $stmt->bindParam(":fecha_creacion", $auditoriaFecha);
            $stmt->bindParam(":calidadResponsable", $auditoriaCalidad);
            $stmt->bindParam(":valorPorcentaje", $porcentajeGlobal); // ← % GLOBAL
            $stmt->bindParam(":porcentaje_categoria", $porcentajeDeEstaCategoria); // ← % DE LA CATEGORÍA
            $stmt->bindParam(":firma", $firma);
            $stmt->bindParam(":aprobo", $aprobo);

            $stmt->execute();
            $registrosInsertados++;
        }

        if ($registrosInsertados > 0) {
            $_SESSION["mensaje"] = "Registro de AUDITORIA DE PROCESO Realizado De Manera Exitosa!!!";
            $_SESSION["tipo"] = "success";
            $_SESSION["icon"] = "check-circle-fill";
        } else {
            $_SESSION["mensaje"] = "No se insertó ningún registro.";
            $_SESSION["tipo"] = "danger";
            $_SESSION["icon"] = "exclamation-triangle-fill";
        }

    } catch (PDOException $e) {
        die("Error en el INSERT: " . $e->getMessage());
    }
}


//---------------------------------------------------------------//-----------------------------------------------------------

//file_put_contents("debug.txt", print_r($_POST, true));

if (isset($_POST["formInspeccionPoes"])) {
  $hora = $_POST["inspeccionHora"];
  $area = $_POST["Area"];
  $observaciones = $_POST["inspeccionObservaciones"];
  //$Fecha = isset($_POST["fechaInspeccion"]) ? $_POST["fechaInspeccion"] : date("Y-m-d");
  $inspeccionResponsable = $_POST["inspeccionResponsable"];
  $porcentaje = $_POST["valorPorcentaje"];
  $aprobo = $_POST["inspeccionAprobo"];

  // Obtener la firma en base64 desde el POST
  $firma = isset($_POST["base64Correctivo"]) ? $_POST["base64Correctivo"] : null;

  // Verificar que la firma no esté vacía y tiene el formato correcto
  if ($firma && strpos($firma, "data:image/png;base64,") === 0) {
    // Extraer solo los datos binarios sin el encabezado
    $firmaBase64 = explode(",", $firma)[1];
    // Decodificar el base64 a binario
    $firmaBinaria = base64_decode($firmaBase64);
  } else {
    $firmaBinaria = null; // En caso de que no haya firma, asignamos null
  }

  // Mapa de superficies visibles => nombres reales de columnas
  $mapaSuperficies = [
    "Asentador" => "asentador",
    "Baldes de recolección de víscera" => "baldesRecoleccionVisceras",
    "Banda de Cangilones" => "bandaCangilones",
    "Banda de cangilones entrada de canal al chiller" => "bandaCangilonesEntradaChiller",
    "Banda de conos" => "bandaConos",
    "Banda de empaque" => "bandaEmpaque",
    "Banda de pinchos" => "bandaPinchos",
    "Banda escurridor salida chiller" => "bandaEscurridorsalidaChiller",
    "Banda Transportadora de Pavo" => "bandaTransportadoraPavo",
    "Banda transportadora de presas" => "bandaTransportadoraPresas",
    "Bandeja de ingreso de canal a prechiller" => "bandejaIngresoCanalPrechiller",
    "Bandeja tolerancia cero" => "bandejaToleranciaCero",
    "Cajones de empaque de producto" => "cajonesEmpaqueProducto",
    "Campanas Protectoras de Antebrazo" => "campanasProtectorasAntebrazo",
    "Canaleta de evisceración (separación de vísceras)" => "canaletaEvisceracion",
    "Conos metálicos" => "conosMetalicos",
    "Cortadora de Cabeza" => "cortadoraCabeza",
    "Cuchillos, Chairas" => "cuchillosChairas",
    "Delantales" => "delantales",
    "Descolgador de pollo" => "descolgadorPollo",
    "Deshuesador" => "deshuesador",
    "Desinfección de superficies y ambientes" => "desinfeccionSuperficiesAmbientes",
    "Despresadora automatica (cuchilla y guías metálicas)" => "despresadoraAutomatica",
    "Despresadora manual (cuchilla y guías metálicas)" => "despresadoraManual",
    "Embudos" => "embudos",
    "Escurridor de tambor" => "escurridorTambor",
    "Espátulas" => "espatulas",
    "Evisceradora (sujetador de canal, guía de posición, paleta de remoción)" => "evisceradora",
    "Extractora de cloaca (Cuchilla, Guía de canal)" => "extractoraCloaca",
    "Extractora de Pulmones" => "extractoraPulmones",
    "Extractora tráquea y buche (cabezal)" => "extractoraTraqueaBuche",
    "Formadora de hamburguesas" => "formadoraHamburguesas",
    "Grameras" => "grameras",
    "Guantes metálicos" => "guantesMetalicos",
    "Maquina de quiebre y corta cuello" => "maquinaQuiebreCortacuello",
    "Marinadora de presa (agujas, banda, cortinas y pie de bloque)" => "marinadoraPresa",
    "Mesa de colgado" => "mesaColgado",
    "Mesa de corte" => "mesasCorte",
    "Mesa de inspección" => "mesainspeccion",
    "Mesa de recuperación" => "mesaRecuperacion",
    "Mesas" => "mesas",
    "Mesas de embandejado" => "mesasEmbandejado",
    "Mesas de empaque" => "mesaEmpaque",
    "Mesas de fileteo" => "mesaFileteo",
    "Mesas de recepción" => "mesasRecepcion",
    "Mesas de recibo de canal" => "mesasReciboCanal",
    "Mesas despresado (conos)" => "mesasDespresado",
    "Molino (Baader)" => "molinoBaader",
    "Pala de hielo" => "palaHielo",
    "Peladora de mollejas (rodillos)" => "peladoraMollejas",
    "Pistola Destronconadora" => "pistolaDestronconadora",
    "Pistola Extractora de Cloaca" => "pistolaExtractoraCloaca",
    "Pistola Succión Pulmones" => "pistolaSuccionPulmones",
    "Quebrantador (citalsa)" => "quebrantadorCitalsa",
    "Quebrantador (lima)" => "quebrantadorLima",
    "Recipientes (tazas inox y/o baldes)" => "recipientes",
    "Rejilla caída de víscera" => "rejillaCaidaViscera",
    "seleccionadora (banda y pateadora de teflón)" => "seleccionadora",
    "Sierra" => "sierra",
    "Soporte Grameras" => "soporteGrameras",
    "Tablas de teflón" => "tablasTeflon",
    "Termómetro de Punzón" => "termometroPunzon",
    "Tijeras" => "tijeras",
    "Tumbler" => "tumbler",
  ];

  // Validar que 'superficiesData' esté presente en el POST
  if (isset($_POST["superficiesData"])) {
    $superficiesArray = json_decode($_POST["superficiesData"], true);
  } else {
    // Si no se reciben superficies, escribimos en el archivo debug.txt
    // file_put_contents('debug.txt', "Error: No se han recibido datos de superficies\n", FILE_APPEND);
    exit();
  }

  // Inicializar columnas y valores dinámicos
  $columnasSuperficies = "";
  $valoresSuperficies = "";
  $paramsSuperficies = [];

  // Array de superficies válidas (por ejemplo, puedes tener un array predefinido o validarlo dinámicamente)
  $superficiesValidas = array_keys($mapaSuperficies);

  // Iterar sobre las superficies seleccionadas y agregar a la consulta
  foreach ($superficiesArray as $nombreSuperficie => $valor) {
    if (
      in_array($nombreSuperficie, $superficiesValidas) &&
      isset($mapaSuperficies[$nombreSuperficie])
    ) {
      $columnaBD = $mapaSuperficies[$nombreSuperficie];
      $columnasSuperficies .= ", `$columnaBD`";
      $valoresSuperficies .= ", :$columnaBD";
      $paramsSuperficies[$columnaBD] = $valor;
    }
  }

  try {
    // Armar consulta final con superficies dinámicas
    $consultar = "INSERT INTO `inspeccionpoes2` 
                  (`hora`, `area`, `observaciones`, `fecha`, `responsableInspeccion`, `porcentaje`, `firma`, `aprobo`$columnasSuperficies)
                  VALUES 
                  (:hora, :area, :observaciones, CURDATE(), :responsableInspeccion, :porcentaje, :firma, :aprobo$valoresSuperficies)";

    $stmt = $bdc->prepare($consultar);

    // Bind de campos fijos
    $stmt->bindParam(":hora", $hora);
    $stmt->bindParam(":area", $area);
    $stmt->bindParam(":observaciones", $observaciones);
    $stmt->bindParam(":responsableInspeccion", $inspeccionResponsable);
    $stmt->bindParam(":porcentaje", $porcentaje);
    $stmt->bindParam(":aprobo", $aprobo);

    // Bind de la firma (usando el binario decodificado)
    $stmt->bindParam(":firma", $firmaBinaria, PDO::PARAM_LOB);

    // Bind de columnas dinámicas (superficies)
    foreach ($paramsSuperficies as $col => $val) {
      $stmt->bindValue(":$col", $val);
    }

    // Ejecutar la consulta
    $stmt->execute();

    // Mensaje de éxito
    if ($stmt->rowCount()) {
      $_SESSION["mensaje"] = "Registro de inspeccion POES Realizado De Manera Exitosa!!!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";
    } else {
      $_SESSION["mensaje"] = "Hubo un error al ingresar el registro";
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";
    }
  } catch (PDOException $e) {
    // Manejo de errores
    $errorMessage = "Error: " . $e->getMessage() . "\n";
    file_put_contents("debug.txt", $errorMessage, FILE_APPEND);
    $_SESSION["mensaje"] = "Error: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

//----------------------------------------------------------------------------------------------------------------------------

if (isset($_POST["formDesinfeccionDelantales"])) {
  // Recibir los datos del formulario
  $desinfectante = $_POST["desinfectante"];
  $area = $_POST["Areas"];
  $observaciones = $_POST["ControlObservaciones"];
  //$Fecha = isset($_POST['fechaDesinfeccion']) ? $_POST['fechaDesinfeccion'] : date('y-m-d');
  $desinfeccionResponsable = $_POST["ControlResponsable"];
  $concentracion = $_POST["ControlConcentracion"];
  $aprobo = $_POST["ControlAprobo"];

  // Conexión a la base de datos (asegúrate de que la conexión esté realizada antes)
  try {
    // Preparar la consulta SQL
    $consultar = "INSERT INTO `desinfeccionpoes` (`fecha_Desinfeccion`, `Areas`, `Desinfectante`, `Observaciones`, `responsable_Desinfeccion`, `Concentracion`, `aprobo`)
                          VALUES ( CURRENT_DATE(),:Areas, :Desinfectante, :Observaciones, :responsable_Desinfeccion, :Concentracion, :aprobo)";

    // Preparar la sentencia
    $stmt = $bdc->prepare($consultar);

    // Vincular los parámetros

    $stmt->bindParam(":Areas", $area);
    $stmt->bindParam(":Desinfectante", $desinfectante);
    $stmt->bindParam(":Observaciones", $observaciones);
    $stmt->bindParam(":responsable_Desinfeccion", $desinfeccionResponsable);
    $stmt->bindParam(":Concentracion", $concentracion);
    $stmt->bindParam(":aprobo", $aprobo);

    // Ejecutar la consulta
    $stmt->execute();

    if ($stmt->rowCount()) {
      $_SESSION["mensaje"] = "Registro Desinfeccion Delantales Realizado De Manera Exitosa!!!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";
    } else {
      $_SESSION["mensaje"] = "Hubo un error al ingresar el registro";
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";
    }
  } catch (PDOException $e) {
    $_SESSION["mensaje"] = "Error: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

//------------------------------------//-----------------------------------------------//----------------------------------------------------

session_start();

if (isset($_POST["formControlDefectosCanal"])) {
  // Recibir datos del formulario
  $granjas = $_POST["granjas"] ?? null;
  $viaje = $_POST["controlViaje"] ?? null;
  $tipoAve = $_POST["tipoAve"] ?? null;
  $verificaCanal = $_POST["canalVerificado"] ?? null;
  $porcentajeGranja = $_POST["granjaPorcentaje"];
  $porcentajeProceso = $_POST["defectosPorcentaje"];
  $porcentajeGlobal = $_POST["porcentajeGlobal"];
  $aprobo = $_POST["canalAprobo"];

  // Recoger los defectos y convertirlos en un solo string o JSON
  $defectos = [
    "Decomiso Parcial" => $_POST["decomisoParcial"] ?? 0,
    "Baja Pigmentación" => $_POST["pigmentacion"] ?? 0,
    "Hematoma Pechuga" => $_POST["hematomaPechuga"] ?? 0,
    "Hematoma Pernil" => $_POST["hematomaPernil"] ?? 0,
    "Hematoma Ala" => $_POST["hematomaAla"] ?? 0,
  ];

  $defectos2 = [
    "Parchudo" => $_POST["parchudo"] ?? 0,
    "Fractura Ala" => $_POST["fracturaAla"] ?? 0,
    "punta Ala" => $_POST["puntaAla"] ?? 0,
    "Canal Viscera" => $_POST["canalViscera"] ?? 0,
    "Canal Plumas" => $_POST["canalPlumas"] ?? 0,
    "Canal Cuticula" => $_POST["canalCuticula"] ?? 0,
    "Daño Equipo" => $_POST["dañoEquipo"] ?? 0,
  ];
  // Convertir a formato JSON para almacenarlo en la columna defectos_granjas
  $defectosJson = json_encode($defectos);
  $defectos2Json = json_encode($defectos2);

  // Consulta preparada segura con marcadores de posición
  $consultar = "INSERT INTO `defectos_salida_chiller` (`fecha`, `granjas`, `viaje`, `tipo_ave`, `verificado`,`porcentaje_granja`,`porcentaje_proceso`,`porcentaje_global`,`aprobo`,
    `defectos_granjas`,`deficiencia_proceso`)
        VALUES (CURRENT_DATE(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  $consu = $bdc->prepare($consultar);

  // Ejecutar la consulta con los valores
  $ejecutado = $consu->execute([
    $granjas,
    $viaje,
    $tipoAve,
    $verificaCanal,
    $porcentajeGranja,
    $porcentajeProceso,
    $porcentajeGlobal,
    $aprobo,
    $defectosJson,
    $defectos2Json,
  ]);

  // Confirmar si se guardó en la base de datos

  if ($bdc->lastInsertId()) {
    $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "No se insertaron datos en la base de datos.";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/*ENVIO DE FORMULARIO INSPECCION CALIDAD PRODUCTO */
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

if (isset($_POST["forminspeccionCalidad"])) {
  $hora = $_POST["horaInspeccionCalidad"];
  $productoInspeccion = $_POST["productoInspeccionCalidad"];
  $areaProducto = $_POST["productoterminado"];
  $tipoAveTerminado = $_POST["tipoAveTerminado"];
  $loteInspeccion = $_POST["loteInspeccionCalidad"];
  $fechaVencimiento = $_POST["fechaVencimientoCalidad"];
  $rotulacionIncompleta = $_POST["rotulacionCalidad"];
  $dislocacionInspeccion = $_POST["dislocacionInspeccionCalidad"];
  $residualInspeccion = $_POST["residualInspeccionCalidad"];
  $plumasInspeccion = $_POST["plumasInspeccionCalidad"];
  $pigmentacionInspeccion = $_POST["pigmentacionInspeccionCalidad"];
  $cuticulaInspeccion = $_POST["cuticulaInspeccionCalidad"];
  $hematomasInspeccion = $_POST["hematomasInspeccionCalidad"];
  $elementosInspeccion = $_POST["elementosInspeccionCalidad"];
  $embalajeInspeccion = $_POST["embalajeIncorrectocalidad"];
  $trazabilidadInspeccion = $_POST["trazabilidadInspeccionCalidad"];
  $rupturasInspeccion = $_POST["rupturasInspeccionCalidad"];
  $lixiviadoInspeccion = $_POST["lixiviadoInspeccionCalidad"];
  $selladoInspeccion = $_POST["selladoInspeccionCalidad"];
  $fueraInspeccion = $_POST["fueraInspeccionCalidad"];
  $muestraInspeccion = $_POST["muestrasInspeccionCalidad"];
  $responsableInspeccion = $_POST["ResponsableinspeccionCalidadProducto"];
  $observacionInspeccion = $_POST["ObservacionesinspeccionCalidadProducto"];
  $aproboInspeccion = $_POST["aproboInspeccionCalidadProducto"];
  $porcentajeInspeccion = $_POST["porcentajeInspeccion"];


  // Aquí empezamos a construir el log
  $log = "=== Nuevo intento de inserción en inspeccion_calidad ===\n";
  $log .= "Fecha: " . date("Y-m-d H:i:s") . "\n";
  $log .= "Datos recibidos:\n";
  $log .= print_r($_POST, true);
  $log .= "\n";

  try {
    $consult = "INSERT INTO `for-s-cci-20_inspeccion_calidad`(`fecha`,
            `hora`, `productoInspeccion`, `area`, `tipo_ave`, `loteInspeccion`, `fechaVencimiento`, `rotulacionIncompleta`,
            `dislocacionInspeccion`, `residualInspeccion`, `plumasInspeccion`, `pigmentacionInspeccion`,
            `cuticulaInspeccion`, `hematomasInspeccion`, `elementosInspeccion`,`embalajeInspeccion`, `trazabilidadInspeccion`,
            `rupturasInspeccion`, `lixiviadoInspeccion`, `selladoInspeccion`, `productoFueraBandeja`, `responsableInspeccion`,
            `observacionInspeccion`, `totalMuestras`,`aprobo`,`porcentajeInspeccion`) 
            VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    $InspeccionC = $bdc->prepare($consult);
    $InspeccionC->execute([
      $hora,
      $productoInspeccion,
      $areaProducto,
      $tipoAveTerminado,
      $loteInspeccion,
      $fechaVencimiento,
      $rotulacionIncompleta,
      $dislocacionInspeccion,
      $residualInspeccion,
      $plumasInspeccion,
      $pigmentacionInspeccion,
      $cuticulaInspeccion,
      $hematomasInspeccion,
      $elementosInspeccion,
      $embalajeInspeccion,
      $trazabilidadInspeccion,
      $rupturasInspeccion,
      $lixiviadoInspeccion,
      $selladoInspeccion,
      $fueraInspeccion,
      $responsableInspeccion,
      $observacionInspeccion,
      $muestraInspeccion,
      $aproboInspeccion,
      $porcentajeInspeccion,
    ]);

    if ($InspeccionC->rowCount() > 0) {
      $_SESSION["mensaje"] = "Registro Inspeccion Calidad, Realizado de Manera Exitosa!!!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";

      $log .= "Resultado: Registro insertado exitosamente.\n";
    } else {
      $_SESSION["mensaje"] = "No se insertaron datos en la base de datos.";
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";

      $log .= "Resultado: No se insertaron datos.\n";
    }
  } catch (PDOException $e) {
    $_SESSION["mensaje"] = "Error al insertar datos: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";

    $log .= "Error de PDO: " . $e->getMessage() . "\n";
  }

  // Finalmente, escribimos el log en un archivo
  //file_put_contents("debug.txt", $log . "\n", FILE_APPEND);
}

//-------------------------------------------------- FOR-S-CCI-66-CONTROL CLORO RESIDUAL PUNTOS DE DESINFECCION-------------//----------------------------------------------------------------
if (isset($_POST["formcontrolDesinfec"])) {
  // Recibir los datos del formulario
  $hora = $_POST["horaCumplimiento"] ?? null;
  $zonaBlanca = $_POST["zonaBlanca"] ?? "N/A";
  $empaqueViscera1 = $_POST["empaqueViscera1"] ?? "N/A";
  $empaqueViscera2 = $_POST["empaqueViscera2"] ?? "N/A";
  $empaqueVisceraCuchillo = $_POST["empaqueVisceraCuchillo"] ?? "N/A";
  $empaqueVisceraPala = $_POST["empaqueVisceraPala"] ?? "N/A";
  $empaqueCanal1 = $_POST["empaqueCanal1"] ?? "N/A";
  $empaqueCanal2 = $_POST["empaqueCanal2"] ?? "N/A";
  $empaqueCanal3 = $_POST["empaqueCanal3"] ?? "N/A";
  $empaqueCanal4 = $_POST["empaqueCanal4"] ?? "N/A";
  $palaChiller = $_POST["palaChiller"] ?? "N/A";
  $marinado1 = $_POST["marinado1"] ?? "N/A";
  $marinado2 = $_POST["marinado2"] ?? "N/A";
  $marinado3 = $_POST["marinado3"] ?? "N/A";
  $marinado4 = $_POST["marinado4"] ?? "N/A";
  $marinado5 = $_POST["marinado5"] ?? "N/A";
  $marinado6 = $_POST["marinado6"] ?? "N/A";
  $marinadoCuchillo1 = $_POST["marinadoCuchillo1"] ?? "N/A";
  $marinadoCuchillo2 = $_POST["marinadoCuchillo2"] ?? "N/A";
  $marinadoCuchillo3 = $_POST["marinadoCuchillo3"] ?? "N/A";
  $marinadoCuchillo4 = $_POST["marinadoCuchillo4"] ?? "N/A";
  $marinadoCuchillo5 = $_POST["marinadoCuchillo5"] ?? "N/A";
  $marinadoCuchillo6 = $_POST["marinadoCuchillo6"] ?? "N/A";
  $duchaCanastillas = $_POST["duchaCanastillas"] ?? "N/A";
  $carnesMolidas = $_POST["carnesMolidas"] ?? "N/A";
  $entradaTrolley = $_POST["entradaTrolley"] ?? "N/A";
  $salidaTrolley = $_POST["salidaTrolley"] ?? "N/A";
  $fileteoPollo = $_POST["fileteoPollo"] ?? "N/A";
  $fileteoPolloTablas = $_POST["fileteoPolloTablas"] ?? "N/A";
  $fileteoPolloCuchillo1 = $_POST["fileteoPolloCuchillo1"] ?? "N/A";
  $fileteoPolloCuchillo2 = $_POST["fileteoPolloCuchillo2"] ?? "N/A";
  $fileteoPolloCuchillo3 = $_POST["fileteoPolloCuchillo3"] ?? "N/A";
  $fileteoPolloCuchillo4 = $_POST["fileteoPolloCuchillo4"] ?? "N/A";
  $basculaProduccion = $_POST["basculaProduccion"] ?? "N/A";
  $fileteoPavos = $_POST["fileteoPavos"] ?? "N/A";
  $fileteoPavos2 = $_POST["fileteoPavos2"] ?? "N/A";
  $fileteoPavosCuchillo1 = $_POST["fileteoPavosCuchillo1"] ?? "N/A";
  $fileteoPavosCuchillo2 = $_POST["fileteoPavosCuchillo2"] ?? "N/A";
  $fileteoPavosCuchillo3 = $_POST["fileteoPavosCuchillo3"] ?? "N/A";
  $fileteoPavosCuchillo4 = $_POST["fileteoPavosCuchillo4"] ?? "N/A";
  $fileteoPavosCuchillo5 = $_POST["fileteoPavosCuchillo5"] ?? "N/A";
  $fileteoPavosCuchillo6 = $_POST["fileteoPavosCuchillo6"] ?? "N/A";
  $fileteoPavosCuchillo7 = $_POST["fileteoPavosCuchillo7"] ?? "N/A";
  $fileteoPavosCuchillo8 = $_POST["fileteoPavosCuchillo8"] ?? "N/A";
  $fileteoPavosCuchillo9 = $_POST["fileteoPavosCuchillo9"] ?? "N/A";
  $fileteoPavosCuchillo10 = $_POST["fileteoPavosCuchillo10"] ?? "N/A";
  $fileteoPavosCuchillo11 = $_POST["fileteoPavosCuchillo11"] ?? "N/A";
  $fileteoPavosCuchillo12 = $_POST["fileteoPavosCuchillo12"] ?? "N/A";
  $fileteoPavosCuchillo13 = $_POST["fileteoPavosCuchillo13"] ?? "N/A";
  $fileteoPavosCuchillo14 = $_POST["fileteoPavosCuchillo14"] ?? "N/A";
  $despachos = $_POST["despachos"] ?? "N/A";
  $iqf = $_POST["iqf"] ?? "N/A";
  $cambioEmpaque = $_POST["cambioEmpaque"] ?? "N/A";
  $iqf2 = $_POST["iqf2"] ?? "N/A";
  $reseleccion = $_POST["reseleccion"] ?? "N/A";
  $pediluvioHielo = $_POST["pediluvioHielo"] ?? "N/A";
  $palaHielo = $_POST["palaHielo"] ?? "N/A";
  $pediluvioPosproceso1 = $_POST["pediluvioPosproceso1"] ?? "N/A";
  $pediluvioPosproceso2 = $_POST["pediluvioPosproceso2"] ?? "N/A";
  $posproceso1 = $_POST["posproceso1"] ?? "N/A";
  $posproceso2 = $_POST["posproceso2"] ?? "N/A";
  $posprocesoCuchillo = $_POST["posprocesoCuchillo"] ?? "N/A";
  $controlCorrectivo = $_POST["controlCorrectivo"] ?? null;
  $controlVerifico = $_POST["controlVerifico"] ?? null;
  $controlAprobo = $_POST["controlAprobo"] ?? null;

  try {
    // Consulta SQL

    $consult = "INSERT INTO `puntosDesinfeccion` 
                    (`fecha`, `Hora`, `zona_blanca`, `empaque_viscera1`, `empaque_viscera2`, `empaque_viscera_cuchillo`, `empaque_viscera_pala`, `empaque_canal1`, `empaque_canal2`, `empaque_canal3`,
                     `empaque_canal4`, `pala_chiller`, `marinado1`, `marinado2`, `marinado3`, `marinado4`, `marinado5`, `marinado6`,  `marinado_cuchillo1`, `marinado_cuchillo2`, 
                     `marinado_cuchillo3`, `marinado_cuchillo4`, `marinado_cuchillo5`, `marinado_cuchillo6`, `ducha_canastillas`, `carnes_molidas`, `entrada_trolley`, 
                     `salida_trolley`, `fileteo_pollo`, `fileteo_pollo_tablas`, `fileteo_pollo_cuchillo1`, `fileteo_pollo_cuchillo2`, `fileteo_pollo_cuchillo3`, `fileteo_pollo_cuchillo4`, 
                     `bascula_produccion`, `fileteo_pavos`,`fileteo_pavos2`, `fileteo_pavos_cuchillo1`, `fileteo_pavos_cuchillo2`, `fileteo_pavos_cuchillo3`, `fileteo_pavos_cuchillo4`, 
                     `fileteo_pavos_cuchillo5`, `fileteo_pavos_cuchillo6`, `fileteo_pavos_cuchillo7`, `fileteo_pavos_cuchillo8`, `fileteo_pavos_cuchillo9`, `fileteo_pavos_cuchillo10`,                      
                     `fileteo_pavos_cuchillo11`,`fileteo_pavos_cuchillo12`,`fileteo_pavos_cuchillo13`,`fileteo_pavos_cuchillo14`,`despachos`, `iqf`, `cambio_empaque`,`iqf2`, `reseleccion`, `pediluvio_hielo`,`pala_hielo`, `pediluvio_posproceso1`, `pediluvio_posproceso2`, `posproceso1`, `posproceso2`, 
                     `posproceso_cuchillo`, `correctivo`, `verifico`,`aprobo`) 
                    VALUES 
                    (CURRENT_DATE(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                     ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $InspeccionC = $bdc->prepare($consult);
    $InspeccionC->execute([
      $hora,
      $zonaBlanca,
      $empaqueViscera1,
      $empaqueViscera2,
      $empaqueVisceraCuchillo,
      $empaqueVisceraPala,
      $empaqueCanal1,
      $empaqueCanal2,
      $empaqueCanal3,
      $empaqueCanal4,
      $palaChiller,
      $marinado1,
      $marinado2,
      $marinado3,
      $marinado4,
      $marinado5,
      $marinado6,
      $marinadoCuchillo1,
      $marinadoCuchillo2,
      $marinadoCuchillo3,
      $marinadoCuchillo4,
      $marinadoCuchillo5,
      $marinadoCuchillo6,
      $duchaCanastillas,
      $carnesMolidas,
      $entradaTrolley,
      $salidaTrolley,
      $fileteoPollo,
      $fileteoPolloTablas,
      $fileteoPolloCuchillo1,
      $fileteoPolloCuchillo2,
      $fileteoPolloCuchillo3,
      $fileteoPolloCuchillo4,
      $basculaProduccion,
      $fileteoPavos,
      $fileteoPavos2,
      $fileteoPavosCuchillo1,
      $fileteoPavosCuchillo2,
      $fileteoPavosCuchillo3,
      $fileteoPavosCuchillo4,
      $fileteoPavosCuchillo5,
      $fileteoPavosCuchillo6,
      $fileteoPavosCuchillo7,
      $fileteoPavosCuchillo8,
      $fileteoPavosCuchillo9,
      $fileteoPavosCuchillo10,
      $fileteoPavosCuchillo11,
      $fileteoPavosCuchillo12,
      $fileteoPavosCuchillo13,
      $fileteoPavosCuchillo14,
      $despachos,
      $iqf,
      $cambioEmpaque,
      $iqf2,
      $reseleccion,
      $pediluvioHielo,
      $palaHielo,
      $pediluvioPosproceso1,
      $pediluvioPosproceso2,
      $posproceso1,
      $posproceso2,
      $posprocesoCuchillo,
      $controlCorrectivo,
      $controlVerifico,
      $controlAprobo,
    ]);

    if ($InspeccionC->rowCount() > 0) {
      $_SESSION["mensaje"] = "Registro realizado con éxito!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";
    } else {
      $_SESSION["mensaje"] = "No se insertaron datos en la base de datos.";
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";
    }
  } catch (PDOException $e) {
    $_SESSION["mensaje"] = "Error al insertar datos: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
//---------------------------------------------------------------------------------------------------------------------------------------------

if (isset($_POST["formControlTemp"])) {
  $areaTemperatura = $_POST["areaTemperatura"];
  $areaControl = $_POST["areaControlTemp"];
  $horaTemperatura = $_POST["horaTemperatura"];
  $controlCorrectivas = $_POST["controltempCorrectivas"];
  $controlVerificado = $_POST["controlTempVerificado"];
  $controlAprobado = $_POST["controlTempAprobo"];

  $bdc->exec("SET NAMES utf8mb4");

  $consultar = "INSERT INTO `control_temperatura`(`fecha`, `area`, `temperatura`, `hora`, `correctivas`, `verificado`, `aprobo`) 
    VALUES (CURRENT_DATE(),'$areaTemperatura','$areaControl','$horaTemperatura','$controlCorrectivas','$controlVerificado','$controlAprobado')";

  $consu = $bdc->prepare($consultar);
  $consu->execute();

  if ($consu->rowCount()) {
    $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "$bdc->$errorInfo()";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

/*VERIFICACION DE CONTROL DE INSPECCIÓN DE TOLERANCIA CERO */

if (isset($_POST["forminspeccionToleranciaCero"])) {
  $fechaVerifcaTolerancia = $_POST["fechaToleranciaCero"];
  $granjaVerifcaTolerancia = $_POST["granjasTolerancia"];
  $viajeVerifcaTolerancia = $_POST["viajeToleranciaCero"];
  $tipoAveVerifcaTolerancia = $_POST["tipoAveTolerancia"];
  $materialFecalVerifcaTolerancia = $_POST["materialFecalToleranciaCero"];
  $monitoreoTolerancia = $_POST["monitoreoToleranciaCero"];
  $responsableTolerancia = $_POST["responsableToleranciaCero"];
  $aproboTolerancia = $_POST["aproboToleranciaCero"];

  try {
    $consult = "INSERT INTO `for-s-cci-33_tolerancia_cero`(`fechaVerifcaTolerancia`,`granjaVerifcaTolerancia`,`viajeVerifcaTolerancia`,
        `tipoAveVerifcaTolerancia`,`materialFecalVerifcaTolerancia`, `monitoreoTolerancia`,`responsableTolerancia`,`aprobo`)
        VALUES (?,?,?,?,?,?,?,?)";

    $ToleranciaV = $bdc->prepare($consult);
    $ToleranciaV->execute([
      $fechaVerifcaTolerancia,
      $granjaVerifcaTolerancia,
      $viajeVerifcaTolerancia,
      $tipoAveVerifcaTolerancia,
      $materialFecalVerifcaTolerancia,
      $monitoreoTolerancia,
      $responsableTolerancia,
      $aproboTolerancia,
    ]);

    if ($ToleranciaV->rowCount() > 0) {
      $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";
    } else {
      $_SESSION["mensaje"] = "No se insertaron datos en la base de datos.";
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";
    }
  } catch (PDOException $e) {
    // Captura y muestra el error de PDO
    $_SESSION["mensaje"] = "Error al insertar datos: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

if (isset($_POST["formVerificacionCero"])) {
  $fechaVerificacion = $_POST["fechaVerificacionCero"];
  $concentracionTolerancia = $_POST["concentracionTolerancia"];
  $granjasVerificacion = $_POST["granjasVerificacion"];
  $viajeVerificacion = $_POST["viajeVerificacionCero"];
  $tipoAveVerificacion = $_POST["tipoAveVerificacion"];
  $materialFecalVerificacion = $_POST["materialFecalVerificacion"];
  $monitoreoVerificacion = $_POST["monitoreoVerificacionCero"];
  $responsableVerificacion = $_POST["responsableVerificacionToleranciaCero"];
  $concentracionDuchaClorada = $_POST["concentracionDuchaClorada"];
  $aproboTolerancia = $_POST["aproboVerificacionToleranciaCero"];

  try {
    $consult = "INSERT INTO `for-s-cci-33_verificacion_tolerancia_cero`(`fecha_Verificacion`,`concentracion`,`granja_verificacion`,`viaje_verificacion`,
        `tipo_ave`,`material_fecal`, `monitoreo_verificacion`,`responsable_verificacion`, `concentracion_ducha`,`aprobo`)
        VALUES (?,?,?,?,?,?,?,?,?,?)";

    $ToleranciaV = $bdc->prepare($consult);
    $ToleranciaV->execute([
      $fechaVerificacion,
      $concentracionTolerancia,
      $granjasVerificacion,
      $viajeVerificacion,
      $tipoAveVerificacion,
      $materialFecalVerificacion,
      $monitoreoVerificacion,
      $responsableVerificacion,
      $concentracionDuchaClorada,
      $aproboTolerancia,
    ]);

    if ($ToleranciaV->rowCount() > 0) {
      $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";
    } else {
      $_SESSION["mensaje"] = "No se insertaron datos en la base de datos.";
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";
    }
  } catch (PDOException $e) {
    // Captura y muestra el error de PDO
    $_SESSION["mensaje"] = "Error al insertar datos: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

// insert para el formualrio prodcuto adobado frisby  --------------------------------------------------------------------------------
if (isset($_POST["formControlProductoFrisby"])) {
  // file_put_contents('debug.txt', "Formulario recibido: \n" . print_r($_POST, true), FILE_APPEND);
  $lote1Frisby = $_POST["lote1"] ?? null;
  $lote2Frisby = $_POST["lote2"] ?? null;
  $lote1Fecha = $_POST["lote1Fecha"] ?? null;
  $lote2Fecha = $_POST["lote2Fecha"] ?? null;
  $fechaVencimientoFrisby = $_POST["fechaVencimiento"] ?? null;
  $destino2Frisby = $_POST["destino2"] ?? null;
  $cantidadTotalFrisby = $_POST["cantidadTotal"] ?? null;
  $pesoPromedioFrisby = $_POST["cumplimientoFrisby"] ?? null;
  $pesoPromedioFrisby2 = $_POST["cumplimientoFrisby2"] ?? null;
  $pesoPromedioFrisby3 = $_POST["cumplimientoFrisby3"] ?? null;
  $pesoPromedioFrisby4 = $_POST["cumplimientoFrisby4"] ?? null;
  $pechugasMalCortadas = $_POST["pechugasMalCortadas"] ?? null;
  $contramuslosMalCortados = $_POST["contramuslosMalCortados"] ?? null;
  $muslosMalCortados = $_POST["muslosMalCortados"] ?? null;
  $alasMalCortadas = $_POST["alasMalCortadas"] ?? null;
  $pechugasNocumplen = $_POST["pechugasNocumple"] ?? null;
  $contramuslosNocumplen = $_POST["contramuslosNocumplen"] ?? null;
  $muslosNocumplen = $_POST["muslosNocumplen"] ?? null;
  $alasNocumplen = $_POST["alasNocumplen"] ?? null;
  $observacionesFrisby = $_POST["observacionesFrisby"] ?? null;
  $realizoFrisby = $_POST["realizoFrisby"] ?? null;
  $aproboFrisby = $_POST["aproboFrisby"] ?? null;

  $pesoPresas = [];
  for ($i = 1; $i <= 100; $i++) {
    $key = "numero_" . $i;
    $pesoPresas[] = isset($_POST[$key]) ? $_POST[$key] : "0";
  }
  $valoresComoTexto = implode("-", $pesoPresas);

  $pesoPresas2 = [];
  for ($i = 1; $i <= 100; $i++) {
    $key = "numero2_" . $i;
    $pesoPresas2[] = isset($_POST[$key]) ? $_POST[$key] : "0";
  }
  $valoresComoTexto2 = implode("-", $pesoPresas2);

  $pesoPresas3 = [];
  for ($i = 1; $i <= 100; $i++) {
    $key = "numero3_" . $i;
    $pesoPresas3[] = isset($_POST[$key]) ? $_POST[$key] : "0";
  }
  $valoresComoTexto3 = implode("-", $pesoPresas3);

  $pesoPresas4 = [];
  for ($i = 1; $i <= 100; $i++) {
    $key = "numero4_" . $i;
    $pesoPresas4[] = isset($_POST[$key]) ? $_POST[$key] : "0";
  }
  $valoresComoTexto4 = implode("-", $pesoPresas4);

  try {
    $consult = "INSERT INTO `controlProductoFrisby`(`fecha`,`lote1`,`lote2`,`lote1Fecha`,`lote2Fecha`, `fechaVencimiento`,`destino`,`cantidadTotal`,
        `pesoPromedioPechuga`,`pesoPromedioContramuslo`,`pesoPromedioMuslo`,`pesoPromedioAla`,`pechugaMalCortada`,`contramusloMalCortado`,`musloMalCortado`,
        `alaMalCortada`,`pechugaNocumplen`,`contramusloNocumplen`,`musloNocumplen`,`alaNocumplen`,`pesoPresasPechuga`,`pesoPresasContramuslo`,`pesoPresasMuslo`,
        `pesoPresasAla`,`observaciones`,`realizo`,`aprobo`)
        VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    $ToleranciaV = $bdc->prepare($consult);
    $ToleranciaV->execute([
      $lote1Frisby,
      $lote2Frisby,
      $lote1Fecha,
      $lote2Fecha,
      $fechaVencimientoFrisby,
      $destino2Frisby,
      $cantidadTotalFrisby,
      $pesoPromedioFrisby,
      $pesoPromedioFrisby2,
      $pesoPromedioFrisby3,
      $pesoPromedioFrisby4,
      $pechugasMalCortadas,
      $contramuslosMalCortados,
      $muslosMalCortados,
      $alasMalCortadas,
      $pechugasNocumplen,
      $contramuslosNocumplen,
      $muslosNocumplen,
      $alasNocumplen,
      $valoresComoTexto,
      $valoresComoTexto2,
      $valoresComoTexto3,
      $valoresComoTexto4,
      $observacionesFrisby,
      $realizoFrisby,
      $aproboFrisby,
    ]);

    if ($ToleranciaV->rowCount() > 0) {
      $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";
    } else {
      $_SESSION["mensaje"] = "No se insertaron datos en la base de datos.";
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";
    }
  } catch (PDOException $e) {
    // Captura y muestra el error de PDO
    $_SESSION["mensaje"] = "Error al insertar datos: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

if (isset($_POST["formTemperaturaCuartos"])) {
  $hora = $_POST["controlTempHora"];
  $lugar = $_POST["controlLugar"];
  $numero = $_POST["controlNumero"];
  $loteTemperatura = $_POST["loteControlTemperatura"];
  $productoTemp = $_POST["productoControlCuartos"];
  $fechaVencimientoTemp = $_POST["ControlFechaVencimiento"];
  $temperaturaProduc = $_POST["controlTempProducto"];
  $loteTemperatura2 = $_POST["loteControlTemperatura2"];
  $productoTemp2 = $_POST["productoControlCuartos2"];
  $fechaVencimientoTemp2 = $_POST["ControlFechaVencimiento2"];
  $temperaturaProduc2 = $_POST["controlTempProducto2"];
  $temperaturaAmbiente = $_POST["TempAmbienteCuarto"];
  $productoExpuesto = $_POST["productoExpControl"];
  $observacionTemp = $_POST["controlTempObservaciones"];
  $responsable = $_POST["controlResponsable2"];
  $controlAprobo = $_POST["controlAproboo"];

  $consult = "INSERT INTO `control_temperatura_cuartos`(`fecha`,`hora`, `lugar`, `numeroLugar`, `lote`, `producto`, `fechaVencimiento`, `temperaturaProducto`,
     `lote2`, `producto2`, `fechaVencimiento2`, `temperaturaProducto2`, `temperaturaAmbienteCuarto`, `productoExpuesto`, `Observacion`, `responsable`,`aprobo`)
                VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $Empaque = $bdc->prepare($consult);
  $Empaque->execute([
    $hora,
    $lugar,
    $numero,
    $loteTemperatura,
    $productoTemp,
    $fechaVencimientoTemp,
    $temperaturaProduc,
    $loteTemperatura2,
    $productoTemp2,
    $fechaVencimientoTemp2,
    $temperaturaProduc2,
    $temperaturaAmbiente,
    $productoExpuesto,
    $observacionTemp,
    $responsable,
    $controlAprobo,
  ]);

  if ($Empaque->rowCount()) {
    $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "No se pudo enviar el reporte";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

if (isset($_POST["formTemperaturaLiberacion"])) {
  // file_put_contents('debug.txt', "Formulario recibido: \n" . print_r($_POST, true), FILE_APPEND);
  $hora = $_POST["liberacionHora"];
  $tunel = $_POST["controlTunel"];
  $loteLiberacion = $_POST["loteLiberacion"];
  $productoLiberacion = $_POST["productoControlLiberacion"];
  $fechaVencimientoLiberacion = $_POST["liberacionFechaVencimiento"];
  $temperaturaLiberacion = $_POST["controlTempLiberacion"];
  $temperaturaTunel = $_POST["TempAmbienteTunel"];
  $loteLiberacion2 = $_POST["loteLiberacion2"];
  $productoLiberacion2 = $_POST["productoControlLiberacion2"];
  $fechaVencimientoLiberacion2 = $_POST["liberacionFechaVencimiento2"];
  $temperaturaLiberacion2 = $_POST["controlTempLiberacion2"];
  $observacionLiberacion = $_POST["liberacionTempObservaciones"];
  $responsable2 = $_POST["liberacionResponsable"];
  $aprobo = $_POST["liberacionAprobo"];

  $consult = "INSERT INTO `control_temperatura_liberacion`
                (`fecha`,`hora`, `tunel`, `lote`, `producto`, `fechaVencimiento`,
                 `temperaturaProducto`, `lote2`, `producto2`, `fechaVencimiento2`, `temperaturaProducto2`,  `temperaturaTunel`, `Observacion`, `responsable`,`aprobo`)
                VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $Empaque = $bdc->prepare($consult);
  $Empaque->execute([
    $hora,
    $tunel,
    $loteLiberacion,
    $productoLiberacion,
    $fechaVencimientoLiberacion,
    $temperaturaLiberacion,
    $loteLiberacion2,
    $productoLiberacion2,
    $fechaVencimientoLiberacion2,
    $temperaturaLiberacion2,
    $temperaturaTunel,
    $observacionLiberacion,
    $responsable2,
    $aprobo,
  ]);

  if ($Empaque->rowCount()) {
    $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
    // file_put_contents('debug.txt', "Insert exitoso\n", FILE_APPEND);
  } else {
    $_SESSION["mensaje"] = "No se pudo enviar el reporte";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
    // file_put_contents('debug.txt', "Insert fallido\n", FILE_APPEND);
  }
} else {
  //file_put_contents('debug.txt', "No se recibió formTemperaturaliberacion\n", FILE_APPEND);
}

//---------------------------------------------------------------------------------------------------------//-------------------------
if (isset($_POST["forminventarioAlmacenamiento"])) {
  $categoriasA = $_POST["aspectosAlmacenamiento"] ?? null;
  $auditoriaCuarto = $_POST["auditoriaCuarto"] ?? null;
  $responsableInventario = $_POST["responsableAlmacenam"] ?? null;
  $observacionInventario = $_POST["observacionesInventario"] ?? null;
  $aproboAlmacenam = $_POST["aproboAlmacenam"] ?? null;

  $aspectos = [
    "El area se encuentra limpia y ordenada, no hay condensacion" => "areaLimpiaOrdenada",
    "Los utensilios de aseo estan en buen estado y en su sitio cuando no se estan utilizando" =>
      "utensiliosEstado",
    "Cumplen con el lavado y desinfeccion segun cronograma" => "lavadoCronograma",
    "La temperatura del producto en almacenamiento y despacho cumple con lo exigido en normatividad vigente (<4°C refrigerado y -18°C congelado)" =>
      "temperaturaAlmacenamientoNormatividad",
    "En el cuarto se evidencia buena circulación y capacidad moderada" =>
      "cuartoCirculacionModerada",
    "El producto que cae al suelo es desinfectado en las pocetas del área" =>
      "productoDesinfectado",
    "El rotulo del empaque concuerda con la referencia empacada y contiene trazabilidad" =>
      "rotuloTrazabilidad",
    "El almacenamienTo cumple con las rotaciones adecuadas, (PEPS)" => "almacenamientoRotaciones",
    "Las canasta para empaque de producto se encuentran limpia, se usa base canasta o estiba." =>
      "canastaProductoLimpia",
    "Los implementos de trabajo se les da el uso adecuado y se almacenan correctamente (grameras, cuchillos, baldes)" =>
      "implementosAlmacena",
    "Todos los utensilios empleados (Canastas, basecanastas,  carros de transporte interno) permanecen limpios y en buen estado" =>
      "utensiliosLimpios",
    "El piso esta libre de suciedad (corbatas, material de empaque, residuos organicos)" =>
      "pisoSuciedad",
    "Los canales de desagüe  se encuentran limpios, libres de residuos orgánicos y protegidas con sus respectivas rejillas" =>
      "canalesLimpiosOrganicos",
    "El piso esta sin lixiviados." => "pisoLixiviados",
  ];

  if (isset($_POST["superficiesData2"])) {
    $superficiesArray = json_decode($_POST["superficiesData2"], true);
  } else {
    exit();
  }

  $columnasAspectos = "";
  $valoresAspectos = "";
  $paramsAspectos = [];

  foreach ($superficiesArray as $nombreAspecto => $valor) {
    if (isset($aspectos[$nombreAspecto])) {
      $columnaBD = $aspectos[$nombreAspecto];
      $columnasAspectos .= ", `$columnaBD`";
      $valoresAspectos .= ", :$columnaBD";
      $paramsAspectos[":$columnaBD"] = $valor;
    }
  }

  if (!empty($_POST["productoAlmacenamiento"])) {
    foreach ($_POST["productoAlmacenamiento"] as $i => $producto) {
      if (empty($producto)) {
        continue;
      }

      $lote = $_POST["loteAlmacenamiento"][$i] ?? null;
      $fechaBeneficio = $_POST["fechaBeneficio"][$i] ?? null;
      $fechaEmpaque = $_POST["fechaEmpaque"][$i] ?? null;
      $fechaVencimiento = $_POST["fechaVencimientoAuditoria"][$i] ?? null;
      $cantidad = $_POST["cantidadAlmacenamiento"][$i] ?? null;

      $sql = "INSERT INTO `auditoria_cuartos_inventario`
              (`fecha`, `categoria`, `numeroCuarto`, `producto`, `lote`, `fechaBeneficio`, 
               `fechaEmpaque`, `fechaVencimiento`, `cantidad`, `responsable`, `observaciones`, 
               `aprobo` $columnasAspectos)
              VALUES (CURRENT_DATE(), :categoria, :numeroCuarto, :producto, :lote, :fechaBeneficio, 
               :fechaEmpaque, :fechaVencimiento, :cantidad, :responsable, :observaciones, 
               :aprobo $valoresAspectos)";

      $stmt = $bdc->prepare($sql);

      $params =
        [
          ":categoria" => $categoriasA,
          ":numeroCuarto" => $auditoriaCuarto,
          ":producto" => $producto,
          ":lote" => $lote,
          ":fechaBeneficio" => $fechaBeneficio,
          ":fechaEmpaque" => $fechaEmpaque,
          ":fechaVencimiento" => $fechaVencimiento,
          ":cantidad" => $cantidad,
          ":responsable" => $responsableInventario,
          ":observaciones" => $observacionInventario,
          ":aprobo" => $aproboAlmacenam,
        ] + $paramsAspectos; // unir con los dinámicos

      $stmt->execute($params);
    }
  }

  $_SESSION["mensaje"] =
    "Registro Realizado Inventario Auditoria Cuartos Almacenamiento de Manera Exitosa!!!";
  $_SESSION["tipo"] = "success";
  $_SESSION["icon"] = "check-circle-fill";
}

//-------------------------------------------------------------------------------------------------------------//-------------------------------------------------------------------

if (isset($_POST["formMaterialExtraño"])) {
  // file_put_contents('debug.txt', "Formulario recibido: \n" . print_r($_POST, true), FILE_APPEND);
  try {
    $bdc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $bdc->beginTransaction();
    $id_registro = uniqid(); // registro unico para los datos

    // 🧾 Valores generales
    $planta = $_POST["plantaChequeo"] ?? "Desconocida";
    $area = $_POST["areasChequeo"] ?? "Desconocida";
    $nombreMaterial = $_POST["inpNombreMaterial"] ?? "Desconocida";
    $cedulaLista = $_POST["QRcedulaLista"] ?? "Desconocida";
    $aproboLista = $_POST["aproboListaChequeo"] ?? "Desconocida";
    $porcentajeGlobal = isset($_POST["globalArea"]) ? (float) $_POST["globalArea"] : 0;

    // 📥 Datos del formulario
    $items = $_POST["itemArray"] ?? [];
    $porcentajes = $_POST["porcentajes"] ?? [];
    $porcentajesCategoria = $_POST["porcentajeC"] ?? [];
    $observaciones = $_POST["observacionesLista"] ?? [];
    $aplica = $_POST["aplica"] ?? [];
    $criteriosPOST = $_POST["criterios"] ?? [];

    // 🧩 Relación de ítems con criterios
    $criteriosPorItemNombre = [
      "Area" => [
        "criterio1",
        "criterio2",
        "criterio3",
        "criterio4",
        "criterio5",
        "criterio6",
        "criterio99",
        "criterio100",
        "criterio101",
      ],
      "Gabinetes-Armarios" => [
        "criterio7",
        "criterio9",
        "criterio10",
        "criterio11",
        "criterio12",
        "criterio13",
      ],
      "Superficies generales-Bandas transportadoras" => [
        "criterio14",
        "criterio15",
        "criterio16",
        "criterio17",
        "criterio18",
        "criterio19",
      ],
      "Integridad" => ["criterio20", "criterio21", "criterio22", "criterio23", "criterio24"],
      "Visualizadores y tablero de control" => [
        "criterio25",
        "criterio26",
        "criterio27",
        "criterio28",
        "criterio29",
        "criterio30",
      ],
      "Estado de techos y estrucutras colgantes" => [
        "criterio31",
        "criterio32",
        "criterio33",
        "criterio34",
        "criterio35",
        "criterio8",
      ],
      "Integridad de paredes y pisos" => [
        "criterio36",
        "criterio37",
        "criterio38",
        "criterio39",
        "criterio40",
        "criterio88",
        "criterio103",
      ],
      "Luminarias y ventanas" => ["criterio41", "criterio42", "criterio43", "criterio44"],
      "Cultura Inocuidad Mantenimiento" => [
        "criterio45",
        "criterio46",
        "criterio47",
        "criterio48",
        "criterio49",
        "criterio50",
        "criterio51",
        "criterio52",
      ],
      "Objetos metalicos-quebradizos" => [
        "criterio53",
        "criterio54",
        "criterio55",
        "criterio56",
        "criterio57",
        "criterio58",
      ],
      "Dotacion" => ["criterio60", "criterio61", "criterio62", "criterio63", "criterio64"],
      "Mesas de proceso" => ["criterio65", "criterio66", "criterio67", "criterio68", "criterio69"],
      "Canastillas y estibas" => ["criterio70", "criterio71", "criterio72", "criterio102"],
      "Baldes-Tanques-Palas" => [
        "criterio73",
        "criterio74",
        "criterio75",
        "criterio76",
        "criterio77",
      ],
      "Cuchillos-chairas-Asentadores-Esterilizadores" => [
        "criterio78",
        "criterio79",
        "criterio80",
        "criterio81",
        "criterio82",
        "criterio83",
        "criterio104",
      ],
      "Instrumentos de medicion" => ["criterio84", "criterio85", "criterio86", "criterio87"],
      "Idoneidad e inocuidad del producto" => [
        "criterio89",
        "criterio90",
        "criterio91",
        "criterio92",
        "criterio93",
        "criterio94",
        "criterio95",
        "criterio96",
        "criterio97",
        "criterio98",
      ],
    ];

    // 🗺️ Mapeo de nombres HTML => columnas BD
    $criteriosMap = [];
    for ($i = 1; $i <= 103; $i++) {
      $criteriosMap["criterio" . $i] = "C" . $i;
    }

    // 🧱 Categorías y cantidad de ítems por cada una
    $catMap = [
      "Areas en general" => 2,
      "Equipos" => 3,
      "Instalaciones" => 3,
      "Intervenciones mantenimiento" => 1,
      "Personal" => 2,
      "Superficies" => 2,
      "Utensilios de proceso" => 3,
      "Producto en proceso" => 1,
    ];

    // 🔁 Recorremos categorías e ítems
    $itemIndex = 0;
    $catIndex = 0;

    foreach ($catMap as $categoria => $cantidadItems) {
      $porcentajeCatRaw = $porcentajesCategoria[$catIndex] ?? 0;
      $porcentajeCat = $porcentajeCatRaw === "N/A" ? null : (float) $porcentajeCatRaw;

      $aplicaCat = isset($aplica[$catIndex]) ? $aplica[$catIndex] : "si";

      for ($i = 0; $i < $cantidadItems; $i++) {
        $porcentajeItemRaw = $porcentajes[$itemIndex] ?? 0;
        $porcentajeItem = $porcentajeItemRaw === "N/A" ? null : (float) $porcentajeItemRaw;
        $observacionRaw = $observaciones[$itemIndex] ?? "";
        $observacion = $observacionRaw === "N/A" ? null : $observacionRaw;

        // Mapeo de criterios por ítem
        $itemNombre = $items[$itemIndex] ?? "";
        $criteriosRelacionados = $criteriosPorItemNombre[$itemNombre] ?? [];

        $datosCriterios = [];

        foreach ($criteriosMap as $nombreHtml => $columnaBD) {
          if ($aplicaCat === "no") {
            $datosCriterios[$columnaBD] = null;
          } elseif (in_array($nombreHtml, $criteriosRelacionados)) {
            // Si está marcado (existe y su valor es "0"), cumple
            if (
              isset($criteriosPOST[$nombreHtml][$itemIndex]) &&
              $criteriosPOST[$nombreHtml][$itemIndex] === "0"
            ) {
              $datosCriterios[$columnaBD] = 0;
            } else {
              // Si no está marcado, no cumple (1)
              $datosCriterios[$columnaBD] = 1;
            }
          } else {
            // Criterio no aplica a este ítem
            $datosCriterios[$columnaBD] = null;
          }
        }

        $columnasExtra = implode(", ", array_keys($datosCriterios));
        $placeholdersExtra = implode(", ", array_fill(0, count($datosCriterios), "?"));
        $valoresExtra = array_values($datosCriterios);

        $sql = "INSERT INTO `material_extrano`
            (`fecha`, `responsable`, `cedula`, `planta`, `area`, `item`, `porcentajeItem`, `porcentajeCategoria`,
             `observaciones`, `aplica`, `categoria`, `porcentajeGlobal`, `id_registro`, `aprobo`, $columnasExtra)
            VALUES (CURRENT_DATE(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, $placeholdersExtra)";

        $stmt = $bdc->prepare($sql);
        $stmt->execute(
          array_merge(
            [
              $nombreMaterial,
              $cedulaLista,
              $planta,
              $area,
              $items[$itemIndex] ?? "",
              $porcentajeItem,
              $porcentajeCat,
              $observacion,
              $aplicaCat,
              $categoria,
              $porcentajeGlobal,
              $id_registro,
              $aproboLista,
            ],
            $valoresExtra
          )
        );

        $itemIndex++;
      }

      $catIndex++;
    }
    $bdc->commit();

    $_SESSION["mensaje"] =
      count($items) . " registros guardados correctamente de Material Extraño!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } catch (PDOException $e) {
    $bdc->rollBack();
    $_SESSION["mensaje"] = "Error en BD: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
    error_log("Error BD: " . $e->getMessage());
  } catch (Exception $e) {
    $bdc->rollBack();
    $_SESSION["mensaje"] = "Error: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
//------------------------------------------------------------------------------------------//--------------------------
if (isset($_POST["formVerificacionLockers"])) {
  $plantaLocker = $_POST["plantaLockers"];
  $numeroLocker = $_POST["numeroLocker"];
  $areaLockers = $_POST["areaLockers"];
  $generoLockers = $_POST["generoLockers"];
  $preseneciaAlimentos = $_POST["presenciaAlimentos"];
  $presenciaPlagas = $_POST["presenciaPlagas"];
  $presenciaOxido = $_POST["presenciaOxido"];
  $danosLocker = $_POST["danosLocker"];
  $presenciaImplementos = $_POST["presenciaImplementos"];
  $lockerCandado = $_POST["lockerCandado"];
  $lockerOrden = $_POST["lockerOrden"];
  $lockerCompartimiento = $_POST["lockerCompartimiento"];
  $observacionesLocker = $_POST["observacionesLocker"];
  $responsableLocker = $_POST["responsableLocker"];
  $aproboLocker = $_POST["aproboLocker"];

  if (
    isset($_POST["correccion"]) &&
    is_array($_POST["correccion"]) &&
    count($_POST["correccion"]) > 0
  ) {
    $correccion = implode(",", $_POST["correccion"]); // convierte a string separado por comas
  } else {
    $correccion = "ninguna";
  }

  $consult = "INSERT INTO `verificacion_lockers`(`fecha`, `planta`, `numeroLocker`, `area`, `genero`, `presenciaAlimentos`, `presenciaPlagas`, `presenciaOxido`, `danos`,
     `presenciaImplementos`, `lockerCandado`, `lockerCompartimiento`, `lockerOrden`, `observaciones`, `responsableVerificacion`, `aprobo`, `correccion`)
                VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $Empaque = $bdc->prepare($consult);
  $Empaque->execute([
    $plantaLocker,
    $numeroLocker,
    $areaLockers,
    $generoLockers,
    $preseneciaAlimentos,
    $presenciaPlagas,
    $presenciaOxido,
    $danosLocker,
    $presenciaImplementos,
    $lockerCandado,
    $lockerOrden,
    $lockerCompartimiento,
    $observacionesLocker,
    $responsableLocker,
    $aproboLocker,
    $correccion,
  ]);

  if ($Empaque->rowCount()) {
    $_SESSION["mensaje"] = "Registro Verificacion De Lockers Realizado de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "No se pudo enviar el reporte";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}
//-----------------------------------------------------------------------------------//----------------------------------------------------------------------
if (!$bdc) {
  file_put_contents("debug.txt", "❌ Conexión \$bdc no válida.\n", FILE_APPEND);
}

if (isset($_POST["formProductoNoconforme"])) {
  $responsableNoconforme = $_POST["responsableNoconforme"] ?? null;
  $verificoNoconforme = $_POST["verificoNoconforme"] ?? null;
  $observacion = $_POST["observacionNoconforme"] ?? null;
  $aproboNoconforme = $_POST["aproboNoconforme"] ?? null;

  // Recorremos todos los productos enviados
  if (!empty($_POST["itemNoconforme"])) {
    foreach ($_POST["itemNoconforme"] as $i => $producto) {
      if (empty($producto)) {
        continue;
      } // si está vacío, saltar

      $procedencia = $_POST["procedenciaNoconforme"][$i] ?? null;
      $cantidad = $_POST["cantidadNoconforme"][$i] ?? null;
      $unidades = $_POST["unidadesNoconforme"][$i] ?? null;
      $lote = $_POST["loteNoconforme"][$i] ?? null;
      $vencimiento = $_POST["vencimientoNoconforme"][$i] ?? null;
      $destino = $_POST["destinoNoconforme"][$i] ?? null;
      $causa = $_POST["causaNoconforme"][$i] ?? null;

      $consult = "INSERT INTO `producto_no_conforme`(`fecha`,`item`, `procedencia`, `cantidad`, `unidades`, `lote`, `vencimiento`, `destino`,
            `causa`, `responsable`, `verifico`, `observacion`, `aprobo`)
            VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?)";

      $Empaque = $bdc->prepare($consult);
      $Empaque->execute([
        $producto,
        $procedencia,
        $cantidad,
        $unidades,
        $lote,
        $vencimiento,
        $destino,
        $causa,
        $responsableNoconforme,
        $verificoNoconforme,
        $observacion,
        $aproboNoconforme,
      ]);
    }
  }

  $_SESSION["mensaje"] = "Registro Realizado Producto no conforme de Manera Exitosa!!!";
  $_SESSION["tipo"] = "success";
  $_SESSION["icon"] = "check-circle-fill";
}

//---------------------------------------------------------------//----------------------------------------------------------------
if (isset($_POST["formcontrolDesinfecPlataforma"])) {
  // Recibir los datos del formulario
  $hora = $_POST["horaCumplimientoPlataforma"] ?? null;
  $plataforma = $_POST["plataforma"] ?? null;
  $deguelle = $_POST["deguelle"] ?? null;
  $patas = $_POST["patas"] ?? null;
  $escaldadoDesinfeccion = $_POST["desinfeccionEscaldado"] ?? null;
  $controlCorrectivoP = $_POST["controlCorrectivoPlataforma"] ?? null;
  $controlVerificoP = $_POST["controlVerificoPlataforma"] ?? null;
  $controlAproboP = $_POST["controlAproboPlataforma"] ?? null;

  try {
    $consult = "INSERT INTO `desinfeccion_plataforma` 
                    (`fecha`, `Hora`, `plataforma`, `deguelle`, `patas`, `escaldado1`, `correctivo`, `verifico`, `aprobo`) 
                    VALUES 
                    (CURRENT_DATE(), ?, ?, ?, ?, ?, ?, ?, ?)";

    $InspeccionC = $bdc->prepare($consult);
    $InspeccionC->execute([
      $hora,
      $plataforma,
      $deguelle,
      $patas,
      $escaldadoDesinfeccion,
      $controlCorrectivoP,
      $controlVerificoP,
      $controlAproboP,
    ]);

    if ($InspeccionC->rowCount() > 0) {
      $_SESSION["mensaje"] =
        "Registro Cloro residual puntos desinfeccion plataforma realizado con éxito!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";
    } else {
      $_SESSION["mensaje"] = "No se insertaron datos en la base de datos.";
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";
    }
  } catch (PDOException $e) {
    $_SESSION["mensaje"] = "Error al insertar datos: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}

//-----------------------------------------Limpieza y desinfeccion de cuartos----------------------//----------------------------------------------------------------

if (isset($_POST["formLimpiezaCuarto"])) {
  $cuartoArea = $_POST["cuartoArea"];
  $cuartoLugar = $_POST["cuartoLugar"];
  $cuartoNumero = $_POST["cuartoNumero"];
  $cuartoNombreDetergente = $_POST["cuartoNombreDetergente"];
  $cuartoConcentracionDetergente = $_POST["cuartoConcentracionDetergente"];
  $cuartoNombreDesinfectante = $_POST["cuartoNombreDesinfectante"];
  $cuartoConcentracionDesinfectante = $_POST["cuartoConcentracionDesinfectante"];
  $cuartoLimpieza = $_POST["cuartoLimpieza"];
  $cuartoAccion = $_POST["cuartoAccion"];
  $cuartoAprobo = $_POST["cuartoAprobo"];

  /* ---------------- FIRMA DE RESPONSABLE ---------------- */
  $responsable = isset($_POST["base64VerificacionCuartos"]) ? $_POST["base64VerificacionCuartos"] : null;

  if ($responsable && strpos($responsable, "data:image/png;base64,") === 0) {
    $responsableBase64 = explode(",", $responsable)[1];
    $responsableBinaria = base64_decode($responsableBase64);
  } else {
    $responsableBinaria = null;
  }

  /* ---------------- FIRMA DE VERIFICACION ---------------- */
  $verifico = isset($_POST["base64VerificacionCuartosveri"]) ? $_POST["base64VerificacionCuartosveri"] : null;

  if ($verifico && strpos($verifico, "data:image/png;base64,") === 0) {
    $verificoBase64 = explode(",", $verifico)[1];
    $verificoBinaria = base64_decode($verificoBase64);
  } else {
    $verificoBinaria = null;
  }

  /* ---------------- ARMAR DATOS ---------------- */
  $data = [
    $cuartoArea,
    $cuartoLugar,
    $cuartoNumero,
    $cuartoNombreDetergente,
    $cuartoConcentracionDetergente,
    $cuartoNombreDesinfectante,
    $cuartoConcentracionDesinfectante,
    $cuartoLimpieza,
    $cuartoAccion,
    $responsableBinaria, // ✅ guarda la imagen binaria real
    $verificoBinaria,    // ✅ guarda la imagen binaria real
    $cuartoAprobo,
  ];

  try {
    $consult = "INSERT INTO `for-s-cci-70 -limpieza`
      (`fecha`, `area`, `lugar`, `numero_lugar`, `nombre_Detergente`,
      `concentracion_Detergente`, `nombre_Desinfectante`, `concentracion_Desinfectante`,
      `limpieza`, `accion_correctiva`, `responsable`, `verifico`, `aprobo`)
      VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?)";

    $LimpiezaC = $bdc->prepare($consult);
    $LimpiezaC->execute($data);

    if ($LimpiezaC->rowCount() > 0) {
      $_SESSION["mensaje"] = "Registro Realizado de Manera Exitosa!!!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";
    } else {
      $_SESSION["mensaje"] = "No se pudo enviar el reporte";
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";
    }

  } catch (PDOException $e) {
    $_SESSION["mensaje"] = "⚠️ Error: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
    file_put_contents("debug.txt", "Error en PDO: " . $e->getMessage() . "\n", FILE_APPEND);
  }
}

//------------------------------------------- Frecuencia Inspeccion- --------------------//----------------------------------------------------------------


/* if (isset($_POST["formFrecuenciaInspeccion"])) {
    $plantas = $_POST["planta"] ?? [];
    $areas = $_POST["proceso"] ?? [];
    $detalles = $_POST["detalle_material"] ?? [];
    $estados = $_POST["estado"] ?? [];
    $tipos_material = $_POST["tipo_material"] ?? [];
    $frecuencias = $_POST["frecuencia_inspeccion"] ?? [];
    $cantidades = $_POST["cantidad"] ?? [];
    $ausentes = $_POST["ausentes"] ?? [];
    $incompletos = $_POST["incompletos"] ?? [];

    $total_filas = count($plantas);
    $insertados = 0;

    if ($total_filas === 0) {
        $_SESSION["mensaje"] = "No hay datos en la tabla para enviar.";
        $_SESSION["tipo"] = "danger";
    } else {
        try {
            $consult = "INSERT INTO for_s_cci_17_frecuencia_inspeccion
                            (`fecha`, `planta`, `area`, `detalle_material`, `estado`, 
                             `tipo_material`, `frecuencia_inspeccion`, `cantidad`, `ausentes`, `incompletos`)
                        VALUES (CURRENT_DATE(), ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            
            $fInspeccion = $bdc->prepare($consult);

            for ($i = 0; $i < $total_filas; $i++) {
                $fInspeccion->execute([
                    $plantas[$i] ?? '',
                    $areas[$i] ?? '',
                    $detalles[$i] ?? '',
                    $estados[$i] ?? '',
                    $tipos_material[$i] ?? '',
                    $frecuencias[$i] ?? '',
                    (int)($cantidades[$i] ?? 0),
                    (int)($ausentes[$i] ?? 0),
                    (int)($incompletos[$i] ?? 0)
                ]);

                if ($fInspeccion->rowCount() > 0) {
                    $insertados++;
                }
            }

            if ($insertados > 0) {
                $_SESSION["mensaje"] = "✅ Se insertaron $insertados registros correctamente.";
                $_SESSION["tipo"] = "success";
            } else {
                $_SESSION["mensaje"] = "❌ No se insertó ningún dato.";
                $_SESSION["tipo"] = "danger";
            }

        } catch (PDOException $e) {
            $_SESSION["mensaje"] = "Error al insertar datos: " . $e->getMessage();
            $_SESSION["tipo"] = "danger";
        }
    }
}

*/


if (isset($_POST["formFrecuenciaInspeccion"])) {

    $plantas = $_POST["planta"] ?? [];
    $areas = $_POST["proceso"] ?? [];
    $detalles = $_POST["detalle_material"] ?? [];
    $estados = $_POST["estado"] ?? [];
    $tipos_material = $_POST["tipo_material"] ?? [];
    $frecuencias = $_POST["frecuencia_inspeccion"] ?? [];
    $cantidades = $_POST["cantidad"] ?? [];
    $ausentes = $_POST["ausentes"] ?? [];
    $incompletos = $_POST["incompletos"] ?? [];
    $nombreCalidadfrecuencia = $_POST["nombreCalidadfrecuencia"] ?? '';
    $nombreCalidadfrecuencia1 = $_POST["nombreCalidadfrecuencia1"] ?? '';


    try {
        $consult = "INSERT INTO for_s_cci_17_frecuencia_inspeccion
                        (`fecha`, `planta`, `area`, `detalle_material`, `estado`, 
                         `tipo_material`, `frecuencia_inspeccion`, `cantidad`, `ausentes`, `incompletos`, `nombreCalidadfrecuencia`,`nombreCalidadfrecuencia1`)
                    VALUES (CURRENT_DATE(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        $fInspeccion = $bdc->prepare($consult);

        $total_filas = count($plantas);

        for ($i = 0; $i < $total_filas; $i++) {
            $fInspeccion->execute([
                $plantas[$i] ?? '',
                $areas[$i] ?? '',
                $detalles[$i] ?? '',
                $estados[$i] ?? '',
                $tipos_material[$i] ?? '',
                $frecuencias[$i] ?? '',
                (int)($cantidades[$i] ?? 0),
                (int)($ausentes[$i] ?? 0),
                (int)($incompletos[$i] ?? 0),
                $nombreCalidadfrecuencia,
                $nombreCalidadfrecuencia1
            ]);
        }

        // ✅ Mensaje único de éxito sin errores ni condiciones
        echo "<script>
            alert('✅ Datos enviados exitosamente.');
            window.history.back(); // opcional: regresa a la página anterior
        </script>";

    } catch (PDOException $e) {
        // 🔇 Silencia cualquier error (no muestra nada)
    }
}




//---------------------------------------------------------------//----------------------------------------------------------------

  
if (isset($_POST["formDesinfeccionGuantes"])) {

    // Log de POST recibido
    file_put_contents('debug.txt', "\n\n===== NUEVO ENVÍO =====\n" . print_r($_POST, true), FILE_APPEND);

    try {

        // ======================
        // CAPTURA DE VARIABLES
        // ======================
        $horaDesinfeccionG        = $_POST["horaDesinfeccionG"];
        $areaDesinfeccionG        = $_POST["areaDesinfeccionG"];
        $personaDesinfeccionG     = $_POST["personaDesinfeccionG"];
        $dDesinfeccionG           = $_POST["dDesinfeccionG"];
        $concentracionDesinfeccionG = $_POST["concentracionDesinfeccionG"];
        $ObsDesinfeccionG         = $_POST["ObsDesinfeccionG"];
        $nombreProceso14          = $_POST["nombreProceso14"];
        $nombreProceso15          = $_POST["nombreProceso15"];
        $nombreProceso16          = $_POST["nombreProceso16"];  // <- verefico
        $aproboDesinfeccionG      = $_POST["aproboDesinfeccionG"];

        // ======================
        // SQL CORRECTO
        // ======================
        $consult = "INSERT INTO `for-s-cci-100_desinfeccion_guantes`
        (`fecha`, `hora`, `area`, `cant_persona`, `desinfectante`, `concentracion`,
         `observaciones`, `responsable`, `colaborador`, `verefico`, `aprobo`)
        VALUES (CURRENT_DATE(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        // Debug antes de ejecutar
        file_put_contents('debug.txt', "\nPARAMETROS:\n" . print_r([
            $horaDesinfeccionG,
            $areaDesinfeccionG,
            $personaDesinfeccionG,
            $dDesinfeccionG,
            $concentracionDesinfeccionG,
            $ObsDesinfeccionG,
            $nombreProceso14,
            $nombreProceso15,
            $nombreProceso16,
            $aproboDesinfeccionG
        ], true), FILE_APPEND);

        // ======================
        // EJECUCIÓN
        // ======================
        $stmt = $bdc->prepare($consult);
        $resultado = $stmt->execute([
            $horaDesinfeccionG,
            $areaDesinfeccionG,
            $personaDesinfeccionG,
            $dDesinfeccionG,
            $concentracionDesinfeccionG,
            $ObsDesinfeccionG,
            $nombreProceso14,
            $nombreProceso15,
            $nombreProceso16,
            $aproboDesinfeccionG
        ]);

        // ======================
        // LOG DE ERRORES PDO
        // ======================
        file_put_contents('debug.txt', "\nPDO ERROR INFO:\n" . print_r($stmt->errorInfo(), true), FILE_APPEND);

        // ======================
        // MENSAJES AL USUARIO
        // ======================
        if ($resultado) {
            $_SESSION["mensaje"] = "Registro Desinfección de Guantes realizado con éxito";
            $_SESSION["tipo"] = "success";
            $_SESSION["icon"] = "check-circle-fill";
        } else {
            $_SESSION["mensaje"] = "Error al guardar el registro";
            $_SESSION["tipo"] = "danger";
            $_SESSION["icon"] = "exclamation-triangle-fill";
        }

    } catch (Exception $e) {

        // ERROR CRÍTICO
        file_put_contents('debug.txt', "\nEXCEPCIÓN CAPTURADA:\n" . $e->getMessage(), FILE_APPEND);

        $_SESSION["mensaje"] = "Error crítico: No se pudo guardar";
        $_SESSION["tipo"] = "danger";
        $_SESSION["icon"] = "exclamation-triangle-fill";
    }
}





//---------------------------------------------------------------//----------------------------------------------------------------

if (isset($_POST["formVerificacionCanastas"])) {
  $horaVerificacionC = $_POST["horaVerificacionC"];		
  $areaVerificacionC = $_POST["areaVerificacionC"];
  $canastaVerificacionC = $_POST["canastaVerificacionC"];
  $numeroVerificacionC = $_POST["numeroVerificacionC"];
  $conformesVerificacionC = $_POST["conformesVerificacionC"];
  $desinfectadasVerificacionC = $_POST["desinfectadasVerificacionC"];
  $deterioroVerificacionC = $_POST["deterioroVerificacionC"];
  $limpiezaVerificacionC = $_POST["limpiezaVerificacionC"];
  $dVerificacionC = $_POST["dVerificacionC"];
  $concentracionVerificacionC = $_POST["concentracionVerificacionC"];
  $accionesVerificacionC = $_POST["accionesVerificacionC"];
  $nombreProceso11 = $_POST["nombreProceso11"];
  $nombreProceso12 = $_POST["nombreProceso12"];
  $nombreProceso13 = $_POST["nombreProceso13"];
  $aproboVerificacionC = $_POST["aproboVerificacionC"];
  

  if (
    isset($_POST["correccion"]) &&
    is_array($_POST["correccion"]) &&
    count($_POST["correccion"]) > 0
  ) {
    $correccion = implode(",", $_POST["correccion"]); // convierte a string separado por comas
  } else {
    $correccion = "ninguna";
  }

  $consult = "INSERT INTO `for-s-cci-82_verificacion_canastillas`(`fecha`, `hora`,`area`, `tipo_canasta`, `n_verificadas`, `n_conformes`, `n_desinfectadas`, `n_rechazada_deterioro`, `n_rechazada_limpieza`, `desinfectante`, `concentracion`,
  `acciones`,`responsable`,`colaborador`,`verefico`,`aprobo`)
                VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $VerificacionC = $bdc->prepare($consult);
  $VerificacionC->execute([
    $horaVerificacionC,
    $areaVerificacionC,
    $canastaVerificacionC,
    $numeroVerificacionC,
    $conformesVerificacionC,
    $desinfectadasVerificacionC,
    $deterioroVerificacionC,
    $limpiezaVerificacionC,
    $dVerificacionC,
    $concentracionVerificacionC,
    $accionesVerificacionC,
	  $nombreProceso11,
	  $nombreProceso12,
	  $nombreProceso13,
	  $aproboVerificacionC,

  ]);

  if ($VerificacionC->rowCount()) {
    $_SESSION["mensaje"] = "Verificación de limpieza y desinfección de Canastillas Realizada de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "No se pudo enviar el reporte";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}


//----------Control de cloro residual puntos de desinfección evisceración--------------------------------------------------------------

if (isset($_POST["formcontrolDesinfecEvisceracion"])) {
  // Recibir los datos del formulario
  $horaInicioEvisceracion = $_POST["horaInicioEvisceracion"] ?? null;
  $Evisceracion = $_POST["Evisceracion"] ?? null;
  $colgadoEvisceracion = $_POST["colgadoEvisceracion"] ?? null;
  $abdomen1Evisceracion = $_POST["abdomen1Evisceracion"] ?? null;
  $abdomen2Evisceracion = $_POST["abdomen2Evisceracion"] ?? null;
  $recuperacionEvisceracion = $_POST["recuperacionEvisceracion"] ?? null;
  $DScolgadoEvisceracion = $_POST["DScolgadoEvisceracion"] ?? null;
  $higadoEvisceracion = $_POST["higadoEvisceracion"] ?? null;
  $DCtoleranciaEvisceracion = $_POST["DCtoleranciaEvisceracion"] ?? null;
  $DStoleranciaEvisceracion = $_POST["DStoleranciaEvisceracion"] ?? null;
  $controlCorrectivoEvisceracion = $_POST["controlCorrectivoEvisceracion"] ?? null;
  $controlVerificoEvisceracion = $_POST["controlVerificoEvisceracion"] ?? null;
  $controlAproboEvisceracion = $_POST["controlAproboEvisceracion"] ?? null;

  try {
    $consult = "INSERT INTO `for-s-cci-67_desinfeccion_evisceracion` 
                    (`fecha`, `HoraFin`, `HoraInicio`, `evisceracion`, `colgado`, `abdomen1`, `abdomen2`, `recuperacion`, `dsColgado`, `higado`, `dcTolerancia`, `dsTolerancia`, `correctivo`, `verifico`, `aprobo`) 
                    VALUES 
                    (CURRENT_DATE(), NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $InspeccionC = $bdc->prepare($consult);
    $InspeccionC->execute([
      $horaInicioEvisceracion,
      $Evisceracion,
      $colgadoEvisceracion,
      $abdomen1Evisceracion,
      $abdomen2Evisceracion,
      $recuperacionEvisceracion,
      $DScolgadoEvisceracion,
      $higadoEvisceracion,
      $DCtoleranciaEvisceracion,
      $DStoleranciaEvisceracion,
      $colgadoEvisceracion,
      $controlVerificoEvisceracion,
      $controlAproboEvisceracion,
    ]);

    if ($InspeccionC->rowCount() > 0) {
      $_SESSION["mensaje"] =
        "Registro Cloro residual puntos desinfeccion Evisceracion realizado con éxito!";
      $_SESSION["tipo"] = "success";
      $_SESSION["icon"] = "check-circle-fill";
    } else {
      $_SESSION["mensaje"] = "No se insertaron datos en la base de datos.";
      $_SESSION["tipo"] = "danger";
      $_SESSION["icon"] = "exclamation-triangle-fill";
    }
  } catch (PDOException $e) {
    $_SESSION["mensaje"] = "Error al insertar datos: " . $e->getMessage();
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}





//------------------------Preparacion Salmuera ----------------------------------------------------------------

if (isset($_POST["formPreparacionSalmuera"])) {
  $horaSalmuera = $_POST["horaSalmuera"];	
  $loteSalmuera = $_POST["loteSalmuera"];
  $kgSalmuera = $_POST["kgSalmuera"];
  $litrosSalmuera = $_POST["litrosSalmuera"];
  $tempSalmuera = $_POST["tempSalmuera"];
  $ObsSalmuera = $_POST["ObsSalmuera"];
  $responsableSalmuera = $_POST["responsableSalmuera"];
  $aproboSalmuera = $_POST["aproboSalmuera"];

  if (
    isset($_POST["correccion"]) &&
    is_array($_POST["correccion"]) &&
    count($_POST["correccion"]) > 0
  ) {
    $correccion = implode(",", $_POST["correccion"]); // convierte a string separado por comas
  } else {
    $correccion = "ninguna";
  }

  $consult = "INSERT INTO `for-e-cci-12_preparacion_salmuera`(`fecha`, `hora`,`lote`, `kg`, `litros`, `temp`, `observaciones`, `responsable`, `aprobo`)
                VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?)";

  $DesinfeccionG = $bdc->prepare($consult);
  $DesinfeccionG->execute([
    $horaSalmuera,
    $loteSalmuera,
    $kgSalmuera,
    $litrosSalmuera,
    $tempSalmuera,
    $ObsSalmuera,
    $responsableSalmuera,
    $aproboSalmuera,

  ]);

  if ($DesinfeccionG->rowCount()) {
    $_SESSION["mensaje"] = "Registro control Preparacion Salmuera Realizada de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "No se pudo enviar el reporte";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}


//---------- limpieza y desinfeccion de las agujas de las inyectoras ----------------------------------------------------------------

if (isset($_POST["formInyectadora"])) {
  $inyectadora = $_POST["inyectadora"];
  $horaInyectadora = $_POST["horaInyectadora"];
  $vAgujasInyectadora = $_POST["vAgujasInyectadora"];
  $condicionInyectadora = $_POST["condicionInyectadora"];
  $estadoInyectadora = $_POST["estadoInyectadora"];
  $LDInyectadora = $_POST["LDInyectadora"];
  $ObsInyectadora = $_POST["ObsInyectadora"];
  $correctivaInyectadora = $_POST["correctivaInyectadora"];
  $responsableInyectadora = $_POST["responsableInyectadora"];
  $aproboInyectadora = $_POST["aproboInyectadora"];

  if (
    isset($_POST["correccion"]) &&
    is_array($_POST["correccion"]) &&
    count($_POST["correccion"]) > 0
  ) {
    $correccion = implode(",", $_POST["correccion"]); // convierte a string separado por comas
  } else {
    $correccion = "ninguna";
  }

  $consult = "INSERT INTO `for-s-cci-74_desinfeccion_agujas_inyectora`(`fecha`, `hora`,`inyectora`, `agujas`, `condicion`, `estado`, `limpieza`, `observaciones`,`correccion`, `responsable`, `aprobo`)
                VALUES (CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?)";

  $DesinfeccionG = $bdc->prepare($consult);
  $DesinfeccionG->execute([
	$horaInyectadora,
    $inyectadora,
    $vAgujasInyectadora,
    $condicionInyectadora,
    $estadoInyectadora,
    $LDInyectadora,
    $ObsInyectadora,
    $correctivaInyectadora,
    $responsableInyectadora,
    $aproboInyectadora,

  ]);

  if ($DesinfeccionG->rowCount()) {
    $_SESSION["mensaje"] = "Registro limpieza y desinfeccion de las agujas de las inyectoras Realizada de Manera Exitosa!!!";
    $_SESSION["tipo"] = "success";
    $_SESSION["icon"] = "check-circle-fill";
  } else {
    $_SESSION["mensaje"] = "No se pudo enviar el reporte";
    $_SESSION["tipo"] = "danger";
    $_SESSION["icon"] = "exclamation-triangle-fill";
  }
}



/* VEHICULO POLLO Y PAVO EN PIE*/
if (isset($_POST["formRetiroVehiculo"])) {
    $placaVehiculoestado = $_POST["placaVehiculoestado"];
    $horavehiculo = $_POST["horavehiculo"];
    $retiroEstadovehiculo = $_POST["retiroEstadovehiculo"];
    $retiroAccionesestado = $_POST["retiroAccionesestado"] ?? '';
    $retiroResponsablesestado = $_POST["retiroResponsablesestado"];
    $retiroVerificaestado = $_POST["retiroVerificaestado"];
    $retiroAproboestado = $_POST["retiroAproboestado"];


    try {
        $sql = "INSERT INTO `for_s_cci_72_retiro_solidos_enjuague_vehiculo`
                (`fecha`, `hora`, `placa`, `retiro_enjuague`, `acciones`, `responsables`, `verifica`,`aprobo`)
                VALUES (CURRENT_DATE(), ?, ?, ?, ?, ?, ?, ?)";

        $RetiroVehiculo = $bdc->prepare($sql);
        $RetiroVehiculo->execute([
            $horavehiculo,
            $placaVehiculoestado,        
            $retiroEstadovehiculo,
            $retiroAccionesestado,
            $retiroResponsablesestado,
            $retiroVerificaestado,
            $retiroAproboestado
        ]);

        if ($RetiroVehiculo->rowCount()) {
            $_SESSION["mensaje"] = "Registro de Retiro de Sólidos y Enjuague del Vehículo realizado correctamente.";
            $_SESSION["tipo"] = "success";
            $_SESSION["icon"] = "check-circle-fill";
        } else {
            $_SESSION["mensaje"] = "No se pudo enviar el reporte";
            $_SESSION["tipo"] = "danger";
            $_SESSION["icon"] = "exclamation-triangle-fill";
        }

    } catch (PDOException $e) {
        $_SESSION["mensaje"] = "Error al guardar en la base de datos: " . $e->getMessage();
        $_SESSION["tipo"] = "danger";
        $_SESSION["icon"] = "exclamation-triangle-fill";
    }
}

/* DESINFECCION HUACALES*/
if (isset($_POST["guacalesForm"])) {
    $guacalesvehiculo = $_POST["guacalesvehiculo"];
    $viajeguacales = $_POST["viajeguacales"];
    $horaguacales = $_POST["horaguacales"];
    $guacalesDesinfeccion = $_POST["guacalesDesinfeccion"];
    $guacalesVerificacion = $_POST["guacalesVerificacion"] ?? '';
    $guacalesAcciones = $_POST["guacalesAcciones"];
    $guacalesResponsable = $_POST["guacalesResponsable"];
    $guacalesAprobo = $_POST["guacalesAprobo"];


    try {
        $sql = "INSERT INTO `for_s_cci_73_huacales_desinfeccion`
                (`fecha`, `hora` ,`viaje`, `limpieza_veh`, `limpieza_desi`, `verificacion`, `acciones_corre`, `responsable`,`aprobosi`)
                VALUES (CURRENT_DATE(), ?, ?, ?, ?, ?, ?, ?, ?)";

        $RetiroVehiculo = $bdc->prepare($sql);
        $RetiroVehiculo->execute([

            $horaguacales,
            $viajeguacales,
            $guacalesvehiculo,
            $guacalesDesinfeccion,
            $guacalesVerificacion,
            $guacalesAcciones,
            $guacalesResponsable,
            $guacalesAprobo
        ]);

        if ($RetiroVehiculo->rowCount()) {
            $_SESSION["mensaje"] = "Registro de Desinfeccion y Limpeza de lo Huacales";
            $_SESSION["tipo"] = "success";
            $_SESSION["icon"] = "check-circle-fill";
        } else {
            $_SESSION["mensaje"] = "No se pudo enviar el reporte";
            $_SESSION["tipo"] = "danger";
            $_SESSION["icon"] = "exclamation-triangle-fill";
        }

    } catch (PDOException $e) {
        $_SESSION["mensaje"] = "Error al guardar en la base de datos: " . $e->getMessage();
        $_SESSION["tipo"] = "danger";
        $_SESSION["icon"] = "exclamation-triangle-fill";
    }
}


/* --------------------------------------------------------------------- */
/* CONRTOL DE CONTRAMUESTRA*/
if (isset($_POST["contraMuestraform"])) {

    // Capturar campos del formulario
    $idRegistro = $_POST["idRegistro"] ?? null; // Si es nuevo, estará vacío
    $productocontraMuestra = $_POST["productocontraMuestra"];
    $lotecontraMuestra = $_POST["lotecontraMuestra"];
    $horacontraMuestra = $_POST["horacontraMuestra"];
    $produccioncontraMuestra = $_POST["produccioncontraMuestra"] ?? '';
    $vencimientocontraMuestra = $_POST["vencimientocontraMuestra"];
    $pesocontraMuestra = $_POST["pesocontraMuestra"];
    $colorcontraMuestra = $_POST["colorcontraMuestra"];
    $olorcontraMuestra = $_POST["olorcontraMuestra"];
    $empaquecontraMuestra = $_POST["empaquecontraMuestra"];
    $aparienciacontraMuestra = $_POST["aparienciacontraMuestra"];
    $temperacontraMuestra = $_POST["temperacontraMuestra"];
    $diascontraMuestra = $_POST["diascontraMuestra"];
    $finalcontraMuestra = $_POST["finalcontraMuestra"];
    $accionescontraMuestra = $_POST["accionescontraMuestra"];
    $verificadocontraMuestra = $_POST["verificadocontraMuestra"];
    $aprobocontraMuestra = $_POST["aprobocontraMuestra"];

    try {
        if ($idRegistro) {
            // UPDATE
            $sql = "UPDATE `for_e_cci_13_control_contramuestra` SET
                        hora = ?, producto = ?, lote = ?, fecha_produ = ?, fecha_venci = ?, peso_inicial = ?,
                        color = ?, olor = ?, empaque = ?, apariencia = ?, temperatura = ?, dias_almace = ?,
                        peso_final = ?, acciones_correcti = ?, veri_por = ?, aprobado = ?
                    WHERE id = ?";
            $stmt = $bdc->prepare($sql);
            $stmt->execute([
                $horacontraMuestra, $productocontraMuestra, $lotecontraMuestra, $produccioncontraMuestra,
                $vencimientocontraMuestra, $pesocontraMuestra, $colorcontraMuestra, $olorcontraMuestra,
                $empaquecontraMuestra, $aparienciacontraMuestra, $temperacontraMuestra, $diascontraMuestra,
                $finalcontraMuestra, $accionescontraMuestra, $verificadocontraMuestra, $aprobocontraMuestra,
                $idRegistro
            ]);

            $_SESSION["mensaje"] = "Registro actualizado correctamente.";
            $_SESSION["tipo"] = "success";
            $_SESSION["icon"] = "check-circle-fill";

        } else {
            // INSERT
            $sql = "INSERT INTO `for_e_cci_13_control_contramuestra`
                    (`fecha`, `hora`, `producto`, `lote`, `fecha_produ`, `fecha_venci`, `peso_inicial`,
                     `color`, `olor`, `empaque`, `apariencia`, `temperatura`, `dias_almace`,
                     `peso_final`, `acciones_correcti`, `veri_por`, `aprobado`)
                    VALUES (CURRENT_DATE(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $bdc->prepare($sql);
            $stmt->execute([
                $horacontraMuestra, $productocontraMuestra, $lotecontraMuestra, $produccioncontraMuestra,
                $vencimientocontraMuestra, $pesocontraMuestra, $colorcontraMuestra, $olorcontraMuestra,
                $empaquecontraMuestra, $aparienciacontraMuestra, $temperacontraMuestra, $diascontraMuestra,
                $finalcontraMuestra, $accionescontraMuestra, $verificadocontraMuestra, $aprobocontraMuestra
            ]);

            // Guardar ID generado
            $idRegistro = $bdc->lastInsertId();

            // Mensaje para INSERT
            $_SESSION["mensaje"] = "Registro creado correctamente.";
            $_SESSION["tipo"] = "success";
            $_SESSION["icon"] = "check-circle-fill";

            // Enviar ID y mensaje al JS
            echo json_encode([
                "id" => $idRegistro,
                "mensaje" => $_SESSION["mensaje"],
                "tipo" => $_SESSION["tipo"],
                "icon" => $_SESSION["icon"]
            ]);
            exit; // TERMINAR DESPUÉS DE ENVIAR JSON
        }

    } catch (PDOException $e) {
        $_SESSION["mensaje"] = "Error al guardar/actualizar en la base de datos: " . $e->getMessage();
        $_SESSION["tipo"] = "danger";
        $_SESSION["icon"] = "exclamation-triangle-fill";
    }
}


/*--------------------------------FOR_S_CCI_95 ROTURA Y CONDICION ----------------------------------------*/
if (isset($_POST["formRoturacondicion"])) {
    try {
        
        $bdc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $bdc->beginTransaction();
   
        $idRoturaCarga = $_POST["idRoturaCarga"] ?? null; 

        
        $planta = $_POST["plantaChequeo1"] ?? "Desconocida";
        $area = $_POST["areasChequeo1"] ?? "Desconocida";
        $tipoReporte = $_POST["tipoReporte"] ?? "Desconocido";
        $detalleReporte = $_POST["detalleReporte"] ?? "Desconocido"; 
        $descripcion = $_POST["decripcionrotura"] ?? "";
        $nombreproceso = $_POST["nombreProceso"] ?? "";
        $nombrecalidad = $_POST["nombreCalidad"] ?? "";
        $arealiberada = $_POST["areaLiberada"] ?? "";
        $areasiono = $_POST["areasiono"] ?? "";
        $preguntas = $_POST["preguntasRotura"] ?? "";
        $descripcion1 = $_POST["comentarioArea"] ?? "";
        $descripcion2 = $_POST["comentarioArea1"] ?? "";
        $descripcion3 = $_POST["comentarioArea2"] ?? ""; // <--- Este es descripcion_extra2
        $descripcion4 = $_POST["comentarioArea3"] ?? "";
        $descripcion5 = $_POST["comentarioArea4"] ?? "";
        $descripcion6 = $_POST["comentarioArea5"] ?? "";
        $descripcion7 = $_POST["comentarioArea6"] ?? "";
        $descripcion8 = $_POST["comentarioArea7"] ?? "";
        $descripcion9 = $_POST["comentarioArea8"] ?? "";
        $descripcion10 = $_POST["comentarioArea9"] ?? "";

        
        $roturacondicion = $_POST["base64condicionLocativa"] ?? null;
        $imagen_a_guardar = null;
        if ($roturacondicion && strpos($roturacondicion, "data:image/") === 0) {
            $imagen_a_guardar = $roturacondicion;
        }

        
        $roturacondicion1 = $_POST["base64condicionLocativa1"] ?? null; 
        $imagen_a_guardar1 = null;
        if ($roturacondicion1 && strpos($roturacondicion1, "data:image/") === 0) {
            $imagen_a_guardar1 = $roturacondicion1;
        }

        
        $preguntasSeleccionadas = isset($_POST["preguntasRotura"]) ? implode(", ", $_POST["preguntasRotura"]) : "";
        
        if ($tipoReporte === "Condicion locativa") {
            $arealiberada = "N/A";
            $preguntasSeleccionadas = "N/A";
            $descripcion = "N/A"; 
            $descripcion1 = "N/A";
           
        } elseif ($tipoReporte === "Rotura" || $tipoReporte === "Afectacion al Producto") {
            $areasiono = "N/A";
            $descripcion2 = "N/A";
           
            
            
        }

        try {
            if ($idRoturaCarga) {
                
                // Si el ID existe, hace el UPDATE en la misma fila (CIERRE)
                $sql = "UPDATE `for_i_cci_95_rotura_condicion` SET
                            fecha_despues = CURRENT_DATE(), 
                            hora_despues = NOW(), 
                            area_liberada = ?, 
                            area_siono = ?, 
                            descripcion_extra2 = ?,
                            img_condicion1 = ?
                        WHERE id = ?"; 

                
                $stmt = $bdc->prepare($sql);
                $stmt->execute([
                    $arealiberada,      // 1. Estatus (Si/No)
                    $areasiono,         // 2. Estatus (Si/No)
                    $descripcion3,      // 3. Comentario de cierre (comentarioArea2)
                    $imagen_a_guardar1, // 4. Foto de después (base64condicionLocativa1)
                    $idRoturaCarga      // 5. ID del registro a actualizar
                ]);
                

                $_SESSION["mensaje"] = "Registro actualizado correctamente.";
                $_SESSION["tipo"] = "success";
                $_SESSION["icon"] = "check-circle-fill";

            } else {
                // Si el ID NO existe, hace el INSERT (REPORTE INICIAL)
                
                $sql = "INSERT INTO for_i_cci_95_rotura_condicion
                    (fecha, hora, planta_recondi, areas_recondi, 
                    tipo_reporte, tipos_reportes, decripcion, preguntas_rotura,
                    nombre_proceso, nombre_calidad, area_liberada,area_siono,descripcion_extra,descripcion_extra1,descripcion_extra2,descripcion_extra3,descripcion_extra4,descripcion_extra5,descripcion_extra6,descripcion_extra7,
                    descripcion_extra8,descripcion_extra9,img_condicion,img_condicion1)
                    VALUES (CURRENT_DATE(), NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

                
                $stmt = $bdc->prepare($sql);
                $stmt->execute([
                    $planta, $area, $tipoReporte, $detalleReporte,$descripcion,$preguntasSeleccionadas, $nombreproceso,$nombrecalidad, $arealiberada,$areasiono,$descripcion1, $descripcion2,
                    $descripcion3,$descripcion4, $descripcion5, $descripcion6, $descripcion7,$descripcion8, $descripcion9, $descripcion10,$imagen_a_guardar, $imagen_a_guardar1
                
                ]);
                
                $idRoturaCarga = $bdc->lastInsertId();
                
                $_SESSION["mensaje"] = "✅ Registro de Rotura / Condición Locativa guardado correctamente.";
                $_SESSION["tipo"] = "success";
                $_SESSION["icon"] = "check-circle-fill";
            }
            
            
            $bdc->commit();

        } catch (PDOException $e) {
            
            $bdc->rollBack();
            $_SESSION["mensaje"] = "❌ Error en la base de datos: " . $e->getMessage();
            $_SESSION["tipo"] = "danger";
            $_SESSION["icon"] = "exclamation-triangle-fill";
            error_log("Error BD Rotura/Condición: " . $e->getMessage());
        }

    } catch (Exception $e) {
        
        if ($bdc->inTransaction()) {
             $bdc->rollBack();
        }
        $_SESSION["mensaje"] = "❌ Error general: " . $e->getMessage();
        $_SESSION["tipo"] = "danger";
        $_SESSION["icon"] = "exclamation-triangle-fill";
    }
}
?>





