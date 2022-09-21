# Introdução à JavaScript ES6 e Testes Unitários

No **Bloco 7** aprendemos sobre a nova versão do JS, o ES6. Além de aprender quatro novos recursos de sintaxe de código, tornando-o mais limpo e melhorando sua leitura.

**Tópicos relevantes**
- let e const;
- Arrow Functions;
- Templates literals;
- Operador ternário;
- Trow e Try/Catch;
- Métodos de objetos;
- NodeJS Assert;
- Jest;

<details>
<summary> Dia 01 - let, const, arrow functions e template literals</summary>

***Parte I***

1. Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.

- Modifique a estrutura da função para que ela seja uma arrow function;
- Modifique as variáveis para que respeitem o escopo onde estão declaradas;
- Modifique as concatenações para template literals.
2. Crie uma função que retorne um array em ordem crescente.
- Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
- Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
- Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

***Parte II***
3. Crie uma função que receba um número e retorne seu fatorial.

- Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

Com base nessas informações:
- Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).
- Dentro da função crie uma variável result, que será o retorno final da função.
- Crie a lógica para retornar o fatorial de N!.
- Imprima no terminal “Esse é o fatorial resultado da função“ (Lembre-se de utilizar template literals nesse momento).
- Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

4. Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

5. Crie uma página HTML que possua um contador de cliques.
- Uma tag que receberá o valor atualizado da quantidade de clicks do botão.
- Um botão com o texto click aqui!, que receberá um event listener do tipo click;
Na estrutura do script (dentro do HTML ou em um arquivo de JavaScript ):
- Crie uma variável clickCount que irá acumular o número de clicks do botão;
- Crie a lógica do evento, para que a cada click no botão, a variável seja atualizada com acréscimo de valor 1. Exemplo: Caso não tenha sido realizado nenhum click, o valor renderizado será de 0. Caso o botão seja clicado 5 vezes o valor renderizado no HTML será de 5.
Dica: Nesse exercício utilize document. getElementById para retornar o elemento do DOM que deseja.

6. Crie duas funções JavaScript com as seguintes especificações:
Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
- O nome da função deverá ser substituaX;
- A função deverá receber um nome por parâmetro;
- Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
- A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
- O nome da função deverá ser minhasSkills;
    - A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
- Declare dentro da função uma variável com o nome skills, do tipo const;
    - A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
- Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
</details>
<details>
<summary> Dia 02 - Fluxo de exceção e Objetos</summary>

***Parte I***
```
<!DOCTYPE html>
<html lang='pt-BR'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Calculadora</title>
</head>
<body>
  <p>Informe dois números para realizar a soma:</p>
  <label for='value1'>Valor 1:</label>
  <input type='text' id='value1'>
  <label for='value2'>Valor 2:</label>
  <input type='text' id='value2'>
  <button id='button'>Somar</button>
  <p id='result'></p>
  <script>
    function sum() {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      const result = Number(value1) + Number(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }
    window.onload = () => {
      const button = document.getElementById('button');
      button.addEventListener('click', sum);
    }
  </script>
</body>
</html>
```
1. Crie erros personalizados.
2. Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
3. Utilize o throw new Error e o bloco try/catch.
4. Evite funções que tenham muitas responsabilidades distintas.
5. Caso a pessoa usuária nao preencha nenhum input, ou preencha apenas um input, lance um erro.
6. Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Você pode fazer essa verificação utilizando a função isNan().
7. Adicione o texto dos erros no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
8. Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch.

***Parte II: Pedido de clientes***
```
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

};

orderModifier(order);
```
1. Complete a função customerInfo() para que seu retorno seja similar a “Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701”.
2. Complete a função orderModifier() para que seu retorno seja similar a “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”
- Modifique o nome da pessoa compradora.
- Modifique o valor total da compra para R$ 50,00.

***Parte III: Organizando lições***
```
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
```
1. Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
3. Crie uma função para mostrar o tamanho de um objeto.
4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
6. Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
Bônus:
9. Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
10. Utilizando o objeto (allLesson), crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.
</details>
<details>
<summary> Dia 03 - Primeiros passos em Jest</summary>

1. A função sum(a, b) retorna a soma do parâmetro a com o b
    - Teste se o retorno de sum(4, 5) é 9
    - Teste se o retorno de sum(0, 0) é 0
    - Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
    - Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
```
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
```

2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
- Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
- Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
- Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
```
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
```

3. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
- Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
- Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
- Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
- Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
- Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
```
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
```

3. Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
```
let array = ['java', 'javascript', 'python', 'html', 'css'];
```
4. Para as funções encode e decode, crie os seguintes testes em Jest:
- Teste se encode e decode são funções;
- Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
- Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
- Teste se as demais letras/números não são convertidos para cada caso;
- Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
```
const vogais = ['a', 'e', 'i', 'o', 'u'];
const code = [1, 2, 3, 4, 5];

function encode(text) {
  const caracters = text.split('');
  caracters.forEach((letra, i) => {
    vogais.forEach((vogal, k) => {
      caracters[i] = (letra === vogal) ? code[k] : caracters[i];
    });
  });

  return caracters.join('');
}

function decode(text) {
  const caracters = text.split('');
  caracters.forEach((caracter, i) => {
    code.forEach((num, k) => {
      caracters[i] = (caracter === num.toString()) ? vogais[k] : caracters[i];
    });
  });

  return caracters.join('');
}
```

5. A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
- Implemente a função techList a partir dos testes abaixo. É importante nunca alterar os testes ou as variáveis já escritas no código.

6. A função hydrate recebe uma string no formato “numero bebida”, e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca.
- Implemente a função hydrate a partir dos testes abaixo. É importante nunca alterar os testes ou as variáveis já escritas no código.

Bônus:
Considere os dados abaixo. Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele (firstName, lastName, specialities). Você também deverá criar os testes para essa função. Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada". Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível".
```
// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
};
```
Como ponto de partida, comece implementando um teste para checar se a função existe. Execute o teste que você escreveu e implemente, na função, a funcionalidade que passará nesse teste. Repita esse processo até que todos os retornos esperados sejam testados.
</details>


## PROJETO FINAL
Ao final do bloco realizamos o projeto JavaScript Testes Unitários um projeto em que implementamos funções a partir de requisitos e testes unitários, utilizando a biblioteca do Jest para verificar o correto funcionamento dessas funções. Você pode verificar nesse link o repositório desse projeto finalizado.