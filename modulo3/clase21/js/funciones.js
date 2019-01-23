$(document).ready(function(){
/*	$(".cuadrado").click(function(){
		//append
		$("body").append("<div class='cuadrado'></div>");

		//prepend
		//$("body").prepend("<div class='circulo'></div>");

		//$("body").html("<div class='circulo'></div>");

		var html =  $("body").html();
	});*/
	var id = 0;
	var antiguo = $("#tabla").html();
	$("#btnenviar").click(function(){
		id++;
		var usuario = $("#usuario").val();
		var password = $("#password").val();
		var html = "<tr><td>"+id+"</td>";
		html+= "<td>"+usuario+"</td><td>"+password+"</td></tr>";
		$("#tabla").append(html);
	});

	$("a").click(function(){
		id = 0;
		$("#tabla").html(antiguo);
	});

});

$(document).on("click",".cuadrado",function(){
	//find: $(".cuadrado").find("div").addClass("cuadrado");
 /* before / after
	$(".cuadrado").before("<div class='circulo'></div>");
	$(".cuadrado").after("<div class='circulo'></div>");*/

	//$("body").append("<div class='cuadrado'></div>");

	//off: $(document).off("click",".cuadrado");

	//cuando solo queremos agregar o cmabiar 1 sola propiedad: $(".cuadrado").css("background-color","yellow");
	//varias propiedades

	/*$(".cuadrado").css({
		"background-color":"yellow",
		"width":"50px",
		"height":"50px"});*/

	$(".cuadrado").stop().animate({
		"background-color":"yellow",
		"width": "+=50",
		"height":"50px"},1000,function(){
	})

	//ancho y alto de la pantalla
	var ancho = $(window).width();
	var alto = $(window).height();
})

