console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.group(this === exports)

function logThis(){
    console.log('dentro de uma funçao')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}
logThis()