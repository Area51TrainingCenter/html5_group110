<?php
$usuario = $_POST["usuario"];
$password = $_POST["password"];

$respuesta = array();

if($usuario == 'alonso' and $password == '123456')
{
	$respuesta["tipo"] = 1;
	$respuesta["mensaje"] = 'Estas logueado';
}else{
	$respuesta["tipo"] = 2;
	$respuesta["mensaje"] = 'Intentalo nuevamente';
}

echo json_encode($respuesta);
?>