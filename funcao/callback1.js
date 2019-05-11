const fabricantes = ['mercedes','AUDI','BMW'];

function imprimir( nome, indice){
    console.log(` ${indice + 1}. ${nome} `);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(function(fabricantes){
    console.log(fabricantes);
})

fabricantes.forEach(fabricante => console.log(fabricante));