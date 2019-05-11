function getPreco(imposto = 0 , moeda = 'R$'){
    return `O prduto ${this.nome}, esta custando ${moeda} ${this.preco * (1-this.desconto) *(1 + imposto)}`
}
 const prod1 = {
     nome: 'bola',
     preco: 100,
     desconto: 0.1 

 }

 console.log(getPreco.call(prod1));
 console.log(getPreco.apply(prod1));

 const carro = { nome:'ferrari', preco: 100, desconto:0.1};

 console.log(getPreco.call(carro,0.1,'us'))
 console.log(getPreco.apply(carro,[0.2,'EU']));