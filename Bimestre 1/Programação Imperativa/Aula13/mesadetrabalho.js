const participanteA = [5,8,4,9,5];
const participanteB = [8,7,8,6,8];
const participanteC = [7,5,10,8,3];

function pontoacaoMedia(notas){

    let soma=0
    for(i=0;i<notas.length;i++){
        soma=soma+notas[i];
    }

    return soma/notas.length;
}

function pontoacaoMaior(notas){
    let maior=0;
    for(i=0;i<notas.length;i++){
        if (notas[i]>maior){
            maior=notas[i];
        }
    }
    return maior;
}

function competicao(notasP1,notasP2,notasP3){
    let maiorMedia=0 // para armazenar a maior media
    let pMaiorMedia=String //para saber qual participante obteve a maior media

    maiorMedia= pontoacaoMedia(notasP1)
    //primeiro if compara o valor de media armazenado na variavel maiorMedia, que é do primeiro participante, com a do segundo participante.
    if(maiorMedia<pontoacaoMedia(notasP2)){
        maiorMedia=pontoacaoMedia(notasP2);
        pMaiorMedia="p2";
    }else if(maiorMedia<pontoacaoMedia(notasP3)){
        maiorMedia=pontoacaoMedia(notasP3);
        pMaiorMedia="p3";
    }else{
        pMaiorMedia="p1";
    }

    return [maiorMedia, pMaiorMedia]
}

console.log('Melhor média ' + competicao(participanteA,participanteB,participanteC))