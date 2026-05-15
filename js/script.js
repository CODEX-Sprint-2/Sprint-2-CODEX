let pinInserido = "";
const pinCorreto = "0000";

const dots = document.querySelectorAll('.ponto');

function atualizarDots() {
    dots.forEach((dot, index) => {
        if (index < pinInserido.length) {
            dot.classList.add('cheio');
        } else {
            dot.classList.remove('cheio');
        }
    });
}