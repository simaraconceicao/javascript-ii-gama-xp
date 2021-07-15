/* É dia de aula?
Utilizando os conceitos que estudamos, 
vamos criar um programa que irá nos informar 
os dias de aula para a nossa turma.
*/

function Aula() {
    const d = new Date();
    const days = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"];
    const dWeek=days[d.getDay()];
    if (dWeek=="Domingo" || dWeek=="Sabado"){
        return "Hoje não é dia de aula."
    } else {
        return "Hoje é dia de aula."
    }
}

console.log(Aula());