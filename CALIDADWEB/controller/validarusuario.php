<?php session_start(); ?>
<?php
include('../models/BD.php');
if (isset($_GET['cerrar_sesion'])) {
    session_unset();
    session_destroy();
}
if (isset($_SESSION['rol'])) {
    switch ($_SESSION['rol']) {
        case 1:
            //var_dump($rol);
            header('location:../views/mainJefe.php');

            break;
        case 2:
            //var_dump($rol);
            header('location:../views/Reportes.php');
            break;
        default:
    }
}
if (isset($_POST['user']) && isset($_POST['password'])) {
    $user = $_POST['user'];
    $password = $_POST['password'];
    $consulta = "SELECT * FROM `usuario` WHERE USUARIO = '$user' and CONTRASENA = '$password'";
    $resultado = mysqli_query($conexion, $consulta);
    /*$query->execute([$user,$password]);
    $row = $query->fetch(PDO::FETCH_NUM);*/
    $filas = mysqli_num_rows($resultado);
    $row = $resultado->fetch_assoc();
    $_SESSION['iduser'] = $row['NOMBRE'];
    if ($filas == true) {
        //validar rol
        $rol = $row['ROL_ID'];
        $_SESSION['rol'] = $rol;
        switch ($_SESSION['rol']) {
            case 1:
                //var_dump($rol);
                header('location:../views/mainJefe.php');
                break;
            case 2:
                //var_dump($rol);
                header('location:../views/Reportes.php');
                break;
            default:
                //var_dump($rol);
        }
    } else {
        header('location:../views/loginError.php');
    }
}














/* if ( $filas){
    $direccion = $jefe['CARGO'] ;
    if($direccion=='jefe'){
        header('location:../views/mainJefe.php');
    }
    //
    
    
}else{
    
    header('location:../views/loginError.php');
} */
// mysqli_free_result($resultado);
// mysqli_close($conexion);
?>