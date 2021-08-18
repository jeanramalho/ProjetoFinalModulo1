var roF2 = "Ao escolher passar pelo warg dormindo ao se aproximar acorda o warg que o destroça em segundos. "


function rosaferdF2() {

    var respost = prompt("O que Rosaferd Hand deve fazer?\n1 - Passar pelo Warg.\n2 - Passar pela Eagle.")

    if (respost == 2) {
        location.href = "../rosaferd-fase3/rosaferd-fase3.html"
    } else if (respost == 1) {
        location.href = "../gameOver.html"
        alert(`${roF2}`)
    }

    while (respost != 1 && respost != 2) {

        alert("Opção inválida! Digite 1 ou 2 para responder!")

        respost = prompt("O que Rosaferd Hand deve fazer?\n1 - Passar pelo Warg.\n2 - Passar pela Eagle.")

        if (respost == 2) {
            location.href = "../rosaferd-fase3/rosaferd-fase3.html"
        } else if (respost == 1) {
            location.href = "../gameOver.html"
            alert(`${roF2}`)
        }

    }

    return
}