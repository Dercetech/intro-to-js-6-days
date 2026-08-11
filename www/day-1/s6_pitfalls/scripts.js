// ============================================================
// Section 6 – Pièges classiques
// Reproduisez, observez, puis cassez volontairement.
// Sauvegardez → rafraîchissez → regardez la Console.
// ============================================================

// 1. var vs let dans une boucle + setTimeout
//    Reproduisez l’exemple var (affiche 3, 3, 3).
//    Puis la version let (affiche 0, 1, 2).

const user = {
  name: "Alex",
  greet() {
    const that = this;

    // This dynamique
    setTimeout(function () {
      console.log("Bonjour (this) " + this.name);
      console.log("Bonjour (that) " + that.name);
    }, 1000);

    // This lexical (hérite scope parent)
    setTimeout(() => {
      console.log("Bonjour (arrow)" + this.name);
    }, 1000);
  }
};

user.greet()


// 2. Temporal Dead Zone
//    Décommentez la ligne console.log(a) avant la déclaration
//    et observez l’erreur.


// 3. Fonctions créées dans une boucle
//    Reproduisez la version var (toutes les fonctions affichent 3).
//    Passez en let et vérifiez que chaque fonction capture sa propre valeur.


// 4. Shadowing
//    Créez une variable à l’extérieur et une du même nom à l’intérieur
//    d’une fonction. Affichez les deux pour voir le masquage.
