// Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo:  3! = 3 * 2 * 1 // 6

let resultado = 1;

function verFatorial(num){
    for (var i = 1; i <= num; i++){
    resultado *= i; 
    }
    console.log(`${num}! = ${resultado}`);
}

verFatorial(3);