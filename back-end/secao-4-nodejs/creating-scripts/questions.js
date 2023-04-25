// console.log('Hello, world!');
const readline = require('readline-sync');

const askName = readline.question('Qual seu nome? ');
// const askAge = readline.questionInt('Qual sua idade? ');

module.exports = askName;