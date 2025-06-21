const entriesContainer = document.getElementById('entries-container');
const entryInput = document.getElementById('entry-input');

function postEntry() {
  const text = entryInput.value.trim();
  if (!text) return;

  const time = new Date().toLocaleString();
  const card = document.createElement('div');
  card.classList.add('entry-card');
  card.innerHTML = `<p>${text}</p><div class="timestamp">${time}</div>`;
  entriesContainer.prepend(card);

  // Optional: Store locally (can also be synced to backend if needed)
  const entry = { text, time };
  let saved = JSON.parse(localStorage.getItem('safespaceEntries')) || [];
  saved.unshift(entry);
  localStorage.setItem('safespaceEntries', JSON.stringify(saved));

  entryInput.value = '';
}

// Load saved entries on page load
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem('safespaceEntries')) || [];
  saved.forEach(entry => {
    const card = document.createElement('div');
    card.classList.add('entry-card');
    card.innerHTML = `<p>${entry.text}</p><div class="timestamp">${entry.time}</div>`;
    entriesContainer.appendChild(card);
  });
};
