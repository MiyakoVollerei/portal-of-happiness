
const imagens = [
    "images/carrossel/imagem-1.jpg",
    "images/carrossel/imagem-2.jpg",
    "images/carrossel/imagem-3.jpg",
    "images/carrossel/imagem-4.jpg",
    "images/carrossel/imagem-5.jpg",
    "images/carrossel/imagem-6.jpg",
    "images/carrossel/imagem-7.jpg",
    "images/carrossel/imagem-8.jpg",
    "images/carrossel/imagem-9.jpg",
    "images/carrossel/imagem-10.jpg",
    "images/carrossel/imagem-11.jpg",
    "images/carrossel/imagem-12.jpg",
    "images/carrossel/imagem-13.jpg",
    "images/carrossel/imagem-14.jpeg"
];

document.addEventListener("DOMContentLoaded", () => {
    mover(0); // inicia com as imagens corretas

    // Efeito sonoro ao passar o mouse nas imagens do rodapé
    const hoverSound = new Audio('sounds/hover-som.mp3');
    hoverSound.volume = 0.5;

    document.querySelectorAll('.imagem-com-legenda').forEach(imgBox => {
        imgBox.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
    });
});

function mover(direcao) {
     // Toca som de clique ao clicar na seta
     const clickSound = new Audio('sounds/click.mp3');
     clickSound.volume = 0.5;
     clickSound.play();

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
