// Crie uma função que calcula 5% de desconto retornando o valor do desconto.

let desconto;

function porcentagem (preco) {
    desconto = preco * 0.05;
    console.log(`O valor do desconto é: R$ ${desconto.toFixed(2)}`);
}
porcentagem(10);