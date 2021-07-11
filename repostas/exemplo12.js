// Crie uma função que determina se um número é par ou impar.

function verificarPar(num){
    if (num % 2 == 0){
        console.log(`O número verificado é par porque o número verificado foi o número ${num}`);
    }
    else{
        console.log(`O número verificado é impar porque o número verificado foi o número ${num}`);
    }
}

verificarPar(3);