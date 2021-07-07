// Vamos criar variaveis usando let, const e var, atribuir valores, identificar comportamentos
// e saídas quando tentarmos recuperar.

var idade = 27;
console.log('Minha idade é: ' + idade); // Minha idade é: 27


function imprimeIdade () {
    var idade = 27;
    console.log('Minha idade é: ' + idade);
}
imprimeIdade(); // Minha idade é: 27

function imprimeIdade () {
    let idade = 27;
    console.log('Minha idade é: ' + idade);
}
imprimeIdade(); // Minha idade é: 27

function imprimeIdade () {
    var idade = 27;
}
imprimeIdade();
console.log('Minha idade é: ' + idade); // idade is not defined

{
    var idade = 27
}
console.log(idade) // 27

{
    let idade = 27
}
console.log(idade) // idade is not defined