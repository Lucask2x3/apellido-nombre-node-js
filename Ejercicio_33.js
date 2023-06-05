const prompt=require('prompt-sync')();
var repetir=true;
do{
    var num1=parseInt(prompt("Ingrese el primer numero "));
    var num2=parseInt(prompt("Ingrese el segundo numero "));
    var suma= num1+num2;
    console.log(suma)
    var respuesta="";
    do{
        respuesta=prompt("Si desea repetir la operacion escriba 'SI',de lo contrario escriba 'NO'.").toUpperCase();
    } while(respuesta !=="SI" && respuesta!=="NO");
    if (respuesta==="NO"){
        repetir=false;
    }
}while(repetir);
