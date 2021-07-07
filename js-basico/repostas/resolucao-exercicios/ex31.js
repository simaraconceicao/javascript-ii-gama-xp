// Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function dia (numero) {
    if (numero === 1) {
        console.log('Hoje é Segunda-feira');
    } else if (numero === 2) {
        console.log('Hoje é Terça-feira');
    } else if (numero === 3) {
        console.log('Hoje é Quarta-feira');
    } else if (numero === 4) {
        console.log('Hoje é Quinta-feira');
    } else if (numero === 5) {
        console.log('Hoje é Sexta-feira');
    } else if (numero === 6) {
        console.log('Hoje é Sábado');
    } else {
        console.log('Hoje é Domingo');
    }
}

dia(1);
dia(2);
dia(3);
dia(4);
dia(5);
dia(6);
dia(7);