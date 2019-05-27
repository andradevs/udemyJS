Array.prototype.reduce2 = function(callback,valorInicial){
    indiceInicial = valorInicial ? 0:1
    acumulador = valorInicial || this[0];
    for(let i = indiceInicial; i < this.length;i++){
        acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
}

const soma = (acc,cur) => acc+cur;
const nums = [1,2,3,4,5,6];
console.log(nums.reduce(soma,21))

const alunos = [ 
    {nome: 'João', nota:7.3, bolsista: true},
    {nome: 'Maria', nota:9.2, bolsista: false},
    {nome:'pedro', nota:9.8, bolsista: false},
    {nome:'Ana', nota:8.7, bolsista: false}
]

// desafio todos os alunos bolsistas
const saoBolsitas = function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador && atual

}
const bolsitas = e => e.bolsista;

console.log(alunos.map(bolsitas).reduce2(saoBolsitas))

// algum aluno é bolsista?
const algumBolsista = function(acumulador,atual){
    console.log(acumulador,atual);
    return acumulador|| atual
}

console.log(alunos.map(bolsitas).reduce2(algumBolsista))