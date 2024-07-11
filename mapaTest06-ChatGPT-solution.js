// Lista de nombres
const nombres = ["Alice", "Bob", "Charlie", "Alice", "Bob", "Alice"];

// Crear un nuevo mapa
const mapaDeNombres = new Map();

// Usar un bucle for tradicional para llenar el mapa
const llenarMapa = (lista) => {
    for (let i = 0; i < lista.length; i++) {
        const nombre = lista[i];
        if (mapaDeNombres.has(nombre)) {
             mapaDeNombres.set(nombre, mapaDeNombres.get(nombre) + 1);
        } else {
             mapaDeNombres.set(nombre, 1);
        }
    }
};

 llenarMapa(nombres);

 const imprimirMapa = (mapa) => {
    const keys = [...mapa.keys()];
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        console.log(`${key}: ${mapa.get(key)}`);
    }
};

 imprimirMapa(mapaDeNombres);
