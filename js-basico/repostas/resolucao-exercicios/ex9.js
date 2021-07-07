// FizzBuzz
// Divisível por 3 => 'Fizz',
// Divisível por 5 => 'Buzz',
// Divisível por 3 e 5 => 'FizzBuzz',
// Se não for um número => 'Não é um número';
// Se não for divisível nem por 3 nem por 5 => Entrada

function fizzBuzz (entrada) {
    if (typeof entrada !== 'number') {
        return 'Não é um número'
    } else if (entrada % 3 == 0 && entrada % 5 == 0) {
        return 'FizzBuzz';
    }else if (entrada % 3 == 0) {
        return 'Fizz';
    } else if (entrada % 5 == 0) {
        return 'Buzz';
    } else if (entrada % 3 !== 0 && entrada % 5 !== 0) {
        return entrada;
    }
}
let resultado = fizzBuzz(8);
console.log(resultado);