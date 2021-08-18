var roF1 = "Quando estava no meio da ponte devido a ela ser muito velha ela se quebra deixando-o cair no profundo penhasco."

function rosaferdF1() {

    var respost = prompt("O que Rosaferd Hand deve fazer?\n1 - Passar pela ponte.\n2 - Agarrar-se ao tronco.")

    if (respost == 2) {
        location.href = "../rosaferd-fase2/rosaferd-fase2.html"
    } else if (respost == 1) {
        location.href = "../gameOver.html"
        alert(`${roF1}`)
    }

    while (respost != 1 && respost != 2) {

        alert("Opção inválida! Digite 1 ou 2 para responder!")

        respost = prompt("O que Rosaferd Hand deve fazer?\n1 - Passar pela ponte.\n2 - Agarrar-se ao tronco.")

        if (respost == 2) {
            location.href = "../rosaferd-fase2/rosaferd-fase2.html"
        } else if (respost == 1) {
            location.href = "../gameOver.html"
            alert(`${roF1}`)
        }

    }

    return
}