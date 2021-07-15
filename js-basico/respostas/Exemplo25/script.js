/* É par
Crie uma função que recebe 2 parâmetros e 
retorna o resultado da divisão entre eles. 
Além disso, se o resto dessa divisão for zero, 
deverá imprimir no console o valor 
e dizer se ele é par.
*/

function parOuImpar(num) {
    if (num%2==0){
        return "par"
    } else {
        return "ímpar"
    }
}

function Epar(a,b){
    const div=a/b;
    if (a%b==0){
        console.log(`O valor ${div} é ${parOuImpar(div)}.`)
    }
    return div
}

console.log(Epar(50,10))