const calendar = document.getElementById("calendar");
const moodSelector = document.getElementById("mood-selector");
const moodEmojiContainer = document.getElementById("mood-emoji");
const daysInMonth = 30;

let selectedDay = null;
let moodData = JSON.parse(localStorage.getItem("moodData")) || {};

// Emojis for moods
const moods = {
  "😊": "Happy",
  "😔": "Sad",
  "😠": "Angry",
  "😰": "Anxious",
  "😐": "Neutral",
  "😇": "Grateful",
  "🥰": "Loved"
};

// Create the calendar
for (let i = 1; i <= daysInMonth; i++) {
  const day = document.createElement("div");
  day.classList.add("day");
  day.textContent = i;

  // Add mood emoji if already stored
  if (moodData[i]) {
    const mood = document.createElement("div");
    mood.textContent = moodData[i];
    mood.style.marginTop = "8px";
    day.appendChild(mood);
  }

  day.addEventListener("click", () => {
    selectedDay = i;
    moodSelector.style.display = "block";
  });

  calendar.appendChild(day);
}

// Add emoji options
for (let emoji in moods) {
  const moodEl = document.createElement("span");
  moodEl.textContent = emoji;
  moodEl.classList.add("mood");

  moodEl.addEventListener("click", () => {
    if (!selectedDay) return;

    moodData[selectedDay] = emoji;
    localStorage.setItem("moodData", JSON.stringify(moodData));
    location.reload(); // Refresh to show update
  });

  moodEmojiContainer.appendChild(moodEl);
}
// Reset mood data
document.getElementById("reset-btn").addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all mood data?")) {
    localStorage.removeItem("moodData");
    location.reload();
  }
});

// Download mood data
document.getElementById("download-btn").addEventListener("click", () => {
  let moodText = "🗓️ Your Mood Calendar Report:\n\n";

  for (let day = 1; day <= daysInMonth; day++) {
    if (moodData[day]) {
      moodText += `Day ${day}: ${moodData[day]} (${moods[moodData[day]]})\n`;
    } else {
      moodText += `Day ${day}: No Entry\n`;
    }
  }

  const blob = new Blob([moodText], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Mood_Report_ShantiPath.txt";
  link.click();
});
