// Importa o Data, ou seja, o banco de dados que esta as pessoas
const { pessoas } = require('../data/dataPessoas')

// Cria uma constante, que contém um um callback que é um 'if', ele percore cada 'pessoa' em 'pessoas' e verifica se o 'estadoNatal' da pessoa é 'RS'
const filtraPorPessoaNascimentoRS = pessoa => pessoa.estadoNatal === 'RS'

// Cria uma constante, que recebe uma função filter(), que recebe como definição a constante filtraPorPessoaNascimentoRS
const pessoaDeRS = pessoas.filter(filtraPorPessoaNascimentoRS)

// Mostra a constante pessoaDeRS na tela, contendo um array de pessoas que nasceram no Rio Grande do Sul
console.log(pessoaDeRS)