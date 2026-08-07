// ============================================================
// Section 03 – Architecture légère
// main.js reste mince : événements + rendu uniquement.
// ============================================================

// 1. Importez state depuis './state.js'
// 2. Importez increment, decrement, reset depuis './logic.js'

// 3. Écrivez la fonction render()
//    - met à jour #value avec state.value
//    - met à jour #history avec state.history joint par ' → '

// 4. Sur #btn-inc :
//    - remplacez le contenu de state par le résultat de increment(state)
//      (utilisez Object.assign(state, increment(state)) ou équivalent)
//    - appelez render()

// 5. Même principe pour #btn-dec et #btn-reset

// 6. Appelez render() une fois au démarrage
