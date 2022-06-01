//Micro desafio 1

function teste1(x,y) {
    return y - x
}

teste1(10,40)


//Micro desafio 2 
function teste2(x,y) {
    return x*2
    console.log(x)
    return x/2
}

teste2(10)

console.log(teste2(20));

















function polegadasEmCentimetros(polegadas){
    const centimetros = polegadas*2.54;
    console.log (polegadas + "polegadas =" + centimetros, "cm")
    return centimetros;  
}

polegadasEmCentimetros(2); 

//Crie uma função que 

function converterStringEmUrl(string){
    let url = "http://www." + string + ".com.br";
    url = 'http://www.${string}.com.br';
    }
console.log(converterStringEmUrl(funca))

//Crie uma funçao 

function adicionaExclamacao(string){
    return string + "!"
}
console.log(adicionaExclamacao("Minha frase de teste"));

//crie 

function calculaIdadeDosCachorros(idade){
    return idade*7;
}
console.log(calculaIdadeDosCachorros(10));

//crie 

function calculaValorHoraDeTrabalho(salario){
    const valorHora = salario/160;
    console.log('O valor por hora do salario R$ ${salario} é de ${salario}')
    return salario/160;
}
calculaValorHoraDeTrabalho(3000);

