const prompt=require('prompt-sync')();
function determinarTipoCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return "sólo mayúsculas";
    }
    else if (cadena === cadena.toLowerCase()) {
      return "sólo minúsculas";
    }
    else {
      return "mayúsculas y minúsculas";
    }
  }
var cadena=prompt("Ingrese una cadena: ")  
console.log(determinarTipoCadena(cadena));  