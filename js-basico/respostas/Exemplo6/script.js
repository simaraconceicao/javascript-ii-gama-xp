/* Desapegada
Crie um programa que me diga quanto cobrar 
para vender um notebook usado: o seu custo foi R$3000, 
por quanto devo vendê-lo descontando 25%?
*/
//Definindo as variáveis

let custo =3000, desconto = 25;

function calculaDesconto(desc, cu){
    return (1-desc/100)*cu
}

const costCurrency= custo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const noteCurrency= calculaDesconto(desconto,custo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

console.log(`Para vender um notebook de ${costCurrency}
com desconto de ${desconto}%, 
devo vendê-lo por ${noteCurrency}.`);
