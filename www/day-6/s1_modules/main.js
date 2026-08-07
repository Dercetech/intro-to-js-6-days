// ============================================================
// Section 01 – Modules ES
// Travaillez dans ce fichier et créez les autres modules.
// Sauvegardez → rafraîchissez → observez Console + Sources + Network.
// ============================================================

// 1. Créez le fichier calc.js
//    Exportez deux éléments nommés :
//    - function calculateTTC(ht, rate = 0.2) qui retourne ht * (1 + rate)
//    - const DEFAULT_RATE = 0.2
//
// 2. Créez le fichier format.js
//    Exportez par défaut (export default) une fonction formatPrice(value)
//    qui retourne une chaîne formatée en euros français
//    (utilisez Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })).
//
// 3. Importez ici :
//    - calculateTTC et DEFAULT_RATE depuis './calc.js'
//    - formatPrice depuis './format.js' (default)
//
// 4. Sélectionnez les éléments :
//    #price-ht, #rate, #btn-calc, #result
//
// 5. Sur le clic du bouton :
//    - lisez les valeurs des inputs (Number(...))
//    - calculez le TTC avec calculateTTC
//    - affichez le résultat formaté dans #result avec formatPrice
//    - loguez aussi le résultat brut dans la Console
//
// 6. Vérifiez dans DevTools :
//    - Network : les fichiers calc.js et format.js sont bien chargés
//    - Sources : vous voyez les trois fichiers séparément
//    - Vous pouvez poser un breakpoint dans calculateTTC
