"use strict";
// ===========================================
// LITERAL TYPES
// verschiedene Werte von Typ-String sind zuweisbar
var normalString = 't';
normalString = 'r';
console.log('normalString :>> ', normalString);
var literalTypeString;
literalTypeString = 'cm';
console.log('literalTypeString :>> ', literalTypeString);
console.log('typeof literalTypeString :>> ', typeof literalTypeString); // string, weil durch js ausgegeben
// function on(ev: EventType, callback: () => any){ // /* todo #2 */
function on(ev, callback) {
    document.getElementById('divClickMouseOver').textContent += " abgefangenes Event: " + ev.type; // in TS: EventType, in JS: MouseEvent
    callback();
    console.log('ev :>> ', ev);
}
// beachte: mouseOver nur bei Webseiten-Sicht im Browser, nicht bei Handy-Sicht
// um einen Wert für callback vorzubereiten:
var callBackFunction = function () {
    console.log('meldung aus callBackFunction');
};
