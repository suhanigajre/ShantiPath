const circle = document.getElementById('circle');
const instruction = document.getElementById('instruction');
const music = document.getElementById('bg-music');

let isMusicPlaying = false;

function toggleMusic() {
  if (!isMusicPlaying) {
    music.volume = 1;
    music.play().catch(err => {
      console.error("Music play error:", err);
    });
  } else {
    music.pause();
  }
  isMusicPlaying = !isMusicPlaying;
}

function breatheAnimation() {
  instruction.innerText = 'Inhale…';
  circle.className = 'circle grow';

  setTimeout(() => {
    instruction.innerText = 'Hold…';
    circle.className = 'circle hold';
  }, 4000);

  setTimeout(() => {
    instruction.innerText = 'Exhale…';
    circle.className = 'circle shrink';
  }, 7000);
}

breatheAnimation();
setInterval(breatheAnimation, 10000);
