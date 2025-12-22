<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$host = "192.200.100.40";
$bd   = "calidad";
$user = "SANMARINO";
$pw   = "sanmarino2021*";

/* CONEXIÓN PROCEDURAL */
$conexion = mysqli_connect($host, $user, $pw, $bd);
if (!$conexion) {
    die("Error conexión procedural: " . mysqli_connect_error());
}
mysqli_set_charset($conexion, "utf8mb4");

/* CONEXIÓN ORIENTADA A OBJETOS */
$mysqli = new mysqli($host, $user, $pw, $bd);
if ($mysqli->connect_errno) {
    printf("Falló la conexión: %s\n", $mysqli->connect_error);
    exit();
}

// 🔥 ESTA LÍNEA ES LA QUE SOLUCIONA TU JSON
$mysqli->set_charset("utf8mb4");