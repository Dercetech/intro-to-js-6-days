// ============================================================
// Extra x2 – Mini-chat
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez → Network ouvert.
// ============================================================

const statusEl = document.querySelector("#status");
const messagesEl = document.querySelector("#messages");
const userEl = document.querySelector("#user");
const messageEl = document.querySelector("#message");
const btnLoad = document.querySelector("#btn-load");
const btnSend = document.querySelector("#btn-send");
const btnClear = document.querySelector("#btn-clear");

const API_URL = "https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5/api/chat.php";

// ------------------------------------------------------------
// 1. setStatus (même signature que les sections précédentes)
// ------------------------------------------------------------


// ------------------------------------------------------------
// 2. renderMessages(data)
//    data est un tableau d’objets { user, message, ts }
//    Videz #messages puis créez pour chaque entrée un <div class="msg">
//    contenant : <strong>user</strong> message <time>ts</time>
// ------------------------------------------------------------


// ------------------------------------------------------------
// 3. loadMessages
//    async
//    - ajoutez un paramètre showLoading = true
//    - si showLoading → setStatus loading
//    - fetch GET API_URL
//    - si !ok → throw
//    - data = await response.json()
//    - renderMessages(data)
//    - setStatus success avec le nombre de messages
//    - catch → setStatus error
// ------------------------------------------------------------


// ------------------------------------------------------------
// 4. sendMessage
//    async
//    - récupérer user et message (trim)
//    - si message vide → setStatus error "Message vide" et return
//    - setStatus loading
//    - fetch POST API_URL
//      headers: { "Content-Type": "application/json" }
//      body: JSON.stringify({ user, message })
//    - si !ok → throw
//    - vider le champ message
//    - appeler loadMessages() pour rafraîchir la liste
//    - catch → setStatus error
// ------------------------------------------------------------


// ------------------------------------------------------------
// 5. clearChat
//    async
//    - setStatus loading
//    - fetch POST API_URL
//      headers: { "Content-Type": "application/json" }
//      body: JSON.stringify({ action: "clear" })
//    - si !ok → throw
//    - vider #messages
//    - setStatus success "Chat effacé"
//    - catch → setStatus error
// ------------------------------------------------------------


// ------------------------------------------------------------
// 6. Brancher les trois boutons
// ------------------------------------------------------------


// ------------------------------------------------------------
// 7. Polling avec setTimeout
//    Écrivez une fonction async pollMessages()
//    - await loadMessages(false) pour ne pas faire clignoter le statut
//    - setTimeout(pollMessages, 1000)
//    Appelez pollMessages() une première fois.
// ------------------------------------------------------------
