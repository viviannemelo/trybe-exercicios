const kg = 80;
const alt = 165;

function calculatorBMI(peso, altura) {
    const alturaEmMetros = altura / 100;
    const alturaConvertida = alturaEmMetros ** 2;
    const bmi = peso / alturaConvertida;
    return bmi;
}

function main() {
    const bmi = calculatorBMI(kg, alt);
    console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();