const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const downloadBtn = document.getElementById("download-btn");

let chatHistory = [];

function sendMessage() {
  const input = userInput.value.trim();
  if (!input) return;

  // Show user's message
  addMessage("user", input);
  userInput.value = "";

  // Generate AI response
  const aiResponse = generateAIResponse(input);
  addMessage("ai", aiResponse);
}

// Add a message to the chat box
function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender === "user" ? "user-message" : "ai-message");
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;

  // Save message to chat history
  chatHistory.push(`${sender === "user" ? "You" : "Shanti"}: ${text}`);
}

// Response generator based on simple keyword matching
function generateAIResponse(input) {
  const feelings = input.toLowerCase();

  if (feelings.includes("sad") || feelings.includes("down")) {
    return "I'm here for you. It's okay to feel sad sometimes. You're stronger than you think 🌼";
  }
  if (feelings.includes("happy") || feelings.includes("good")) {
    return "That’s wonderful to hear! Cherish every joyful moment 🌞";
  }
  if (feelings.includes("anxious") || feelings.includes("nervous")) {
    return "Take a deep breath. You’re safe here. Let’s take it one step at a time 🕊️";
  }
  if (feelings.includes("angry") || feelings.includes("frustrated")) {
    return "It's alright to feel that way. Let it out, then let it go. I'm with you 🫂";
  }
  if (feelings.includes("lonely")) {
    return "You’re not alone. I’m right here to listen. Sending a big virtual hug 💖";
  }
  if (feelings.includes("calm") || feelings.includes("peaceful")) {
    return "That’s lovely. Let’s hold on to that peaceful energy 🌿";
  }
  return "I'm listening. Tell me more about how you're feeling 💖";
}

// Download chat as text file
downloadBtn.addEventListener("click", () => {
  if (chatHistory.length === 0) {
    alert("No chat to download.");
    return;
  }

  const blob = new Blob([chatHistory.join("\n")], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Shanti_Talk_Chat.txt";
  link.click();
});

// Clear chat history and UI
function clearChat() {
  chatBox.innerHTML = "";
  chatHistory = [];
}
