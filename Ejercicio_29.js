const prompt=require('prompt-sync')();
function contarHasta(){
    var num=parseInt(prompt("Ingrese un numero: "));
    var listanum=[];
    var i=0;
    while (i<=num) {
        listanum.push(i);
        i++;
    }
    return listanum;
}
var num=contarHasta();
console.log(num)