var pinInserido = "";
const pinCorreto = "1234";

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

function validarPin() {
    if (pinInserido === pinCorreto) {
        window.location.href = 'tela_inicial.html';
    } else {
        alert('PIN incorreto! Tente 1234');
        pinInserido = '';
        atualizarDots();
    }
}

function addNumber(num) {
    if (pinInserido.length < 4) {
        pinInserido += num;
        atualizarDots();
    }

    if (pinInserido.length === 4) {
        setTimeout(validarPin, 200);
    }
}

function deleteNumber() {
    pinInserido = pinInserido.slice(0, -1);
}

window.addNumber = addNumber;
window.deleteNumber = deleteNumber;