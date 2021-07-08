function calculadora( operacao, num1, num2 ) {
    let result = 0;
    switch (operacao ) {
        case "soma":
            result = num1+num2;
            break;
        case "subtracao":
            result = num1-num2;
            break;
        case "multiplicacao":
            result = num1*num2;
            break;
        case "divisao":
            if(num2===0) {
                result = "divisao invalida";
            } else {
                result = num1/num2;
            }
            break;
        default:
            result = "operacao desconhecida";
    }

    return result;
}

console.log(`soma de 150+50 = ${calculadora("soma",150,50)}`);
console.log(`subtracao de 150-50 = ${calculadora("subtracao",150,50)}`);
console.log(`multiplicacao de 150 por 50 = ${calculadora("multiplicacao",150,50)}`);
console.log(`divisao de 150 por 50 = ${calculadora("divisao",150,50)}`);
