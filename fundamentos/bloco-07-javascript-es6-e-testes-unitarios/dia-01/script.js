//Parte I
//1)
//   const testingScope = (escopo) => {
//     if (escopo === true) {
//         let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
//         console.log(ifScope);
//       } else {
//         let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//         console.log(elseScope);
//       }
//   }
//   testingScope(true);

//2)
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// const sortOddsAndEvens = () => {
//   oddsAndEvens[0] = 2;   //Indiquei os novos índices pra cada número
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7; 
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;
//   return oddsAndEvens;
// };
// const sortedArray = sortOddsAndEvens();  //Criei nova variável com os novos índices que foi criado
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); //Chamei a nova constante

//Parte II
//1)
// const factorial = (n) => {
//     let result = 1;
//     for (index = 2; index <= n; index += 1) {
//         result *= index;
//     }
//     return result
// };
// const print = factorial(5);
// console.log(`Esse é o fatorial ${print}`);

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));

//2)
// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));

//4)
// const substituaX = (nome) => frase = `Tryber ${nome} aqui!`;
// console.log(substituaX('Vivi'));

// const minhasSkills = (func) => {
//     const skills = ['JavaScript', 'HTML', 'CSS'];
//     let resultado = `
//     ${func}
  
//     Minhas três principais habilidades são:`;
  
//     skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
//       resultado = `${resultado}
//       - ${skill}`;
//     }); // reatribui e adiciona a skill atual a variável resultado
//     return resultado;
//   };
  
//   console.log(minhasSkills(substituaX('Vivi')));