const prompt=require('prompt-sync')();
class Ficha {
    constructor(nombre) {
      this.nombre = nombre;
      this.sesiones = [];
      this.numsesiones = 0;
    }
  
    anotar(kilometros) {
      this.sesiones.push(kilometros);
      this.numsesiones++;
    }
  
    media() {
      let suma = 0;
      for (let i = 0; i < this.numsesiones; i++) {
        suma += this.sesiones[i];
      }
      return suma / this.numsesiones;
    }
  }
var nom=prompt("Ingrese el nombre: ")
var km=prompt("Ingrese cuantos kilometros recorrio: ")
const persona1 = new Ficha(nom);
persona1.anotar(km);
persona1.anotar(km);
persona1.anotar(km);
console.log(persona1.media());
