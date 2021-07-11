/*Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par */

function par(num1, num2){
    let resultado = 0
    resultado = num1 / num2;

    if(resultado % 2 == 0){
    console.log("A divisão dos dois números escolhido é par");
    }
    else{
        console.log("A divisão dos dois números escolhido é impar");
    }
}
par(4,2)