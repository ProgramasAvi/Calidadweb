<?php
/* include_once('modelo_conexion.php'); // Están en la misma carpeta (models)

$objeto = new Conexion2();
$conexion = $objeto->Conectar();

$cedula = isset($_POST['cedula']) ? $_POST['cedula'] : '';

if ($cedula != '') {
    $consulta = "SELECT nombre, cedula FROM empleados WHERE cedula = :cedula";
    $resultado = $conexion->prepare($consulta);
    $resultado->bindParam(':cedula', $cedula);
    $resultado->execute();

    $data = $resultado->fetch(PDO::FETCH_ASSOC);

    if ($data) {
        // devolver “cedula - nombre”
        $data['mostrar'] = $data['cedula'] . ' - ' . strtoupper($data['nombre']);
        echo json_encode($data);
    } else {
        echo json_encode(['error' => 'No encontrado']);
    }
} else {
    echo json_encode(['error' => 'Sin cédula']);
} */

include_once('modelo_conexion.php'); // Asegúrate que la ruta sea correcta

$objeto = new Conexion2();
$conexion = $objeto->Conectar();

$cedula = isset($_POST['cedula']) ? $_POST['cedula'] : '';

if ($cedula != '') {
    // 1. Usar CONCAT para unir nombre y apellido, y AS para llamarlo 'nombre'
    $consulta = "SELECT CONCAT(nombre, ' ', apellido) AS nombre, cedula FROM empleados WHERE cedula = :cedula";
    
    $resultado = $conexion->prepare($consulta);
    $resultado->bindParam(':cedula', $cedula);
    $resultado->execute();

    $data = $resultado->fetch(PDO::FETCH_ASSOC);

    if ($data) {
        // 2. Aplicar la función strtoupper() al nombre completo antes de devolverlo
        $nombre_completo = strtoupper($data['nombre']);
        
        // 3. Devolver “cedula - nombre completo en mayúsculas”
        $data['mostrar'] = $data['cedula'] . ' - ' . $nombre_completo;
        
        // El 'nombre' original de la consulta ahora es el nombre completo (unificado).
        // Aunque no es estrictamente necesario, lo mantenemos por si lo usas en otro lado:
        $data['nombre'] = $nombre_completo; 
        
        echo json_encode($data);
    } else {
        echo json_encode(['error' => 'No encontrado']);
    }
} else {
    echo json_encode(['error' => 'Sin cédula']);
}

?>
