const DataPessoas = require('../../data/dataPessoas')

const IDTotal = DataPessoas.pessoas
    .map((pessoa) => {return pessoa.id})
        .reduce((acumulador, atual) => acumulador + atual)

console.log(`ID Total: ${IDTotal}`)