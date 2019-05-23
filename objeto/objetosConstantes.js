const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa);

//pessoa ={ nome: 'ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'joão'});
pessoaConstante.nome = "maria"
console.log(pessoaConstante);