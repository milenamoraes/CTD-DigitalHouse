// 1 - Obter qual a jogada do jogador

// 2 - Gerar aleatoriamente um número entre 1 e 3

// 3 - Calcular os resultados

// [1] PEdra - [2] Papel - [3] Tesoura

var escolhaUsuario   
var escolhaRobo  


function jogada(){
    escolhaUsuario = Number( prompt('Escolha entre [1] Pedra,  [2] Papel,  [3] Tesoura'))
    escolhaRobo = Math.floor(Math.random() * 3) + 1



    if(escolhaRobo > escolhaUsuario)  {

        console.log('Você perdeu')
    
    }else {
    
        if(escolhaRobo === escolhaUsuario) {
    
            console.log('Deu empate')
        }else {
    
        console.log('Você ganhou')
    }
    }
    if(prompt)

}

jogada() 





//Premitir jogar novamente, dica(usar funções)

// Armazenar pontos e se um dos jogadores chegar a 3 pontos, o jogo acaba

// Limitar a quantidade de escolha do usuario