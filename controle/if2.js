function teste1(num){
    if(num > 7) //se não utilizar chaves o if só le a primeira sentença
        console.log(num);
        
    console.log('final');
    
}

teste1(6);
teste1(8);

function teste2(num) {
    if(num > 7); {
        console.log(num);
    }
}
teste2(8);
teste2(6);