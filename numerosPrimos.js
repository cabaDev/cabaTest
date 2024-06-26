const array = numeros.from({ length: 99 }),

function esPrimo(num) {
    if (num <= 1)
        return false;
}

if (num === 2) {
    return true;
}

if (nume % 2 === 0) {
    return false;
}

let divisible = Math.sqrt(num);
for (let i =3; i <=divisible; i += 2){
    if (num % i === 0){
        return false;
    }
}

console.log(esPrimo);
