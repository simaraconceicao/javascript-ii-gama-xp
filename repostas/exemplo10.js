// Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma.


function dia(diasSemana) {

    if (diasSemana == "segunda-feira" || diasSemana == "terça-feira" || diasSemana == "quarta-feira" ||
        diasSemana == "quinta-feira" || diasSemana == "sexta-feira") {
        console.log("Você tem aula hoje é " +diasSemana);

    }
    if (diasSemana == "sabado" || diasSemana == "domingo") {
        console.log("Você não tem aula hoje é: " +diasSemana);
    }


}

dia("segunda-feira");
dia("terça-feira");
dia("quarta-feira");
dia("quinta-feira");
dia("sexta-feira");
dia("sabado");
dia("domingo");