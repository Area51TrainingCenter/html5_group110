$(document).ready(function(){
	$(".btnok").click(function(e){
		e.preventDefault();

	/*	$("ul li").each(function(indice,elemento){
			//var id = $(this).attr("id");
			//var id = $(elemento).attr("id");
			console.log(id);
		})*/
		var html = "";
		jQuery("table tr").each(function(indice,elemento){
			//var id = $(this).attr("id");
			//var id = $(elemento).attr("id");
			html+="<div>";
			jQuery(elemento).find("td").each(function(i,e){
				html+="<input type='text' name='elemento"+i+"' value='"+jQuery(e).text()+"' >";
			});
			html+="</div>";
			jQuery("#frmalumnos").html(html);
		})
	});

	jQuery(".btnsiguiente").click(function(e){
		e.preventDefault();
		var seccion = jQuery(this).closest("section");
		//el siguiente elemento seleccionado
		var siguiente = seccion.next("section");
		//var alto = siguiente.position().top;
		var alto = siguiente.offset().top;
		jQuery("html,body").animate({
			"scrollTop":alto
		},1500);
		//los sigueintes elementos seleccionados
		//var siguiente = seccion.nextAll("section");
		/*jQuery(siguiente).each(function(i,elemento){
			alert("La siguiente seccion tiene de fondo el color:"+ jQuery(elemento).css("background-color"))
		})*/
	})

	jQuery(".btnregresar").click(function(e){
		e.preventDefault();
		jQuery("html,body").animate({
			"scrollTop":0
		},"fast");
	})

	jQuery(window).scroll(function(){
		if(jQuery(this).scrollTop()>200){
			jQuery(".btnregresar").fadeIn();
		}else{
			jQuery(".btnregresar").fadeOut();
		}
	})

	jQuery("#btnenviar").click(function(){
		jQuery.ajax({
			url: "guardar.php",
			method : "POST",
			dataType: "json",
			/*
			data : {
				"usuario" : jQuery("#usuario").val(),
				"password" : jQuery("#password").val(),
			}*/
			data : jQuery("#frmlogin").serialize(),
			beforeSend: function(){

			}
		}).done(function(data){
			if(data.tipo == 1)
			{
				jQuery("#respuesta").addClass("ok");
			}else{
				jQuery("#respuesta").addClass("error");
			}

			jQuery("#respuesta").html(data.mensaje);
			
		}).fail(function(e){

		})
	});
});