// Exercício 30 - Jantar
// Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
console.log("\n\n\nExercício 30 - Jantar");
function taxaGarcom(valorJantar) {
    console.log(`Taxa do garçom: ${valorJantar * 0.1}`);
    console.log(`Total a ser pago: ${valorJantar * 1.1}`);
}

taxaGarcom(30);