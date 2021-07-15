/* Fatorial
Crie uma função que irá receber um número e retornar o fatorial dele. 
Por exemplo: 3! = 3 * 2 * 1 // 6
*/

function Fat(num){
    let aux=1;
    for (let i=1;i<=num;i++){
        aux*=i;
    }
    return aux
}

const N = 5;
console.log(`${N}! = ${Fat(N)}`);