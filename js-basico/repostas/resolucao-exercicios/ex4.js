// Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta 
// que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?

let valorBicicleta = (300*100) / 60;
let lucro = (valorBicicleta * 0.25) + valorBicicleta;

console.log(`O valor que você deve vender a bicicleta para obter 25% de lucro é: R$ ${lucro.toFixed(2)}`);
