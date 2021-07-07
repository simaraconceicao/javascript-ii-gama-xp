// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles,
// se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function numeros (num1, num2) {
    if (num1>num2) {
        console.log(`O primeiro número (${num1}) é maior`);
    } else if (num1<num2) {
        console.log(`O segundo número (${num2}) é maior`);
    } else {
        console.log('Os números são iguais');
    }
}
numeros(10,5)
numeros(10,20)
numeros(5,5)