const livros = require('./database')
const [{id, nome, autor, categoria, paginas, recomenda, leu}] = livros

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

entradaInicial.toLocaleUpperCase() === "S" ? console.table(categoriasDisponiveis()) : console.table(exibirTodosOsLivros())

function categoriasDisponiveis(){
    console.log(`Essas são as categorias disponíveis: ${livros.map(livros => livros.categoria)}`)
    const entradaCategoria = readline.question('Qual categoria você escolhe?')
    console.log(entradaCategoria)

    return livros.filter(livro => livro.categoria === entradaCategoria)
}

function exibirTodosOsLivros(){
    console.log('Estes são todos os livros disponiveis:')
    livros.sort((a, b) => a.paginas - b.paginas)
    return livros.map(livros => livros)
}
