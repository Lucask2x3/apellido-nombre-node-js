const prompt=require('prompt-sync')();
var num=parseInt(prompt("Ingrese una temperatura en grados fahrenheit: "," "))
function transformar(num){
    var celsius=(num-32)*(5/9);
    return celsius;   
}
var celsius=transformar(num);
console.log("La conversion de los grados fahrenheit:",num,"°,en grados celsius resulta ser:",celsius,"° celsius");