// ===========================================
// enumerators

// mit enum wird ein Datentyp angelegt, Variablen von welchem nur die aufgelisteten Werte akzeptieren
enum Pizzagröße {klein, mittel, groß, extraGroß}

// die möglichen Werte sind dann nur durch das enum selbst zu bekommen
let pGröße: Pizzagröße = Pizzagröße.klein // 0, weil klein an der Stelle 0 in einem JS-Array steht
console.log('pGröße :>> ', pGröße);

// die Werte sind nummeriert
// die Indizes kann man ohne type-casting zuweisen
pGröße = 2 // 2
console.log('pGröße :>> ', pGröße);

// die Indizes kann man auch manuell vergeben
enum Längegröße {meter = 100, kilometer = 100000}

let lGröße: Längegröße = Längegröße.meter
console.log('lGröße :>> ', lGröße); // 100

// wie komm ich durch eine String-Variable mit dem möglichen enum-Wert auf Index von diesem Wert: 
type längen = 'meter' | 'kilometer'
const test: string | längen = 'meter'
let mString: längen = test as längen
console.log("Längergröße['meter'] :>> ", Längegröße['meter']); // 100
console.log('Längergröße[mString] :>> ', Längegröße[mString]); // 100



// die Werte sind strings
let pGrößeWert: string = Pizzagröße[1]
console.log('pGrößeWert :>> ', pGrößeWert) // mittel



