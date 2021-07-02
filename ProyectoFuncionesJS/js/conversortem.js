let conversion=function(event){
	event.preventDefault();
	let grados=document.getElementById("grados").value
	grados=parseInt(grados)
	let opcion1=document.getElementById("opcion1").value
	let opcion2=document.getElementById("opcion2").value
	let conversion

// De C a K

if (opcion1==0){
		alert("Debes elegir dos opciones");
	}

	if (opcion2==0){
		alert("Debes elegir dos opciones");
	}

if(opcion1==="celsius" && opcion2==="kelvin"){
	conversion=grados+273.15
	alert("La conversion de "+grados+" grados " +opcion1+" es " +conversion.toFixed(2)+" grados " +opcion2)
}
	
	else if (opcion1==="celsius" && opcion2==="fahrenheit"){
		conversion=((grados*9/5)+32)
		grados=parseFloat(grados)
		alert("La conversion de "+grados+ " grados " +opcion1+" es " +conversion.toFixed(2)+" grados " +opcion2)
		}

	 	else if (opcion1==="kelvin" && opcion2==="celsius"){
			conversion=grados-273.15
			alert("La conversion de "+grados+ " grados " +opcion1+" es " +conversion.toFixed(2)+" grados " +opcion2)
			}
			
			else if(opcion1==="kelvin" && opcion2==="fahrenheit"){
				conversion=((grados-273.15)*(9/5)+32)
				grados=parseFloat(grados)
				alert("La conversion de "+grados+ " grados " +opcion1+" es " +conversion.toFixed(2)+" grados " +opcion2)
		 		}

			    else if (opcion1==="fahrenheit" && opcion2==="kelvin"){
					conversion=(grados-32)*5/9+273.15
					alert("La conversion de "+grados+" grados " +opcion1+" es " +conversion.toFixed(2)+" grados " +opcion2)
					}
					
					else if	(opcion1==="fahrenheit" && opcion2==="celsius"){
						conversion=(grados-32)*5/9
						grados=parseFloat(grados)
						alert("La conversion de "+grados+ " grados " +opcion1+" es " +conversion.toFixed(2)+" grados " +opcion2)
						}
}



