// ============================================================
// Section 07 – try / catch · Corrigé
// ============================================================

// 1. JSON invalide
try {
  const data = JSON.parse("{ invalid json }");
  console.log(data);
} catch (error) {
  console.log("Erreur capturée :", error.message);
}
console.log("Le script continue.");

// 2. Propriété sur null
const user = null;
try {
  console.log(user.name);
} catch (error) {
  console.log("Impossible d’accéder à name :", error.message);
}

// 3. finally
try {
  console.log("Dans le try");
} catch (error) {
  console.log("Erreur");
} finally {
  console.log("Toujours exécuté");
}
