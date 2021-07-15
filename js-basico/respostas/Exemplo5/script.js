/* Quero somar
Faça um programa que peça dois números 
e imprima no console a soma desses dois números.
*/
//Definindo as variáveis

let val =0;
const N = 2;
let aux;

for (let i =0; i<2;i++){
    aux=parseInt(prompt("Insira um número:"));
    console.log(`O ${i+1}º número digitado foi: ${aux}.`);
    val+=aux
}

console.log(`A soma dos valores digitados é ${val}.`);
