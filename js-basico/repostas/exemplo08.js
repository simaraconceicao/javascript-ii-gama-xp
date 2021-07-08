function semaforo( sinal ) {
    if (sinal === "verde") {
        return "Pode passar";
    } else if (sinal === "amarelo") {
        return "Atencao!!!!";
    } else if (sinal === "vermelho") {
        return "Pare!";
    } else {
        return "Atencao!!! mau funcionamento";
    }
}

let sequencia = [ "verde", "amarelo", "vermelho"];

let laco = 0;
let limite = 100;
let idx = 0;
let tmpDefault = 1000;
let tmpAmarelo = 100;
let tmp = tmpDefault;

while (laco<limite) {

    if (sequencia[idx]==="amarelo")    {
        tmp = tmpAmarelo;
    } else {
        tmp = tmpDefault;
    }

    let status = semaforo(sequencia[idx]);
    for (i=0;i<=tmp;i++) {
        console.log(status);
    }

    idx++;
    if (idx>2) {
        idx = 0;
    }

    laco++;

}
