const prompt=require('prompt-sync')();
function breakStatement(num){
    const nuevoArray=[];
    var suma=num;
    for(var i = 1; i <= 10; i++) {
       suma+=2;
       nuevoArray.push(suma);
       if (suma===i) {
        nuevoArray.length=0;
        break;
       }
    }
    if(nuevoArray.length===0){
        return "se interrumpio la ejecucion" 
    }else{
        return nuevoArray;
    }
}   
var num=parseInt(prompt("ingrese el numero "));
console.log(breakStatement(num));