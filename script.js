
const images = document.querySelectorAll('.gallery img');
const countdownContainer = document.getElementById('countdown');
const endDate = new Date('2024-03-26T08:40:00'); // Asegúrate de ajustar el año


let currentIndex = 0;

function changeImage() {
    if (currentIndex < images.length) {
        images[currentIndex].classList.add('fade');
        currentIndex++;
    }
}

function updateCountdown() {
    const now = new Date();
    const difference = endDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownContainer.innerText = `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos, para estar juntos.`;
}

// Llamadas a funciones
setInterval(changeImage, 2000);
setInterval(updateCountdown, 1000);
