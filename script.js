// Countdown Timer
const weddingDate = new Date('2025-05-15T12:00:00').getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown-timer').innerHTML = 'लग्न झाले आहे!';
    }
}, 1000);

// Tab Navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        // Collapse the navbar on mobile after clicking a link
        $('.navbar-collapse').collapse('hide');
    });
});

// Set Home Section as Active on Load
document.getElementById('home').classList.add('active');
document.getElementById('home').style.display = 'block';

// Initialize Lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

// Play Background Music
const backgroundMusic = document.getElementById('background-music');

// Play music after user interaction
document.addEventListener('click', () => {
    backgroundMusic.play();
}, { once: true });

// Rose Petals Falling Animation
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${Math.random() * 3 + 2}s`;
    petal.style.animationDelay = `${Math.random() * 5}s`;
    document.getElementById('petals-container').appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 8000); // Remove petal after 8 seconds
}

setInterval(createPetal, 300); // Create a new petal every 300ms

// Curtain Effect
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('curtain-open'); // Open the curtain
    document.querySelector('main').style.display = 'block'; // Show the main content
    document.body.style.overflow = 'auto'; // Allow scrolling
});
