let result = fizBuzz(11);

console.log(result);

function fizBuzz(entrada) {
    let retorno = "";
    if (typeof entrada !== "number") {
        retorno = "Não é um número";
    } else {
        if (entrada % 3 === 0) {
            retorno += "Fizz";
        }

        if (entrada % 5 === 0) {
            retorno += "Buzz";
        }
    }

    if (retorno != "") {
        return retorno;
    } else {
        return entrada;
    }

}