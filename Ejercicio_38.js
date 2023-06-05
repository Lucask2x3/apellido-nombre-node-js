const prompt=require('prompt-sync')();
function espalindromo(palabra){
    palabra=palabra.toLowerCase().replace(/[\W_]/g, "");
    if (palabra===palabra.split("").reverse().join("")){
        return "es palindromo";
    }else {
        return "no es palindromo";
    }
}
var palabra=prompt("Ingrese una palabra: ")
console.log(espalindromo(palabra))