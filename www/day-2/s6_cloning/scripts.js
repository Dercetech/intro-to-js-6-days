// ============================================================
// Section 06 – Clonage : shallow vs deep
// ============================================================

const original = {
  a: {
    b: {
      c: {
        d: 1
      }
    }
  }
};

// 1. Shallow copy avec spread
//    Créez une copie superficielle.
//    Modifiez une valeur profondément imbriquée.
//    Vérifiez que l’original a aussi changé.


// 2. Deep copy avec structuredClone
//    Créez une vraie copie profonde.
//    Modifiez la même valeur imbriquée.
//    Vérifiez que l’original reste intact.


// 3. (Optionnel) Comparez avec JSON.parse(JSON.stringify(...))
//    Que se passe-t-il si l’objet contient une Date ou undefined ?
