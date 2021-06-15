const filmes = [
    { 
        id: 1,
        titulo: "Dilema das Redes",
        descricao: "Um documentario sobre tecnologia.",
        duracao: 120
    },
    { 
        id: 2,
        titulo: "Us",
        descricao: "Um filme de terror legal demais.",
        duracao: 120
    },
    { 
        id: 3,
        titulo: "Corra",
        descricao: "Um filme de suspense bem legal.",
        duracao: 120
    },
]

const [{id, titulo, descricao, duracao}]  = filmes

filmes.map(filme => console.log(filme.descricao))