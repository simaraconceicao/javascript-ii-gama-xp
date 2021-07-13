// Exercício 35 - Maior de idade
// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
console.log("\n\n\nExercício 35 - Maior de idade");
function maoiridade(anoNascimento) {
    let idade = 2021 - anoNascimento;

    if(idade >= 18) return "Maior de idade";
    else return "Menor de idade";
}

console.log(maoiridade(1998));
console.log(maoiridade(2005));