// 1 - Obter qual a jogada do Jogador

// 2 - Gerar aleatoriamente um número entre 1 e 3

// 3 - Calcular os resultados

// [1] Pedra - [2] Papel - [3] Tesoura

let escolhaUsuario = Number( prompt('Escolha entre [1]Pedra, [2]Papel e [3]Tesoura') )
var escolhaScript = Math.floor(Math.random() * 3) + 1

console.log(escolhaUsuario)
console.log(escolhaScript)

if(escolhaScript > escolhaUsuario) {

    alert('Voce perdeu')

} else {

    if(escolhaScript === escolhaUsuario) {

        alert('Deu empate!')

    } else {

        alert('Voce ganhou')

    }

}

console.log( confirm('Deseja jogar novamente') )

// Permitir jogar novamente, dica(usar funções)

// Armazenar pontos e se um dos jogadores chegar a 3 pontos, o jogo acaba

// Limitar a quantidade de escolha do usuário