/* Porcentagem
Crie uma função que calcula 5% de desconto e
retorna o valor do desconto.
*/

//Configurações de Conversão

function conversor(num){
    const r2d=0.19;
    return num*r2d
}

let real, dolar;

real = 100;
dolar = conversor(real);

const realCurrency = real.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) ;
const dolarCurrency = dolar.toLocaleString('en-us',{style: 'currency', currency: 'USD'});

console.log(`${dolarCurrency} = ${realCurrency}`);