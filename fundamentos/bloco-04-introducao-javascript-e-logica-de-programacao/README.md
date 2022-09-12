# JavaScript - Primeiros passos

No **Bloco 4** aprendemos sobre o que é e para que funciona o JS, desde o conceito básico até a implementação da interatividade na página. Aprendemos também a exercítar e desenvolver uma capacidade analítica para resolver problemas utilizando da lógica de programação.

**Tópicos relevantes**
- JS:
    - Variáveis e constantes;
    - Tipos primitivos;
    - Tipagem dinâmica;
    - Operadoes (aritméticos, de atribuição e lógicos);
    - If/Else e Switch/case;
    - For/In e For/Of;
    - Funções;

<details>
<summary> Exercício - 01 </summary>

1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
    - Adição (a + b)
    - Subtração (a - b)
    - Multiplicação (a * b)
    - Divisão (a / b)   
    - Módulo (a % b)
2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
4. Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".
5. 🚀 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
    - Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
    - Um ângulo será considerado inválido se não tiver um valor positivo.
6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
    - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
    - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
    - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
        - Exemplo: bishop (bispo) -> diagonals (diagonais)
7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
    - Porcentagem >= 90 -> A
    - Porcentagem >= 80 -> B
    - Porcentagem >= 70 -> C
    - Porcentagem >= 60 -> D
    - Porcentagem >= 50 -> E
    - Porcentagem < 50 -> F
    - O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
8. 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
    - Bonus: use somente um if.
9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
    - Atente que, sobre o custo do produto, incide um imposto de 20%.
    - Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
    - O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
        - valorCustoTotal = valorCusto + impostoSobreOCusto
        - lucro = valorVenda - valorCustoTotal (lucro de um produto)
11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
</details>
<details>
<summary> Exercício - 02 </summary>

1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
    - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
5. 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;
8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
</details>
<details>
<summary> Exercício - 03 </summary>

1. O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
```
O fatorial é representado pelo sinal !
! = 4 x 3 x 2 x 1 = 24
```
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
2. Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
```
let word = 'tryber';
```
3. Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
```
let array = ['java', 'javascript', 'python', 'html', 'css'];
```
4. Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
</details>
<details>
<summary> Exercício - 04 </summary>

```
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```
1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
3. Faça um for/in que mostre todas as chaves do objeto.
4. Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

```
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
```
6. Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
7. Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
```
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
```
8. Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
</details>


## PROJETO FINAL
Ao final do bloco realizamos o projeto Playground Functions um projeto em que utilizamos da lógica e baby steps para transformar grandes problemas em pequenos problemas pra conseguir solucionar. Você pode verificar nesse link uma publicação no meu perfil do LinkedIn para visualizar o projeto finalizado.