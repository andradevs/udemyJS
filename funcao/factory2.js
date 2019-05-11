const criaProduto = function(nome,preco){ 
    return{
        nome,
        preco,
        desconto:0.1
    }
}

console.log(criaProduto("batata", 32));