<?php
include("../prueba/conexion.php");
header('Content-Type: application/json; charset=utf-8');

$id_categoria = intval($_GET['id_categoria'] ?? 0);

$sql = "SELECT id, aspectos AS aspecto
        FROM aspectoss
        WHERE id_categoria = ?
        ORDER BY aspectos";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("i", $id_categoria);
$stmt->execute();

$result = $stmt->get_result();
$aspectos = [];

while ($row = $result->fetch_assoc()) {
    $aspectos[] = [
        'id' => $row['id'],
        'aspecto' => $row['aspecto'] // ← Este es el nombre
    ];
}

echo json_encode($aspectos, JSON_UNESCAPED_UNICODE);