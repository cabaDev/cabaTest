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

    return resultado.get(NombreRep);
}

const NombresRepetidosAContar2 = (arrayNombres, nombreRep) => {
    let contador = 0;

    for (let index = 0; index < arrayNombres.length; index++) {
        const element = arrayNombres[index];
        if (nombreRep === element) {
            contador++
        }
        
    }

    return contador;
}



const NombresRepetidosAContarF = (arrayNombres, nombreRep) => {
    return arrayNombres.filter((name) => name === nombreRep).length;
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

console.log(NombresRepetidosAContar2([
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

console.log(NombresRepetidosAContarF([
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