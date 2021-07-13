// Exercício 31 - Dia da semana
// Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.
console.log("\n\n\nExercício 31 - Dia da semana");
function diaDaSemana(dia) {
    switch(dia) {
        case 1:
            return "Domingo"; break;
        case 2:
            return "Segunda"; break;
        case 3:
            return "Terça"; break;
        case 4:
            return "Quarta"; break;
        case 5:
            return "Quinta"; break;
        case 6:
            return "Sexta"; break;
        case 7:
            return "Sábado"; break;
        default:
            return "Error"
    }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(2));
console.log(diaDaSemana(3));
console.log(diaDaSemana(4));
console.log(diaDaSemana(5));
console.log(diaDaSemana(6));
console.log(diaDaSemana(7));
console.log(diaDaSemana(8));