function gananciaTotal(balances){
    var total = 0;
  for (var i = 0; i < balances.length; i++) {
    total += balances[i].ganancia;
  }
  return total;
}

    let balancesUltimoSemestre = [
        { mes: "julio", ganancia: 50 }, 
        { mes: "agosto", ganancia: -12 }, 
        { mes: "septiembre", ganancia: 1000 }, 
        { mes: "octubre", ganancia: 300 }, 
        { mes:  "noviembre", ganancia: 200 }, 
        { mes: "diciembre", ganancia: 0 }
      ];      
var gananciaTotalUltimoSemestre = gananciaTotal(balancesUltimoSemestre);
console.log(gananciaTotalUltimoSemestre);   