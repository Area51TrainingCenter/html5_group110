var contador = 0;
var cantidad = jQuery(".fila1 img").length;
jQuery(document).ready(function(){


	console.log(cantidad);

	jQuery(".antes").click(function(){

		if(contador > 0)
		{
			contador--;
			console.log(contador);
			carga(contador);
			
		}else{
			contador = 0;
		}
	});

	jQuery(".despues").click(function(){
		
		if(contador < cantidad)
		{
			contador++;
			console.log(contador);
			carga(contador);

		}else{
			contador = cantidad;
		}
	});
});

function carga(conta)
{
	var url = jQuery(".fila1 .imagen"+conta).attr("src");
	jQuery(".imagengrande").attr("src",url);
}