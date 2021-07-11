/* Crie um algoritmo que leia o valor de um jantar, calcule e 
informe o valor da taxa do garçom (10%) e o valor total a ser pago. */

let precoJantar = 100;

let taxaGarcom = precoJantar * 10 / 100;
let precoTotal = precoJantar + taxaGarcom;

console.log(`O seu jantar com 10% da taxa do garçom ficou R$ ${precoTotal.toFixed(2)} 
o valor da taxa do garçom é R$ ${taxaGarcom.toFixed(2)}`);