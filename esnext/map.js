const tecnlogias = new Map()

tecnlogias.set('react', {framework: false})
tecnlogias.set('angular',{framework: true})

console.log(tecnlogias.react)
console.log(tecnlogias.get('react').framework)

const chaveVariados = new Map([
    [function() {},'função'],
    [{}, 'Objeto'],
    [123,'numero']
])

chaveVariados.forEach((vl,ch) =>{
    console.log(ch,vl)
})

console.log(chaveVariados.has(123))
chaveVariados.delete(123)
console.log(chaveVariados.has(123))
console.log(chaveVariados.size)

chaveVariados.set(123,"a")
chaveVariados.set(123,'b')
console.log(chaveVariados)