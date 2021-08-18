var choF2 = "Ao entrar no templo encontrou seus amigos e logo foi pegar o anel, pois não sabia o que a inscrição na porta dizia. Foi Desintegrado totalmente."


function chonaF2() {

    var respost = prompt("O que Chona Ville deve fazer?\n1 - Entrar no Templo.\n2 - Traduzir a inscrição.")

    if (respost == 2) {
        location.href = "../chona-fase3/chona-fase3.html"
    } else if (respost == 1) {
        location.href = "../gameOver.html"
        alert(`${choF2}`)
    }

    while (respost != 1 && respost != 2) {

        alert("Opção inválida! Digite 1 ou 2 para responder!")

        respost = prompt("O que Chona Ville deve fazer?\n1 - Entrar no Templo.\n2 - Traduzir a inscrição.")

        if (respost == 2) {
            location.href = "../chona-fase3/chona-fase3.html"
        } else if (respost == 1) {
            location.href = "../gameOver.html"
            alert(`${choF2}`)
        }
    }
    return
}