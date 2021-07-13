// Exercício 28 - Desconto
// Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto e o preço a pagar.
console.log("\n\n\nExercício 28 - Desconto");
function desconto(value, desconto) {
    valorDesconto = value * (desconto/100);
    precoAPagar = value - valorDesconto;
    console.log("Desconto: " + valorDesconto);
    console.log("Preço a pagar: " + precoAPagar);
}

desconto(1000,10);