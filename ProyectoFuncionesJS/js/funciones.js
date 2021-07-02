
function calcularLongitud(){ // Funcion  por declaracion
	let palabra=document.getElementById("palabra").value
	let palabra2=document.getElementById("palabra2").value
	let text=palabra.length
	alert("La extesion de la palabra " +palabra+ " es "+text+" letras")
}

let convertirMayus=function convertir(){ // Funcion por Expresion-se llama por el nombre
let palabra=document.getElementById("palabra").value
let mayuscula=palabra.toUpperCase()
alert("la palabra en mayuscula es "+mayuscula)
}

let convertirMinus=function(){ 
let palabra=document.getElementById("palabra").value
let minuscula=palabra.toLowerCase()
alert("la palabra en minuscula es " +minuscula)
}

function extraerInicial(){ 
	let palabra=document.getElementById("palabra").value
	let minuscula=palabra.substring(0,1)
	alert("La letra Inicial es " +minuscula)
}

function concatenar(){
	let nom=document.getElementById("palabra ", ).value
	let ape=document.getElementById("palabra2").value
	let texto=nom.concat("" , ape)
	alert ("Palabra unida es "+ texto)
} 