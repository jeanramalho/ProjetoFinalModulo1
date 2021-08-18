var loF3 = "Ao tocar no anel sozinho ele é totalmente desintegrado."


function lomalF3() {

    var respost = prompt("O que Lomal Girdle deve fazer?\n1 - Pegar o Anel.\n2 - Esperar seus amigos.")

    if (respost == 2) {
        location.href = "../lomal-fase4/lomal-fase4.html"
    } else if (respost == 1) {
        location.href = "../gameOver.html"
        alert(`${loF3}`)
    }

    while (respost != 1 && respost != 2) {

        alert("Opção inválida! Digite 1 ou 2 para responder!")

        respost = prompt("O que Lomal Girdle deve fazer?\n1 - Pegar o Anel.\n2 - Esperar seus amigos.")

        if (respost == 2) {
            location.href = "../lomal-fase4/lomal-fase4.html"
        } else if (respost == 1) {
            location.href = "../gameOver.html"
            alert(`${loF3}`)
        }

    }

    return
}