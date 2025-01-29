// Countdown Timer
const weddingDate = new Date('2025-12-25T00:00:00').getTime();

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
        triggerFireworks();
    }
}, 1000);

// Fireworks Animation
function triggerFireworks() {
    for (let i = 0; i < 30; i++) {
        setTimeout(createFirework, i * 100);
    }
}

function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${Math.random() * 100}vw`;
    firework.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1000);
}

// Google Maps Initialization
function initMap() {
    const venueLocation = { lat: 19.0760, lng: 72.8777 }; // Example coordinates for Mumbai
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: venueLocation
    });
    const marker = new google.maps.Marker({
        position: venueLocation,
        map: map
    });
}

// Load Google Maps Script
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
script.async = true;
document.head.appendChild(script);

// Tab Navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        sections.forEach(section => {
            section.classList.remove('active');
            section.classList.add('d-none');
            if (section.id === targetId) {
                section.classList.add('active');
                section.classList.remove('d-none');
            }
        });
        // Collapse the navbar on mobile after clicking a link
        $('.navbar-collapse').collapse('hide');
    });
});

// Set Home Section as Active on Load
document.getElementById('home').classList.add('active');
document.getElementById('home').classList.remove('d-none');

// Initialize Lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

// Play Background Music
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.play();

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
    }, 8000);
}

setInterval(createPetal, 300);
