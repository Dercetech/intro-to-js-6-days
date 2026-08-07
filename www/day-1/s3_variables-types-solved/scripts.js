// ============================================================
// Section 3 – Variables, types et opérateurs
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez la page → observez la Console.
// ============================================================

// 1. let vs const
//    Déclarez une variable avec let et une constante avec const.
//    Essayez de les réassigner. Que se passe-t-il ?
let score = 0;
score = 10; // Une variable déclarée avec let peut être réassignée.
console.log(score);

const MAX = 100;
// MAX = 200; // Une constante ne peut pas être réassignée.
console.log(MAX);


// 2. Types primitifs (les cinq du quotidien)
//    Créez une variable de chaque type :
//    number, string, boolean, null, undefined.
//    Affichez-les avec console.log et vérifiez leur type avec typeof.
const quantity = 42;
const message = "texte";
const isReady = true;
const emptyValue = null;
let pendingValue;

console.log(quantity, message, isReady, emptyValue, pendingValue);
console.log(typeof quantity);     // "number"
console.log(typeof message);      // "string"
console.log(typeof isReady);      // "boolean"
console.log(typeof emptyValue);   // "object" : particularité historique
console.log(typeof pendingValue); // "undefined"


// 3. bigint et symbol (juste pour savoir que ça existe)
//    Vous n’en aurez presque jamais besoin au début.
//    Créez un bigint et un symbol si vous voulez, sinon passez.
const largeNumber = 123n;
const uniqueKey = Symbol("clé");
console.log(largeNumber, typeof largeNumber);
console.log(uniqueKey, typeof uniqueKey);


// 4. Template literals
//    Créez deux variables (prénom, âge) et construisez une phrase
//    avec un template literal (backticks + ${}).
const firstName = "Alex";
const age = 28;
console.log(`Bonjour ${firstName}, tu as ${age} ans.`);


// 5. Opérateurs
//    - Arithmétiques : +, -, *, /, %, **
//    - Comparaison : ==, ===, !=, !==, <, >
//    - Logiques : &&, ||, !
//    - Nullish coalescing : ??
//    - Optional chaining : ?.
//    Testez-en plusieurs et affichez les résultats.
console.log(2 + 3, 5 - 2, 4 * 3, 10 / 2, 10 % 3, 2 ** 3);
console.log("5" == 5);  // true : égalité faible
console.log("5" === 5); // false : types différents
console.log(true && false, true || false, !true);

const displayName = null;
console.log(displayName ?? "Anonyme"); // "Anonyme"

const user = {};
console.log(user.address?.city); // undefined, sans erreur


// 6. Pièges de coercition (les classiques qui piquent)
//    Observez et expliquez (dans un commentaire) le résultat de :
//    "" + 1
//    "5" - 2
//    true + true
//    null == undefined
//    null === undefined
//    "10" == 10
//    "10" === 10
console.log("" + 1);              // "1" : + concatène avec une chaîne
console.log("5" - 2);             // 3 : - convertit "5" en nombre
console.log(true + true);          // 2 : true devient 1
console.log(null == undefined);    // true : égalité faible
console.log(null === undefined);   // false : types différents
console.log("10" == 10);          // true : égalité faible
console.log("10" === 10);         // false : types différents
