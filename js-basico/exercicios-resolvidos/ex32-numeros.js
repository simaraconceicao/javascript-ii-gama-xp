// Exercício 32 - Números
// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".
console.log("\n\n\nExercício 32 - Números");
function maiorNumero(a,b) {
    if(a > b) return a;
    else if(b > a) return b;
    else return "Os números são iguais";
}

console.log(maiorNumero(2,3));
console.log(maiorNumero(4,1));
console.log(maiorNumero(6,6));