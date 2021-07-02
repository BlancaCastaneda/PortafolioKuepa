
//***************   QUE SIGNO SOY **************/////

boton.addEventListener("click",event=>{
event.preventDefault()

let dia=document.getElementById("dia").value
dia=parseInt(dia)

let mes=document.getElementById("mes").value
mes=parseInt(mes)

let respuesta=document.getElementById("respuesta")

if((dia>=21 && mes===3) || (mes===4  && dia<=18)){
	texto=`<p><img src="img/ari"> Tu signo es Aries <img src="img/ari"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.6")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((dia>=21 && mes===4) || (dia<=21 && mes===5)){
	texto=`<p><img src="img/tau"> Tu signo es Tauro <img src="img/tau"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.6")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((dia>=22 && mes===5) || (dia<=21 && mes===6)){
	texto=`<p><img src="img/gemi"> Tu signo es Geminis <img src="img/gemi"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.6")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((dia>=21 && mes===6) || (dia<=23 && mes===7)){
	texto=`<p><img src="img/can"> Tu signo es Cancer <img src="img/can"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.6")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((dia>=24 && mes===7) || (dia<=23 && mes===8)){
	texto=`<p><img src="img/leo"> Tu signo es Leo <img src="img/leo"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.6")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((dia>=24 && mes===8) || (dia<=23 && mes===9)){
	texto=`<p><img src="img/vir"> Tu signo es Virgo <img src="img/vir"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.6")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((dia>=24 && mes===9) || (dia<=23 && mes===10)){
	texto=`<p><img src="img/lib"> Tu signo es Libra <img src="img/lib"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.6")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((dia>=24 && mes===10) || (dia<=22 && mes===11)){
	texto=`<p><img src="img/scor"> Tu signo es Escorpio <img src="img/scor"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.6")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((dia>=23 && mes===11) || (dia<=21 && mes===12)){
	texto=`<p><img src="img/sagi"> Tu signo es Sagitario <img src="img/sagi"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.6")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((dia>=22 && mes===12) || (dia<=20 && mes===1)){
	texto=`<p><img src="img/capri"> Tu signo es Capricornio <img src="img/capri"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.6")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((dia>=21 && mes===1) || (dia<=19 && mes===2)){
	texto=`<p><img src="img/acua"> Tu signo es Acuario <img src="img/acua"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.6")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((dia>=20 && mes===2) || (dia<=20 && mes===3)){
	texto=`<p><img src="img/picis"> Tu signo es Piscis <img src="img/picis"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.6")
	respuesta.style.setProperty("transition","all 3s ease")
}
})

//**********************ESTAREMOS JUNTOS*****************************//


boton.addEventListener("click",event=>{
	event.preventDefault()

	let signoa=document.getElementById("signoa").value
	signoa=parseInt(signoa)

	let signob=document.getElementById("signob").value
	signob=parseInt(signob)

	let respuesta=document.getElementById("respuesta")

		
		
if(((signoa=1 && signob===1) || (signob===3) || (signob===5) || (signob===7) || (signob===9 || (signob===11)))){
	texto=`<p><img src="img/compatibles"> Son Compatibles <img src="img/compatibles"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.8")
	respuesta.style.setProperty("transition","all 3s ease")
}


else if(((signoa=1 && signob===2) || (signob===4) || (signob===6) || (signob===8) || (signob===10 || (signob===12)))){
	texto=`<p><img src="img/nocompatibles"> No son Compatibles <img src="img/nocompatibles"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.8")
	respuesta.style.setProperty("transition","all 3s ease")
	
}

else if(((signoa=2 && signob===2) || (signob===4) || (signob===6) || (signob===8) || (signob===10 || (signob===12)))){
	texto=`<p><img src="img/compatibles"> Son Compatibles <img src="img/compatibles"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.8")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((signoa=2 && signob===1 || (signob===3) || (signob===5) || (signob===7) || (signob===9 || (signob===11)))){
	texto=`<p><img src="img/nocompatibles"> No son Compatibles <img src="img/nocompatibles"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.8")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((signoa>=24 && signob===7) || (signoa<=23 && signob===8)){
	texto=`<p><img src="img/compatibles"> Son Compatibles <img src="img/compatibles"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.8")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((signoa>=24 && signob===8) || (signoa<=23 && signob===9)){
	texto=`<p><img src="img/nocompatibles"> No son Compatibles <img src="img/nocompatibles"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.8")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((signoa>=24 && signob===9) || (signoa<=23 && signob===10)){
	texto=`<p><img src="img/compatibles"> Son Compatibles <img src="img/compatibles"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.8")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((signoa>=24 && signob===10) || (signoa<=22 && signob===11)){
	texto=`<p><img src="img/nocompatibles"> No son Compatibles <img src="img/nocompatibles"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.8")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((signoa>=23 && signob===11) || (signoa<=21 && signob===12)){
	texto=`<p><img src="img/compatibles"> Son Compatibles <img src="img/compatibles"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.8")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((signoa>=22 && signob===12) || (signoa<=20 && signob===2)){
	texto=`<p><img src="img/nocompatibles"> No son Compatibles <img src="img/nocompatibles"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.8")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((signoa>=21 && signob===1) || (signoa<=19 && signob===2)){
	texto=`<p><img src="img/compatibles"> Son Compatibles <img src="img/compatibles"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.8")
	respuesta.style.setProperty("transition","all 3s ease")
}

else if((signoa>=20 && signob===2) || (signoa<=20 && signob===3)){
	texto=`<p><img src="img/nocompatibles"> No son Compatibles <img src="img/nocompatibles"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","0.8")
	respuesta.style.setProperty("transition","all 3s ease")
}
})












