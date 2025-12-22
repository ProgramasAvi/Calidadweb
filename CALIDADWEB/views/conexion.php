<?php
$host = "192.200.100.40";
$user = "SANMARINO";
$pw = "sanmarino2021*";
$bd = "calidad";

$conexion = mysqli_connect($host, $user, $pw, $bd);
$mysqli = new mysqli("192.200.100.40", "SANMARINO", "sanmarino2021*", "calidad");
if ($mysqli->connect_error) {
    printf("Falló la conexión: %s\n", $mysqli->connect_error);
    exit();
}
