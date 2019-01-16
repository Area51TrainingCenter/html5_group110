var contador = 0;
jQuery(document).ready(function(){
	var texto = jQuery("#xixa").text();
	var textoclase = jQuery(".titulo").text();
	var textotag = jQuery("h1").text();
	var h1 = jQuery("h1");
	var imagen = jQuery(".imagen1");
	var boton = jQuery("#enviar");
/*	console.log(texto);
	console.log(textoclase);
	console.log(textotag);*/

	jQuery(".titulo").text("adios mundo cruel");

	console.log(h1.attr("class"));
	console.log(imagen.attr("src"));

	h1.attr("class","titulo3 titulo4");

	boton.click(function(){
		contador++;
		var nombre = jQuery("#nombre").val();
		alert(nombre);

		jQuery("#nombre").val("Carolina"+contador);
	});

});