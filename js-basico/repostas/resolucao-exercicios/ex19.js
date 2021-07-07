// Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação
// do dia.

let dolar;

function conversao (real) {
    dolar = real * 5.21
    console.log(`O valor é: ${dolar.toFixed(2)} Dólar Americano`);
}
conversao(5);