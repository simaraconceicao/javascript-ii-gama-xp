// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

const anoAtual = 2021;

function maioridade(anoNasc){
    let idade = anoAtual - anoNasc;
    if (idade > 18) {
        return "Maior de idade";
    }
    else{
        return "Menor de idade";
    }
}

console.log(maioridade(1991));