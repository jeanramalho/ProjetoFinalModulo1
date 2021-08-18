var loF2 = "Ele sobe em uma arvore, mas percebe que as flechas nunca iriam parar, não consegue se segurar por muito mais tempo e cai de cima da arvore e morre. "

function lomalF2() {

    var respost = prompt("O que Lomal Girdle deve fazer?\n1 - Subir em uma arvore.\n2 - Abaixar e rastejar.")

    if (respost == 2) {
        location.href = "../lomal-fase3/lomal-fase3.html"
    } else if (respost == 1) {
        location.href = "../gameOver.html"
        alert(`${loF2}`)
    }

    while (respost != 1 && respost != 2) {

        alert("Opção inválida! Digite 1 ou 2 para responder!")

        respost = prompt("O que Lomal Girdle deve fazer?\n1 - Subir em uma arvore.\n2 - Abaixar e rastejar.")

        if (respost == 2) {
            location.href = "../lomal-fase3/lomal-fase3.html"
        } else if (respost == 1) {
            location.href = "../gameOver.html"
            alert(`${loF2}`)
        }

    }

    return
}