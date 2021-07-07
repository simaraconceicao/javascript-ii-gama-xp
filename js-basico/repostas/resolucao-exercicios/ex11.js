// Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.

function medidas (alturaEmMetros, pesoEmKg) {
    let imc = pesoEmKg / (alturaEmMetros*alturaEmMetros);
    console.log(`IMC = ${imc.toFixed(2)} kg/m²`);

    if (imc > 16 && imc <16.9) {
        console.log('Classificação: Muito abaixo do peso');
    } else if (imc > 17 && imc <18.4) {
        console.log('Classificação: Abaixo do peso')
    } else if (imc > 18.5 && imc < 24.9) {
        console.log('Classificação: Peso normal')
    } else if (imc > 25 && imc < 29.9) {
        console.log('Classificação: Acima do peso');
    } else if (imc > 30 && imc <34.9) {
        console.log('Classificação: Obesidade Grau I');
    } else if (imc > 35 && imc <40) {
        console.log('Classificação: Obesidade Grau II');
    } else if (imc > 40) {
        console.log('Classificação: Obesidade Grau III');
    }
}
medidas(1.89, 59);
medidas(1.84, 58);
medidas(1.84, 74.1);
medidas(1.64, 74);
medidas(1.60, 80.2);
medidas(1.51, 83);
medidas(1.54, 107);