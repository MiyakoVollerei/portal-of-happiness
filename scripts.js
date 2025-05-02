
const imagens = [
    "images/carrossel/imagem-1.jpg",
    "images/carrossel/imagem-2.jpg",
    "images/carrossel/imagem-3.jpg"
];

document.addEventListener("DOMContentLoaded", () => {
    mover(0); // inicia com as imagens corretas
});

function mover(direcao) {
    if (direcao === 1) {
        imagens.push(imagens.shift()); // move 1º para o fim
    } else {
        imagens.unshift(imagens.pop()); // move último para o início
    }

    document.querySelector("#foto-esquerda img").src = imagens[0];
    document.querySelector("#foto-centro img").src = imagens[1];
    document.querySelector("#foto-direita img").src = imagens[2];
}
mover(0);
console.log("Script carregado!");
