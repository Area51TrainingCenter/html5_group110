jQuery(document).ready(function(){
	jQuery(".cuadrado").click(function(){
		var indice = jQuery(this).index();
		//var indice = jQuery(".cuadrado").index(this);
		//alert(indice);
		jQuery(".circulo").hide();
		jQuery(".circulo").eq(indice).show();
	});
});