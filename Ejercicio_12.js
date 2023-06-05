const prompt=require('prompt-sync')();
var num1=parseInt(prompt("Ingrese el numero"));
function numeroprimo(num1) {
    if (num1 <=1){
        return false;
    }
    for (let i =2; i <=num1 /2; i++){
        if (num1%i===0){
                return false
        }
    }
    return true;
}
console.log(numeroprimo(num1));
