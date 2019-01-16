jQuery(document).ready(function(){
	var imagen1 = jQuery(".imagen1");
	var imagen2 = jQuery(".imagen2");
	var trama = jQuery(".trama");
	var cerrar = jQuery(".cerrar");

	imagen1.click(function(){
		var url = imagen1.attr("src");
		imagen2.attr("src",url);
		trama.attr("class","trama mostrar");
		//console.log(jQuery("img").length);
	});

	cerrar.click(function(){
		trama.attr("class","trama");
	});
});