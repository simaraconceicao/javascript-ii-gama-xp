// Crie um algoritmo que receba três notas de um aluno, calcule sua média e
// mostre as seguintes mensagens de acordo com cada situação:
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado|

function notas (notaUm, notaDois, notaTres) {
    let media = (notaUm + notaDois + notaTres) / 3;
    if (media >= 7) {
        console.log('Aprovado')
    } else if (media >= 5 && media < 7) {
        console.log('Recuperação')
    } else {
        console.log('Reprovado')
    }
}
notas(5, 10, 6)
notas(6,4,7)
notas(3,4,2)