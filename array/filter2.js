Array.prototype.filter2 = function(callback){
   let novoArray = []
    for( let i = 0; i < this.length; i++){
        if(callback(this[i],i,this))
            novoArray.push(this[i])
    }
    return novoArray
}

const array1 = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'Ipad', preco: 4999, fragil: true},
    {nome:'copo de vidro', preco: 12.49,fragil:true},
    {nome:'copo de plastico', preco:18.99,fragil:false}
];
const caro = produto => produto.preco >= 1000;
const fragil = produto => produto.fragil;

console.log(array1.filter2(caro).filter2(fragil))