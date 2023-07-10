const importar = require("./collectibles.js")

const hotToys = importar[0]
const bandai = importar[1]
const starWars = importar[2]

const unifiedCollectibles = [...hotToys,...bandai,...starWars]

let collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function () {
        this.figuras.forEach(elemento => console.log(elemento))
    },
    figuresByBrand: function (marcaElemento) {
        let marca = collectibles.figuras.filter(collecciones => collecciones.marca === marcaElemento)
        return marca
    }
}
collectibles.listFigures();
console.log(collectibles.figuresByBrand("Bandai"))