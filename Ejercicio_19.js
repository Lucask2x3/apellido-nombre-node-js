const prompt=require('prompt-sync')();
function toTime(segundos) {
var horas=Math.floor(segundos/3600)+" horas  ";
var minutos=Math.floor((segundos%3600) /60)+" minutos.";
var result=horas+minutos
return result
}
var segundos=parseInt(prompt("ingrese los segundos "));
console.log(toTime(segundos));