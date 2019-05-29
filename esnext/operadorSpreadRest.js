// usar Spread com Objeto

const funcionario = {
    nome: 'maria',
    salario: 12345.99
}
const clone = {ativo: true, ... funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['João', 'pedro','gloria']
const grupoFinal = [ 'maria',...grupoA, 'Rafaela']
console.log(grupoFinal)