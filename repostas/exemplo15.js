// Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit.

function convertToFagrenheit(value){
    return value * 1.8 + 32;
}

let result = convertToFagrenheit(40);
console.log(`O valor em Fahrenheit é ${result}`);