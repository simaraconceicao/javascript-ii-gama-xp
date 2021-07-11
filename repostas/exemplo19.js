// Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia.

function converter(real){
    return real / 5.26;
}
console.log("U$ "+converter(100).toFixed(2));