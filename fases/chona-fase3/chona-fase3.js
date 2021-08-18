var juntos ="Ao correr e fugirem, são alcançados pelo cavaleiro e mortos sem piedade."


function chonaF3() {
    
    var respost = prompt("O que os Hobbits devem fazer?\n1 - Pegar o Anel.\n2 - Correr e fugir.")

    if(respost == 1) {
        location.href = "../zerou.html"
    } else if (respost == 2) {
        location.href = "../gameOver.html"
        alert(`${juntos}`)
    }

    while (respost != 1 && respost != 2) {

        alert("Opção inválida! Digite 1 ou 2 para responder!")

        respost = prompt("O que os Hobbits devem fazer?\n1 - Pegar o Anel.\n2 - Correr e Fugir.")

        if(respost == 1) {
            location.href = "../zerou.html"
        } else if (respost == 2) {
            location.href = "../gameOver.html"
            alert(`${juntos}`)
        }
    }
    return 
}
