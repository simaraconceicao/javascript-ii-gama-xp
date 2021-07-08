console.log("Calendario de aulas para o mes 07/2021\n");
for (i=1;i<=30;i++) {
    console.log(`${i}/07/2021 - `+isClassDay(`${i}/07/2021`))
}

function isClassDay(dateVerify) {
    const dateSplited = dateVerify.split("/");
    const dt = new Date();
    dt.setDate(dateSplited[0]);
    dt.setMonth(dateSplited[1]-1);
    dt.setFullYear(dateSplited[2]);
    const dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado"];
    const diaSemana = dt.getDay();
    let result = dias[diaSemana];
    if (diaSemana === 0 || diaSemana === 6) {
        result += " - final de semana não tem aula";
    } else {
        result += " - tem aula normal";
    }
    return result;
}
