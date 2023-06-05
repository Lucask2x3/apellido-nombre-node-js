const prompt=require('prompt-sync')();
function sumanum() {
    var suma=0;
    var num=1;
    while (num !==0){
        num=parseInt(prompt("Ingrese un numero: "));
        suma +=num
    }
    return suma;
}
var resultado=sumanum();
console.log("El resultado de la suma de los numero es: ",+resultado);