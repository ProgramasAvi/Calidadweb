<?php
//Credenciales de acceso a la bd
$usuario = "SANMARINO";
$password = "sanmarino2021*";


//bloque de codigo protegido 

try {
  $bdc = new PDO('mysql:host=192.200.100.40;dbname=calidad', $usuario, $password);
} catch (PDOException $error) {
  print 'OCURRIO UN ERROR EN LA CONEXION: ' . $error->getMessage();
}

$conexion = mysqli_connect("192.200.100.40", "SANMARINO", "sanmarino2021*", "calidad");
if (!$conexion) {
  echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
  echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
  echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
  exit;
}
