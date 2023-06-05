const prompt=require('prompt-sync')();
var num1=parseInt(prompt("Ingrese un numero: "))
function divisiblepor5(num){
    if (num % 5 ===0) {
        return true;
    }   else {
        return false;  
    }      
} 
var resultado=divisiblepor5(num1);
if (resultado) {
    console.log("El número ",num1," es divisible por 5");
  } else {
    console.log("El número",num1,"no es divisible por 5");
  }
