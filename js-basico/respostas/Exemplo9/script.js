/* FizzBuzz
Se não for um número => "Não é um número"
Divisível por 3 somente => "Fizz"
Divisível por 5 somente => "Buzz"
Divisível por 3 e 5 => "FizzBuzz"
Se não for divisível por 3 e nem por 5 => Entrada
*/

function fizzBuzz(entrada){
    if (typeof entrada != "number"){
        return "Não é um número"
    } else {
        //É divisível por 3? É divisível por 5?
        const div3=(entrada%3==0)|0;
        const div5=(entrada%5==0)|0;
        // Armazenar em binário tendo os pares (div3 div5)
        const aux=(div3<<1) + div5;
        switch(aux){
            case 3: //Divisível por 3 e 5
                return "FizzBuzz";
                break;
            case 1: //Divisível por 5 somente
                return "Buzz";
                break;
            case 2: //Divisível por 3 somente
                return "Fizz";
                break;
            case 0: // Não é divisível por 3 nem por 5
                return entrada;
        }
    }
}
let res = fizzBuzz(30);  
console.log(res);