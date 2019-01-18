jQuery(document).ready(function(){
	jQuery(".cuadrado").click(function(){

		/*
		

		timing:
		slow
		fast
		100 - ....
		*/
		/*jQuery(".circulo").slideDown("slow",function(){
			//alert("se mostro");
		});*/

		jQuery(".circulo").slideToggle(5000,function(){
			//alert("termino");
		});
	});

	jQuery(".circulo").click(function(){
		jQuery(".circulo").slideUp("fast",function(){
			//alert("se oculto");
		});
	});
});