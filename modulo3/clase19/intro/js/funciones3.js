var contador = 0;
jQuery(document).ready(function(){
	var cantidad = jQuery(".fila1 img").length;

	console.log(cantidad);

	jQuery(".antes").click(function(){
		if(contador >= 0)
		{
			carga(contador);
			contador--;
		}else{
			contador = 0;
		}

		console.log(contador);
	});

	jQuery(".despues").click(function(){
		if(contador <= cantidad)
		{
			carga(contador);
			contador++;
		}else{
			contador = cantidad;
		}

		console.log(contador);
	});

});

function carga(conta)
{
	var url = jQuery(".imagen"+conta).attr("src");
	jQuery(".imagengrande").attr("src",url);
}