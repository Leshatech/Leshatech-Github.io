// Fade-in sections on scroll
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    faders.forEach(fader => {
        const top = fader.getBoundingClientRect().top;
        const height = window.innerHeight;
        if(top < height - 50) {
            fader.classList.add('visible');
        }
    });
});

// Trigger fade-in for elements already in view
window.addEventListener('load', () => {
    faders.forEach(fader => {
        const top = fader.getBoundingClientRect().top;
        const height = window.innerHeight;
        if(top < height - 50) {
            fader.classList.add('visible');
        }
    });
});
