var choF1 = "Ao enfrentar a arvore foi derrotado e perfurado com um de seus galhos."


function chonaF1() {

    var respost = prompt("O que Chona Ville deve fazer?\n1 - Correr.\n2 - Enfrentar a Árvore Ent.")

    if (respost == 1) {
        location.href = "../chona-fase2/chona-fase2.html"
    } else if (respost == 2) {
        location.href = "../gameOver.html"
        alert(`${choF1}`)
    }

    while (respost != 1 && respost != 2) {

        alert("Opção inválida! Digite 1 ou 2 para responder!")

        respost = prompt("O que Chona Ville deve fazer?\n1 - Correr.\n2 - Enfrentar a Árvore Ent.")

        if (respost == 1) {
            location.href = "../chona-fase2/chona-fase2.html"
        } else if (respost == 2) {
            location.href = "../gameOver.html"
            alert(`${choF1}`)
        }
    }
    return
}