function contarBalancesPositivos(balances) {
    var cantidadBalancesPositivos = 0;
    for (var i = 0; i < balances.length; i++) {
      if (balances[i].ganancia > 0) {
        cantidadBalancesPositivos++;
      }
    }
    return cantidadBalancesPositivos;
  }
  
  var balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 }, 
    { mes: "agosto", ganancia: -12 }, 
    { mes: "septiembre", ganancia: 1000 }, 
    { mes: "octubre", ganancia: 300 }, 
    { mes:  "noviembre", ganancia: 200 }, 
    { mes: "diciembre", ganancia: 0 }
  ];
  
  var cantidadBalancesPositivos = contarBalancesPositivos(balancesUltimoSemestre);
  console.log(cantidadBalancesPositivos);
  