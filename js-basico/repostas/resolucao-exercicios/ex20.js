// Utilize a estrutura de repetição for para imprimir no console conforme instruções:
// a) números de 1 a 50  
// b) quando chegar no número 25 interrompa a instrução e pare o loop 
// c) quando chegar no número 10 pule a instrução|

for (let i = 1; i <= 50; i++) {
    if (i === 10) {continue}
    if (i === 25) {break}

    console.log(i)
}
