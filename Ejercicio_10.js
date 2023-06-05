const prompt=require('prompt-sync')();
var color=prompt("ingrese un color ")
switch(color){
    case "azul":
        console.log("blue");
        break;
    case "verde":
        console.log("green");
        break;
    case "rojo":
        console.log("red");
        break;
    case "amarillo":
        console.log("yellow");
        break;
    case "naranja":
        console.log("orange");
        break;
    default:
        console.log("color not found")
}