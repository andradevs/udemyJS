const valores = [7.7,9.9,8.8,6.6];

console.log(valores[0],valores[3]);
console.log(valores[4]);

valores[4] = 9;
console.log(valores);
console.log(valores.length); // retorna tamanho do array

valores.push(({id: 3}, false, null, "teste"));
console.log(valores);

console.log(valores.pop()); // retira ultimo iten do array
delete valores[0]; // deleta um iten do array segundo sua index
console.log(valores);

console.log(typeof valores);
