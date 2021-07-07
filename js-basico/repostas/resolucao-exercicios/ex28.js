// Solicite o preço de uma mercadoria e o percentual de desconto.
// Exiba no console o valor do desconto e o preço a pagar.

function mercadoria (preco, desconto) {
    let valorDesconto = (desconto/100)*preco;
    let precoAPagar = preco - valorDesconto;

    console.log(`Valor total do desconto: R$ ${valorDesconto.toFixed(2)}`);
    console.log(`Preço à pagar: R$ ${precoAPagar.toFixed(2)}`);
}
mercadoria(500, 20)