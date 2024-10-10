document.addEventListener('DOMContentLoaded', () => {
    // Select elements you want to animate
    const honours = document.querySelectorAll('.honour');
    const players = document.querySelectorAll('.player');

    // Fade-in effect for sections
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section) => {
        section.classList.add('visible');
    });

    // Delay and animate honours
    honours.forEach((honour, index) => {
        honour.style.animationDelay = `${index * 0.2}s`;
        honour.classList.add('animate');
    });

    // Delay and animate players
    players.forEach((player, index) => {
        player.style.animationDelay = `${index * 0.2}s`;
        player.classList.add('animate');
    });

    loadMatches(); // Load matches when DOM content is loaded

    // Example of handling social media clicks
    const socialMediaIcons = document.querySelectorAll('.social-media img');
    socialMediaIcons.forEach((icon) => {
        icon.addEventListener('click', (event) => {
            const platform = event.target.alt;
            switch (platform) {
                case 'Facebook':
                    window.open('https://www.facebook.com/Eaglessports7club', '_blank');
                    break;
                case 'Instagram':
                    window.open('https://www.instagram.com/eagle_fc_vizhinjam/', '_blank');
                    break;
            }
        });
    });
});

// Upcoming and Past Matches Data
const upcomingMatches = [
    {
        date: "October 15, 2024",
        time: "3:00 PM",
        venue: "Vizhinjam Stadium",
        opponent: "Opponent Team",
    },
];

const pastMatches = [
    {
        date: "October 8, 2024",
        score: "Eagle FC 3 - 0 Mumbai",
    },
];

// Function to Load Match Data
function loadMatches() {
    const upcomingContainer = document.querySelector('.upcoming-matches');
    const pastContainer = document.querySelector('.past-matches');

    upcomingMatches.forEach(match => {
        const matchElement = `
            <div class="match">
                <div class="match-details">
                    <img src="eagles-logo.png" alt="Eagle FC" class="team-logo">
                    <span class="vs">vs</span>
                    <img src="opponent-logo.png" alt="Opponent Team" class="team-logo">
                </div>
                <div class="match-info">
                    <p>Date: <span>${match.date}</span></p>
                    <p>Time: <span>${match.time}</span></p>
                    <p>Venue: <span>${match.venue}</span></p>
                </div>
            </div>
        `;
        upcomingContainer.innerHTML += matchElement;
    });

    pastMatches.forEach(match => {
        const matchElement = `
            <div class="match">
                <div class="match-details">
                    <img src="eagles-logo.png" alt="Eagle FC" class="team-logo">
                    <span class="vs">vs</span>
                    <img src="opponent-logo.png" alt="Opponent Team" class="team-logo">
                </div>
                <div class="match-info">
                    <p>Date: <span>${match.date}</span></p>
                    <p>Score: <span>${match.score}</span></p>
                </div>
            </div>
        `;
        pastContainer.innerHTML += matchElement;
    });
}

// Animation trigger on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section) => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (sectionPosition < screenPosition) {
            section.classList.add('visible'); // Add visible class when in viewport
        }
    });
});

// Sliding Animation for Match Fixtures
const fixtures = document.querySelectorAll('.fixture');
let currentIndex = 0;

function showNextFixture() {
    fixtures[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % fixtures.length;
    fixtures[currentIndex].classList.add('active');
}

setInterval(showNextFixture, 3000);

// Form Validation for Contact Form
const contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', function(event) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    if (name === '' || email === '') {
        event.preventDefault(); // Prevent form submission
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your message!');
    }
});

// Social Media Integration
const socialMediaLinks = {
    instagram: 'https://instagram.com/eagle_fc_vizhinjam/',
    facebook: 'https://www.facebook.com/Eaglessports7club',
};

const socialMediaContainer = document.querySelector('.social-media');
for (const platform in socialMediaLinks) {
    const link = document.createElement('a');
    link.href = socialMediaLinks[platform];
    link.target = '_blank';
    link.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
    socialMediaContainer.appendChild(link);
}
