const alunos = [
    {nome:'João', nota: 7.8},
    {nome:'maria', nota: 10}
]

//Imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

//declarativo

const soma = (acc,cur) => acc + cur
const notas = e => e.nota
const total2 = alunos.map(notas).reduce(soma)
console.log(total2/alunos.length)
