const prompt=require('prompt-sync')();
var num1=parseInt(prompt("Ingrese el primer numero"))
var num2=parseInt(prompt("Ingrese el segundo numero numero"))
var iguales=(num1==num2)
var mlongitud=(num1.length==num2.length)
if (iguales){
    console.log("Ambos numeros son iguales")
}    else {
    console.log("Los numeros son distintos")
}
if (mlongitud){
    console.log("Ambos numeros tienen la misma longitud")
}    else {
    console.log("Los numeros son distintos en su longitud")
}
