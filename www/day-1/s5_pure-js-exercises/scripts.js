// ============================================================
// Section 5 – Exercices pure JS
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez la page → observez la Console.
// ============================================================

// 1. Convertisseur de température
//    Écrivez celsiusToFahrenheit(c) et fahrenheitToCelsius(f).
//    Testez les deux sens.

// 2. Force d’un mot de passe
//    Écrivez checkPasswordStrength(password) qui retourne un objet
//    avec : length, hasLower, hasUpper, hasDigit, hasSpecial, score.
//    score = nombre de critères vrais (0 à 5).

const [first, second] = [1, 2];

// 3. Statistiques sur un tableau
//    Écrivez sum, average, min et max.
//    Utilisez des boucles (pas encore .reduce, .Math.min... etc.).
//    Testez avec un petit tableau de nombres.

// 4. Utilitaires de chaînes
//    Écrivez capitalize(text), reverseString(text) et countVowels(text).
//    countVowels doit compter aeiouy (majuscules et minuscules).

const myCapitalizeFirstLetter = (someText) => someText.charAt(0).toUpperCase() + someText.slice(1);

let tonNom = "mikael"
tonNom[0] = tonNom[0].toLocaleUpperCase()

function myReverseString(someText) {
  let result = "";
  for (let i = someText.length - 1; i >= 0; i--) {
    result += someText.charAt(i);
  }
  return result;
}

function myCountVowels(someText) {
  let totalVowels = 0;
  for (let i = 0; i < someText.length; i++) {
    if ("a,e,i,o,u,y,A,E,I,O,U,Y".includes(someText.charAt(i))) {
      totalVowels += 1;
    }
  }
  return totalVowels;
}