/* Pares
Imprima na tela os números pares existentes entre 0 e 100.
*/

function pares() {
    let aux='', counter =0;
    for (let i =2; i<100;i+=2){
        aux+=i+' ';
        counter+=1
        if (counter==7){
            console.log(aux);
            aux='';
            counter=0;
        } 
    }
    if (aux != ''){
        console.log(aux);
    }   
}

pares()