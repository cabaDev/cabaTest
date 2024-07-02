//EJERCICIOS CON "FOR" DE IMPRERATIVA A FUNCIONAL
// forma imprerativa
let numeros = [2, 3, 4, 5, 26]
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

//console.log(suma);
//console.log();

// forma funcional


suma = numeros.reduce((a, b) => a + b)
//console.log(suma);








let dato1 = ["caballo", "gato", "gallina", "pez", "serpiente"]
let dato2 = ["unidades"]
const cualesYcuantosAnimalesHay = (animales, qttyAnimals) => {
    let miCuentaEs = 0
    for (let index = 0; index < animales.length; index++) {
        const losAnimales = animales[index];
        if (animales === qttyAnimals) {
            miCuentaEs = miCuentaEs + 1
            console.log(losAnimales);
        }
    }
    return miCuentaEs;
}

let resultado = cualesYcuantosAnimalesHay(dato1, dato2);
//console.log(miCuentaEs);
console.log(dato1, dato2);

