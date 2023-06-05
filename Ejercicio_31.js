const prompt=require('prompt-sync')();
var num1=parseInt(prompt("Ingrese el numero "));
function esprimo(num1){
    if (num1 <= 1) {
        return false;
      }
      var i=2
    while (i <= Math.floor(num1/2)){
        if (num1%i===0){
            return false;
        }
        i++
    }
    return true;
}
console.log(esprimo(num1))