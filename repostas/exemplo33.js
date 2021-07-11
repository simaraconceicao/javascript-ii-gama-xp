// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

console.log(parOuImpar(7));

function parOuImpar(num){
    if (num % 2 == 0) {
        return "par";
    }
    else{
        return "impar";
    }
}