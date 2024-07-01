function esPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

//const findFirstPrimeNumber = (quantityPrimeNumber) => {
//  const numeroPrimo = [];

//}

const findPrimeNumberHastaXNumber = (quantityPrimeNumber) => {
  const numeroPrimo = [];
  const numeros = Array.from({ length: quantityPrimeNumber + 1 }, (_, i) => i); // [0, ...,  29]
  const nprimos = numeros.filter(esPrimo); // [2, 3, 5, 7, ....]
  return nprimos;
};
//console.log(findPrimeNumberHastaXNumber(10));

//console.log(findFirstPrimeNumber(10));

const xPrimeNum = (qtyPrimeNum) => {
  const xPrimos = [];

  // xPrimos.push(primeNumber)
  // xPrimos.length == qtyPrimeNum

  return xPrimos;
};

function esPrimo(numero) {
  let sonPrimos = [];
  if (numero <= 1) return false;
  for (let i = 2; i < numero; i++)
     {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
//console.log(esPrimo);

const todasLasComidaDelMundo = [
  "vegetales",
  "carnes",
  "postre",
  "bebida",
  "helados",
  "chocolate",
  "frutas",
];
const oyeDonatoTeGustanLos = (comida) => {
  if (comida === "vegetales") return true;
  if (comida === "carnes") return false;
  if (comida === "postre") return true;
  if (comida === "bebida") return true;
  if (comida === "helados") return true;
  if (comida === "chocolate") return false;
  if (comida === "frutas") return true;
  return false;
};

const dameUnaListaDelasXPrimeraComidaQueLeGustanADonato = () => {
  let c1 = oyeDonatoTeGustanLos("vegetales");
  if (c1) return ["vegetales"];

  let c2 = oyeDonatoTeGustanLos("carnes");
  if (c2) return ["carnes"];

  let c3 = oyeDonatoTeGustanLos("postre");
  if (c3) return ["postre"];

  let c4 = oyeDonatoTeGustanLos("bebida");
  if (c4) return ["bebida"];

  let c5 = oyeDonatoTeGustanLos("helados");
  if (c5) return ["helados"];

  return [];
};

const dameTodasLasComidasQueleGustanBruto = () => {
  let todasLasComidasQueLeGustan = [];

  let respuesta1 = oyeDonatoTeGustanLos("vegetales");
  if (respuesta1) todasLasComidasQueLeGustan.push("vegetales");

  let respuesta2 = oyeDonatoTeGustanLos("carne");
  if (respuesta2) todasLasComidasQueLeGustan.push("carne");

  let respuesta3 = oyeDonatoTeGustanLos("postre");
  if (respuesta3) todasLasComidasQueLeGustan.push("postre");

  let respuesta4 = oyeDonatoTeGustanLos("bebida");
  if (respuesta4) todasLasComidasQueLeGustan.push("bebida");

  let respuesta5 = oyeDonatoTeGustanLos("helados");
  if (respuesta5) todasLasComidasQueLeGustan.push("helados");

  let respuesta6 = oyeDonatoTeGustanLos("chocolate");
  if (respuesta6) todasLasComidasQueLeGustan.push("chocolate");

  return todasLasComidasQueLeGustan;
};

const dameTodasLasComidasQueleGustanIterable = () => {
  let todasLasComidasQueLeGustan = [];

  for (let index = 0; index < todasLasComidaDelMundo.length; index++) {
    let comida = todasLasComidaDelMundo[index]
    // let leGusta = oyeDonatoTeGustanLos(comida)
    if (oyeDonatoTeGustanLos(comida)) {
      todasLasComidasQueLeGustan.push(comida);
    }
  }

  return todasLasComidasQueLeGustan;
};

const dameLosPrimerosNumerosPrimos = (totalDePrimos) => {
    let almacen = [];
    for (let numero = 0; almacen.length <= totalDePrimos ; index++) {
        let esPrimo = heyDonatoEsteEsPrimo(numero) // -> true or false
        if (esPrimo) {
            almacen.push(numero)
        }
    }
    return almacen
}

const dameTodasLasComidasQueleGustanFuncional = () => {
  var comidasFiltradas = todasLasComidaDelMundo.filter(
    (comida) => comida.slice(-1) === "s");

  return comidasFiltradas;
};

console.log(dameUnaListaDelasXPrimeraComidaQueLeGustanADonato());
console.log(dameTodasLasComidasQueleGustanBruto());
console.log(dameTodasLasComidasQueleGustanIterable());
console.log(dameTodasLasComidasQueleGustanFuncional());




console.log(oyeDonatoTeGustanLos("tripleG"));
