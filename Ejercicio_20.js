const prompt=require('prompt-sync')();
function sumattion(n) {
    if (n < 1) {
      return 0;
    } else {
      return n + sumattion(n-1);
    }
  }
var n=parseInt(prompt("ingrese el numero "));
console.log(sumattion(n));  
