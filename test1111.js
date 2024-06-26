


let i = 0;
let final = 100
let numberPar = []

if (i < final ){
    numberPar // add elemento al array <- array
}

let numCeroAcien = [];
for (i = -100; i <= 100; i++){
    numCeroAcien.push(i);
}
//console.log(numCeroAcien);


let dataFiltered = numCeroAcien.find(numero => numero % 2 === 0);
console.log("DATA", dataFiltered);


const inventario = [
    { nombre: "manzanas", cantidad: 2 },
    { nombre: "bananas", cantidad: 0 },
    { nombre: "cerezas", cantidad: 5 },
    { nombre: "cerezas", cantidad: 11 },
  ];
  
  function esCereza(fruta) {
    return fruta.nombre === "cerezas";
  }



  console.log("DATA INVENTARIOS", inventario.find(esCereza));


  let i = 0;
  let final = 100
  let numberPar = []
  
  if (i < final ){
      numberPar // add elemento al array <- array
  }
  
  let numCeroAcien = [];
  for (i = -100; i <= 100; i++){
      numCeroAcien.push(i);
  }
  //console.log(numCeroAcien);
  
  
  let dataFiltered = numCeroAcien.find(numero => numero % 2 === 0);
  console.log("DATA", dataFiltered);
  
  
  const inventario = [
      { nombre: "manzanas", cantidad: 2 },
      { nombre: "bananas", cantidad: 0 },
      { nombre: "cerezas", cantidad: 5 },
      { nombre: "cerezas", cantidad: 11 },
    ];
    
    function esCereza(fruta) {
      return fruta.nombre === "cerezas";
    }
  
  
  
    console.log("DATA INVENTARIOS", inventario.find(esCereza));