const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('aprovado' + nota);
    }else{
        console.log('reprovado' + nota);
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!');
