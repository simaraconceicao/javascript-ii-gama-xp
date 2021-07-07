// Calcule o tempo de uma viagem de carro. 
// Pergunte a distância a percorrer e a velocidade média esperada para a viagem.

function tempo (distancia, velocidadeMedia) {
    let horas = distancia/velocidadeMedia;
    console.log(`Tempo de viagem: ${horas} horas`);
}
tempo(100, 80);