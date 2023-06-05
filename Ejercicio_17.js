const prompt=require('prompt-sync')();
function nuevoArreglo(num) {
    const nuevoArray = [];
  
    for (let i = 1; i <= num; i++) {
      nuevoArray.push(i);
    }
  
    return nuevoArray;
  }
var num=parseInt(prompt("Ingrese el numero "))  
console.log(nuevoArreglo(num))