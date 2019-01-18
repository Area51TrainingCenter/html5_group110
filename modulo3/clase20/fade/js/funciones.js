jQuery(document).ready(function(){
	jQuery(".cuadrado").click(function(){
		//jQuery(".circulo").show();

		/*
		fadeIn / fadeOut

		timing:
		slow
		fast
		100 - ....
		*/
		/*jQuery(".circulo").fadeIn("slow",function(){
			//alert("se mostro");
		});*/

		jQuery(".circulo").fadeToggle(5000,function(){
			//alert("termino");
		});
	});

	jQuery(".circulo").click(function(){
		//jQuery(this).hide();
		jQuery(".circulo").fadeOut("fast",function(){
			//alert("se oculto");
		});
	});
});