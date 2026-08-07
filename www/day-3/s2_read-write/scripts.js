// ============================================================
// Day 3 – Section 2 – Lire et écrire le DOM
// Travaillez uniquement dans ce fichier.
// Sauvegardez → rafraîchissez → observez Console + panneau Elements.
// ============================================================

// 1. Lire du texte
//    Affichez le textContent de #reactor-status.


// 2. Écrire du texte
//    Changez le textContent de #reactor-status en "SURVEILLANCE".
//    Changez aussi le textContent de #power-mw en "2800".


// 3. textContent vs innerHTML (observation)
//    Essayez ces deux lignes (une après l’autre) et regardez le résultat :
//    document.querySelector('#log-1').textContent = '<b>ALERTE</b>';
//    document.querySelector('#log-2').innerHTML   = '<b>ALERTE</b>';
//    Quelle est la différence ? Pourquoi préfère-t-on textContent ?


// 4. Attributs
//    a) Lisez l’attribut data-rod de la première barre (.control-rod).
//    b) Ajoutez un attribut title="Barre de contrôle 3" sur la barre data-rod="3".
//    c) Supprimez l’attribut data-rod de la barre data-rod="5".


// 5. dataset
//    Lisez operation-mode via dataset (élément #operation-mode).
//    Puis changez-le en "test" avec dataset.


// 6. Propriétés directes
//    Désactivez le bouton #scram (propriété disabled = true).
//    Vérifiez ensuite dans Elements que l’attribut disabled est présent.


// 7. classList
//    a) Ajoutez la classe status-warning à #reactor-status
//       et retirez status-ok.
//    b) Basculez (toggle) la classe inactive sur #alarm-pressure.
//    c) Vérifiez avec contains si #alarm-az5 a la classe inactive.


// 8. style (inline) – à utiliser avec parcimonie
//    Mettez la température (#temp-value) en rouge via style.color.
//    Puis annulez ce style en vidant style.color.
//    (Préférez toujours classList quand c’est possible.)
