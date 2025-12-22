<?php
include("../prueba/conexion.php");
header('Content-Type: application/json; charset=utf-8');

$sql = "SELECT id, areas FROM areas"; // ← Asegúrate que dice "areas"
$result = $mysqli->query($sql);

$areas = [];
while ($row = $result->fetch_assoc()) {
    $areas[] = [
        'id' => $row['id'],
        'areas' => $row['areas'] // ← Este es el nombre
    ];
}
echo json_encode($areas, JSON_UNESCAPED_UNICODE);