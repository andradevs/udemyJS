const alunos = [ 
    {nome: 'João', nota:7.3, bolsista: true},
    {nome: 'Maria', nota:9.2, bolsista: true},
    {nome:'pedro', nota:9.8, bolsista: false},
    {nome:'Ana', nota:8.7, bolsista: false}
]

// desafio todos os alunos bolsistas
const saoBolsitas = function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador && atual

}
const bolsitas = e => e.bolsista;

console.log(alunos.map(bolsitas).reduce(saoBolsitas))

// algum aluno é bolsista?
const algumBolsista = function(acumulador,atual){
    console.log(acumulador,atual);
    return acumulador|| atual
}

console.log(alunos.map(bolsitas).reduce(algumBolsista))