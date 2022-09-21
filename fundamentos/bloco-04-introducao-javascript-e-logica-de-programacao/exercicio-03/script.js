// 1)
// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }

// console.log(fatorial);

//2)
// let palavra = 'tryber';
// let palavraAoContrario = '';

// for (let index = 0; index < palavra.length; index += 1) {
//   palavraAoContrario += palavra[palavra.length - 1 - index];
// }

// console.log(palavraAoContrario);

//3)
// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > biggestWord.length) {
//     biggestWord = array[index];
//   }
// }

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < smallestWord.length) {
//     smallestWord = array[index];
//   }
// }

// console.log(biggestWord);
// console.log(smallestWord);

// 4)
// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);