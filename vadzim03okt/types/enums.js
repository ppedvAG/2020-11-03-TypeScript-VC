"use strict";
// ===========================================
// enumerators
// mit enum wird ein Datentyp angelegt, Variablen von welchem nur die aufgelisteten Werte akzeptieren
var Pizzagröße;
(function (Pizzagröße) {
    Pizzagröße[Pizzagröße["klein"] = 0] = "klein";
    Pizzagröße[Pizzagröße["mittel"] = 1] = "mittel";
    Pizzagröße[Pizzagröße["gro\u00DF"] = 2] = "gro\u00DF";
    Pizzagröße[Pizzagröße["extraGro\u00DF"] = 3] = "extraGro\u00DF";
})(Pizzagröße || (Pizzagröße = {}));
// die möglichen Werte sind dann nur durch das enum selbst zu bekommen
var pGröße = Pizzagröße.klein; // 0, weil klein an der Stelle 0 in einem JS-Array steht
console.log('pGröße :>> ', pGröße);
// die Werte sind nummeriert
// die Indizes kann man ohne type-casting zuweisen
pGröße = 2; // 2
console.log('pGröße :>> ', pGröße);
// die Indizes kann man auch manuell vergeben
var Längegröße;
(function (Längegröße) {
    Längegröße[Längegröße["meter"] = 100] = "meter";
    Längegröße[Längegröße["kilometer"] = 100000] = "kilometer";
})(Längegröße || (Längegröße = {}));
var lGröße = Längegröße.meter;
console.log('lGröße :>> ', lGröße); // 100
var test = 'meter';
var mString = test;
console.log("Längergröße['meter'] :>> ", Längegröße['meter']); // 100
console.log('Längergröße[mString] :>> ', Längegröße[mString]); // 100
// die Werte sind strings
var pGrößeWert = Pizzagröße[1];
console.log('pGrößeWert :>> ', pGrößeWert); // mittel
