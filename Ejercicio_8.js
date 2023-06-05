const prompt=require('prompt-sync')();
var año=parseInt(prompt("Ingrese el año "))
// uso el & para abreviar and
// uso el || para comparar los valores y que me retorne un verdadero o falso
if ((año %4 ===0 && año %100 !==0)|| año %400===0){
    console.log("El año es bisiesto")
}   else {
        console.log("el año no es bisiesto")
}