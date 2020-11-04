// ===========================================
// LITERAL TYPES

// verschiedene Werte von Typ-String sind zuweisbar
let normalString: string = 't'
normalString = 'r'
console.log('normalString :>> ', normalString);

let literalTypeString: 'cm'
literalTypeString = 'cm'
console.log('literalTypeString :>> ', literalTypeString);
console.log('typeof literalTypeString :>> ', typeof literalTypeString); // string, weil durch js ausgegeben

// let test = typeof literalTypeString === 'cm' ? true : false // false, weil kein overlap


// --------------------------------------------------
// literal type & union
type EventType = 'click' | 'mouseover'

// function on(ev: EventType, callback: () => any){ // /* todo #2 */
function on(ev: MouseEvent, callback: () => any){
    document.getElementById('divClickMouseOver')!.textContent += ` abgefangenes Event: ${ev.type}` // in TS: EventType, in JS: MouseEvent
    callback()
    console.log('ev :>> ', ev);
}
// beachte: mouseOver nur bei Webseiten-Sicht im Browser, nicht bei Handy-Sicht

// um einen Wert für callback vorzubereiten:
let callBackFunction: () => any = () => {
    console.log('meldung aus callBackFunction');
}