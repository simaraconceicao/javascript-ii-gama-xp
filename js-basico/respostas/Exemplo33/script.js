/* Impar/par
Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
*/

function parOuImpar(num) {
    if (num%2==0){
        return "par"
    } else {
        return "ímpar"
    }
}

console.log(parOuImpar(4));