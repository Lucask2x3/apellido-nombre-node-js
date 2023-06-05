const prompt=require('prompt-sync')();
function arregloDeObjetos(num){
    var objarray=[];
    for (var i = 1; i <= num; i++) {
        var obj={valor:i};
        objarray.push(obj);   
    }
    return objarray;
}
var num=parseInt(prompt("ingrese un numero "))
console-console.log(arregloDeObjetos(num));