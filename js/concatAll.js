const { filmes } = require('../data/dataFilmes')

Array.prototype.concatAll = function() {
    let resultado = []

    this.forEach(items => 
        resultado = resultado.concat(items)
    )
    
    return resultado
}

Array.prototype.concatMap = function(modificar) {
    return this.map(modificar).concatAll()
}

//const filmesNome = filmes
//    .concatMap(filme => filme.videos
//        .map(nome => nome.nome))

const filmesNome = filmes
    .map(filmes => filmes.videos)
        .concatAll()   
            
    
console.log(filmesNome)