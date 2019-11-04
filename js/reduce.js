const { CaixaFilmes } = require('../data/dataFilmes')

const MaiorCaixaFilme = CaixaFilmes.reduce((caixaMaior, caixaAtual) => {
    const TamanhoMaior = caixaMaior.largura * caixaMaior.altura
    const TamanhoAtual = caixaAtual.largura * caixaAtual.altura

    if (TamanhoAtual > TamanhoMaior) {
        return caixaAtual
    }
    else {
        return caixaMaior
    }
})

console.log(MaiorCaixaFilme)
