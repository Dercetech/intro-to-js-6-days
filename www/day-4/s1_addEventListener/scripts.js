// ============================================================
// Section 01 – addEventListener & l’objet event
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez la page → observez Console + Elements.
// ============================================================

// 1. Premier écouteur simple
//    Sélectionnez #btn-simple.
//    Attachez un écouteur "click" qui affiche "bouton cliqué" dans la Console.
//    Vérifiez aussi dans Elements → Event Listeners que l’écouteur est bien présent.


// 2. Inspecter l’objet event
//    Dans le même handler (ou un nouveau), loguez :
//    - event.type
//    - event.target
//    - event.currentTarget
//    - event.timeStamp
//    Cliquez et observez les valeurs.


// 3. target vs currentTarget
//    Attachez un écouteur "click" sur #parent (le div).
//    Loguez event.target et event.currentTarget.
//    Cliquez d’abord sur le texte "Parent", puis sur le bouton #btn-child.
//    Notez la différence.


// 4. Événement input
//    Sélectionnez #field.
//    Attachez un écouteur "input".
//    À chaque frappe, loguez la valeur actuelle du champ (via event.target.value).


// 5. removeEventListener
//    Créez une fonction nommée handleRemovable.
//    Attachez-la en "click" sur #btn-remove.
//    Dans le handler, après le premier clic, retirez l’écouteur.
//    Vérifiez dans Elements → Event Listeners que l’écouteur a disparu.
//    (Le bouton ne doit plus réagir aux clics suivants.)


// 6. Affichage dans la page (bonus confort)
//    Sélectionnez #log.
//    À chaque événement intéressant, ajoutez aussi une ligne de texte dans #log
//    (en plus du console.log). Cela rend les tests plus visibles en salle.
