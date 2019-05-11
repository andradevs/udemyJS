function Pessoa (nome = ""){
    this.nome = nome;

    this.getNome = () => `Meu nome é ${this.nome}`;

}

const p1 = new Pessoa('joão');
console.log(p1.getNome());