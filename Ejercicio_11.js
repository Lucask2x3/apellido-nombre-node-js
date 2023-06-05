const prompt=require('prompt-sync')();
var num1=parseInt(prompt("Ingrese un numero: "))
var num2=parseInt(prompt("Ingrese un numero: "))
var num3=parseInt(prompt("Ingrese un numero: "))
function operadoresLogicos(num1,num2,num3) {
    if (num1>num2 && num1>num3 && num1>0) {
        return console.log("El primer numero es mayor y positivo");
    }       
    if (num1 < 0 || num2 < 0 || num3 < 0) {
        return "Hay negativos";
    }
     if (num3 > num1 && num3 > num2){
        return num3+1 }

     if (num1===0 || num2===0 || num3===0) {
        return "Error";
    }
    return false   
}
console.log(operadoresLogicos(num1,num2,num3));