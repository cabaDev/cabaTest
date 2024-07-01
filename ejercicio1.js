// parametro 1 -> ["azul", "blanco", "blanco", "blanco", "negro", "naranja"]
// parametro 2 -> color especifico -> "blanco"

// salida -> cantidad de elementos que hay en ese array -> 3

const findQuantityByColor = (colores, colorAContar) => {

  let myContadorDeColor = 0

  for (let index = 0; index < colores.length; index++) {
    const color = colores[index];
    if (colorAContar === color) {
        myContadorDeColor= myContadorDeColor + 1
    }
  }

  let i = 0
  while (i < colores.length) {
        const color = colores[index];
    if (colorAContar === color) {
        myContadorDeColor= myContadorDeColor + 1
    }
    i++
  }

  return myContadorDeColor;
};



let par1 = ["azul", "blanco", "blanco", "blanco", "negro", "naranja"];
let par2 = "negro";

let result = findQuantityByColor(par1, par2);

console.log(result);
