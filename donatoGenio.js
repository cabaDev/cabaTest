const heyDonatoEsteEsPrimo = (numero) => {
  if (numero <= 1) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
};

const dameLosPrimerosNumerosPrimos = (totalDePrimos) => {
  let almacen = [];
  for (let numero = 0; almacen.length < totalDePrimos; numero++) {
    let esPrimo = heyDonatoEsteEsPrimo(numero); // -> true or false
    if (esPrimo) {
      almacen.push(numero);
    }
  }
  return almacen;
};

const dameTodosLosNumerosPrimosHasta = (numeroMax) => {

  let almacen = [];
  for (let numero = 0; numero < numeroMax ; numero++) {
      let esPrimo = heyDonatoEsteEsPrimo(numero) // -> true or false
      if (esPrimo) {
          almacen.push(numero)
      }
  }
  return almacen;
};

console.log(dameLosPrimerosNumerosPrimos(100));
console.log(dameTodosLosNumerosPrimosHasta(100));
