// Importa o Banco de Dados
const { pessoas } = require('../../data/dataPessoas')

// Definição para Filter()
const DefinicaoRSeMasculino = pessoa => pessoa.estadoNatal === 'RS' && pessoa.sexo === 'Masculino'

//Definição para Map()
const DefinicaoNomeSexoCidade = pessoa => (
    {
        nome: pessoa.nome,
        sexo: pessoa.sexo,
        cidadeNatal: pessoa.cidadeNatal
    }
)

// Array com filter() e map()
const pessoa = pessoas
    .filter(DefinicaoRSeMasculino)
    .map(DefinicaoNomeSexoCidade)

// Resultado na tela (Um pouco mais detalhado)
console.log(pessoa)
