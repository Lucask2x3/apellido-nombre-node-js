const prompt=require('prompt-sync')();
var edad=parseInt(prompt("Ingrese la edad "));
if (edad<13 & edad>0) {
    console.log("Es un niño");
} else if(edad<17 & edad>13) { 
console.log("Es un adolescente");
} else if (edad <110 & edad>18 ) {
console.log("es un adulto");
} else {
console.log("se ingreso una edad no valida");
}      
   
