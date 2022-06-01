//Declaração da função
function comprarComida(quantidade = 0){
    console.log(quantidade);
    const preco = quantidade * 12;
    return preco;
  }
  
  function darDesconto(preco){
     return preco + 0.7;
  }
  //Chamando ou invocando a função
 // Const retornoPreco = comprarComida(2);
const retornoPreco + comprarComida(2);
console.log("Preco inicial: 
+ retornoPreco +
"Preco com desconto:" + darDesconto(retornoPreco)
); 