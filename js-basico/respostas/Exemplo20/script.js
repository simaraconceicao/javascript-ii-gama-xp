/* For/Break/Continue	
Utilize a estrutura de repetição for 
para imprimir no console conforme instruções:
a) números de 1 a 50  
b) quando chegar no número 25 interrompa a instrução e pare o loop 
c) quando chegar no número 10 pule a instrução
*/


let aux='',counter=0;
for (let i=1;i<51;i++){
    if (i==10){
        continue;
    } else if (i==25){
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