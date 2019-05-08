function tratarErroLancar(erro){
    //throw new Error("...");
    //throw 10;
    //throw true;
    //throw "mensagem";
    throw {
        nome: erro.name,
        msg : erro.message,
        date : new Date
    }
}

function imprimiNomeGritando(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!');

    } catch(e){
        tratarErroLancar(e);
    } finally{
        console.log('final')
    }
}
const obj = { nome: "ronaldo"};
imprimiNomeGritando(obj);
