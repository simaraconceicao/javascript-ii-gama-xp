
function diaSemana(value){
    const dias = [ "domingo", "segunda-feira", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado"];

    return dias[value-1];
}

console.log(`O dia 3 corresponde a ${diaSemana(3)}`);

console.log(`O dia 7 corresponde a ${diaSemana(7)}`);
