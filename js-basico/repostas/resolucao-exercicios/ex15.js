//Converter Celsius em Fahrenheit

function converteTemperatura (valor) {
    return valor * (9/5) + 32;
}
let resultado = converteTemperatura(1);
console.log(`O valor em Fahrenheit é: ${resultado}`);

// OU
// function converteTemperatura (valor) {
//     let resultado = valor * (9/5) + 32;
//     console.log(resultado);
// }

// converteTemperatura(1);