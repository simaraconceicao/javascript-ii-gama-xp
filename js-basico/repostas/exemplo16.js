function calcularFatorial (num) {
    if (isNaN(num)) {
        return 'Valor invalido';
    }
     
    if (!Number.isInteger(num) || num < 0) {
        return 'Valor invalido';
    }
     
    if (num === 0 || num === 1) {
        return 1;
    }
     
    let result = num;
    for (let i = num - 1; i > 1; i--) {
        result *= i;
    }
     
    return result;
}
 
console.log(calcularFatorial(10));