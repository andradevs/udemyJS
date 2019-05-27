Array.prototype.forEach2 = function(callback){
    for(let i = 0; i< this.length; i++){
        callback(this[i],i,this)
    }
}
console.log(typeof forEach2)


// forEach1
const aprovados = ['agatha','pedro','carla','joão'];
// Quando se usa forEach a função passa o valor, o indice e o array nessa ordem
aprovados.forEach2(function(nome,indice,array){
    console.log(`${indice + 1} ) ${nome}`)
    console.log(array)
})