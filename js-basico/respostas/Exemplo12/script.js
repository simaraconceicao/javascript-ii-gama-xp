/* Par ou Impar
Crie uma função que determina se um número é par ou impar.
*/

function parOuImpar(num) {
    if (num%2==0){
        return "O número é par."
    } else {
        return "O número é ímpar."
    }
}

console.log(parOuImpar(4));