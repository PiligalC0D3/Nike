let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");
let botaoCarrinho = document.querySelector(".botao-carrinho");

function mudarVisual(cor, imagem, botaoClicado) {
    body.style.backgroundColor = cor;
    botaoCarrinho.style.backgroundColor = cor;

    document.querySelectorAll(".botoes-cor").forEach(botao => {
        botao.classList.remove("ativo");
    });

    botaoClicado.classList.add("ativo");

    // Fade-out
    tenis.style.transition = 'opacity 0.3s ease';
    tenis.style.opacity = 0;

    // Cria uma imagem temporária para garantir que a nova já esteja carregada
    const novaImagem = new Image();
    novaImagem.src = imagem;

    novaImagem.onload = () => {
        // Quando a imagem estiver carregada, troca e faz o fade-in
        tenis.src = imagem;

        
        // Dá um pequeno tempo só para garantir a troca visual antes do fade-in
        requestAnimationFrame(() => {
            tenis.style.transition = 'opacity 0.3s ease';
            tenis.style.opacity = 1;
            
        });
    };
}

window.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("assets/entrada.wav");
    audio.volume = 0.3;
    audio.play().catch(() => {
        console.log("Autoplay bloqueado. Som será tocado após primeira interação.");
        document.body.addEventListener("click", () => {
            audio.play();
        }, { once: true });
    });
});
