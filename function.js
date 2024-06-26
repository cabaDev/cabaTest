// Orejero => true
//let myArray = ['o', 'r','e', 'j', 'e', 'r', 'o'];
const isPalindromo = (word) => {
    console.log("HOLA")
    return true

};


//isPalindromo("hola")

const isPalindromo2Array = (array1, array2) => {

    for (let i = 0; i < array1.length; i++) {  
        if (array1[i] !== array2[i]) {
          return false
        } 
    }
    return true
};


let data = isPalindromo2Array(['h', 'o', 'l', 'a'], ['a', 'l', 'o', 'h'])
//console.log(data)


let data2 = isPalindromo2Array(['a', 'l', 'a'], ['a', 'l', 'a'])
//console.log(['a', 'l', 'a'], ['a', 'l', 'a'], data2)



//let myArray = ['o', 'r','e', 'j', 'e', 'r', 'o'];
const isPalindromo1Array = (array1) => {
    let array2 = array1.reverse()
    console.log(array1)
    console.log(array2) 
    for (let i = 0; i < array1.length; i++) {  
        if (array1[i] !== array2[i]) {
          return false
        } 
    }
    return true
};

const isPalindromo1Arrayv2 = (array1) => {
    const array2 = [...array1].reverse(); // Crea una copia y la invierte
    return array1.every((element, index) => element === array2[index]);
};

//let myArray = ['o', 'r','e', 'j', 'e', 'r', 'o'];
let myArray = ['o', 'r','e', 'j', 'e', 'r', 'o'];
let myArray2 = ['b', 'a','o', 'r', 'e', 'j', 'j', 'e', 'r', 'o', 'a' , 'b'];



const isPalindromo1ArrayFirtsAndLastPosition = (array1) => {
    for (let i = 0; i < Math.trunc(array1.length / 2) ; i++) {  
        let first = array1[i]
        let last = array1[array1.length-1-i]
        console.log(first, last)
        if (first !== last) {
          return false
        } 
    }
    return true
};

let isValid  = isPalindromo1ArrayFirtsAndLastPosition(myArray2)
console.log(isValid)

let i = 0
while(i < 10){
 console.log(i)
    i++
 
}