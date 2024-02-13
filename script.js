let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');

function changeImage() {
    if (currentIndex < images.length) {
        images[currentIndex].classList.add('fade');
        currentIndex++;
    }
}

setInterval(changeImage, 2000);
