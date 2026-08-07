// ============================================================
// Day 3 – Section 1 – Sélection d’éléments
// Travaillez uniquement dans ce fichier.
// Sauvegardez → rafraîchissez → observez Console + panneau Elements.
// ============================================================
// 1. Sélection par id
//    Sélectionnez l’élément #reactor-status et affichez-le.
// 2. Sélection par classe (premier élément)
//    Sélectionnez le premier élément .control-rod.
// 3. Sélection multiple
//    Sélectionnez tous les éléments .control-rod.
//    Affichez la NodeList et sa longueur.
// 4. Sélecteur d’attribut
//    Sélectionnez l’élément qui a l’attribut data-unit="C"
//    (sélecteur : .gauge[data-unit="C"])
// 5. Combinaisons
//    a) le bouton #scram
//    b) le premier .alarm qui n’a PAS la classe inactive
//       (sélecteur : .alarm:not(.inactive))
//    c) tous les .log-entry
// 6. Exploration live avec $0
//    Dans le panneau Elements, cliquez sur une barre de contrôle.
//    Dans la Console tapez $0 puis $0.dataset
//    (rien à écrire dans ce fichier)
// 7. Différence live vs statique (observation)
//    const rodsQS  = document.querySelectorAll('.control-rod');
//    const rodsOld = document.getElementsByClassName('control-rod');
//    Affichez les deux longueurs.
//    Puis, dans Elements, supprimez manuellement une barre
//    et comparez à nouveau les longueurs.
