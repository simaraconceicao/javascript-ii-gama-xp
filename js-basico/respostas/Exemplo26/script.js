/* Repetição
Utilize a estrutura de repetição for 
para imprimir no console conforme instruções abaixo:
a) números de 1 a 100  
b) quando chegar no número 50 interrompa a instrução e pare o loop 
c) quando chegar no número 25 pule a instrução
*/

let aux='',counter=0;
for (let i=1;i<101;i++){
    if (i==25){
        continue;
    } else if (i==50){
        break;
    }
    aux+=i+' ';
    counter+=1;
    if (counter==9){
        console.log(aux);
        aux='';
        counter=0;
    }
}
if (aux != ''){
    console.log(aux);
}