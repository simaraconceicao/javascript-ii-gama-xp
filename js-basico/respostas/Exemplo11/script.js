/* IMC
Vamos criar uma função que calcula o IMC de uma pessoa, 
dadas a altura em m e a massa em kg.
*/

m=90   //peso em kilogramas
h=1.85 //altura em metros

function IMC(m, h) {
    const indice=m/(h**2);
    return indice
}

console.log(IMC(m,h).toFixed(2));