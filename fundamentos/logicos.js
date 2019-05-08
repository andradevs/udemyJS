function compras (trabalho1,trabalho2){

    const compraSorvete = trabalho1 || trabalho2;
    const compraTv50 =  trabalho1 && trabalho2;
    const compraTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !compraSorvete;

    return{ compraSorvete,compraTv50,compraTv32,manterSaudavel};
}
console.log(compras(true,true));
console.log(compras(true,false));
console.log(compras(false,true));
console.log(compras(false,false));