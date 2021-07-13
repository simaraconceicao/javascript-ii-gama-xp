// Exercício 34 - Boletim escolar
// Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado
console.log("\n\n\nExercício 34 - Boletim escolar");
function boletimEscolar(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    
    if(media >= 7) return "Aprovado";
    else if(media < 5) return "Reprovado";
    else return "Recuperação";
}

console.log(boletimEscolar(7,7,7));
console.log(boletimEscolar(7,7,0));
console.log(boletimEscolar(7,7,2));