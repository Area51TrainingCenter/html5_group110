var n1 = document.getElementById("numero1");
var n2 = document.getElementById("numero2");
var resultado = document.getElementById("numero3");
var igual = document.getElementById("igual");
var cambio = false;
var operacion = "";

function formarnumero(aux)
{
	if(cambio == false)
	{
		var n = n1.value;
		n = n + aux;
		n1.value = n;
	}else{
		var n = n2.value;
		n = n + aux;
		n2.value = n;
	}
}

function signosimbolo(op)
{
	cambio = true;
	operacion = op;
}

igual.addEventListener("click",function(){
	var total;
	if(operacion == "sumar"){
		total = parseInt(n1.value) + parseInt(n2.value);
	}else if(operacion == "restar"){
		total = parseInt(n1.value) - parseInt(n2.value);
	}else if(operacion == "multiplicar"){
		total = parseInt(n1.value) * parseInt(n2.value);
	}else{
		total = parseInt(n1.value) / parseInt(n2.value);
	}

	resultado.value = total;
})

function resetear()
{
	cambio = false;
	n1.value = "";
	n2.value = "";
	resultado.value = "";
	operacion = "";
}