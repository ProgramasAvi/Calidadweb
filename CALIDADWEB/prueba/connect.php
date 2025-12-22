<?php
$servername = '192.200.100.40';
$username = "SANMARINO";
$password = "sanmarino2021*";

try {
    $con = new PDO("mysql:host=$servername;dbname=calidad", $username, $password);
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo 'connected';
} catch (PDOException $e) {
    echo '<br>' . $e->getMessage();
}
