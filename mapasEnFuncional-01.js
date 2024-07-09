


///-----------MAPA FUNCIONAL--------------------------///

const cualesYcuantosAnimalesHayCrearMapa = (arrayDeTodosLosAnimales, animalAContar) => {
    return arrayDeTodosLosAnimales
        .filter(animal => animal === animalAContar)
        .reduce((mapa, animal) => {
            mapa.set(animal, (mapa.get(animal) || 0) + 1);
            return mapa;
        }, new Map());
};

console.log(cualesYcuantosAnimalesHayCrearMapa(
    ["caballo", "gato",
        "gallina", "pez",
        "serpiente", "serpiente",
        "serpiente", "serpiente",
        "serpiente", "serpiente",
        "serpiente", "serpiente", "pez"],
    "serpiente"
));



// const NombresRepetidosAContar = (arrayNombres, NombreRep) => {

//     return arrayNombres
//         .reduce((mapa, nombres) => {
//             mapa.set(nombres, (mapa.get(nombres) || 0) + 1)
//             return mapa;
//         }, new Map());
// }
// console.log(NombresRepetidosAContar([
//     "Erika",
//     "Diego",
//     "Daniel",
//     "Donato",
//     "Dorian",
//     "Carlos",
//     "Daniel",
//     "Donato",
//     "Dorian",
//     "Carlos"]), "Carlos");

const NombresRepetidosAContar = (arrayNombres, NombreRep) => {
    // Usamos reduce directamente sobre el array 
    //original para crear un mapa con los conteos de cada nombre
    const mapa = arrayNombres.reduce((mapa, nombre) => {
        mapa.set(nombre, (mapa.get(nombre) || 0) + 1);
        return mapa;
    }, new Map());

    // Creamos un nuevo mapa solo con el conteo
    // del nombre específico que nos interesa
    const resultado = new Map();
    if (mapa.has(NombreRep)) {
        resultado.set(NombreRep, mapa.get(NombreRep));
    }

    return resultado;
}

console.log(NombresRepetidosAContar([
    "Erika",
    "Diego",
    "Daniel",
    "Donato",
    "Dorian",
    "Carlos",
    "Daniel",
    "Donato",
    "Dorian",
    "Carlos"], "Carlos"));