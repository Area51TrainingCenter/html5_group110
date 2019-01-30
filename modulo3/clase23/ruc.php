<?php
$ruc = $_POST["ruc"];

$lista = array();
if(isset($ruc) and !empty($ruc) and $ruc="10428901903")
{
	$recibos = array();

	for ($i=0; $i < 10; $i++) { 
		$codigo = $i + 1;
		$recibos[$i]["numero"] = $codigo;
		$recibos[$i]["nombre"] = "Empresa ".$i;
		$recibos[$i]["monto"] = $i."00";	
		$recibos[$i]["retencion"] = 0;	
	}

	$lista["respuesta"] = 1;
	$lista["mensaje"] = "Consulta exitosa";	
	$lista["recibos"] =$recibos;	
}else{
	$lista["respuesta"] = 2;
	$lista["mensaje"] = "No se encuentra en la base de datos";	
}

echo json_encode($lista);
?>