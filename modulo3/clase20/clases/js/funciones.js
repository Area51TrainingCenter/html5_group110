jQuery(document).ready(function(){
	jQuery(".cuadrado").click(function(){
		jQuery(this).toggleClass("rojo");
		/*
		version vintage
		if(jQuery(this).hasClass("rojo"))
		{
			jQuery(this).removeClass("rojo");
		}else{
			jQuery(this).addClass("rojo");
		}*/
	});
});

jQuery(window).on("load",function(){
	//jQuery(".cuadrado").addClass("rojo");
});