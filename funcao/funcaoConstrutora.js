function Carro( velocidadeMaxima = 200, delta = 5 ){
    // atributos privados
    let velocidadeAtual = 0;

    // metodos publicos
    this.acelera = function() {
        
        if(velocidadeAtual + delta < velocidadeMaxima){
            velocidadeAtual += delta;
        }else {
            velocidadeAtual = velocidadeMaxima;
        }    
    }

    this.getVelocidadeAtual = function() {
        
        return velocidadeAtual;
    }
}

const uno = new Carro();
uno.acelera();
console.log(uno.getVelocidadeAtual());


const ferrari = new Carro(320,30);
ferrari.acelera();
ferrari.acelera();
ferrari.acelera();
console.log(ferrari.getVelocidadeAtual());

