// Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros 
// e positivos.

let numeros = [25, 20, 1, 7, 94];
let soma = 0;
let media = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
    media = soma / numeros.length;
}
console.log(media);

