// const a = 10;
// const b = 7;

// 1)
// console.log('Adição é ' + (a + b));
// console.log('Subtração é ' + (a - b));
// console.log('Multiplicação é ' + (a * b));
// console.log('Divisão é ' + (a / b));
// console.log('Módulo é ' + (a % b));

// 2)
// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// 3)
// const a = 6;
// const b = 2;
// const c = 0;
// let maiorNumero = '';

// if (a > b && a > c) {
//     maiorNumero = a;
// } else if (b > a && b > c) {
//     maiorNumero = b;
// } else {
//     maiorNumero = c;
// }
// console.log(maiorNumero);

// 4)
// let valor = '';

// switch (valor) {
//     case 'positivo':
//         valor = 'positive';
//         break;
//     case 'negativo':
//         valor = 'negative';
//         break;
// default:
//     valor = 'zero';
// }
// console.log(valor);


// 5)
// let a = 80;
// let b = 70;
// let c = 30;

// if (a + b + c === 180) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 6)Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// let pecaDeXadrez = 'pato';

// if (pecaDeXadrez === 'Rei' || pecaDeXadrez === 'rei') {
//     console.log('O Rei pode mover pra qualquer direção, porém apenas uma casa por vez.');
// } else if (pecaDeXadrez === 'Dama' || pecaDeXadrez === 'dama') {
//     console.log('A Dama pode mover em qualquer direção e quantas casas quiser');
// } else if (pecaDeXadrez === 'Torre' || pecaDeXadrez === 'torre') {
//     console.log('A Torre move-se em linha reta na vertical e na horizontal, quantas casas quiser.');
// } else if (pecaDeXadrez === 'Bispo' || pecaDeXadrez === 'bispo') {
//     console.log('O Bispo move-se na diagonal.');
// } else if (pecaDeXadrez === 'Cavalo' || pecaDeXadrez === 'cavalo') {
//     console.log('O Cavalo pode andar duas na vertical e uma na horizontal.');
// } else if (pecaDeXadrez === 'Peão' || pecaDeXadrez === 'peão') {
//     console.log('O Peão move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.');
// } else {
//     console.log('Essa não é uma peça válida');
// }

// 7) Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
// let nota = 58;

// if (nota >= 90 && nota < 100) {
//     nota = 'A';
// } else if (nota < 90 && nota >= 80) {
//     nota = 'B';
// } else if (nota < 80 && nota >= 70) {
//     nota = 'C';
// } else if (nota < 70 && nota >= 60) {
//     nota = 'D';
// } else if (nota < 60 && nota >= 50) {
//     nota = 'E';
// } else if (nota < 50 && nota > 0) {
//     nota = 'F';
// } else {
//     console.log('Erro. Essa não é uma nota válida.')
// }

// console.log(nota);

// 8)Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// const a = 10;
// const b = 13;
// const c = 5;

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//     console.log(true);
// } else {
//     console.log(false)
// }

// 9)Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// const a = 10;
// const b = 13;
// const c = 5;

// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//     console.log(true);
// } else {
//     console.log(false)
// }

// 10)
// const valorCusto = 10;
// const valorVenda = 20;
// const impostoSobreOCusto = valorCusto * 0.2;
// const custoTotal = valorCusto + impostoSobreOCusto
// const lucro = valorVenda - custoTotal;

// console.log(lucro);


// 11)
// const salarioBruto = 5000.00;

// let descontoINSS;
// if (salarioBruto <= 1556.94) {
//     descontoINSS = salarioBruto * 0.08;
// } else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
//     descontoINSS = salarioBruto * 0.09;
// } else if (salarioBruto > 2594.92 && salarioBruto <= 5198.82) {
//     descontoINSS = salarioBruto * 0.11;
// } else if (salarioBruto > 5198.82) {
//     descontoINSS = salarioBruto - 570.88;
// }

// let valorDescontadoINSS = salarioBruto - descontoINSS;
// console.log(valorDescontadoINSS);

// let descontoIR;
// if (valorDescontadoINSS <= 1903.98) {
//     descontoIR = valorDescontadoINSS;
// } else if (valorDescontadoINSS > 1903.98 && valorDescontadoINSS <= 2826.65) {
//     descontoIR = valorDescontadoINSS * 0.075;
// } else if (valorDescontadoINSS > 2826.65 && valorDescontadoINSS <= 3751.05) {
//     descontoIR = valorDescontadoINSS * 0.15;
// } else if (valorDescontadoINSS > 3751.05 && valorDescontadoINSS <= 4664.68) {
//     descontoIR = valorDescontadoINSS * 0.225;
// } else if (valorDescontadoINSS > 4664.68) {
//     descontoIR = valorDescontadoINSS * 0.275;
// }

// let valorDescontadoIR = salarioBruto - descontoIR;

// const salarioLiquido = valorDescontadoIR;
// console.log(salarioLiquido);
