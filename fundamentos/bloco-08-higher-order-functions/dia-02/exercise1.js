//Organizando uma biblioteca
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

// 1)
const authorBornIn1947 = () => {
    return books.find((nameAuthor) => nameAuthor.author.birthYear === 1947).author.name;
}
console.log(authorBornIn1947(books));

//2)
// function smallerName() {
//   let nameBook;
//   books.forEach((book) => {
//     if(!nameBook) {

//     }
//   })
// }
//   console.log(smallerName);
//Tentei resolver assistindo a resolução no gabarito mas segui não entendendo

// 3)
function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}
console.log(getNamedBook());

// 4)
function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}
console.log(booksOrderedByReleaseYearDesc());

// 5)
function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000);
}

console.log(everyoneWasBornOnSecXX())

// 6)
function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}
console.log(someBookWasReleaseOnThe80s());

// 7)
function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());