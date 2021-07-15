/* Números
Elabore um algoritmo que receba dois números e 
determine qual é o maior entre eles, 
se os números forem iguais, 
mostre uma mensagem no console "Os números são iguais".
*/

let num1,num2;

num1=20;
num2=15;

function comp(a,b) {
    if (a>b){
        console.log(`${a} é maior que ${b}.`)
    } else if (b>a){
        console.log(`${b} é maior que ${a}.`)
    } else if (a==b) {
        console.log("Os números são iguais")
    }
}

comp(num1,num2);