const transformarListAMap = (listaNombres) => {
  const mapaDeNombres = new Map();
  for (let index = 0; index < listaNombres.length; index++) {
    const nombre = listaNombres[index];
    if (mapaDeNombres.has(nombre)) {
      mapaDeNombres.set(nombre, mapaDeNombres.get(nombre) + 1);
    } else {
      mapaDeNombres.set(nombre, 1);
    }
  }
  return mapaDeNombres;
};

const filtrarPorNombre = (mapNombreCantidad, listNombresAfiltrar) => {
  //return Array.from(mapNombreCantidad).filter(([nombre, cantidad]) => listNombresAfiltrar.includes(nombre))
  return Array.from(mapNombreCantidad).filter(([nombre, cantidad]) => verificaSiEmpiezaPor(["A"], nombre))
  
};


const verificaSiEmpiezaPor = (arrayCharacter, nombre) => {
    // Obtener el primer caracter de nombre => 

    // verificar si ese caracter está contenido el arrayCharacter => includes


    return true;
}







const miCasoUso_EncontrarNombreRepetidoSegununaListaYFiltrarPorOtraLista = (
  listaNombres,
  listAfitrar
) => {
  let myMapa = transformarListAMap(listaNombres);
  let mapaFiltrado = filtrarPorNombre(myMapa, listAfitrar);
  console.log("mapfiltrado", mapaFiltrado);
};

console.log(
  miCasoUso_EncontrarNombreRepetidoSegununaListaYFiltrarPorOtraLista(
    [
      "Erika",
      "Diego",
      "Daniel",
      "Donato",
      "Dorian",
      "Carlos",
      "Daniel",
      "Donato",
      "Dorian",
      "Carlos",
    ],
    ["D", "C"]
  )
);
