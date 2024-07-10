

const contarElementosRepetidos = (lista) => {
    const frecuencias = new Map();

    lista.map(elemento => {
        if (frecuencias.has(elemento)) {
            frecuencias.set(elemento, frecuencias.get(elemento) + 1);
        } else {
            frecuencias.set(elemento, 1);
        }
    });

    return frecuencias;
};

// Ejemplo de uso:
const lista = ['a', 'b', 'a', 'c', 'a', 'b', 'd', 'b', 'b'];
const resultado = contarElementosRepetidos(lista);

// Mostramos el resultado
console.log(resultado); // Map(4) { 'a' => 3, 'b' => 4, 'c' => 1, 'd' => 1 }
