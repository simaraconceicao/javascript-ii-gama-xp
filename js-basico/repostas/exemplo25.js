function dividir(dividendo, divisor) {
    if(divisor===0) {
        return "Não existe divisão por zero";
    } else {
        let result = parseInt(dividendo / divisor);
        let resto = dividendo % divisor;
        let resto2 = resto % 2;
        if (resto2 === 0) {
            console.log(`O resto da divisao é um numero par: ${resto}`);
        }
        return result;
    }
}

let n1 = 176;
let n2 = 17;
console.log(`O resultado da divisão de ${n1} por ${n2} é ${dividir(n1,n2)}`);
