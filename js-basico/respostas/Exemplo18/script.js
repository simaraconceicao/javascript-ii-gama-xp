/* Porcentagem
Crie uma função que calcula 5% de desconto e
retorna o valor do desconto.
*/

function Porc(valor){
    let desc=5;
    return ((desc/100)*valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
let preco = 200;
console.log(`O valor do desconto é de ${Porc(preco)}.`);