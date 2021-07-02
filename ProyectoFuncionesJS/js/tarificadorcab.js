// FUNCION PARA CABINA TELEFONICA

let calcular=function(){
	
	let cantidad=document.getElementById("cantidad").value
	let opcion=document.getElementById("opcion").value
	
	let celular=300
	let fijo=200
	
	if(cantidad.length=="0"){
		alert("Digite la cantidad de minutos");
		}

	if(opcion==="0"){
		alert("Selecciones una opcion");
		}

	else if (opcion==="celular"){
		let total=cantidad*celular
		alert("El valor de su llamada es: " + total)
		}

	else {
		let total=fijo*cantidad
		alert("El valor de su llamada es: " + total)
	}
}

