// ============================================================
// Day 3 – Section 4 – Intégration pratique
// Travaillez uniquement dans ce fichier.
// Après CHAQUE étape :
//   1. Sauvegardez
//   2. Rafraîchissez
//   3. Vérifiez dans le panneau Elements
//   4. Vérifiez dans la Console
//   5. Si le résultat est faux → mettez un breakpoint dans Sources
// ============================================================

// SCÉNARIO 1 – Mise en surveillance
// Objectif : le réacteur passe en mode surveillance.
//
// 1a. Sélectionnez #reactor-status.
// 1b. Changez son textContent en "SURVEILLANCE".
// 1c. Retirez la classe status-ok, ajoutez status-warning.
// 1d. Changez aussi la classe de #status-light :
//     retirez rien (ou "off"), ajoutez "warning".
// 1e. Mettez #power-mw à "2950".
//
// Vérifiez dans Elements que les classes et le texte ont changé.


// SCÉNARIO 2 – Nouvelle alarme + journal
// Objectif : signaler un problème de température et l’écrire dans le journal.
//
// 2a. Créez un élément <div class="alarm">Température sortie élevée</div>.
// 2b. Insérez-le à la fin de #alarms-container (append).
// 2c. Créez un élément <div class="log-entry"> avec le texte
//     "[09:12:44] Alarme température créée".
// 2d. Ajoutez-le à la fin de #log-container.
//
// Vérifiez que les deux nouveaux éléments apparaissent bien dans Elements.


// SCÉNARIO 3 – Nettoyage
// Objectif : retirer une alarme inactive et désactiver le SCRAM.
//
// 3a. Supprimez #alarm-az5 (remove).
// 3b. Désactivez le bouton #scram (propriété disabled = true).
// 3c. Ajoutez un attribut title="SCRAM verrouillé – procédure en cours"
//     sur le bouton.
//
// Vérifiez dans Elements : l’alarme a disparu, le bouton est disabled.


// SCÉNARIO 4 – Barres de contrôle (données → DOM)
// Objectif : ajouter deux barres à partir de données.
//
const extraRods = [
  { id: 5, inserted: false },
  { id: 6, inserted: true }
];
//
// 4a. Pour chaque objet du tableau :
//     - créez un .control-rod
//     - ajoutez "inserted" si inserted === true
//     - mettez data-rod = id
//     - créez un <span> avec le numéro et append-le dans la barre
//     - append la barre dans #rods-container
//
// Vérifiez dans Elements que les barres 5 et 6 sont présentes
// et que la 6 a la classe inserted.


// SCÉNARIO 5 – Lecture de contrôle (DevTools)
// Objectif : vérifier l’état final avec la Console et Elements.
//
// 5a. Dans la Console, sélectionnez toutes les .alarm et affichez leur
//     textContent (utilisez querySelectorAll + forEach ou une boucle).
// 5b. Affichez le nombre de .control-rod présents.
// 5c. Affichez le dataset.mode de #operation-mode.
//
// Si une valeur est incorrecte, ouvrez Sources, posez un breakpoint
// sur la ligne qui a écrit la mauvaise valeur, et rejouez.
