document.addEventListener('DOMContentLoaded', () => {
    // Select elements you want to animate
    const honours = document.querySelectorAll('.honour');
    const players = document.querySelectorAll('.player');

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
});
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

document.addEventListener('DOMContentLoaded', loadMatches);
// JavaScript to trigger animations on page load
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible'); // Add visible class to trigger animation
        }, index * 200); // Delay each section's animation by 200ms
    });
});

// Optionally, add scroll event listener for more dynamic animations
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
