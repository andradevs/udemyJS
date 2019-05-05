const escola  = "COd3r";

console.log(escola.charAt(4)); //retorna o valor segundo o array da palavra
console.log(escola.charAt(5)); 
console.log(escola.charCodeAt(3));// retorna o endereço na tablea unicode segundo a string
console.log(escola.indexOf('3'));// retorna o index da palavra pedida na string

console.log(escola.substring(1));  //retorna a string a a partir do index fornecido
console.log(escola.substring(0,3)); // retorna a string a partir do inicio e do index final fornecido

console.log('Escola '.concat(escola).concat(" !")); // concatena a string
console.log('Escola ' + escola + " !");// também concatena
console.log(escola.replace(3,"e"));// substitui o numero por uma letra

console.log('biscoito,bixcoito,bolacha'.split(',')); //transforma uma string em um array