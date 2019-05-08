function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('aprovado com : ' + nota);

    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVeradeiro(valor){
    if(valor){
        console.log('é verdade ....' + valor);
    }
}

seForVeradeiro();
seForVeradeiro(null);
seForVeradeiro(undefined);
seForVeradeiro(NaN);
seForVeradeiro("");
seForVeradeiro(0);
seForVeradeiro(-1);
seForVeradeiro(' ');
seForVeradeiro("?");
seForVeradeiro([]);
seForVeradeiro([1,2]);
seForVeradeiro({});