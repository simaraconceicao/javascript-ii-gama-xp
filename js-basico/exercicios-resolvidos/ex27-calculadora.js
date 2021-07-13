// Exercício 27 - Calculadora
// Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs
// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console
console.log("\n\n\nExercício 27 - Calculadora");
class Calculadora{
    constructor() {}

    soma(a,b) {
        return a+b;
    }

    subtracao(a,b) {
        return a-b;
    }

    multiplicacao(a,b) {
        return a*b;
    }

    divisao(a,b) {
        return a/b;
    }
}

let minhaCalculadora = new Calculadora();

console.log(minhaCalculadora.soma(3,5));
console.log(minhaCalculadora.subtracao(3,5));
console.log(minhaCalculadora.multiplicacao(3,5));
console.log(minhaCalculadora.divisao(3,5));