<?php
require_once('../models/BD.php');
require_once('../controller/validarusuario.php');

if (isset($_POST['send'])) {
    $hora = $_POST['registroHora'];
    $ave = $_POST['tipoAve'];
    $c1 = $_POST['controlC1'];
    $c2 = $_POST['controlC2'];
    $c3 = $_POST['controlC3'];
    $c4 = $_POST['controlC4'];
    $c5 = $_POST['controlC5'];
    $c6 = $_POST['controlC6'];
    $c7 = $_POST['controlC7'];
    $c8 = $_POST['controlC8'];
    $c9 = $_POST['controlC9'];
    $c10 = $_POST['controlC10'];
    $c11 = $_POST['controlC11'];
    $c12 = $_POST['controlC12'];
    $c13 = $_POST['controlC13'];
    $c14 = $_POST['controlC14'];
    $c15 = $_POST['controlC15'];
    $tempProm = $_POST['tempPromedio'];
    $porcenCumplimiento = $_POST['porcenCumplimiento'];
    $registroPh = $_POST['registroPh'];
    $registroT = $_POST['registroT'];
    $registroPPM = $_POST['registroPPM'];
    $registroTChiller = $_POST['registroTChiller'];
    $responsableRegis = $_POST['responsableRegis'];

    $sql = "INSERT INTO `usuario`(`USUARIO`, `NOMBRE`, `CONTRASEÑA`, `ROL_ID`) VALUES (?,?,?,?)";
    $sentence = ($bdc->prepare($sql));
    $sentence->execute([$usuario, $nombre, $contraseña, $cargo]);

    if ($sentence->rowCount()) {
        $_SESSION['mensaje'] = '¡¡¡Usuario Creado Correctamente!!!';
        $_SESSION['tipo'] = 'success';
        $_SESSION['icon'] = 'check-circle-fill';
    } else {
        $_SESSION['mensaje'] = 'Ha Ocurrido Un Error En La Creación Del Usuario';
        $_SESSION['tipo'] = 'danger';
        $_SESSION['icon'] = 'exclamation-triangle-fill';
    }
}
