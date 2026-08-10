// ============================================================
// Section 4 – Boucles et fonctions
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez la page → observez la Console.
// ============================================================

// 1. Boucle for
//    Affichez les nombres de 0 à 9 avec une boucle for.
// let i;
// for (i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

// 2. Boucle while
//    Affichez les nombres de 10 à 1 (dans cet ordre) avec une boucle while.


// 3. for...of et for...in (simple prise de conscience)
//    Créez un petit tableau.
//    Parcourez-le avec for...of (valeurs) et for...in (indices).
//    Observez la différence. On reviendra aux méthodes de tableaux plus tard.


// 4. Fonction déclaration
//    Écrivez une fonction declaration appelée isEven qui reçoit un nombre
//    et retourne true s’il est pair, false sinon.
//    Testez-la.


// 5. Fonction expression
//    Écrivez la même logique en function expression (const isOdd = function...).

// console.log(`it is ${myFunc()}`)

// function myFunc() {
// let myFunc = function () {
// let myFunc = () => {
//   return true;
// }
// let myRes = () => true
// console.log(`it is now ${myRes()}`)

// function myHandler(theValue) {
const myHandler = (theValue) => {
  console.log("done processing: " + theValue)
}

// function processSomething(myInput, aHandler) {
((myInput, aHandler) => aHandler(myInput + 2))(3, (theValue) => console.log("done processing: " + theValue))

// processSomething(2, myHandler);


// ((myInput, aHandler) => aHandler(myInput + 2))(2, (theValue) => console.log("done processing: " + theValue))



// 6. Arrow function
//    Écrivez une arrow function calculateVAT(price, rate = 0.20)
//    qui retourne le prix TTC.


// 7. Paramètre par défaut + template literal
//    Écrivez une fonction formatName(firstName, lastName = "Doe")
//    qui retourne une chaîne du type "Prénom Nom".


// 8. Petite validation
//    Écrivez une fonction isLongEnough(text, minLength = 8)
//    qui retourne true si la chaîne est assez longue.


// 9. Boucle + fonction
//    Écrivez une fonction sumUpTo(n) qui utilise une boucle
//    pour retourner la somme des entiers de 1 à n.
