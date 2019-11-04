const CaixaFilmes = [
    {nome: 'Batman', largura: 150, altura: 200},
    {nome: 'Superman', largura: 250, altura: 300},
    {nome: 'Homem-Aranha', largura: 100, altura: 125},
    {nome: 'Mulher-Gato', largura: 125, altura: 175},
]

const filmes = [
    {
        nome: "Batman",
        videos: [
            {
                nome: 'Batman atrás das grades',
                tempo: 65,
                nota: 5.0
            },
            {
                nome: 'Batman de volta as ruas',
                tempo: 23,
                nota: 3.2     
            },
            {
                nome: 'Batman morreu',
                tempo: 87,
                nota: 1.0     
            },
        ],
    },
    {
        nome: "Superman",
        videos: [
            {
                nome: 'Superman ataca novamente',
                tempo: 10,
                nota: 1.1
            },
            {
                nome: 'Superman configura tudo',
                tempo: 63,
                nota: 4.3     
            },
            {
                nome: 'Superman dança lepo lepo',
                tempo: 45,
                nota: 2.5     
            },
        ],
    }
]

module.exports = { CaixaFilmes, filmes }
