const verifyInput = (value1, value2) => {
    if (value1 === '' || value2 === '') {
      throw new Error ('Preencha todos os campos.');
    }
  };
  const verifyNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error ('O valor inserido não é válido');
    }
  };
  function sum(value1, value2) {
    try {
        verifyInput(value1, value2);
        verifyNumber(value1, value2);
        return value1 + value2;
        } catch (error) {
        return error.message;
    }
}
console.log(sum(2, 3));