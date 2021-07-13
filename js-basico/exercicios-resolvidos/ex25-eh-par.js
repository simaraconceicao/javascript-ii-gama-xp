// Exercício 25 - É par
// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.
console.log("\n\n\nExercício 25 - É par");
function ehPar(a,b) {
    if((a / b) % 2 === 0) console.log(`O resultado da divisão entre ${a} e ${b} é par: `);
    console.log(a / b);
}

ehPar(15,3);
ehPar(8,4);
ehPar(3,2);