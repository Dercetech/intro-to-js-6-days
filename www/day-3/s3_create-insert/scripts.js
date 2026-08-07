// ============================================================
// Day 3 – Section 3 – Créer, insérer et supprimer
// Travaillez uniquement dans ce fichier.
// Sauvegardez → rafraîchissez → observez Console + panneau Elements.
// ============================================================

// 1. Créer un élément
//    Créez un élément <div>.
//    Donnez-lui la classe "log-entry".
//    Mettez-y le texte "[09:15:00] Test insertion manuelle".
//    (Ne l’insérez pas encore.)


// 2. L’erreur classique
//    Vous venez de créer un élément. Il existe en mémoire.
//    Il n’apparaît nulle part dans la page.
//    Vérifiez dans la Console que la variable contient bien un élément,
//    puis regardez le panneau Elements : il n’y est pas.
//    C’est normal. createElement ne l’ajoute pas tout seul.


// 3. Insérer avec append
//    Sélectionnez #log-container.
//    Ajoutez l’élément créé à l’étape 1 à la fin (append).


// 4. prepend
//    Créez un nouvel élément log-entry avec le texte
//    "[08:40:00] Pré-démarrage".
//    Insérez-le au début de #log-container (prepend).


// 5. before / after
//    Créez un élément <div class="alarm">Température secondaire</div>.
//    Sélectionnez #alarm-pressure.
//    Insérez le nouvel alarm juste après (after).


// 6. remove
//    Supprimez l’alarme #alarm-az5.


// 7. replaceWith
//    Créez un nouvel élément :
//    <div class="alarm">Pression critique – AZ-5 demandé</div>
//    Remplacez #alarm-pressure par ce nouvel élément (replaceWith).


// 8. Création à partir de données (pratique)
//    Vous avez ce tableau :
const newRods = [
  { id: 4, inserted: true },
  { id: 5, inserted: false },
  { id: 6, inserted: true }
];
//    Pour chaque objet, créez un .control-rod.
//    Ajoutez la classe "inserted" si inserted === true.
//    Mettez le numéro dans un <span> à l’intérieur.
//    Ajoutez data-rod avec la valeur de id.
//    Insérez tous ces éléments dans #rods-container.
