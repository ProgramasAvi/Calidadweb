<?php 
session_start();
header("Cache-control: private"); // Arregla IE 6

//*******Datos de Conexion Base de Datos************
include("conexion.php");





?> 

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<title>Reporte de Tiempos</title>
</head>

<body>
<form>

<p><strong>REPORTE DE DEVOLUCIONES CALIDAD POR FECHA</strong></p>
<table width="1277"  border="1" cellspacing="0">
  <tr bgcolor="#CCCCCC">
    <td width="152"><center>      ID    	</center></td>
    <td width="250"><center>       FECHA     	</center></td>
    <td width="335"><center>      NOMBRE   	</center></td>
    <td width="153"><center>      CEDULA  </center></td>
    <td width="157"><center>      CARGO   </center></td>
    <td width="321"><center>      CCOSTO    </center></td>
    <td width="321"><center>      DESCRIPCION    </center></td>
    <td width="321"><center>      VERIFICACION     	</center></td>
    <td width="321"><center>      CUMPLIMIENTO    </center></td>
    <td width="321"><center>      APRUEBA     		</center></td>
	<td width="6000"><center>      CORRECTVO    		</center></td>
    <td width="321"><center>      FIRMA    		</center></td>
  </tr>
  <?php
     $tabla = $conexion->query("SELECT * FROM 02ees_f02_frente_bpm ORDER BY ID DESC; ");
    while ($row_consulta_form = $tabla->fetch_array()) {
  ?>  
  <tr>
    <td width="152"><center><?php  echo $row_consulta_form['id'];?></center></td>
    <td width="250"><center><?php  echo $row_consulta_form['fecHora'];?></td>
    <td width="335"><center><?php  echo $row_consulta_form['nombre'];?></center></td>
    <td width="153"><center><?php  echo $row_consulta_form['cedula'];?></center></td>
    <td width="157"><center><?php  echo $row_consulta_form['cargo'];?> </center></td>
    <td width="321"><center><?php  echo $row_consulta_form['ccosto'];?></center></td>
    <td width="321"><center><?php  echo $row_consulta_form['descripcion'];?></center></td>
    <td width="321"><center><?php  echo $row_consulta_form['verificacion'];?></center></td>
    <td width="321"><center><?php  echo $row_consulta_form['cumplimiento'];?></center></td>
    <td width="321"><center><?php  echo $row_consulta_form['responsable'];?></center></td>
	<td width="6000"><center><?php  echo $row_consulta_form['correctivo'];?></center></td>
    <td width="321"><center><img src="<?php echo $row_consulta_form['firma']; ?>" alt="" width="150" height="150"></td>
  </tr>
  <?PHP 
  
    
  }
  
//echo "<script languaje='javascript' type='text/javascript'>window.close();</script>";
  ?>

  
</table>


</form>
</body>
</html>