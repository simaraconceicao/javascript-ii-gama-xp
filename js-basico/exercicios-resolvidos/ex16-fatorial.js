// Exercício 16 - Fatorial
// Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6
console.log("\n\n\nExercício 16 - Fatorial");
function fatorial(value) {
    let fatorial = `${value}! =`;
    let divisores = ``;
    let primeiroDivisor = true;

    for(let i = 1; value != 1; i++) {
        if(value % i === 0) {
            if(primeiroDivisor) {
                divisores = `${i}`;
                primeiroDivisor = false;
            } else {
                divisores = `${divisores} * ${i}`;
            }
            value = value / i;
        }
    }

    fatorial = `${fatorial} ${reverseString(divisores)}`;
    return fatorial;
}

function reverseString(string) {
    let newString = '';
    let tam = string.length - 1;
    for(let i = tam; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

console.log(fatorial(6));