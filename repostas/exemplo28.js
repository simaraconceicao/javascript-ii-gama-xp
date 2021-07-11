/* Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do 
desconto e o preço a pagar.*/

let preco = 100;
let desconto = 10;

let valorDesconto = preco * desconto / 100;
let precoComDesconto = preco - valorDesconto;
console.log(`O desconto no produto é ${desconto}% você enconomizou R$ ${valorDesconto.toFixed(2)} reais sendo assim
o preço original de R$ ${preco.toFixed(2)} caiu para R$ ${precoComDesconto.toFixed(2)} reais`);