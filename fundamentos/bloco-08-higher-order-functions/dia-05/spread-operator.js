// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Banana', 'Caqui'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granola', 'Mel', 'Aveia'];

const fruitSalad = (fruit, additional) => {
  return [
    ...specialFruit,
    ...additionalItens,
    'Morango',
    'Kiwi',
  ]
};

console.log(fruitSalad(specialFruit, additionalItens));