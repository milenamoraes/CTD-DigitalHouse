function podeSubir(altura, acompanhado) {
    if (altura <= 1, 40 && altura <= 2, 00) {
        console.log("Acesso autorizado");
    } else if (altura < 1, 50 && altura >= 1.2 && acompanhado) {
        console.log("Acesso autorizado somente com acompanhante");
    } else if (altura < 1.2) {
        console.log("Acesso negado");
    }
}
podeSubir(1.19, true);