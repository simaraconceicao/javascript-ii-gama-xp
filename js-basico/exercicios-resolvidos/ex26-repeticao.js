// Exercício 26 - Repetição
// Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo:
// a) números de 1 a 100  
// b) quando chegar no número 50 interrompa a instrução e pare o loop 
// c) quando chegar no número 50 pule a instrução 
console.log("\n\n\nExercício 26 - Repetição");
for(let i = 1; i <= 100; i++) {
    if(i === 50) break;
    if(i === 50) continue;
    else console.log(i);
}