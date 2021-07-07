// Crie uma função que recebe o ano de nascimento da pessoa
// informando se ela é maior de idade ou menor.

let anoAtual = 2021;

function anoNascimento (ano) {
    let idade = anoAtual - ano;

    if (idade >= 18) {
        console.log('Você é maior de idade.')
    } else {
        console.log('Você é menor de idade.')
    }
}
anoNascimento(1994)
anoNascimento(2007)