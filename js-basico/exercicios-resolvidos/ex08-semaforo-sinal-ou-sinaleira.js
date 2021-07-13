// Exercício 8 - Semaforo, sinal ou sinaleira
// Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.
// *Considerando 250 como o tempo do ciclo em segundos
// *As cores são impressas no momento em que o semáforo muda de cor
console.log("\n\n\nExercício 8 - Semaforo, sinal ou sinaleira");
let semaforo;
let cont = 0; // O "cont" é apenas para não deixar em loop infinito

for(let i = 0; i <= 250 && cont < 3; i++) {
    if(i < 180) {
        semaforo = "Verde";
        if(i === 0) console.log(semaforo);
    } else if(i >= 180 && i < 190) {
        semaforo = "Amarelo";
        if(i === 180) console.log(semaforo);
    } else if(i >= 190 && i < 250) {
        semaforo = "Vermelho\n";
        if(i === 190) console.log(semaforo);
    } else if(i === 250) {
        cont++;
        i = -1;
    }
}