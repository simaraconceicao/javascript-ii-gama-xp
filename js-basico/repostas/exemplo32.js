function maior(num1,num2) {
    if (num1>num2) {
        console.log(`O primeiro numero (${num1}) é maior que o segundo (${num2}) `);
    } else if (num1<num2) {
        console.log(`O segundo numero (${num2}) é maior que o primeiro (${num1}) `);
    } else {
        console.log("Os dois numero sao iguais")
    }
}

console.log(maior(9,4));
console.log(maior(2313,4654));
console.log(maior(10,10));
