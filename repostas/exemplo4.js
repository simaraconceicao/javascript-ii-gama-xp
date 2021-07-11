/* Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% 
do seu valor é R$300, por quanto devo vendê-la para lucrar 25%? */

var valorBike = 300 * 100 / 60;

var lucro = (valorBike * 0.25) + valorBike;
var lucro = lucro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

console.log(`Para lucrar 25% deve vender a bicicleta por R$ ${lucro}`);