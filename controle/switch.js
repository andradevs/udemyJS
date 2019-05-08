const imprimirResutado = function (nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('quadro de honra');
            break;
        case 8: case 7:
            console.log('APROVADO');
            break;
        case 4: case 5: case 6:
            console.log('recuperação');
            break;
        case 3: case 2: case 1: case 0:
            console.log('reprovado');
            break;
        default:
            console.log('nota invalida');
    }
}

imprimirResutado(9.9);
imprimirResutado(6.6);
imprimirResutado(3.3);
imprimirResutado(8.8);
imprimirResutado('casa');
imprimirResutado(-9)