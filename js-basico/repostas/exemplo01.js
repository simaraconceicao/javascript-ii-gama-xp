let v1 = "teste1";
var v2 = "teste2";
const v3 = "teste3";

//function mostraVariaveis(){
if (true) {
    let v4 = "teste4";
    var v5 = "teste5";
    const v6 = "teste6";
    console.log(v1); //funciona
    console.log(v2); //funciona
    console.log(v3); //funciona
    console.log(v4);
}

// console.log(v4); //nao funciona pq foi definido dentro de um bloco

console.log(v5); // foi criada dentro do bloco mas funciona pq é var

// console.log(v6); // nao funciona pq foi criado dentro do bloco e é const

// mostraVariaveis();
