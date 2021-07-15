/* 
Celsius para Fahrenheit
*/

function CtoF(entrada){
    if (typeof entrada != "number"){
        return "Não é um número!!";
    } else {
        const Ft=(9/5)*entrada+32;
        return `A temperatura é de ${Ft} °F.`;
    }
}

/* 
Fahrenheit para Celsius
*/

function FtoC(entrada){
    if (typeof entrada != "number"){
        return "Não é um número!!";
    } else {
        const Cs=5*(entrada-32)/9;
        return `A temperatura é de ${Cs} °C.`;
    }
}
let res = FtoC(212);  
console.log(res);