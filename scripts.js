
let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let botao = document.querySelector(".botao-carrinho")


function mudarVisual(cor, imagem){

    body.style.background = cor
    tenis.src = imagem
}

