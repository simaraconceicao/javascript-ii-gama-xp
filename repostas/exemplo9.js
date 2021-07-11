/* Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 
'FizzBuzz'para números divisiveis por 3 e 5, para números divisíveis por 3 irá 
impirmir 'Fizz' e para números divisíveis por 5 irá imprimir 'Buzz' e por fim, se não cumprir 
nenhum dos casos acima imprime o próprio número. */

let resultado = fizzBuzz(15);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number'){
        return 'Não é um número';
    }
    if ((entrada % 3 === 0) && (entrada % 5 === 0)){
        return 'FizzBuzz';
    }     
    if (entrada % 3 === 0){
        return 'Fizz';
    }
    if (entrada % 5 === 0){
        return 'Buzz';
    }
    return entrada;
}

console.log(resultado);