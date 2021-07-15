/* Maior de idade
Crie uma função que recebe o ano de nascimento da pessoa 
informando se ela é maior de idade ou menor.
*/

let nascimento;

nascimento = 2010;

function maiorDeIdade(ano){
    const today= new Date(), year = today.getFullYear();
    const idade =(year-ano);
    if (idade<18){
        console.log("É menor de idade.")
    } else {
        console.log("É maior de idade.")
    }
}

maiorDeIdade(nascimento);