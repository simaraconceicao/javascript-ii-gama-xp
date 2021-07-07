// Crie um programa que me diga quanto cobrar para vender um notebook usado: 
// o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?

let valorNotebook = 3000;
let venda = valorNotebook - (valorNotebook*0.25);

console.log(`O Notebook deve ser vendido por R$ ${venda.toFixed(2)}`);