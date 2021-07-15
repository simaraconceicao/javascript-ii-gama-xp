/* Quero somar
Faça um programa que peça dois números 
e imprima no console a soma desses dois números.
*/
//Definindo as variáveis


const bic = 300, bicCurrency=bic.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const val = bic/0.6;
const lu = 25;
const aux = venda(lu,val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function venda(lucro, valor) {
    return (1+lucro/100)*valor
}

console.log(`O valor que você deve vender a 
bicicleta de ${bicCurrency} para obter um lucro de ${lu}% 
é de ${aux}.`);
