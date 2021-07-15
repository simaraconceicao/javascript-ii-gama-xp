/* Calculadora
Vamos criar uma calculadora com as 4 operações matemáticas básicas?
a) Deverá ser possível escolher uma operação aritimética em forma de string: 
'soma', 'multiplicacao', 'divisao' e 'subtracao'
b) Deverá ser possível passar 2 números para a operação escolhida
c) Deverá retornar o resultado e imprimir no console
*/

let val1,val2,op;

while(1){
    op=prompt("Insira a operação:")
    switch (op){
        case "soma":
            val1=parseInt(prompt("Insira o primeiro valor:"));
            val2=parseInt(prompt("Insira o segundo valor:"));
            alert(`A soma de ${val1} e ${val2} é ${val1+val2}.`);
            break;
        case "multiplicacao":
            val1=parseInt(prompt("Insira o primeiro valor:"));
            val2=parseInt(prompt("Insira o segundo valor:"));
            alert(`A multiplicação de ${val1} e ${val2} é ${val1*val2}.`);
            break;
        case "divisao":
            val1=parseInt(prompt("Insira o primeiro valor:"));
            val2=parseInt(prompt("Insira o segundo valor:"));
            alert(`A divisão de ${val1} e ${val2} é ${val1/val2}.`);
            break;
        case "subtracao":
            val1=parseInt(prompt("Insira o primeiro valor:"));
            val2=parseInt(prompt("Insira o segundo valor:"));
            alert(`A subtração de ${val1} e ${val2} é ${val1-val2}.`);

    }

}
