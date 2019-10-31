// Importa o Data, ou seja, o banco de dados que esta as pessoas
const { pessoas } = require('../data/dataPessoas')

// Cria uma constante, que recebe uma função de callback
const pegaNomeNascimento = pessoa => (
    {
        nome: pessoa.nome, //Coloca na propriedade 'nome' a propriedade 'nome' do array da callback pessoa
        anoNascimento: pessoa.anoNascimento, //Coloca na propriedade 'anoNascimento' a propriedade 'anoNascimento' do array da callback pessoa
        idade: 2019 - pessoa.anoNascimento //Coloca na propriedade 'idade' uma subtração (2019 MENOS a propriedade 'anoNascimento' do array da callback pessoa)
    }
)

//Cria uma constante, que recebe uma função map() que mapeia o array 'pessoas', usando as definições da constante pegaNomeNascimento
const pessoasNovas = pessoas.map(pegaNomeNascimento)

console.log(pessoasNovas) // Mostra o resultado da nova constante que contém um array na tela