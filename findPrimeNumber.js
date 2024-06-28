
const esPrimo = (number) => {
	if (number <= 1) return false;
	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
}

const giveFirstPrimes = (totalPrimeNumbers) => {
	const primeNumbers = [];
	for (let currentNumber = 2; primeNumbers.length < totalPrimeNumbers; currentNumber++) {
		if (esPrimo(currentNumber)) {
			primeNumbers.push(currentNumber);
		}
	}
	return primeNumbers;
};


console.log(giveFirstPrimes(100));
