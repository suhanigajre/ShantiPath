document.addEventListener("DOMContentLoaded", () => {
  loadEntries();
});

function saveEntry() {
  const entryText = document.getElementById("entry").value.trim();
  if (!entryText) return;

  const timestamp = new Date().toLocaleString();
  const fullEntry = `${timestamp} - ${entryText}`;
  const entries = JSON.parse(localStorage.getItem("journalEntries") || "[]");

  entries.unshift(fullEntry);
  localStorage.setItem("journalEntries", JSON.stringify(entries));
  document.getElementById("entry").value = "";
  loadEntries();
}

function loadEntries() {
  const entries = JSON.parse(localStorage.getItem("journalEntries") || "[]");
  const list = document.getElementById("entries-list");
  list.innerHTML = "";
  entries.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = entry;
    list.appendChild(li);
  });
}

function deleteAll() {
  if (confirm("Are you sure you want to delete all your journal entries?")) {
    localStorage.removeItem("journalEntries");
    loadEntries();
  }
}

function downloadEntries() {
  const entries = JSON.parse(localStorage.getItem("journalEntries") || "[]");
  if (entries.length === 0) {
    alert("No entries to download.");
    return;
  }

  const content = entries.join("\n\n");
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `ShantiPath_Journal_${new Date().toISOString().slice(0,10)}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
