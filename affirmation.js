const affirmations = [
  "You are worthy of love and kindness 💖",
  "You have the power to create change 🌱",
  "Your feelings are valid and important 🌈",
  "You are exactly where you need to be ✨",
  "Peace begins with a deep breath 🕊️",
  "You are strong, even when it feels hard 💪",
  "Your light is needed in this world 🌟"
];

function showNewAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  document.getElementById("affirmation").textContent = affirmations[randomIndex];
}
