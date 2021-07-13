// Exercício 11 - IMC
// Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.
console.log("\n\n\nExercício 11 - IMC");
function imc(altura, massa) {
    let imc = massa/(altura*altura);
    console.log(imc);

    if(imc < 17) return "Muito abaixo do peso";
    else if(imc >= 17 && imc < 18.5) return "Abaixo do peso";
    else if(imc >= 18.5 && imc < 25) return "Peso normal";
    else if(imc >= 25 && imc < 30) return "Acima do peso";
    else if(imc >= 30 && imc < 35) return "Obesidade I";
    else if(imc >= 35 && imc < 40) return "Obesidade II";
    else if(imc >= 40) return "Obesidade III (mórbida)";
}

console.log(imc(1.73,58));