// For/in
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log('Bem-vinda' + ' ' + info.personagem);

//   info['recorrente'] = 'Sim';

//   console.log(info);

//   for (let keys in info) {
//     // console.log(keys);
//     console.log(info[keys]);  
//   }

//   let infoDois = {
//     personagem: 'Tio Patinha',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };

//   for (let keys in infoDois) {
//     console.log(keys + ': ' + infoDois[keys])
//   }


//Objetos
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' ' + ' se chama ' + leitor.livrosFavoritos.titulo);

//   leitor.livrosFavoritos = [
//     {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco',
//       }
//     ]

//     console.log(leitor.livrosFavoritos);
  
//FUNÇOES
//1)
// function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   console.log(verificaPalindrome('arara')); //true
//   console.log(verificaPalindrome('desenvolvimento')); //false

//2)
// function retornaIndice(numbers) {
//     let indiceMaior = 0;
//     for (let index in numbers) {
//         if (numbers[indiceMaior] < numbers[index]) {
//             indiceMaior = index;
//         }
//     }
//     return indiceMaior;
// }
// console.log(retornaIndice([2, 3, 6, 7, 10, 1]));

//3)
// function indiceDoMenor(numeros) {
//     let indiceMenor = 0;
//     for (let indice in numeros) {
//       if (numeros[indiceMenor] > numeros[indice]) {
//         indiceMenor = indice;
//       }
//     }
  
//     return indiceMenor;
//   }
  
//   console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6

//4)
// function maiorPalavra(palavras) {
//     let maiorPalavra = palavras[0];
//     for (let indice in palavras) {
//       if (maiorPalavra.length < palavras[indice].length) {
//         maiorPalavra = palavras[indice];
//       }
//     }
  
//     return maiorPalavra;
//   }
  
//   console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda

//5)
// function maisRepetido(numeros) {
//     let num = {};
  
//     for (let index = 0; index < numeros.length; index += 1) {
//       let valor = numeros[index];
//       if (num[valor] === undefined) {
//         num[valor] = 1;
//       } else {
//         num[valor] = num[valor] + 1;
//       }
//     }
  
//     let contRepetido = 0;
//     let contNumero = 0;
  
//     for (let prop in num) {
//       if (contRepetido < num[prop]) {
//         contRepetido = num[prop];
//         contNumero = prop;
//       }
//     }
  
//     return contNumero;
//   }
  
//   console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2

//6)
// function somaTodosNumeros(numero) {
//     let total = 0;
  
//     for (let index = 1; index <= numeros; index += 1) {
//       total = total + index;
//     }
//     return total;
//   }
  
//   console.log(somaTodosNumeros(5)); //15

//7)
// function verificaFimPalavra(palavra, fimPalavra) {
//     let inversoPalavra = palavra.split('').reverse().join('');
//     let inversoFimPalavra = fimPalavra.split('').reverse().join('');
//     let result;
//     for (let index = 0; index < inversoFimPalavra.length; index += 1) {
//       if (inversoPalavra[index] !== inversoFimPalavra[index]) {
//         result = false;
//         break;
//         break; // O "break" serve para encerrar o loop.
//       } else {
//         result = true;
//       }
//     }
    
//     return result;
//   }
  
//   console.log(verificaFimPalavra('trybe', 'be')); //true
//   console.log(verificaFimPalavra('joaofernando', 'fernan')); //false