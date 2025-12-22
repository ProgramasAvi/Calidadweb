<?php
header('Content-Type: application/json; charset=utf-8');
include_once('modelo_conexion.php');
error_reporting(E_ALL);
ini_set('display_errors', 1);

function writeDebug($line) {
    $logFile = __DIR__ . "/../controller/debug.txt";
    @file_put_contents($logFile, $line . "\n", FILE_APPEND);
}

try {
    $obj = new Conexion();
    $pdo = $obj->Conectar();

    $planta = isset($_POST['planta']) ? trim($_POST['planta']) : '';
    $proceso = isset($_POST['proceso']) ? trim($_POST['proceso']) : '';
    $frecuencia = isset($_POST['frecuencia']) ? trim($_POST['frecuencia']) : '';

    // ✅ Solo columnas reales de tu tabla
    $sql = "SELECT                           
                planta,
                area,
                detalle_material,
                estado,
                tipo_material,
                frecuencia_inspeccion
            FROM tabla_frecuencia_inspeccion1
            WHERE 1=1";

    $params = [];

    if ($planta !== '') {
        $sql .= " AND LOWER(TRIM(planta)) LIKE LOWER(:planta)";
        $params[':planta'] = "%" . $planta . "%";
    }

    if ($proceso !== '') {
        $sql .= " AND LOWER(TRIM(area)) LIKE LOWER(:proceso)";
        $params[':proceso'] = "%" . $proceso . "%";
    }

    if ($frecuencia !== '') {
        $sql .= " AND LOWER(TRIM(frecuencia_inspeccion)) LIKE LOWER(:frecuencia)";
        $params[':frecuencia'] = "%" . $frecuencia . "%";
    }

    $sql .= " ORDER BY planta ASC LIMIT 20";

    $stmt = $pdo->prepare($sql);
    foreach ($params as $k => $v) {
        $stmt->bindValue($k, mb_strtolower($v, 'UTF-8'));
    }

    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // ✅ Agregar valores vacíos para los campos que no existen en la tabla
    foreach ($rows as &$r) {
        if (!isset($r['cantidad'])) $r['cantidad'] = '';
        if (!isset($r['ausentes'])) $r['ausentes'] = '';
        if (!isset($r['incompletos'])) $r['incompletos'] = '';
    }

    echo json_encode([
        'ok' => true,
        'sample' => $rows,
        'distinct' => ['planta' => [], 'area' => [], 'frecuencia' => []]
    ], JSON_UNESCAPED_UNICODE);

} catch (Exception $e) {
    http_response_code(500);
    writeDebug("[inspect_frecuencia.php] ERROR: " . $e->getMessage());
    echo json_encode(['ok' => false, 'error' => $e->getMessage()]);
}
?>
