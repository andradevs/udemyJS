class Lancamento {
    constructor(nome = 'generico', valor = 0){
        this.nome = nome;
        this.valor = valor;
    }
} 


class CicloFinanceiro{
    constructor(mes,ano){
        this.mes =  mes;
        this.ano = ano;
        this.lancamentos = [];

    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => {
            this.lancamentos.push(l)
        });
    }
    
    sumario(){
        let valorConsolidadado = 0
        this.lancamentos.forEach(l => {
            valorConsolidadado += l.valor
        })
        return valorConsolidadado;
    }
    
}



const salario = new Lancamento('salario',5000);
const contaDeLuz = new Lancamento('luz', -400);
const contas = new CicloFinanceiro(6,2019);

contas.addLancamentos(salario,contaDeLuz);
console.log(contas.sumario());
