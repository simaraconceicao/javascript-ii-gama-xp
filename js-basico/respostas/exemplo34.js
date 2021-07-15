//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado|

function calculaMedia(nota1,nota2,nota3) {
    let media = (nota1 + nota2 + nota3)/3

    if (media >= 7) {
        return 'Aprovado'
    }

    if (media >=5 && media<7) {
        return 'Recuperação'
    }

    if (media < 5) {
        return 'Reprovado'
    }
}

console.log(calculaMedia(8,5,8))