// Exercício 12 - Par ou Impar
// Crie uma função que determina se um número é par ou impar.
console.log("\n\n\nExercício 12 - Par ou Impar");
function paridade(value) {
    if(value % 2 === 0) return "Par";
    else return "Impar";
}

console.log(paridade(3));
console.log(paridade(2));