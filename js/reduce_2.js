const Pessoas = require('../data/dataPessoas')



const PessoasMaioresOuMenores = Pessoas.pessoas.reduce((valorAcc, valorAray) => {
    let propMaiorOUMenor
    
    if(2019 - valorAray.anoNascimento > 18) {
        propMaiorOUMenor = 'maiores'
    }
    else {
        propMaiorOUMenor = 'menores'
    }

    valorAcc[propMaiorOUMenor].push(valorAray)

    return valorAcc

}, {maiores: [], menores: []})

console.log(PessoasMaioresOuMenores)