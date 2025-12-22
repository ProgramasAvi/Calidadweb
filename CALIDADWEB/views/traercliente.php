<?php
if (isset($_GET['nit'])) {
    $nit = $_GET['nit'];
    // Conecta a la base de datos y busca el nombre del cliente
    $conn = new mysqli("192.200.100.40", "SANMARINO", "sanmarino2021*", "calidad");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT cliente FROM clientes WHERE nit = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $nit);
    $stmt->execute();
    $stmt->bind_result($clientName);
    $stmt->fetch();

    if ($clientName) {
        echo json_encode(['clientName' => $clientName]);
    } else {
        echo json_encode(['clientName' => '']);
    }

    $stmt->close();
    $conn->close();
}
