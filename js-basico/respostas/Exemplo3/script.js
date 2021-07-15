/* Média entre números
Crie uma variavel e atribua como valor 
uma operacao de média entre 5 números inteiros e positivos.
*/
//Definindo as variáveis

const num=[1,10,4,2,70];
const N = num.length;
const media = num.reduce((tot, i) => tot +i/N, 0)

console.log(media);
