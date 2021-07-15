/* Dia da semana
Elabore um algoritmo que receba um número (1-7) e 
devolva o dia da semana correspondente.
*/

function semana(num) {
    const days = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"];
    return days[num-1]
}

//let entrada = parseInt(prompt("Insira um número entre 1 e 7:"));

let entrada = 1;

console.log(semana(entrada));