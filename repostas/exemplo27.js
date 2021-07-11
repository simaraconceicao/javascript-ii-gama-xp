/*Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

    a) Deverá ser possível escolher uma operação aritimética em forma 
    de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
    b) Deverá ser possível passar 2 números para a operação escolhida
    c) Deverá retornar o resultado e imprimir no console */


var calculadora = 'soma' // Mude para operação desejada 'soma', 'multiplicacao', 'divisao' e 'subtracao'
var num1 = 2; // Escolha o número 1
var num2 = 2; // Escolha o numero 2

switch (calculadora) {
    case 'soma':
        let somar = num1 + num2;
        console.log(`A soma de ${num1}+${num2} = ${somar}`);
        break;
    case 'multiplicacao':
        let multiplicar = num1 * num2;
        console.log(`A multiplição de ${num1}*${num2} = ${multiplicar}`);
        break;
    case 'divisao':
        let divisao = num1 / num2;
        console.log(`A divisão de ${num1}/${num2} = ${divisao}`);
        break;
    case 'subtracao':
        let subtracao = num1 - num2;
        console.log(`A subtração de ${num1}-${num2} = ${subtracao}`);
        break;
    default:
        console.log("Não é uma operção valida");
        break;
}