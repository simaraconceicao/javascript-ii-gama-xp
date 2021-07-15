/* Desconto
Solicite o preço de uma mercadoria e o percentual de desconto. 
Exiba no console o valor do desconto e o preço a pagar...
*/

let preco, desconto, pagar;

preco=parseInt(prompt("Insira o preço da mercadoria:"));

desconto=parseInt(prompt("Insira o percentual de desconto:"));

pagar=((1-desconto/100)*preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

console.log(`O desconto é de ${desconto}% e o preço a pagar é ${pagar}.`);
