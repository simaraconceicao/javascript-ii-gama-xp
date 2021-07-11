// Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.


let vermelho = 0;
let tempoFarolVermelho = 7;
let amarelo = 0;
let tempoFarolAmarelo = 3;
let verde = 0;
let tempoFarolVerde = 5;



while (tempoFarolVermelho > vermelho) {
    console.log(`${tempoFarolVermelho} segundo para o farol amarelo`);
    tempoFarolVermelho--;

    if (tempoFarolVermelho == 0) {
        console.log("SINAL AMARELO ATENÇÃO");
    }
}

while (tempoFarolAmarelo > amarelo) {
    console.log(`${tempoFarolAmarelo} segundo para o farol verde`);
    tempoFarolAmarelo--;

    if (tempoFarolAmarelo == 0) {
        console.log("SINAL VERDE SIGA EM FRENTE");
    }
}

while (tempoFarolVerde > verde) {
    console.log(`${tempoFarolVerde} segundos para o farol vermelho`);
    tempoFarolVerde--;

    if (tempoFarolVerde == 0) {
        console.log("SINAL VERMELHO PARE");
    }
}
