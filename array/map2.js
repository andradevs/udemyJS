const carrinho = [
    '{"nome": "Borracha","preco": 3.45}',
    '{"nome": "Caderno" , "preco": 10.99}',
    '{"nome": "Caneta" , "preco": 41.22}',
    '{"nome":"Kit de Lapis","preco": 7.50}'
]

// retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)