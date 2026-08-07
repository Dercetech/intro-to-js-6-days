// ============================================================
// Day 3 – Extra 1 – jQuery (solution)
// ============================================================

// 0. Vérification
console.log(typeof jQuery); // "function"
console.log(typeof $);      // "function"

// 1. Sélection
const $status = $('#reactor-status');
console.log($status);

const $rods = $('.control-rod');
console.log($rods);
console.log($rods.length);

// 2. Lire et écrire du texte
console.log($status.text());          // "NOMINAL"
$status.text('SURVEILLANCE');
$('#power-mw').text('2800');

// 3. text() vs html()
const $firstLog = $('.log-entry').first();
$firstLog.text('<b>ALERTE</b>');      // affiche les caractères bruts
// $firstLog.html('<b>ALERTE</b>');  // interprète le HTML (décommentez pour tester)

// 4. Classes
$status.removeClass('status-ok').addClass('status-warning');
$status.toggleClass('status-critical');
console.log($status.hasClass('status-warning')); // true

// 5. Attributs et data
const $firstRod = $('.control-rod').first();
console.log($firstRod.attr('data-rod'));   // "1"
// ou : $firstRod.data('rod')

$('#operation-mode').attr('data-mode', 'test');
// ou : $('#operation-mode').data('mode', 'test');

$('#scram').prop('disabled', true);

// 6. Créer et insérer
const $newAlarm = $('<div class="alarm">Température secondaire</div>');
$('#alarms-container').append($newAlarm);

const $newLog = $('<div class="log-entry">[09:30:00] Alarme secondaire ajoutée (jQuery)</div>');
$('#log-container').append($newLog);

// 7. Chaînage
$('#reactor-status')
  .text('CRITIQUE')
  .removeClass('status-warning status-ok')
  .addClass('status-critical');

// 8. Événement léger
$('#scram').on('click', function () {
  console.log('SCRAM demandé via jQuery');
  $(this).text('SCRAM ENGAGÉ');
});

// 9. Vanilla vs jQuery – rappel
// Sélection :          document.querySelector('#id')     ≈  $('#id')
// Texte :              el.textContent = '…'              ≈  $el.text('…')
// Classes :            el.classList.add('x')             ≈  $el.addClass('x')
// Création + insert :  createElement + append            ≈  $('<div>…</div>').appendTo(…)
// Événement :          el.addEventListener('click', fn)  ≈  $el.on('click', fn)
