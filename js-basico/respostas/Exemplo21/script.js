/* 10 em 10
Imprima na tela a partir de 20 e 
depois de 10 em 10 até o 100, mas 
em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".
*/

for (let i=20;i<101;i+=10){
    if(i==60 || i==90){
        console.log("CONTINUE");
    } else {
        console.log(i);
    }
}