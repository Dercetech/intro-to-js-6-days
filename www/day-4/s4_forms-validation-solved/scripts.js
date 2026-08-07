// ============================================================
// Section 04 – Forms : validation & FormData (SOLUTION)
// ============================================================

const form = document.querySelector("#signup-form");
const resultEl = document.querySelector("#result");

function showResult(msg) {
  console.log(msg);
  resultEl.textContent = msg;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("submit intercepté");

  if (!form.checkValidity()) {
    form.reportValidity();
    showResult("formulaire invalide");
    return;
  }

  const data = new FormData(form);

  // Lecture individuelle
  const firstName = data.get("firstName");
  const email = data.get("email");
  const level = data.get("level");
  const age = data.get("age");
  const message = data.get("message");
  const terms = data.get("terms");

  console.log("firstName:", firstName);
  console.log("email:", email);
  console.log("level:", level);

  // Parcourir toutes les entrées
  console.log("--- toutes les entrées ---");
  for (const [key, value] of data.entries()) {
    console.log(key, value);
  }

  // Validation JS supplémentaire
  if (age !== "" && Number(age) < 18) {
    showResult("Âge insuffisant (18+ requis pour cet exemple)");
    return;
  }

  let summary = "Inscription acceptée\n";
  summary += "Prénom : " + firstName + "\n";
  summary += "Email : " + email + "\n";
  summary += "Niveau : " + level + "\n";
  if (age) summary += "Âge : " + age + "\n";
  if (message) summary += "Message : " + message + "\n";
  summary += "Conditions : " + (terms ? "acceptées" : "non");

  showResult(summary);

  // form.reset(); // décommentez si vous voulez vider le formulaire
});
