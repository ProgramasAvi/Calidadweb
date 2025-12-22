<?php
include_once('./modelo_conexion.php');
$objeto = new Conexion2();
$conexion = $objeto->Conectar();
$qrCedula = (isset($_POST['qrCedula'])) ? $_POST['qrCedula'] : '';
$consulta =  "SELECT * FROM `empleados` where cedula = '$qrCedula'";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data = $resultado->fetchAll(PDO::FETCH_ASSOC);
foreach ($data as $dat) {
    $json[] = array(
        'nombre' => $dat['nombre'],
        'cedula' => $dat['cedula'],
        'descripcion' => $dat['descripcion'],
    );
}
$jsonstring = json_encode($json);
echo $jsonstring;
/*pruebas sistemas */