/* Viagem
Calcule o tempo de uma viagem de carro. 
Pergunte a distância a percorrer e 
a velocidade média esperada para a viagem.
*/

let tempo, dist, vmed;

dist = parseInt(prompt("Qual a distância em km?"));
vmed = parseInt(prompt("Qual a velocidade média em km/h?"));

tempo = dist/vmed;

console.log(`O tempo de viagem será de ${tempo} horas.`);
