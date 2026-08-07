// ============================================================
// Section 01 – Sources & premier débogage
// Ces fonctions contiennent des bugs volontaires.
// Ne corrigez PAS en devinant. Utilisez le débogueur.
// ============================================================

// Bug 1 – Off-by-one + valeur incorrecte
// La fonction doit retourner la somme des entiers de 1 à n inclus.
// Actuellement elle donne un résultat faux.
function sumUpTo(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}
console.log("sumUpTo(5) →", sumUpTo(5)); // attendu 15


// Bug 2 – Variable non déclarée / TDZ style
// Cette fonction doit simplement retourner le double du nombre.
function double(x) {
  // console.log(value); // décommentez pour voir l’erreur
  let value = x * 2;
  return value;
}
console.log("double(7) →", double(7));


// Bug 3 – Mauvais retour + coercion
// Doit retourner true si le nombre est pair, false sinon.
function isEven(num) {
  if (num % 2 = 0) {   // attention à l’opérateur
    return true;
  }
}
console.log("isEven(4) →", isEven(4));
console.log("isEven(5) →", isEven(5));


// Bug 4 – Closure + var (le classique)
// Chaque fonction doit afficher son propre index.
function createPrinters() {
  const printers = [];
  for (var i = 0; i < 3; i++) {
    printers.push(function () {
      console.log("index =", i);
    });
  }
  return printers;
}
const printers = createPrinters();
printers[0](); // devrait afficher 0
printers[1](); // devrait afficher 1
printers[2](); // devrait afficher 2


// Bug 5 – Accès à une propriété inexistante
// Doit retourner le nom en majuscules, ou "inconnu" si pas de nom.
function getUpperName(user) {
  return user.name.toUpperCase();
}
console.log(getUpperName({ name: "Alex" }));
console.log(getUpperName({}));           // plantage volontaire
console.log(getUpperName(null));         // plantage volontaire


// Bug 6 – À inspecter avec Watch et Scope
// Pourquoi le résultat final est-il faux ?
function calculate(a, b) {
  let result = a + b;
  result = result * 2;
  let tax = result * 0.2;
  // inspectez result et tax ici
  return result + tax;
}
console.log("calculate(10, 5) →", calculate(10, 5));
