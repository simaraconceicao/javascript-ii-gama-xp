// Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.

let imc = 0;

function calcularImc(peso, altura){

    imc = peso / (altura*altura);
    
    if (imc < 16){
        console.log("Seu IMC é: " +imc.toFixed(2));
        console.log("IMC abaixo de 16 aponta magreza grave e pode causar \ninsuficiência cardíaca, anemia grave e \nenfraquecimento do sistema imunológico.");
    }    

    if ((imc >= 16 && imc <= 17)){
        console.log("Seu IMC é: " +imc.toFixed(2));
        console.log("IMC entre 16 e 17 aponta magreza moderada, o que pode levar à \ninfertilidade, queda de cabelo e falta de menstruação.");
    } 

    if (imc >= 17 && imc <= 18.5){
        console.log("Seu IMC é: " +imc.toFixed(2));
        console.log("IMC entre 17 e 18,5 é a magreza leve, o que pode resultar em estresse, ansiedade e fadiga.");
    } 

    if (imc >= 18.5 && imc <= 25){
        console.log("Seu IMC é: " +imc.toFixed(2));
        console.log("IMC entre 18,5 e 25 é considerado saudável, apresentando menor risco para doenças.");
    } 

    if (imc >= 25 && imc <= 30){
        console.log("Seu IMC é: " +imc.toFixed(2));
        console.log("IMC entre 25 e 30 indica sobrepeso, podendo levar à fadiga, varizes e má circulação.");
    } 
    
    if (imc >= 30 && imc <= 35){
        console.log("Seu IMC é: " +imc.toFixed(2));
        console.log("IMC entre 30 e 35 aponta obesidade de grau I, podendo \nresultar em diabetes, infarto, angina e aterosclerose.");
    } 
    
    if (imc >= 35 && imc <= 40){
        console.log("Seu IMC é: " +imc.toFixed(2));
        console.log("IMC entre 35 e 40 indica obesidade de grau II (severa), podendo causar \nfalta de ar e apneia do sono.");
    } 
    
    if (imc > 40){
        console.log("Seu IMC é: " +imc.toFixed(2));
        console.log("IMC acima de 40 aponta obesidade de grau III (mórbida), podendo \nlevar à refluxo, infartos, AVC, dificuldades de locomoção e escaras.");
    } 
}

calcularImc(67, 1.74);