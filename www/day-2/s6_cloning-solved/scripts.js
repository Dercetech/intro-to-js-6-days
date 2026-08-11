// ============================================================
// Section 06 – Clonage : shallow vs deep · Corrigé
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

// 1. Shallow
const shallow = { ...original };
shallow.a.b.c.d = 99;
console.log("original après shallow →", original.a.b.c.d); // 99

// On remet la valeur pour la suite
original.a.b.c.d = 1;

// 2. Deep
const deep = structuredClone(original);
deep.a.b.c.d = 99;
console.log("original après deep →", original.a.b.c.d);   // 1
console.log("deep →", deep.a.b.c.d);                       // 99

// 3. JSON (limitations)
const withDate = { when: new Date(), empty: undefined };
const viaJson = JSON.parse(JSON.stringify(withDate));
console.log(viaJson);   // Date → string, undefined disparu
