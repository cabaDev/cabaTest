const listaNombres = [
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
];
//const nombresRep = ["Carlos", "Daniel"];

const mapaDeNombres = new Map();

const agregarAlMapa = (listaNombres) => {
  for (let i = 0; i < listaNombres.length; i++) {
    const nombre = listaNombres[i];
    if (mapaDeNombres.has(listaNombres)) {
      mapaDeNombres.set(nombre, mapaDeNombres.get(listaNombres) + 1);
    } else {
      mapaDeNombres.set(listaNombres, 1)
    } 
  }
};

agregarAlMapa(listaNombres);
const mapaFinal =(mapa) => {
  const keys = [...mapa.keys()];
  for (let i = 0; i < keys.length; i++){
    const key = keys[i];
        console.log(`${key}: ${mapa.get(key)}`)
  } ;
};

mapaFinal(mapaDeNombres);


const filtrarElementoDeUnMapa = (mapa, elementoToFilter) => {
  mapa.has("carlos", i++), mapa.set(nombre), mapa.get(index) + 1;
    
  }
;
console.log(filtrarElementoDeUnMapa);



// const nombresRep = ["Carlos", "Daniel"];

// const transformarListToMap = (listaNombres) => {
//    let mapa = new Map();
//     for (let index = 0; index < listaNombres.length; index++) {
//       if(mapa.set(listaNombres), 1 );{
//         mapa.has(listaNombres, mapa.get(listaNombres) +1);
        
//       }
//     }
// };