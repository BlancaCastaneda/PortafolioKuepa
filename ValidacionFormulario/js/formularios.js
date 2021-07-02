document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(e) {
  palabra1= /^[a-zA-Z`]{5,10}/
  event.preventDefault();
let palabra=document.getElementById("palabra").value;


  if(palabra1.test(palabra)){
    alert("La palabra que escribes es correcta");
    return;
  }

  else{
    console.log("No cumple con los parametros")
    return;
  }
this.submit()
}

//
/*
function validarFormulario(e) {
  event.preventDefault();

  let usuario = document.getElementById('usuario').value;
  let clave = document.getElementById('clave').value;

    if(usuario.length === 0) {
      alert('Digite su usuario');
      return;
      }

      if(clave===123456) {
        alert("Bienvenida");
        }
      else{
          alert ("Digite su contraseña")

      }

     if(usuario === "Blank" && clave === 123456){
      alert("Bienvenida")
     return;
  

        this.submit();
  
 }
 
 
 
       

   
 
 
 




  /* 1. validar contraseña que tenga una mayuscula una minuscula y numeros y 
  de tamaño mayor a 6 caracteres.
  2. ingresar un usuario y contraseña predeterminada y realizar validación
  a. si es correcto que muestre la pagina.
  b. si es incorrecto que aperezca mensaje de datos errados ya sea usuario 
  o clase o los dos*/