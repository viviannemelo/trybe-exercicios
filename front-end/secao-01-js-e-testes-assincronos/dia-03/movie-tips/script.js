// Créditos: This product uses the TMDB API but is not endorsed or certified by TMDB." + LOGO
//URL das logos: https://www.themoviedb.org/about/logos-attribution
//url chave exemplo: https://api.themoviedb.org/3/movie/550?api_key=82acfb456a3d0302b12da8a0d642235b
//https://developers.themoviedb.org/3/movies/get-movie-details
//Exemplo movie tip: https://movietip.net/
//Tutorial https://medium.com/flutter-comunidade-br/criando-um-aplicativo-em-flutter-para-consumir-uma-api-de-filmes-tmdb-2b5a9982bfcd

// function append(filmes) {
//     const divCard = document.createElement("div");
//     const img = document.createElement("img");
//     const divBody = document.createElement("div");
//     const cardTitle = document.createElement("h5");

//     divCard.style.border = '1px solid black';
    
//     img.src = 
// };

// window.onload = () => {
//     fetch('https://api.themoviedb.org/3/movie')
//         .then((response) => response.json())
//         .then((listaDeFilmes) => {
//             append(listaDeFilmes);
//         })
// }

// console.log(fetch);

const myObj = {
    name: 'Link',
    age: 20,
  };
  
  // Precisamos transformar este objeto em uma string. Para isso, utilizamos a função `JSON.stringify()`.
  
  localStorage.setItem('myData', JSON.stringify(myObj));
  
  // Como dito anteriormente, o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, precisamos passar como primeiro parâmetro do método `setItem()` o nome da chave, passamos `myData` e como segundo parâmetro, a função `JSON.stringify()` com o objeto-valor que queremos armazenar na chave `myData`. Feito isso, teremos salvo no `localStorage` um objeto com a chave `myData` e o valor `{ "name": "Link", "age": 20 }`.
  
  // Agora, precisamos recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string. Para isso, utilizaremos a função `JSON.parse()`.
  
  const recoveredObject = JSON.parse(localStorage.getItem('myData'));
  
  // Utilizamos a função `JSON.parse()` para transformar a string que está armazenada no `localStorage` de volta para seu formato original, um objeto.
  
  console.log(recoveredObject); // { name: 'Link', age: 20 }