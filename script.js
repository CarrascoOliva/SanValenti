let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');

function changeImage() {
    images.forEach((image, index) => {
        if (index === currentIndex) {
            image.classList.add('fade');
        } else {
            image.classList.remove('fade');
        }
    });

    currentIndex = (currentIndex + 1) % images.length;
}

// Cambia la imagen cada 3 segundos
setInterval(changeImage, 3000);