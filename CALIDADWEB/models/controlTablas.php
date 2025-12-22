<?php
include_once "./modelo_conexion.php";
$objeto = new Conexion();

$opcion = isset($_POST["opcion"]) ? $_POST["opcion"] : "";

switch ($opcion) {
  case 1:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02hc-f01 verificaciones` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 2:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02hc-f01` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 3:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02tz-f06 verificaciones` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC  ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 4:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02tz-f06` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 5:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02tz-f02 verificaciones` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 6:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02tz-f02`  where  fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 7:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02iv-f01 antemortem` where Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 8:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02iv-f01 postmortem` where Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 9:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02iv_f02_frente` where Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 11:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `03pd-f01 pesaje` where Fechaprod BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 12:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `03pd-f01 mezclado` where Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 13:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `03pd-f01 embutido` where Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 14:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `03pd-f01 coaccion_ahumado` where Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 15:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `03pd-f01 empaque` where Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 16:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02sqr-f01-devoluciones` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 17:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02tz-f01 temp_produc_despa` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 18:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02hc-f02 verificacion_visceras` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 19:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02hc_f02_visceras` where Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 20:
    # code... plataforma 1
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() and area = '1' ORDER BY Id DESC ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 21:
    # code... escaldados 14
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() and area = '2' ORDER BY Id DESC ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 22:
    # code... evisceracion 2
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW()  and area = '3' ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 23:
    # code...emapque de visceras 3
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() and area = '4' ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 24:
    # code... enfriamiento y seleccion 4
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() and area = '5' ORDER BY Id DESC ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 25:
    # code... Deshuesado y fileteo 5
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() and area = '6' ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 26:
    # code... desprese y marinado 6
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() and area = '7' ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 27:
    # code... fileteo pavo 7
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() and area = '8' ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 28:
    # code... pos proceso 8
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() and area = '9' ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 29:
    # code... cuarto hielo y salmuera 9
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() and area = '10' ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 30:
    # code... alimentacion 10
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() and area = '11' ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 31:
    # code... canastilla 11
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() and area = '12' ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 32:
    # code...lavanderia 12
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() and area = '13' ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 33:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 pre_operativo` where  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() and area = '14' ORDER BY Id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 34:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ld-f01 preope_variable` WHERE  Fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 35:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `02ees_f02_frente_bpm` WHERE  fechora BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY Id DESC ";
    //  $consulta = "SELECT `id`,`nombre`, `cedula`, `cargo`, `descripcion`, `verificacion`, `cumplimiento`, `fecHora`, `responsable`, `aprueba`, `firma`, `correctivo` FROM `02ees_f02_frente_bpm`";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 36:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT `id`,`fecha`, `hora`, `muestra`, `cloro`, `correctivo`, `verifica`, `aprobo` FROM `for-e-ctr-22-control-cloro`";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 37:
    #code...
    $conexion = $objeto->Conectar();
    $consulta = "SELECT `id`,`fecha`, `producto`, `lote_producto_terminado`, `fecha_de_vencimiento`,`cantidad_unidades`, `registro_sanitario`, `material_de_empaque`,
         `lote_material_de_empaque`, `observacion`, `responsable`, `verifica`, `aprobo` FROM `for-e-ctr-122-control-material-empaque` ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 38:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT `id`,`area`, `categorias`, `aspectosCategoria`, `valorPorcentaje`,`observaciones`,`fecha_creacion`,`calidadResponsable`,`firma`, `aprobo`,`observaciones_categoria`,`porcentaje_categoria` FROM `auditoria-proceso`";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 39:
    try {
      $conexion = $objeto->Conectar();
      $consulta =
        "SELECT * FROM `inspeccionpoes2`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";

      $resultado = $conexion->prepare($consulta);
      $resultado->execute();
      $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

      // Procesar cada fila para convertir firma en base64
      foreach ($data as &$fila) {
        if (!empty($fila["firma"])) {
          $fila["firma"] = "data:image/png;base64," . base64_encode($fila["firma"]);
        } else {
          $fila["firma"] = "Sin firma";
        }
      }

      header("Content-Type: application/json");
      echo json_encode(["data" => $data], JSON_UNESCAPED_UNICODE);
      exit();
    } catch (PDOException $e) {
      echo json_encode(["error" => "Error en la consulta: " . $e->getMessage()]);
      exit();
    }
    break;

  case 40:
    try {
      $conexion = $objeto->Conectar();
      $consulta = "SELECT `id`, `Areas`, `fecha_Desinfeccion`, `Desinfectante`, `Observaciones`, `Concentracion`, `responsable_Desinfeccion`, `aprobo`
                        FROM `desinfeccionpoes`";

      $resultado = $conexion->prepare($consulta);
      $resultado->execute();
      $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

      // 🔍 Muestra datos en la consola del navegador
      header("Content-Type: application/json");
      echo json_encode(["data" => $data], JSON_UNESCAPED_UNICODE);
      exit();
    } catch (PDOException $e) {
      echo json_encode(["error" => "Error en la consulta: " . $e->getMessage()]);
      exit();
    }
    break;

  case 41:
    # code...
    $conexion = $objeto->Conectar();
    $consulta = "SELECT `ID`, `fecha`,`granjas`, `viaje`, `tipo_ave`, `verificado`,`porcentaje_granja`,`porcentaje_proceso`,`porcentaje_global`,
                    `defectos_granjas`, `deficiencia_proceso`, `aprobo` FROM `defectos_salida_chiller`";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 42:
    # code FOR-S-CCI-20-INSPECCIÓN CALIDAD PRODUCTO TERMINADO
    $conexion = $objeto->Conectar();
    $consulta = "SELECT `id`,`hora`, `fecha`, `productoInspeccion`, `area`, `tipo_ave`, `loteInspeccion`, `fechaVencimiento`, `rotulacionIncompleta`, `dislocacionInspeccion`, `residualInspeccion`, `plumasInspeccion`, 
                        `pigmentacionInspeccion`, `cuticulaInspeccion`, `hematomasInspeccion`, `elementosInspeccion`, `embalajeInspeccion`,`trazabilidadInspeccion`, `rupturasInspeccion`, `lixiviadoInspeccion`, 
                        `selladoInspeccion`, `productoFueraBandeja`, `responsableInspeccion`, `observacionInspeccion`, `totalMuestras`, `aprobo`,  `porcentajeInspeccion` FROM `for-s-cci-20_inspeccion_calidad` ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
    /*------------------------------------------------------------------------------------------ */


  case 43:
    # code ...
    $conexion = $objeto->Conectar();
    $consulta = "SELECT `ID`, `fecha`, `Hora`, `zona_blanca`, `empaque_viscera1`, `empaque_viscera2`, `empaque_viscera_cuchillo`, `empaque_viscera_pala`, `empaque_canal1`, `empaque_canal2`, `empaque_canal3`,
                     `empaque_canal4`, `pala_chiller`, `marinado1`, `marinado2`, `marinado3`, `marinado4`, `marinado5`, `marinado6`,  `marinado_cuchillo1`, `marinado_cuchillo2`, 
                     `marinado_cuchillo3`, `marinado_cuchillo4`, `marinado_cuchillo5`, `marinado_cuchillo6`, `ducha_canastillas`, `carnes_molidas`, `entrada_trolley`, 
                     `salida_trolley`, `fileteo_pollo`, `fileteo_pollo_tablas`, `fileteo_pollo_cuchillo1`, `fileteo_pollo_cuchillo2`, `fileteo_pollo_cuchillo3`, `fileteo_pollo_cuchillo4`, 
                     `bascula_produccion`, `fileteo_pavos`,`fileteo_pavos2`, `fileteo_pavos_cuchillo1`, `fileteo_pavos_cuchillo2`, `fileteo_pavos_cuchillo3`, `fileteo_pavos_cuchillo4`, 
                     `fileteo_pavos_cuchillo5`, `fileteo_pavos_cuchillo6`, `fileteo_pavos_cuchillo7`, `fileteo_pavos_cuchillo8`, `fileteo_pavos_cuchillo9`, `fileteo_pavos_cuchillo10`,                    
                     `fileteo_pavos_cuchillo11`,`fileteo_pavos_cuchillo12`,`fileteo_pavos_cuchillo13`,`fileteo_pavos_cuchillo14`,`despachos`, `iqf`, `cambio_empaque`,`iqf2`, `reseleccion`, `pediluvio_hielo`,`pala_hielo`, `pediluvio_posproceso1`, `pediluvio_posproceso2`, `posproceso1`, `posproceso2`, 
                     `posproceso_cuchillo`, `correctivo`, `verifico`, `aprobo` FROM `puntosDesinfeccion` ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
    /* ----------------------------------------------------------------- */
    

  case 44:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT `id`, `fecha`, `area`, `temperatura`, `hora`, `correctivas`, `verificado`, `aprobo` FROM `control_temperatura`";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 45:
    # code...
    $conexion = $objeto->Conectar();
    $consulta = "SELECT `id`, `fechaVerifcaTolerancia`,`granjaVerifcaTolerancia`,`viajeVerifcaTolerancia`, `tipoAveVerifcaTolerancia`,
                                `materialFecalVerifcaTolerancia`, `monitoreoTolerancia`,`responsableTolerancia`,`aprobo` FROM `for-s-cci-33_tolerancia_cero`";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 46:
    # code...
    $conexion = $objeto->Conectar();
    $consulta = "SELECT `id`, `fecha_verificacion`,`concentracion`,`granja_verificacion`,`viaje_verificacion`, `tipo_ave`, `material_fecal`, `monitoreo_verificacion`,
                                `responsable_verificacion`, `concentracion_ducha`,`aprobo` FROM `for-s-cci-33_verificacion_tolerancia_cero`";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 47:
    # code...
    $conexion = $objeto->Conectar();
    $consulta = "SELECT `id`,`fecha`,`lote1`,`lote2`,`lote1Fecha`,`lote2Fecha`,`fechaVencimiento`,`destino`,`cantidadTotal`,`pesoPromedioPechuga`,
            `pesoPromedioContramuslo`,`pesoPromedioMuslo`,`pesoPromedioAla`,`pechugaMalCortada`,`contramusloMalCortado`,`musloMalCortado`,`alaMalCortada`,
            `pechugaNocumplen`,`contramusloNocumplen`,`musloNocumplen`,`alaNocumplen`,`pesoPresasPechuga`,`pesoPresasContramuslo`,`pesoPresasMuslo`,`pesoPresasAla`,
            `observaciones`,`realizo`,`aprobo` FROM `controlProductoFrisby`";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 48:
    # code...
    $conexion = $objeto->Conectar();
    $consulta = "SELECT `id`,`hora`, `fecha`, `lugar`, `numeroLugar`, `producto`, `lote`, `fechaVencimiento`, `temperaturaProducto`,  `producto2`, `lote2`, `fechaVencimiento2`, `temperaturaProducto2`,
                `temperaturaAmbienteCuarto`, `Observacion`,`productoExpuesto`,`responsable`,`aprobo` FROM `control_temperatura_cuartos`";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 49:
    # code...
    $conexion = $objeto->Conectar();
    $consulta = "SELECT `id`,`hora`, `fecha`,`tunel`, `producto`, `lote`, `fechaVencimiento`, `temperaturaProducto`, `lote2`, `producto2`, `fechaVencimiento2`, `temperaturaProducto2`,
                    `temperaturaTunel`, `Observacion`,`responsable`,`aprobo` FROM `control_temperatura_liberacion`";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  /*
  case 50:
    try {
      $conexion = $objeto->Conectar();
      $consulta =
        "SELECT * FROM `auditoria_cuartos_almacenamiento`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";

      $resultado = $conexion->prepare($consulta);
      $resultado->execute();
      $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

      header("Content-Type: application/json");
      echo json_encode(["data" => $data], JSON_UNESCAPED_UNICODE);
      exit();
    } catch (PDOException $e) {
      echo json_encode(["error" => "Error en la consulta: " . $e->getMessage()]);
      exit();
    }
    break;
*/
  case 51:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `auditoria_cuartos_inventario`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 52:
    try {
      $conexion = $objeto->Conectar();
      $consulta =
        "SELECT * FROM `material_extrano`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";

      $resultado = $conexion->prepare($consulta);
      $resultado->execute();
      $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

      header("Content-Type: application/json");
      echo json_encode(["data" => $data], JSON_UNESCAPED_UNICODE);
      exit();
    } catch (PDOException $e) {
      echo json_encode(["error" => "Error en la consulta: " . $e->getMessage()]);
      exit();
    }
    break;

  case 53:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `verificacion_lockers`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 54:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `producto_no_conforme`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 55:
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `desinfeccion_plataforma`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;



  case 56:
    $conexion = $objeto->Conectar();
    $consulta = "SELECT * FROM `for-s-cci-70 -limpieza`
                 WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW()
                 ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    // 🔹 Convertir firmas BLOB a base64 para que DataTables las pueda mostrar
    foreach ($data as &$row) {
        // Firma del responsable
        if (!empty($row['responsable'])) {
            $row['responsable'] = 'data:image/png;base64,' . base64_encode($row['responsable']);
        } else {
            $row['responsable'] = '';
        }

        // Firma del verificador
        if (!empty($row['verifico'])) {
            $row['verifico'] = 'data:image/png;base64,' . base64_encode($row['verifico']);
        } else {
            $row['verifico'] = '';
        }
    }

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;


  case 57: // NO FUNCIONAL 
    header('Content-Type: application/json; charset=utf-8');

    try {
        // 1. Conexión a la DB
        $conexion = $objeto->Conectar(); 
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // 2. Consulta SQL: obtiene los registros de los últimos 2 meses
        $consulta = "SELECT 
                        `id`, `fecha`, `planta`, `area`, `detalle_material`, 
                        `estado`, `tipo_material`, `frecuencia_inspeccion`, 
                        `cantidad`, `ausentes`, `incompletos` 
                     FROM `for_s_cci_17_frecuencia_inspeccion`
                     WHERE fecha BETWEEN DATE_ADD(CURRENT_DATE(), INTERVAL -2 MONTH) AND CURRENT_DATE() 
                     ORDER BY id DESC";
        
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

        // 3. Devolver los datos en formato JSON
        echo json_encode($data, JSON_UNESCAPED_UNICODE);

    } catch (Exception $e) {
        echo json_encode([
            "ok" => false,
            "mensaje" => "❌ Error al obtener datos: " . $e->getMessage()
        ]);
    }

    $conexion = null; 
    break;



  case 58:  // ← Desinfeccion Guantes
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `for-s-cci-100_desinfeccion_guantes`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 59:  // ← Verificacion Canastillas
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `FOR-S-CCI-82_verificacion_canastillas`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

	
  case 60:  // ← puntos de desinfección evisceración
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `for-s-cci-67_desinfeccion_evisceracion`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
	
	
 case 61:  // ← Preparacion Salmuera
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `for-e-cci-12_preparacion_salmuera`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
	
	
 case 62:  // ← desinfeccion de las agujas de las inyectoras
    # code...
    $conexion = $objeto->Conectar();
    $consulta =
      "SELECT * FROM `for-s-cci-74_desinfeccion_agujas_inyectora`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;	

  case 63:  // ← FOR-S-CCI-72 RETIRO DE SÓLIDOS Y ENJUAGUE DEL VEHÍCULO
    $conexion = $objeto->Conectar();
    $consulta = 
      "SELECT * FROM `for_s_cci_72_retiro_solidos_enjuague_vehiculo`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 64:  // ← FOR-S-CCI-73 LIMPIEZA Y DESINFECCION DE HUACALES
    $conexion = $objeto->Conectar();
    $consulta = 
      "SELECT * FROM `for_s_cci_73_huacales_desinfeccion`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  case 65:  // ← FOR-E-CCI-13 CONTROL DE CONTRAMUESTRA
    $conexion = $objeto->Conectar();
    $consulta = 
      "SELECT * FROM `for_e_cci_13_control_contramuestra`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 66:
    $conexion = $objeto->Conectar();
    $id = $_POST['id'];
    $consulta = "SELECT * FROM `for_e_cci_13_control_contramuestra` WHERE id = ?";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute([$id]);
    $data = $resultado->fetch(PDO::FETCH_ASSOC);
    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
  
  case 67:
    $conexion = $objeto->Conectar();

    $id           = $_POST['id'];
    $color        = $_POST['color'];
    $olor         = $_POST['olor'];
    $empaque      = $_POST['empaque'];
    $apariencia   = $_POST['apariencia'];
    $temperatura  = $_POST['temperatura'];
    $dias         = $_POST['dias'];
    $peso_final   = $_POST['peso_final'];
    $acciones     = $_POST['acciones'];
    $verificado   = $_POST['verificado'];
    $aprobado     = $_POST['aprobado'];

    $consulta = "UPDATE `for_e_cci_13_control_contramuestra` 
                 SET color = ?, olor = ?, empaque = ?, apariencia = ?, temperatura = ?, 
                     dias_almace = ?, peso_final = ?, acciones_correcti = ?, veri_por = ?, aprobado = ? 
                 WHERE id = ?";

    $resultado = $conexion->prepare($consulta);
    $resultado->execute([$color, $olor, $empaque, $apariencia, $temperatura, 
                         $dias, $peso_final, $acciones, $verificado, $aprobado, $id]);

    echo json_encode(["success" => true]);
    $conexion = null;
    break;






    
  case 68:  // ← FOR-i-CCI-95   
    $conexion = $objeto->Conectar();
    $consulta = 
      "SELECT * FROM `for_i_cci_95_rotura_condicion`  WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;

  case 69: // Tabla del medio: Frecuencia Inspección
    $conexion = $objeto->Conectar();

    $planta_raw = $_POST['planta'] ?? '';
    $proceso_raw = $_POST['proceso'] ?? '';
    $frecuencia_raw = $_POST['frecuencia'] ?? '';

    $planta = trim(mb_strtolower($planta_raw, 'UTF-8'));
    $proceso = "%" . trim(mb_strtolower($proceso_raw, 'UTF-8')) . "%";
    $frecuencia = trim(mb_strtolower($frecuencia_raw, 'UTF-8'));

    if ($planta === "" || $proceso === "%%" || $frecuencia === "") {
        echo json_encode([]);
        exit;
    }

    $consulta = "
        SELECT 
            planta,
            area,
            detalle_material,
            estado,
            tipo_material,
            frecuencia_inspeccion
        FROM tabla_frecuencia_inspeccion1
        WHERE 
            LOWER(TRIM(planta)) = :planta
          AND LOWER(TRIM(area)) LIKE :proceso
          AND LOWER(TRIM(frecuencia_inspeccion)) = :frecuencia
          AND LOWER(TRIM(estado)) = 'USO'
        ORDER BY planta ASC
    ";

    try {
        $stmt = $conexion->prepare($consulta);
        $stmt->bindParam(':planta', $planta);
        $stmt->bindParam(':proceso', $proceso);
        $stmt->bindParam(':frecuencia', $frecuencia);
        $stmt->execute();

        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        foreach ($data as &$fila) {
            $fila['cantidad'] = '';
            $fila['ausentes'] = '';
            $fila['incompletos'] = '';
        }

        echo json_encode([
            'ok' => true,
            'sample' => $data
        ], JSON_UNESCAPED_UNICODE);

    } catch (PDOException $e) {
        error_log("[PDO ERROR Case 69]: " . $e->getMessage());
        echo json_encode(["ok" => false, "error" => $e->getMessage()]);
    } finally {
        $conexion = null;
    }
    break;


  case 70:  // ← FOR-s-CCI-17 Frecuencia Inspección
    $conexion = $objeto->Conectar();

    $consulta = 
        "SELECT id, fecha, planta, area, detalle_material, estado, tipo_material,
               frecuencia_inspeccion, cantidad, ausentes, incompletos,nombreCalidadfrecuencia,nombreCalidadfrecuencia1
        FROM for_s_cci_17_frecuencia_inspeccion WHERE fecha BETWEEN DATE_ADD(NOW(), INTERVAL -2 MONTH) AND NOW() ORDER BY id DESC";

    $resultado = $conexion->prepare($consulta);
    $resultado->execute();

    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
    print json_encode($data, JSON_UNESCAPED_UNICODE);

    $conexion = null;
    break;
    // controlTablas.php, dentro del switch
  case 71: // Nuevo: Cargar Reporte por ID para FOR-i-CCI-95
    $conexion = $objeto->Conectar();
    $id = $_POST['id'];
    $consulta = "SELECT * FROM `for_i_cci_95_rotura_condicion` WHERE id = ?";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute([$id]);
    $data = $resultado->fetch(PDO::FETCH_ASSOC);
    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = null;
    break;
    
  case 72:
    $conexion = $objeto->Conectar();

    $id = $_POST['id']; // <--- Aquí se recupera el ID para la actualización
    $imagen_a_guardar1 = $_POST['img_condicion1']; 
    $descripcion_cierre = $_POST['descripcion_extra2']; 
    $area_liberada = $_POST['area_liberada'];           
    $area_siono = $_POST['area_siono'];                 

    // Consulta para el CIERRE COMPLETO: Actualiza fecha, hora, imagen, comentario y estatus.
    $consulta = "UPDATE `for_i_cci_95_rotura_condicion` 
                 SET fecha_despues = CURRENT_DATE(), 
                     hora_despues = NOW(),
                     img_condicion1 = ?,
                     descripcion_extra2 = ?,
                     area_liberada = ?,
                     area_siono = ?
                 WHERE id = ?"; // <--- Usa el ID recuperado

    $resultado = $conexion->prepare($consulta);
    $resultado->execute([
        $imagen_a_guardar1, 
        $descripcion_cierre,
        $id
    ]);

    echo json_encode(["success" => true]);
    $conexion = null;
    break;
  
    





	
}   // ← Este cierra todos los switch Completamnete


