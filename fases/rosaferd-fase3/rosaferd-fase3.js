var roF3 = "Por ter um coração gentil Rosaferd Hand nunca faria isso."


function rosaferdF3() {

    var respost = prompt("O que Rosaferd Hand deve fazer?\n1 - Esperar Chona Ville.\n2 - Pegar o Anel sozinho.")

    if (respost == 1) {
        location.href = "../rosaferd-fase4/rosaferd-fase4.html"
    } else if (respost == 2) {
        location.href = "../gameOver.html"
        alert(`${roF3}`)
    }

    while (respost != 1 && respost != 2) {

        alert("Opção inválida! Digite 1 ou 2 para responder!")

        respost = prompt("O que Rosaferd Hand deve fazer?\n1 - Esperar Chona Ville.\n2 - Pegar o Anel sozinho.")

        if (respost == 1) {
            location.href = "../rosaferd-fase4/rosaferd-fase4.html"
        } else if (respost == 2) {
            location.href = "../gameOver.html"
            alert(`${roF3}`)
        }

    }

    return
}