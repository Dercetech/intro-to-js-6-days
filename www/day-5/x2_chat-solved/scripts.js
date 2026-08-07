// ============================================================
// Extra x2 – Mini-chat (SOLUTION)
// ============================================================

const statusEl = document.querySelector("#status");
const messagesEl = document.querySelector("#messages");
const userEl = document.querySelector("#user");
const messageEl = document.querySelector("#message");
const btnLoad = document.querySelector("#btn-load");
const btnSend = document.querySelector("#btn-send");
const btnClear = document.querySelector("#btn-clear");

const API_URL = "https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5/api/chat.php";

function setStatus(state, message) {
  statusEl.dataset.state = state;
  statusEl.textContent = message;
}

function renderMessages(data) {
  messagesEl.innerHTML = "";
  data.forEach((m) => {
    const div = document.createElement("div");
    div.className = "msg";
    div.innerHTML = `<strong>${m.user}</strong> ${m.message} <time>${m.ts}</time>`;
    messagesEl.append(div);
  });
}

async function loadMessages(showLoading = true) {
  if (showLoading) {
    setStatus("loading", "Chargement…");
  }
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();
    renderMessages(data);
    setStatus("success", data.length + " message(s)");
  } catch (error) {
    console.error(error);
    setStatus("error", "Échec : " + error.message);
  }
}

async function sendMessage() {
  const user = userEl.value.trim() || "anonyme";
  const message = messageEl.value.trim();
  if (!message) {
    setStatus("error", "Message vide");
    return;
  }

  setStatus("loading", "Envoi…");
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, message })
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    messageEl.value = "";
    await loadMessages();
  } catch (error) {
    console.error(error);
    setStatus("error", "Échec : " + error.message);
  }
}

async function clearChat() {
  setStatus("loading", "Effacement…");
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "clear" })
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    messagesEl.innerHTML = "";
    setStatus("success", "Chat effacé");
  } catch (error) {
    console.error(error);
    setStatus("error", "Échec : " + error.message);
  }
}

btnLoad.addEventListener("click", loadMessages);
btnSend.addEventListener("click", sendMessage);
btnClear.addEventListener("click", clearChat);

async function pollMessages() {
  await loadMessages(false);
  setTimeout(pollMessages, 1000);
}

pollMessages();
