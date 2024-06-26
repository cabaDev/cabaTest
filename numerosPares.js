

const getNumbersPairPositivos = (cantidadDeNumerosPares) => {
    let numerosParesPositivos = [];
    for (let index = 0; numerosParesPositivos.length < cantidadDeNumerosPares; index++) {
        //console.log(index)
        if (isNumberPairPositive(index)){
            console.log("add number in array" , index)
            numerosParesPositivos.push(index)
        }        
    }
    //console.log(numerosParesPositivos)
    return numerosParesPositivos;
}

const isNumberPairPositive = (myNumero) => {
    return myNumero > 0 && myNumero % 2 === 0
}


//getNumbersPairPositivos(10) // -> [2,4,6]
//getNumbersPair(0) // -> []
//getNumbersPair(5) // - [2,4,6,8,10]
//getNumbersPair(6) // - [2,4,6,8,10,12]
//getNumbersPair(10) // - [2,4,6,8,10,12, .. , 20]



const getPrimeNumber = (cantidadDeNumerosPares) => {
    let primos = [];
    for (let index = 2; primos.length < cantidadDeNumerosPares; index++) {
        console.log(index)
        if (isPrime(index)){
            console.log("add Prime number in array" , index)
            primos.push(index)
        }        
    }
    console.log(primos)
    return primos;
}
const isPrime = (myNumero) => {
    console.log("--- " , myNumero)
    for (let currentNumber = 2; currentNumber < myNumero ; currentNumber++) {
        console.log("Iteracion ", currentNumber -1 , " - current number", currentNumber)
        if (myNumero % currentNumber === 0) {
            console.log("No cumple - Iteracion ", currentNumber -1 , " - current number", currentNumber)
            return false
        }
    }

    return true
}



let resultado = isPrime(1003)
console.log("Es primo -> ", resultado)
//let all = getPrimeNumber(5)
//console.log(5)