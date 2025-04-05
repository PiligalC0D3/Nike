let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");
let botaoCarrinho = document.querySelector(".botao-carrinho");

function mudarVisual(cor, imagem, botaoClicado) {
    body.style.backgroundColor = cor;
    tenis.src = imagem;
    botaoCarrinho.style.backgroundColor = cor;
    

    document.querySelectorAll(".botoes-cor").forEach(botao => {
        botao.classList.remove("ativo");
    });

    botaoClicado.classList.add("ativo");
}

window.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("assets/entrada.wav");
    audio.volume = 0.3; // volume mais suave
    audio.play().catch((e) => {
        // Alguns navegadores bloqueiam autoplay, especialmente sem interação do usuário
        console.log("Autoplay bloqueado. Som será tocado após primeira interação.");
        document.body.addEventListener("click", () => {
            audio.play();
        }, { once: true });
    });
});
