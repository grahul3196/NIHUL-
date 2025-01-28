// Countdown Timer
const weddingDate = new Date('2025-12-25T00:00:00').getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days} दिवस ${hours} तास ${minutes} मिनिटे ${seconds} सेकंद`;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('timer').innerHTML = 'लग्न झाले आहे!';
    }
}, 1000);

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
        const targetId = link.getAttribute('href').substring
