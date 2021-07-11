/* Vamos criar variaveis usando let, const e var, atribuir valores, identificar 
comportamentos e saídas quando tentarmos recuperar. */

{
    let name = "Ricardo";
    var age = 27;
    const lastName = "Costa";
}

console.log(name); // ReferenceError: name is not defined A variavel let não é de escopo global vai dar erro ao recuperar
console.log(age); // Vai recuperar o valor normalmente pois a var é variavel de escopo global 
console.log(lastName); // lastName is not defined Não vai recuperar pois const também não é de escopo global