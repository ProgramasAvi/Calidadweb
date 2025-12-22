<?php
class Conexion
{
    public static function Conectar()
    {
        define('servidor', '192.200.100.40');
        define('nombre_bd', 'calidad');
        define('usuario', 'SANMARINO');
        define('password', 'sanmarino2021*');
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
        try {
            $conexion = new PDO("mysql:host=" . servidor . "; dbname=" . nombre_bd, usuario, password, $opciones);
            return $conexion;
        } catch (Exception $e) {
            die("El error de Conexión es: " . $e->getMessage());
        }
    }
}/* chao */

//----------------------------------------------------------------------------------------------------------------------------------------------------
//Esta conexion2 es para el formato de verificiacion y dotacion de BPM
class Conexion2
{
    public static function Conectar()
    {
        define('servidor2', '192.200.100.40');
        define('nombre_bd2', 'almuerzo');
        define('usuario2', 'SANMARINO');
        define('password2', 'sanmarino2021*');
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
        try {
            $conexion = new PDO("mysql:host=" . servidor2 . "; dbname=" . nombre_bd2, usuario2, password2, $opciones);
            return $conexion;
        } catch (Exception $e) {
            die("El error de Conexión es: " . $e->getMessage());
        }
    }
}/* hola */
