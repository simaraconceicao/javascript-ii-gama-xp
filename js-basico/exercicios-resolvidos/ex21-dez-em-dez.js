// Exercício 21 - 10 em 10
// Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".
console.log("\n\n\nExercício 21 - 10 em 10");
for(let i = 20; i <= 100; i += 10) {
    if(i === 60 || i === 90) console.log("CONTINUE");
    else console.log(i);
}