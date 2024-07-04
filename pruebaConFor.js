const cualesYcuantosAnimalesHay = (arrayDeTodosLosAnimales, animalAContar) => {
  let resultado = 0; // mapa

  for (let index = 0; index < arrayDeTodosLosAnimales.length; index++) {
    const animal = arrayDeTodosLosAnimales[index];
    if (animalAContar === animal) {
      resultado = resultado + 1;
    }
  }

  return resultado; // mapa
};

const cualesYcuantosAnimalesHaySiTePasoUnArray = (
  arrayDeTodosLosAnimales,
  arrayDeAnimales
) => {
  let resultado = 0;

  for (let index = 0; index < arrayDeTodosLosAnimales.length; index++) {
    const animal = arrayDeTodosLosAnimales[index];
    for (let j = 0; j < arrayDeAnimales.length; j++) {
        const animalAEncontrar = arrayDeAnimales[j];
        if (animal === animalAEncontrar) {
            resultado++
        }
    }
  }
  return resultado;
};


const cualesYcuantosAnimalesHaySiTePasoUnArrayFunctional = (
    arrayDeTodosLosAnimales,
    arrayDeAnimales
  ) => {
    return arrayDeTodosLosAnimales.filter((animal) => arrayDeAnimales.includes(animal))
  };

  

let map1 = new Map([
    [1 , "pepe"], [2 , "juan"] ,
    [3, "milo"],[4, false]
    ]);

//   console.log(map1)    
//   map1.set(5, "milo") // insertar / modificar
//   console.log(map1)    
//   map1.set(5, "MILO") // recuperar map1.get(5)
//onsole.log(map1)
//onsole.log(map1.get(5))
//onsole.log(map1.has(5))
//
//console.log(
//  cualesYcuantosAnimalesHay(
//    [
//      "caballo",
//      "gato",
//      "gallina",
//      "pez",
//      "serpiente",
//      "serpiente",
//      "serpiente",
//      "pez",
//    ],
//    "serpiente"
//  )
//);

 //console.log(cualesYcuantosAnimalesHaySiTePasoUnArray([
 //    "caballo",
 //    "gato",
 //    "gallina",
 //    "pez",
 //    "serpiente",
 //    "serpiente",
 //    "serpiente",
 //    "pez"], ["serpiente", "pez"]))
//
 //console.log(cualesYcuantosAnimalesHaySiTePasoUnArrayFunctional([
 //    "caballo",
 //    "gato",
 //    "gallina",
 //    "pez",
 //    "serpiente",
 //    "serpiente",
 //    "serpiente",
 //    "pez"], ["serpiente", "pez"]))

let map2 = new Map([[1,`casa`], [2,`casa`],[3, "psp"], [4,`sofa`], [5,`tv`], [6,`ps5`]]);

map2.set(6, `casa`);
//console.log(map2.get(cualesYcuantosAnimalesHaySiTePasoUnArrayFunctional))
//console.log(map2)

const cualesYcuantosAnimalesHayCrearMapa = (arrayDeTodosLosAnimales, animalAContar) => {
    let resultado = new Map([]); // mapa
    
    for (let index = 0; index < arrayDeTodosLosAnimales.length; index++) {
      const animal = arrayDeTodosLosAnimales[index];
      
      if (animalAContar === animal) {
       
      }
    }
  
    return resultado; // mapa
  }






























  
  //console.log(resultado)
  console.log(cualesYcuantosAnimalesHayCrearMapa(
    [   "caballo",
        "gato",
        "gallina",
        "pez",
        "serpiente",
        "serpiente",
        "serpiente",
        "pez",
      ],
      "serpiente"
  ))
