const prompt=require('prompt-sync')();
var angu1=parseInt(prompt("Ingrese el primer angulo "));
var angu2=parseInt(prompt("Ingrese el segundo angulo "));
var angu3=parseInt(prompt("Ingrese el tercer angulo "));
if (angu1 + angu2 + angu3 ===180){
    console.log("los angulos introducidos forman un triangulo valido")
}   else {
        console.log("los angulos introducidos no forman un triangulo valido")
}