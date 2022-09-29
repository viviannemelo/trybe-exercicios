const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
function formatedBookNames() {
    return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
  }
//   console.log(formatedBookNames());

//Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.
function nameAndAge() {
    return books
    .map((book) => (
        {
            authorName: book.author.name,
            age: book.releaseYear - book.author.birthYear,
        }
    ))
    .sort((a, b) => a.age - b.age);
  }
//   console.log(nameAndAge());

//Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
function fantasyOrScienceFiction() {
    return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
  }
//   console.log(fantasyOrScienceFiction());

//Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
function oldBooksOrdered() {
    const anoAtual = new Date().getFullYear();
   return books.filter((book) => book.releaseYear < anoAtual - 60)
   .sort((a, b) => a.releaseYear - b.releaseYear);
  }
//   console.log(oldBooksOrdered());

//Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
function fantasyOrScienceFictionAuthors() {
    return books.sort((book) => book.author.name).filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
    ;
  }
  console.log(fantasyOrScienceFictionAuthors());

//Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
function oldBooks() {
    const currentYear = new Date().getFullYear();
    return books
      .filter((book) => currentYear - book.releaseYear > 60)
      .map((book) => book.name);
  }

//Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const expectedResult = 'O Senhor dos Anéis';
function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
}