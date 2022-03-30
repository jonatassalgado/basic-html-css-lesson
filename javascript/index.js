document.addEventListener('DOMContentLoaded', function (event) {
    console.log('Agora posso ver o HTML')

    const requestFriendshipEl = document.querySelector("#request-friendship")

    requestFriendshipEl.addEventListener('click', function (event) {
        const clickedElement = event.target
        const isFriendshipRequested = clickedElement.dataset.requestedFriendship === 'true'

        if (isFriendshipRequested) {
            clickedElement.innerText = "Solicitar amizade"
            clickedElement.classList.remove('button--active')
            clickedElement.dataset.requestedFriendship = false
        } else {
            clickedElement.innerText = "Amizade solicitada"
            clickedElement.classList.add('button--active')
            clickedElement.dataset.requestedFriendship = true
        }
    })


    /* Abaixo você vai ouvir quando o botão de enviar mensagem for clicado 
    e vai mostrar o elemtno com id "message" mudadndo o atributo "display" 
    para "inline-block" */



    

})
