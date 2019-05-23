//coleção dinâmica de pares chave/valor
const produto =  new Object;
produto.nome = 'cadeira';
produto['marca do produto'] = 'generica';
produto.preco = 220;

console.log(produto);


const carro = {
    modelo: "a4",
    valor: 89000,
    proprietario :{
        nome:'raul',
        idade:56,
        endereco: {
            logradouro:'rua 7',
            numero: 123
        },
        condutores: [
            {
            nome:'junior',
            idade: 12
        },{
            nome:'carlos',
            idade: 42
        }],
        calculaValorSeguro: function(){
            // ...
        }
    }
}
console.log(carro);
carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'jota';

console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calculaValorSeguro

console.log(carro);
console.log(carro.condutores);
// console.log(carro.condutores.length)