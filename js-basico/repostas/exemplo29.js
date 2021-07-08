function calculaTempoViagem(distancia, velMedia) {
    return distancia/velMedia;
}

console.log(`uma viagem de 350km a uma velocidade media de 78km/h levará ${calculaTempoViagem(350,78)} horas`);
