// ============================================================
// Section 3 – Variables, types et opérateurs
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez la page → observez la Console.
// ============================================================

// 1. let vs const
//    Déclarez une variable avec let et une constante avec const.
//    Essayez de les réassigner. Que se passe-t-il ?
let score = 0;
// console.log(score)

const max = 10
// console.log(max)

score = max * 2;

// 2. Types primitifs (les cinq du quotidien)
//    Créez une variable de chaque type :
//    number, string, boolean, null, undefined.
//    Affichez-les avec console.log et vérifiez leur type avec typeof.
let quantiy = 42
const message = "texte"
let isReady_b = true
let empty = null;
let theUndefined

// console.log(typeof empty)

// empty = 1
// console.log(typeof empty)
// empty = true
// console.log(typeof empty)
// empty = "true"
// console.log(typeof empty)
// empty = null
// console.log(typeof empty)

// 3. bigint et symbol (juste pour savoir que ça existe)
//    Vous n’en aurez presque jamais besoin au début.
//    Créez un bigint et un symbol si vous voulez, sinon passez.


// 4. Template literals
//    Créez deux variables (prénom, âge) et construisez une phrase
//    avec un template literal (backticks + ${}).
// console.log(`hello ${score * score}`)

// 5. Opérateurs
//    - Arithmétiques : +, -, *, /, %, **
//    - Comparaison : ==, ===, !=, !==, <, >
//    - Logiques : &&, ||, !
//    - Nullish coalescing : ??
//    - Optional chaining : ?.
//    Testez-en plusieurs et affichez les résultats.

let five = 5 // 0101
let one = 1 //  0001
let two = 2 //  0010

// Bitwise AND
// console.log(five & one)

// Bitwise OR
// console.log(five | two)

function funcOne() {
  console.log('I do something')
  return { result: null }
}

function funcTwo() {
  console.log('Me too')
  return null
}

console.log(funcTwo().result?.test)

// let result = funcOne() || funcTwo()
// console.log(result)

// result = funcOne() | funcTwo()
// console.log(result)

// result = funcOne() && funcTwo()
// console.log(result)

// result = funcOne() & funcTwo()
// console.log(result)

// result = !!funcTwo();
// debugger


// 6. Pièges de coercition (les classiques qui piquent)
//    Observez et expliquez (dans un commentaire) le résultat de :
//    "" + 1
//    "5" - 2
//    true + true
//    null == undefined
//    null === undefined
//    "10" == 10
//    "10" === 10
