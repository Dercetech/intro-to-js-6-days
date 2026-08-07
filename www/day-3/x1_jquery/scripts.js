// ============================================================
// Day 3 – Extra 1 – jQuery
// Travaillez uniquement dans ce fichier.
// jQuery est déjà chargé (voir la balise <script> dans index.html).
// Sauvegardez → rafraîchissez → observez Console + Elements.
// ============================================================

// 0. Vérification rapide
//    Tapez dans la Console : typeof jQuery  et  typeof $
//    Les deux doivent renvoyer "function".


// 1. Sélection – le $()
//    Sélectionnez #reactor-status avec jQuery et affichez le résultat.
//    Sélectionnez toutes les .control-rod.


// 2. Lire et écrire du texte
//    Lisez le texte de #reactor-status avec .text().
//    Changez-le en "SURVEILLANCE" avec .text('SURVEILLANCE').
//    Changez aussi #power-mw en "2800".


// 3. text() vs html()
//    Essayez sur #log-1 (ou le premier .log-entry) :
//    .text('<b>ALERTE</b>')   puis   .html('<b>ALERTE</b>')
//    Observez la différence (même logique que textContent / innerHTML).


// 4. Classes
//    Sur #reactor-status :
//    - retirez status-ok
//    - ajoutez status-warning
//    Utilisez .removeClass() et .addClass().
//    Puis testez .toggleClass('status-critical') et .hasClass('status-warning').


// 5. Attributs et data
//    Lisez l’attribut data-rod de la première .control-rod (.attr ou .data).
//    Changez data-mode de #operation-mode en "test".
//    Désactivez le bouton #scram avec .prop('disabled', true).


// 6. Créer et insérer
//    Créez un nouvel élément alarme :
//    $('<div class="alarm">Température secondaire</div>')
//    Ajoutez-le à la fin de #alarms-container (.append).
//    Créez aussi une entrée de journal et .append() dans #log-container.


// 7. Chaînage (le style classique jQuery)
//    En une seule expression, sélectionnez #reactor-status,
//    changez son texte, retirez status-ok, ajoutez status-critical.
//    (C’est la promesse historique de jQuery : code court et enchaîné.)


// 8. Événement léger
//    Attachez un click sur #scram avec .on('click', function () { ... }).
//    Dans le handler : affichez un message dans la Console
//    et changez le texte du bouton en "SCRAM ENGAGÉ".


// 9. Vanilla vs jQuery – même action
//    Réécrivez mentalement (ou dans un commentaire) l’équivalent vanilla
//    de ce que vous venez de faire avec .text(), .addClass(), .append().
//    C’est le point important de cet extra.
