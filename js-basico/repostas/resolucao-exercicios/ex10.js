// Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar
// os dias de aula para a nossa turma.


function dia (diaSemana) {
    if (diaSemana === 'segunda' || diaSemana === 'terça' || diaSemana === 'quarta' || diaSemana === 'quinta' || diaSemana === 'sexta') {
        console.log('Teremos aula, aguardo vocês!')
    } else {
        console.log('Final de semana não teremos aulas, bom descanso!')
    }
}
dia('segunda')
dia('terça')
dia('quarta')
dia('quinta')
dia('sexta')
dia('sábado')
dia('domingo')