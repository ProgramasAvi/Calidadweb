<?php
require 'serverside.php';
$table_data->get('vista_registros','id',array('id', 'trabajador', 'nombre', 'ccosto', 'descripcion', 'cargo', 'rango', 'fechaHora', 'tipo'));
