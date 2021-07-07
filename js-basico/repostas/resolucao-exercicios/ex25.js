// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles.
// Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer
// que ele é par.

let resultado;

function divisao (a, b) {
    resultado = a/b;
    if (a % b === 0) {
        console.log(`Resultado da divisão: ${resultado}`)
        console.log(`${resultado} é par`)
    } else {
        console.log(`Resultado da divisão: ${resultado}`)
    }
}

divisao(20, 5);