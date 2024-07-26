
const images = document.querySelectorAll('.gallery img');
const countdownContainer = document.getElementById('countdown');
const endDate = new Date('2024-08-11T16:30:00'); // Fecha


let currentIndex = 0;

function changeImage() {
    if (currentIndex < images.length) {
        images[currentIndex].classList.add('fade');
        currentIndex++;
    }
}
let countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date();
    let difference = endDate - now;

    if (difference < 0) {
        difference = 0;
    }

    if (difference === 0) {
        countdownContainer.innerText = "¡Hola bonitaaa!";
        clearInterval(countdownInterval); // Detener el intervalo
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownContainer.innerText = `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos, para estar juntos.`;
}

// Llamadas a funciones
setInterval(changeImage, 2000);
setInterval(updateCountdown, 1000);
