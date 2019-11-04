const {filmes} = require('../../data/dataFilmes')

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

var tempoTotal = filmes
    .concatMap((filme) => filme.videos
        .map((tempo) => {return tempo.tempo}))
            .reduce((acc, att) => acc + att)

console.log(`Tempo Total: ${tempoTotal} Minutos`)