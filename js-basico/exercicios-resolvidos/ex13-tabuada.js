// Exercício 13 - Tabuada
// Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.
console.log("\n\n\nExercício 13 - Tabuada");
function tabuada(value) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${i} x ${value} = ${i*value}`);
    }
}

tabuada(3);