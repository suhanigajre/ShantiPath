const music = document.getElementById('calm-music');
const toggleBtn = document.getElementById('music-toggle');

let isPlaying = false;

toggleBtn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play()
      .then(() => {
        toggleBtn.textContent = '⏸️ Pause Music';
        isPlaying = true;
      })
      .catch((err) => {
        alert("🔇 Autoplay blocked! Please tap again or interact with the page.");
        console.error(err);
      });
  } else {
    music.pause();
    toggleBtn.textContent = '▶️ Play Music';
    isPlaying = false;
  }
});
