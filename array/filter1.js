const array1 = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'Ipad', preco: 4999, fragil: true},
    {nome:'copo de vidro', preco: 12.49,fragil:true},
    {nome:'copo de plastico', preco:18.99,fragil:false}
];

console.log(array1.filter(function(p){
    return p.preco > 2500
}))

const caro = produto => produto.preco >= 1000;
const fragil = produto => produto.fragil;

console.log(array1.filter(caro).filter(fragil))