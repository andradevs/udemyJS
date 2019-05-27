const aprovados = ['agatha','pedro','carla','joão'];
// Quando se usa forEach a função passa o valor, o indice e o array nessa ordem
aprovados.forEach(function(nome,indice,array){
    console.log(`${indice + 1} ) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome));