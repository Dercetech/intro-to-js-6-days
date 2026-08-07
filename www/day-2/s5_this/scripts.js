// ============================================================
// Section 05 – this : comprendre le problème et les solutions
// Observez this dans le panneau Sources (Scope).
// ============================================================

// 1. Le problème classique
//    Créez un objet user avec une méthode greet.
//    Appelez user.greet(), puis extrayez la méthode dans const fn.
//    Appelez fn() et observez la perte de this.


// 2. L’ancienne solution : that / self
//    Dans une méthode, conservez this dans une variable that.
//    Utilisez that dans une fonction classique passée à setTimeout.


// 3. Amélioration : bind
//    Liez user.greet à user avec bind, puis appelez la fonction liée.


// 4. Solution moderne : les arrow functions
//    Remplacez la fonction classique passée à setTimeout
//    par une arrow function et observez le this lexical.
