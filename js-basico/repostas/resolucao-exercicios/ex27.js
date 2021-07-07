// Vamos criar uma calculadora com as 4 operações matemáticas básicas?
// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma',
// 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console


function calculadora (operacao, num1, num2) {
    if (operacao === 'soma') {
        console.log(num1+num2);
    } else if (operacao === 'subtração') {
        console.log(num1-num2);
    } else if (operacao === 'multiplicação') {
        console.log(num1*num2);
    } else if (operacao === 'divisão') {
        console.log(num1/num2)
    }
}
calculadora('soma', 10, 20)
calculadora('subtração', 10, 20)
calculadora('multiplicação', 10, 20)
calculadora('divisão', 10, 20)