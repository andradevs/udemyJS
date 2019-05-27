Array.prototype.map2 = function(callback){
    let copia = [];
    for(let i = 0 ; i < this.length; i++){
        copia.push(callback(this[i],i,this))
    }
    return copia
}

const carrinho = [
    '{"nome": "Borracha","preco": 3.45}',
    '{"nome": "Caderno" , "preco": 10.99}',
    '{"nome": "Caneta" , "preco": 41.22}',
    '{"nome":"Kit de Lapis","preco": 7.50}'
]

// retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)