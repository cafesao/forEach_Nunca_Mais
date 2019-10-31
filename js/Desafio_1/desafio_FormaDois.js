// Importa o Banco de Dados
const { pessoas } = require('../../data/dataPessoas')

// Função para controlar qual estado e de qual sexo eu quero as pessoas
function EstadoSexo(pessoa, estado, sexo) {
    return pessoa.estadoNatal === estado && pessoa.sexo === sexo
}

// Definição para Filter() -- Com a função EstadoSexo()
const DefinicaoRSeMasculino = pessoa => EstadoSexo(pessoa, 'RS', 'Masculino')

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
console.log()
for(let i = 0; i < pessoa.length; i++) {
    console.log(`Nome: ${pessoa[i].nome}`)
    console.log(`Sexo: ${pessoa[i].sexo}`)   
    console.log(`Cidade Natal: ${pessoa[i].cidadeNatal}`)
    console.log('------------------------------------------------')
}
