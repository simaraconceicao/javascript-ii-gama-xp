const pessoa = {
    nome: "Simara",
    idade: 32,
    cidade: "São Paulo"
}

//Notação de ponto
console.log(pessoa.nome) //"Simara"

//Notação de colchetes
console.log(pessa['idade']) //32

//Como desestruturar Objetos 

const { nome, idade, cidade } = pessoa

console.log(nome) //"Simara"
console.log(idade) //32
console.log(cidade) //São Paulo