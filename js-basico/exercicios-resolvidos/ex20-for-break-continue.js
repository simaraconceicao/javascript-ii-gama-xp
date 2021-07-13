// Exercício 20 - For/Break/Continue
// Utilize a estrutura de repetição for para imprimir no console conforme instruções:
// a) números de 1 a 50
// b) quando chegar no número 25 interrompa a instrução e pare o loop 
// c) quando chegar no número 10 pule a instrução
console.log("\n\n\nExercício 20 - For/Break/Continue");
for(let i = 0; i <= 50; i++) {
    if(i === 25) break;
    if(i === 10) continue;
    console.log(i);
}