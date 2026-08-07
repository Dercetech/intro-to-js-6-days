// ============================================================
// Extra 2 – localStorage · Corrigé
// ============================================================

// 1. Valeur simple
localStorage.setItem("prenom", "Alex");
const prenom = localStorage.getItem("prenom");
console.log("prenom →", prenom);

// 2. Objet via JSON
const user = { name: "Alex", age: 28 };
localStorage.setItem("user", JSON.stringify(user));

const raw = localStorage.getItem("user");
const restored = JSON.parse(raw);
console.log("user restauré →", restored);

// 3. Nettoyage
// localStorage.removeItem("prenom");
// localStorage.removeItem("user");
