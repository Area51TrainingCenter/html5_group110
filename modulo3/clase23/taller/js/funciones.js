jQuery(document).ready(function(){

	jQuery(".hamb").click(function(){
		cerrar();
	});

	jQuery(window).scroll(function(){
		if(jQuery(this).scrollTop()>200){
			jQuery(".btnregresar").fadeIn();
		}else{
			jQuery(".btnregresar").fadeOut();
		}
	})

	jQuery("header nav a").click(function(e){
		e.preventDefault();		
		var id = jQuery(this).attr("href");
		var alto =  jQuery(id).offset().top;		
		jQuery("html,body").animate({
			"scrollTop":alto
		},"slow");
	})

	jQuery(".btnregresar").click(function(e){
		e.preventDefault();
		jQuery("html,body").animate({
			"scrollTop":0
		},"fast");
	})

	jQuery("#mapas").change(function(){
		var indice = jQuery(this).val();
		if(indice)
		{
			if(indice == 0)
			{
				getLocation();
			}else{
				indice = indice - 1;
				var sede = ubicaciones[indice];
				ubicar(sede.latitud,sede.longitud);
				console.log(sede.latitud+" - "+sede.longitud); 
			}
		}else{
			alert("Escoge una sede");
		}
	});

	 cartesiano();

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	   // responsiveClass:true,
	   	dots:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:true,
	           // loop:false
	        }
	    }
	})
});

var map;
var ubicaciones = [
{latitud:-12.102052 , longitud:-77.0539138},
{latitud:-12.1222595, longitud:-77.0304797},
{latitud:-11.9901627, longitud:-77.0632223}];

function ubicar(latitud,longitud)
{
   	var myLatLng = {lat: latitud, lng:longitud};
	map = new google.maps.Map(document.getElementById('mimapa'), {
		center:myLatLng,
		zoom: 18
	});

	var marker = new google.maps.Marker({
	position: myLatLng,
	map: map,
	title: 'Aqui es'
	});
}

function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
 		ubicar(position.coords.latitude,position.coords.longitude)
    });
  }else{
    jQuery("#mimapa").html("Geolocation is not supported by this browser.");
  }
}

jQuery(window).on("load",function(){
	jQuery(".cont-pre").fadeOut("slow",function(){
		jQuery("body").removeClass("open");		
	});

	getLocation();
})

function cerrar()
{
	jQuery("header nav").toggleClass("open");
	jQuery(".hamb").toggleClass("open");	
	jQuery("body").toggleClass("open");		
}


function cartesiano()
{
	var alto = jQuery(".datos").height() / 3;
	var ancho = jQuery(".datos").width() / 3;
	var lista = jQuery(".datos ul li");
	var angulo = 360 / lista.length;

	lista.each(function(i){
		var n =  angulo*i;
		var angulorad = n *(Math.PI / 180);
		var x = Math.cos(angulorad);
		var y = Math.sin(angulorad);
		jQuery(this).css({"bottom" : y*alto,"left" : x*ancho});
	})
}