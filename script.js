// Smooth scroll for internal navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Optional: feedback for tool cards (e.g., journal/talk/read alerts)
document.querySelectorAll('.place-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.02)';
    card.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// Optional: Add inspirational tip rotation (bonus enhancement)
const tips = [
  "Take a deep breath and feel the moment 🌼",
  "Close your eyes. Imagine a calm river flowing through you 🌊",
  "You are enough. Just as you are 💛",
  "Every breath is a chance to start again 🍃"
];

function rotateTips() {
  const index = Math.floor(Math.random() * tips.length);
  const guideSection = document.querySelector('#guide .container p');
  if (guideSection) {
    guideSection.textContent = tips[index];
  }
}

// Rotate tips every 10 seconds if #guide paragraph exists
setInterval(rotateTips, 10000);

  const audio = document.getElementById("calm-music");
  const volumeControl = document.getElementById("volume-control");

  audio.volume = 0.6; // Default volume

  volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
  });

