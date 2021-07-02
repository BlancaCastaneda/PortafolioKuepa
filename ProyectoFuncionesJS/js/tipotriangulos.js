// TIPO DE TRIANGULOS // EVENTO AL SUBMIT //
function Calcular(){
	let Lado1=document.getElementById("L1").value
	
	let Lado2=document.getElementById("L2").value
	
	let Lado3=document.getElementById("L3").value

	const lado=/^[0-9]{1,4}$/ 

	if(Lado1==0 || Lado2==0 || Lado3==0){
		alert("Todos los campos son obligatorios");
		}

	else{

		Lado1=parseInt(Lado1)
		Lado2=parseInt(Lado2)
		Lado3=parseInt(Lado3)
			
		if (Lado1===Lado2 && Lado1===Lado3 && Lado2===Lado3){
		alert("Su triangulo es Equilatero");
		}
		
		else{
			if (Lado1===Lado2||Lado2===Lado3||Lado1===Lado3){
				alert("Su triangulo es Isoceles");
				}

			else{
				alert("Su triangulo es Escaleno");
				}
	}
}
}



/* EVENTO AL INPUT */

const form=document.querySelector("#form")
const Lado1=document.querySelector("L1, feedback")
const Lado2=document.querySelector("L2, feedback")
const Lado3=document.querySelector("L3, feedback")

const lado=/^[0-9]{1,4}$/

form.L1.addEventListener("input",event=>{
event.preventDefault();

if(expresion.test(event.target.value)){
	form.L1.setAttribute("class","success")
	Lado1.textContent=""
	Lado1.style.setProperty("visibility", "hidden")
	Lado1.style.setProperty("opacity", "0")
}
else{
	form.L1.setAttribute("class","error")
	Lado1.textContent="Cantidad Superior"
	Lado1.style.setProperty("visibility", "visible")
	Lado1.style.setProperty("opacity", "1")
}
})

