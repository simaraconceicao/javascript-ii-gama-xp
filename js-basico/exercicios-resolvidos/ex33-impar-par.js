// Exercício 33 - Impar/par
// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
console.log("\n\n\nExercício 33 - Impar/par");
function impar_par(value) {
    if(value % 2 === 0) return "Par";
    else return "Impar";
}

console.log(impar_par(10));
console.log(impar_par(13));