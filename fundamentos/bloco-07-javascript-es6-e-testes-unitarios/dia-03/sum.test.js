const { number, string } = require('yargs');
const sum = require ('./sum');

describe ('Verifica as somas', () => {
    test (`Se retorno da Soma é 9`, () => {
        const value = 4 + 5;
        expect(value).toBe(9);
    });
    test (`Se retorno da Soma é 0`, () => {
        const value = 0 + 0;
        expect(value).toBe(0);
    });
    test (`Deve disparar erro caso receba uma string como parâmetro`, () => {
        expect(() => sum(4, '5')).toThrow();
        expect(() => sum).toThrow('parameters must be numbers');
    });
});