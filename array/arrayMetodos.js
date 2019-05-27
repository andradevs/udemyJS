const pilotos = ['Vettel','Alonso','Raikkon','Massa'];
pilotos.pop();
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift() // remove primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos);


// splice adcionar/remover

// adicionar 

pilotos.splice(2,0,'Bottas','Massa');
console.log(pilotos);

// remover
pilotos.splice(4,2);
console.log(pilotos);

const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2);