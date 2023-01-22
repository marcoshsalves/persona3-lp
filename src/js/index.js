/* 

Objetivo 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do trailer
    - dar um jeito de pegar o elemento que representa o botão usando js
    - dar um jeito de identificar quando o usuário clicar no botão
    - dar um jeito de pegar o elemento da modal no js
    - abrir a modal na tela

Objetio 2 - quando o usuário clicar no X devemos fechar a modal
    - dar um jeito de pegar o elemento de fechar modal usando o js
    - dar um jeito de identificar quando o uuário clicar no X
    - fechar a modal na tela

*/

const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
})

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
})
