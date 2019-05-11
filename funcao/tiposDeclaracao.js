console.log(soma(3,4));
/*console.log(sub(3,4));  erro is not defined
console.log(mut(3,4));*/

// forma declaration
function soma(x,y){
    return x+y;
}

// function expression
const sub = function(x,y){
    return x - y;
}
console.log(sub(3,4));

//named function expression
const mult = function mult(x,y){
    return x * y;
}
console.log(mult(3,4));



