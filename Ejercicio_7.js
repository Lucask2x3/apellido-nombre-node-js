const prompt=require('prompt-sync')();
var num1=parseInt(prompt("Ingrese el primer numero "))
var num2=parseInt(prompt("Ingrese el segundo numero "))
if(num1 > num2 ){
    console.log("El numero mas grande es: ",num1)
}   else {
    console.log("El numero mas grande es: ",num2)
}