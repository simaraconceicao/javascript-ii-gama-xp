// Exercício 10 - É dia de aula?
// Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma.
// *Considerando o mês de Julho/2021 e que as aulas acontecem de Seg à Sex
console.log("\n\n\nExercício 10 - É dia de aula?");
function diasDeAula(diaMes) {
    if(diaMes % 7 === 3 || diaMes % 7 === 4) {
        return `No dia ${diaMes} não terá aula. Aproveite para descansar.`;
    } else return `No dia ${diaMes} haverá aula. Se programe para não perder.`;
}

console.log(diasDeAula(1));
console.log(diasDeAula(2));
console.log(diasDeAula(3));
console.log(diasDeAula(4));
console.log(diasDeAula(5));
console.log(diasDeAula(6));
console.log(diasDeAula(7));
console.log(diasDeAula(8));
console.log(diasDeAula(9));
console.log(diasDeAula(10));
console.log(diasDeAula(11));
console.log(diasDeAula(12));
console.log(diasDeAula(13));
console.log(diasDeAula(14));