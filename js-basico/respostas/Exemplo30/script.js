/* Jantar
Crie um algoritmo que leia o valor de um jantar, 
calcule e informe o valor da taxa do garçom (10%) e 
o valor total a ser pago.
*/

let jantar, pagar;
const taxa = 10;

jantar=100;
pagar=(1+taxa/100)*jantar;

console.log(`O valor total a ser pago é de ${pagar.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })}.`);
