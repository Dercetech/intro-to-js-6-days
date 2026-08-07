// ============================================================
// Section 04 – Closures (niveau pratique)
// Observez le Scope dans le panneau Sources.
// ============================================================

// 1. Compteur privé
//    Écrivez une fonction createCounter() qui retourne
//    un objet { increment, getValue }.
//    La variable interne count ne doit pas être accessible de l’extérieur.


// 2. Fonction factory simple
//    createGreeter(greeting) retourne une fonction qui
//    prend un nom et renvoie la salutation complète.
//    Ex. const sayHello = createGreeter("Bonjour");
//        sayHello("Alex") → "Bonjour Alex"


// 3. Piège classique (à observer puis corriger)
//    Le code ci-dessous affiche toujours la dernière valeur.
//    Corrigez-le avec une closure (ou let).
function createFunctions() {
  const funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push(function () {
      console.log(i);
    });
  }
  return funcs;
}
const functions = createFunctions();
// functions[0](); // actuellement 3


// 4. Multiplication partielle
//    Écrivez multiplyBy(factor) qui retourne une fonction
//    multipliant son argument par factor.
//    const double = multiplyBy(2);
//    double(5) → 10
