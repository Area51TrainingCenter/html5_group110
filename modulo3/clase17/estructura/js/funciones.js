var listameses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"];


var n1 = 1;
var n2 = 2;
/*
n1 > n2
n1 > n2
n1 < n2
n1 <= n2
n1 != n2
n1 == n2¿

if(n1 == n2)
{
	alert("es mayor");
}else if(n3 == n4){
	alert("es menor");
}else if(n3 == n4){

}else{

}

if(n1 == n2)
{
	alert("es mayor");
}else {
	alert("es menor");
}

//switch

switch(n1) {
  case 1:
	alert("esta es");
    break;
  case 2:
	alert("esta no es");
    break;
  default:
	alert("ninguna");
}*/

//for

for (var i = 0; i < listameses.length ; i++) {
	console.log(listameses[i]);
}

for (var i = listameses.length - 1; i >= 0 ; i--) {
	console.log(listameses[i]);
}

var n1 = prompt("ingresa un numero")

var resultado = 1;
for (var j = 1; j <= parseInt(n1) ; j++) {
	resultado =  resultado * j;
}
console.log(resultado);





