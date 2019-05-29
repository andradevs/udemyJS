// Modo que eu mesmo fiz
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

// axios.get(url).then(response => {
//     const funcionarios = response.data;
//     let aux = 10000000000;
//     let menorSalario
//     const isChinesa = e => e.pais == 'China' && e.genero == "F";

//     funcionarios.filter(isChinesa).forEach(element => {
//         if(element.salario < aux){
//             aux = element.salario;
//             menorSalario = element;

//         }
//     });
//     console.log(menorSalario)
// })

//Modo da Video Aula
const isChinesa = e => e.pais == 'China' && e.genero == "F";
const menorSalario = function(maior,atual){
    return maior.salario >atual.salario ? atual : maior
}

axios.get(url).then(response => {
    const funcionarios = response.data;
    const func = funcionarios.filter(isChinesa)
        .reduce(menorSalario)
    
    console.log(func);
});