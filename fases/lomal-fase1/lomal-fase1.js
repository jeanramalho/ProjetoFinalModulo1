var loF1 = "Ao tentar enfrentar o cavaleiro foi facilmente derrotado e morto!"

function lomalF1() {

    var respost = prompt("O que Lomal Girdle deve fazer?\n1 - Dar a volta.\n2 - Enfrentar Cavaleiro.")

    if (respost == 1) {
        location.href = "../lomal-fase2/lomal-fase2.html"
    }
    else if (respost == 2) {
        location.href = "../gameOver.html"
        alert(`${loF1}`)
    }

    while (respost != 1 && respost != 2) {

        alert("Opção inválida! Digite 1 ou 2 para responder!")
        respost = prompt("O que Lomal Girdle deve fazer?\n1 - Dar a volta.\n2 - Enfrentar Cavaleiro.")

        if (respost == 1) {
            location.href = "../lomal-fase2/lomal-fase2.html"
        }
        else if (respost == 2) {
            location.href = "../gameOver.html"
            alert(`${loF1}`)
        }
    }

    return
}