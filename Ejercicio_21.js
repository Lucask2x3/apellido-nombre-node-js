const prompt=require('prompt-sync')();
function abbrevName(nombre) {
 
    var nombreArray = nombre.split(" ");
    var nom1 = nombreArray[0];
    var apellido = nombreArray[1];
    

    var iniciales = nom1[0].toUpperCase() + "." + apellido[0].toUpperCase();
    
    return iniciales;
  }
var nombre=prompt("Ingrese un nombre: ")
console.log(abbrevName(nombre))