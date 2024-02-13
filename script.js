// Selecciona todos los elementos 'figure'
const figures = document.querySelectorAll('figure');

// Asigna las URLs de las imágenes a cada elemento 'figure'
const imageUrls = [
    'https://placekitten.com/300/300',
    'https://placekitten.com/301/301',
    'https://placekitten.com/302/302',
    'https://placekitten.com/303/303',
    'https://placekitten.com/304/304',
    'https://placekitten.com/305/305'
];

figures.forEach((figure, index) => {
    figure.style.setProperty('--imageUrl', `url(${imageUrls[index]})`);
});

// Define las variables
let count = 60;
let bpx = 0;
let delay = 0;
let angleChange = 0;
let skew = 0;

// Crea los estilos dinámicos
for (let i = 1; i <= count; i++) {
    // Aplica los estilos a cada 'figure'
    figures.forEach(figure => {
        // Selecciona los elementos
        const elements = figure.querySelectorAll('i');

        // Aplica los estilos
        elements.forEach(element => {
            element.style.setProperty('--bpx', `${bpx}px`);
            element.style.setProperty('--delay', `${delay}s`);
            element.style.setProperty('--delay2', `${0.6 - delay}s`);
            element.style.setProperty('--angle', `${-10 - angleChange}deg`);
            element.style.setProperty('--skew', `${skew}deg`);
        });
    });

    // Actualiza las variables
    bpx -= 5;
    angleChange += 0.1;
    delay += 0.01;
    skew -= 0.1;
}