// Exercício 9 - FizzBuzz
// Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, para números divisíveis por 3 irá impirmir 'Fizz' e para números divisíveis por 5 irá imprimir 'Buzz' e por fim, se não cumprir nenhum dos casos acima imprime o próprio número.
console.log("\n\n\nExercício 9 - FizzBuzz");
function fizzBuzz(value) {
    if(value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if(value % 3 === 0) {
        return "Fizz";
    } else if(value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(12));
console.log(fizzBuzz(5));
console.log(fizzBuzz(8));