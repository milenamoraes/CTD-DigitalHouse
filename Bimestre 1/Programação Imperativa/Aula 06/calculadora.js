function adicionar (x,y) {
    return x+y;
}

function subtracao (x,y){
    return x-y;
}

function multiplicacao (x,y){
    return x*y;
}
 
function divisao (x,y){
    return x/y;
}

function quadrado(x){
    return multiplicacao(x,x); //5*5+25;
 }

 function mediaDeTres(x,y,z){
     const soma1= soma(x,y);
     const soma2= soma(soma1,z);
     return divisao(soma2,3);
 }
 console.log(quadrado(5));