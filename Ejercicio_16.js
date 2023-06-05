const prompt=require('prompt-sync')();
function rango(num1,num2,sum){
    const rangoArray= [];
    for(var i=num1;i<=num2;i+=sum){
        rangoArray.push(i);
    } 
       
    return rangoArray;

}
var num1=parseInt(prompt("Ingrese el numero del comienzo "))
var num2=parseInt(prompt("Ingrese el numero del final "))
var sum=parseInt(prompt("Ingrese el sumador "))
console.log(rango(num1,num2,sum));