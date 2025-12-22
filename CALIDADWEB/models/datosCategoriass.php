<?php
header("Content-Type: application/json; charset=utf-8");
require_once "../prueba/conexion.php";

$id_area = isset($_GET["id_area"]) ? intval($_GET["id_area"]) : 0;

$sql = "SELECT id, categoria FROM categorias WHERE id_area = ?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("i", $id_area);
$stmt->execute();
$result = $stmt->get_result();

$categorias = [];
while ($row = $result->fetch_assoc()) {
    $categorias[] = [
        "id" => intval($row["id"]),
        "categoria" => $row["categoria"] // ← Este es el nombre
    ];
}

echo json_encode($categorias, JSON_UNESCAPED_UNICODE);
