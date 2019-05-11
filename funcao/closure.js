// closure é o escopo criado quando um função é declarada 
// esse ecopo permite a função acessar e manipular variaveis externas a função

// Contexto Lexico em ação

const x = 'Global';

function fora(){
    const x  = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())