# Fondamentaux JavaScript

Supports pratiques de la formation publique de six jours consacrée à JavaScript natif dans le navigateur et à l’utilisation continue des DevTools.

- [Portail Dercetech Training](https://training.dercetech.com/)
- [Notes complètes de la formation](https://training.dercetech.com/trainings/javascript-vanilla-devtools/)
- [Dépôt GitHub](https://github.com/Dercetech/intro-to-js-6-days)

Le site de formation contient les explications, les démonstrations et les checkpoints. Ce dépôt contient les fichiers à ouvrir, modifier, exécuter et déboguer pendant les exercices.

## Public et approche

La formation s’adresse aux personnes qui débutent en programmation, changent de métier ou travaillent déjà dans l’IT sans pratiquer JavaScript au quotidien.

Le parcours reste volontairement centré sur le navigateur :

- JavaScript moderne, sans framework ;
- HTML et CSS uniquement lorsqu’ils servent l’exercice JavaScript ;
- Console, Elements, Sources et Network utilisés dès qu’ils deviennent utiles ;
- exercices courts, puis intégrations plus complètes ;
- fichiers de départ séparés des corrigés.

## Démarrage rapide

### 1. Cloner le dépôt

```bash
git clone https://github.com/Dercetech/intro-to-js-6-days.git
cd intro-to-js-6-days
```

### 2. Lancer le serveur Node.js

Node.js est la méthode recommandée.

```bash
cd nodejs-webserver
npm start
```

Ouvrez ensuite [http://127.0.0.1:8081](http://127.0.0.1:8081).

### 3. Plan B : lancer le serveur Python

Depuis la racine du dépôt :

```bash
cd python-webserver
python server.py
```

Ouvrez ensuite [http://127.0.0.1:8000](http://127.0.0.1:8000).

Les deux serveurs exposent le dossier `www/`. Aucun build n’est nécessaire pour les exercices JavaScript classiques.

## Organisation des exercices

```text
www/
├── day-1/
│   ├── s2_hello-world/
│   └── s2_hello-world-solved/
├── day-2/
├── day-3/
├── day-4/
├── day-5/
└── day-6/
```

Conventions de nommage :

- `day-N/` identifie la journée ;
- `sN_nom/` est le dossier de départ d’une section ;
- `sN_nom-solved/` contient son corrigé ;
- `xN_nom/` est un extra ;
- `xN_nom-solved/` contient la version de référence de cet extra.

Travaillez d’abord dans le dossier sans suffixe. Consultez `-solved` après avoir essayé, ou pour comparer une approche. La page d’accueil locale, `www/index.html`, donne accès aux exercices, aux notes et aux solutions disponibles.

## Programme des six jours

### Jour 1 — Bases du langage

Objectif : exécuter du JavaScript dans le navigateur, comprendre les bases du langage et utiliser la Console comme outil de travail.

| Partie | Sujet | Support pratique |
| --- | --- | --- |
| 01 | [Contexte rapide](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-1.html#contexte-rapide) | Lecture et modèle mental |
| 02 | [Hello world & environnement](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-1.html#hello-world) | `www/day-1/s2_hello-world/` |
| 03 | [Variables, types et opérateurs](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-1.html#variables-types) | `www/day-1/s3_variables-types/` |
| 04 | [Boucles et fonctions](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-1.html#loops-functions) | `www/day-1/s4_loops-functions/` |
| 05 | [Exercices pure JS](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-1.html#pure-js-exercises) | `www/day-1/s5_pure-js-exercises/` |
| 06 | [Pièges classiques](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-1.html#classic-pitfalls) | `www/day-1/s6_pitfalls/` |
| Extra 1 | [Exploration du panneau Elements](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-1.html#elements-panel) | `www/day-1/x1_elements-panel/` |

DevTools : Console et Elements.

### Jour 2 — Structures de données & Debugger

Objectif : manipuler tableaux et objets, comprendre les closures et observer réellement l’exécution dans le panneau Sources.

| Partie | Sujet | Support pratique |
| --- | --- | --- |
| 01 | [Panneau Sources & premier débogage](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-2.html#sources-debugger) | `www/day-2/s1_sources-debugger/` |
| 02 | [Tableaux & méthodes essentielles](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-2.html#arrays) | `www/day-2/s2_arrays/` |
| 03 | [Objets, destructuring, spread/rest](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-2.html#objects) | `www/day-2/s3_objects/` |
| 04 | [Closures](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-2.html#closures) | `www/day-2/s4_closures/` |
| 05 | [`this` : comprendre le problème et les solutions](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-2.html#this-rules) | `www/day-2/s5_this/` |
| Extra 1 | [JSON](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-2.html#json) | `www/day-2/x1_json/` |
| Extra 2 | [localStorage](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-2.html#local-storage) | `www/day-2/x2_local-storage/` |

DevTools : Sources, breakpoints, pas à pas, Scope, Watch et call stack.

### Jour 3 — DOM manipulation

Objectif : sélectionner, lire, modifier, créer et supprimer des éléments sans bibliothèque, puis réunir ces opérations dans une petite intégration.

| Partie | Sujet | Support pratique |
| --- | --- | --- |
| 01 | [Sélection d’éléments](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-3.html#selecting) | `www/day-3/s1_selecting/` |
| 02 | [Lire et écrire le DOM](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-3.html#read-write) | `www/day-3/s2_read-write/` |
| 03 | [Créer, insérer et supprimer](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-3.html#create-insert) | `www/day-3/s3_create-insert/` |
| 04 | [Intégration pratique](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-3.html#integration) | `www/day-3/s4_integration/` |
| Extra 1 | [jQuery : lire le code des années 2010](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-3.html#jquery) | `www/day-3/x1_jquery/` |
| Extra 2 | [Reactor Hero](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-3.html#reactor-hero) | [Application en ligne](https://bad-sector.games/webgames/reactor-hero/?lang=en) |

DevTools : Elements et Console, avec vérification immédiate de l’état du DOM.

### Jour 4 — Événements & interfaces interactives

Objectif : comprendre le trajet d’un événement, traiter les interactions et appliquer la délégation d’événements aux interfaces dynamiques.

| Partie | Sujet | Support pratique |
| --- | --- | --- |
| 01 | [`addEventListener` & l’objet event](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-4.html#addEventListener) | `www/day-4/s1_addEventListener/` |
| 02 | [Phases, `preventDefault`, `stopPropagation`](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-4.html#phases-preventDefault) | `www/day-4/s2_phases-preventDefault/` |
| 03 | [Event delegation](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-4.html#event-delegation) | `www/day-4/s3_event-delegation/` |
| 04 | [Forms : validation & FormData](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-4.html#forms-validation) | `www/day-4/s4_forms-validation/` |
| 05 | [Keyboard & mouse essentials](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-4.html#keyboard-mouse) | `www/day-4/s5_keyboard-mouse/` |
| Extra 1 | [Le bouton qui fuit](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-4.html#moving-button) | `www/day-4/x1_moving-button/` |

DevTools : Event Listeners, breakpoints d’événements et inspection de l’objet `event`.

### Jour 5 — Asynchrone & Network

Objectif : gérer les résultats différés, les erreurs et les états d’interface, puis inspecter les échanges HTTP dans Network.

| Partie | Sujet | Support pratique |
| --- | --- | --- |
| 01 | [Promesses](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5.html#promises) | `www/day-5/s1_promises/` |
| 02 | [`async` / `await`](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5.html#async-await) | `www/day-5/s2_async-await/` |
| 03 | [`fetch` GET + panneau Network](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5.html#fetch-get) | `www/day-5/s3_fetch-get/` |
| 04 | [États UI, erreurs & Network approfondi](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5.html#fetch-states) | `www/day-5/s4_fetch-states/` |
| 05 | [localStorage / sessionStorage](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5.html#storage) | `www/day-5/s5_storage/` |
| Extra 1 | [axios : aperçu](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5.html#axios) | `www/day-5/x1_axios/` |
| Extra 2 | [Mini-chat](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5.html#chat) | `www/day-5/x2_chat/` |

DevTools : Network, statuts HTTP, payloads, réponses, timing et simulation des erreurs.

### Jour 6 — Architecture & polish

Objectif : découper le code en modules, reconnaître les fonctions d’ordre supérieur et organiser une application navigateur sans framework.

| Partie | Sujet | Support pratique |
| --- | --- | --- |
| 01 | [Modules ES dans le navigateur](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-6.html#modules) | `www/day-6/s1_modules/` |
| 02 | [Fonctions d’ordre supérieur](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-6.html#hof) | `www/day-6/s2_hof/` |
| 03 | [Architecture légère sans framework](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-6.html#architecture) | `www/day-6/s3_architecture/` |
| 04 | [Exploration libre & suite](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-6.html#exploration) | Bilan et exploration guidée |
| Extra 1 | [jQuery](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-6.html#jquery-extra) | `www/day-6/x1_jquery/` |
| Extra 2 | [Chart.js](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-6.html#chartjs-extra) | `www/day-6/x2_chartjs/` |
| Extra 3 | [Aperçu TypeScript](https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-6.html#typescript-extra) | `www/day-6/x3_typescript/` |

DevTools : Sources et Network avec modules ES, vérification des frontières entre fichiers et diagnostic d’intégration.

## Méthode de travail recommandée

Pour chaque section :

1. ouvrez les notes de la journée ;
2. ouvrez le dossier de départ correspondant ;
3. gardez les DevTools ouverts ;
4. modifiez les fichiers demandés ;
5. sauvegardez et rafraîchissez ;
6. observez le résultat avant de corriger ;
7. comparez avec le dossier `-solved` seulement après votre essai.

Un résultat inattendu n’est pas une invitation à modifier le code au hasard. Posez un breakpoint, inspectez les valeurs et avancez ligne par ligne.

## Convention pour les contributions

Les changements restent liés à une journée et à une section. Un commit doit représenter une unité pédagogique complète : notes, dossier de départ, corrigé et liens d’index associés.

Messages de commit recommandés :

```text
day 2 - section 4
day 3 - extra 1
day 5 - refine network exercise
docs - update six-day course guide
```

Évitez de mélanger plusieurs journées ou une modification d’infrastructure sans rapport dans le même commit.

## Licence et réutilisation

Les supports sont publiés pour accompagner la formation Dercetech. Pour toute réutilisation, adaptation ou diffusion, contactez [training@dercetech.com](mailto:training@dercetech.com).
