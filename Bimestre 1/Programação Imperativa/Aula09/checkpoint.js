let pipoca = 1;
let macarrao = 2;
let carne = 3;
let feijao = 4;
let brigadeiro = 5;

function microondas(prato, tempo) {
    if (prato === 1) {
        if (tempo < 10) {
            console.log("Tempo insuficiente")
        } else if (tempo * 2) {
            console.log("Comida queimou")
        } else if (tempo * 3) {
            console.log("Kabum")
        } else {
            console.log("Prato pronto, Bom apetite!!!")
        }
    }
}

if (prato === 2) 
    if (tempo < 8) {
        console.log("Tempo insuficiente")
    } else if (tempo * 2) {
        console.log("Comida queimou")
    } else if (tempo * 3) {
        console.log("Kabum")
    } else {
        console.log("Prato pronto, Bom apetite!!!")
    }

    if (prato === 3) {
        if (tempo < 15) {
            console.log("Tempo insuficiente")
        } else if (tempo * 2) {
            console.log("Comida queimou")
        } else if (tempo * 3) {
            console.log("Kabum")
        } else {
            console.log("Prato pronto, Bom apetite!!!")

        }
    }

    if (prato === 4) {
        if (tempo < 12) {
            console.log("Tempo insuficiente")
        } else if (tempo * 2) {
            console.log("Comida queimou")
        } else if (tempo * 3) {
            console.log("Kabum")
        } else {
            console.log("Prato pronto, Bom apetite!!!")

        }
    }
    if (prato === 5) {
        if (tempo < 8) {
            console.log("Tempo insuficiente")
        } else if (tempo * 2) {
            console.log("Comida queimou")
        } else if (tempo * 3) {
            console.log("Kabum")
        } else {
            console.log("Prato pronto, Bom apetite!!!")

        }
    }
 microondas(1, 19)