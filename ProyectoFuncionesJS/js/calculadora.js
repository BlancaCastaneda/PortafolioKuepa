// FUNCION CALCULADORA

function calculadora(){

	let num1=document.getElementById("num1").value
	let num2=document.getElementById("num2").value
	let rta
	let op=document.getElementById("operacion").value
	op=parseInt(op)

	switch(op){
		case 1:
		rta=parseInt(num1)+parseInt(num2)
		alert("La suma entre "+num1+" y "+num2+"\n es "+rta);
		break;

		case 2:
		rta=num1-num2
		alert("La resta entre "+num1+ " y " +num2+ "\n es " +rta);
		break;

		case 3:
		rta=num1*num2
		alert("La multiplicacion entre "+num1+ " y " +num2+ "\n es " +rta);
		break;

		case 4:
		rta=num1/num2
		alert("La division entre "+num1+ " y " +num2+ "\n es " +rta);
		break;
	}

}