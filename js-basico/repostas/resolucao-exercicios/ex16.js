// Crie uma função que irá receber um número e retornar o fatorial dele.

let resultado = 1;
function numero (n) {
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    console.log(resultado);   
}
numero(4);