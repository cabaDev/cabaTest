
const cualesYcuantosAnimalesHaySiTePasoUnArrayFunctional = (
    arrayDeTodosLosAnimales,
    arrayDeAnimales
) => {
    return arrayDeTodosLosAnimales.filter((animal) => arrayDeAnimales.includes(animal))
};



let map1 = new Map([
    [1, "pepe"], [2, "juan"],
    [3, "milo"], [4, false]
]);

//    console.log(map1)
//    map1.set(5, "milo") // insertar / modificar
//    console.log(map1)
//    map1.set(5, "MILO") // recuperar map1.get(5)
// console.log(map1)
// console.log(map1.get(5))
// console.log(map1.has(5))

//Probandoa crear un mapa sencillo

let map2 = new Map([[1, `casa`], [2, `casa`], [3, "psp"], [4, `sofa`], [5, `tv`], [6, `ps5`]]);

map2.set(6, `casa`);
//console.log(map2.get(cualesYcuantosAnimalesHaySiTePasoUnArrayFunctional))
//console.log(map2)

const cualesYcuantosAnimalesHayCrearMapa = (arrayDeTodosLosAnimales, animalAContar) => {
    let resultado = new Map(); // mapa

    for (let index = 0; index < arrayDeTodosLosAnimales.length; index++) {
        const animal = arrayDeTodosLosAnimales[index];

        if (animalAContar === animal) {
            if (resultado.has(animal)) {
                resultado.set(animal, resultado.get(animal) + 1); /// ??????????? que pasa aqui???
                //console.log(resultado.set(animal, resultado.get(animal + 20)));

            } else { resultado.set(animal, 1) }
        }
    }

    return resultado;

}


console.log(cualesYcuantosAnimalesHayCrearMapa(
    ["caballo",
        "gato",
        "gallina",
        "pez",
        "serpiente",
        "serpiente",
        "serpiente",
        "serpiente",
        "serpiente",
        "serpiente",
        "serpiente",
        "serpiente",
        "pez",
    ],
    "serpiente"
))