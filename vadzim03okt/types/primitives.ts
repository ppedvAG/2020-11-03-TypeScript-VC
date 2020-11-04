// VARIABLEN 

// bei es5 wird es zu var kompiliert, bei ^es2015 bleibt auch in js als let
// werden im Objekt window nicht gespeichert
let etwas = 4
// const verhält sich gleich wie let, was die Scopes angeht

// werden im Objekt window gespeichert
var wasAnderes = 3

// wasDrittes = 43; // nicht in TS

// ======================================================================================
// STRINGS:

let zk1 = String("text")

let zk2 = "zeichenkette"

let zk3 = 'zeichenkette "zk in zk"'

let zk4 = `zeichenkette
über mehrere
Zeilen`

let zk5: string = "3"

// ======================================================================================
// NUMBERS:

let nr1 = Number("45");

console.log('typeof nr1 :>> ', typeof nr1)

// Objekt 'Number'
let nr2 = new Number("45");
console.log('typeof nr1 :>> ', typeof nr2)

// Objekt zu einer Primitiven

nr1 = nr2.valueOf();

console.log('typeof nr1 aus nr2:>> ', typeof nr1)

let nr3: number = NaN;

let nr4: number = Infinity;

// string to number cast in ES6, mit + oder -
// mit Plus bekommt man eine positive Zahl, mit Minus - eine Negative

let nr5: number = -zk5 + -zk5;

console.log('nr5 :>> ', nr5);


// ======================================================================================
// UNDEFINED & NULL

// der Werte bei Variablen bevor sie initialisiert sind
let einePrimVariable: string;

// Zuweisung auch möglich, kann aber irritierend sein
let einePrimVarOhneTyp;
einePrimVarOhneTyp = undefined;

// kann ich eine Primitiven null zuweisen?
einePrimVarOhneTyp = null; // ja

let eineObjVariable = new String(); // object mit leerem String
let eineObjVariable2 = Object;

// kann ich einem Objekt undefined zuweisen?
// eineObjVariable2 = undefined; // Fehler, undefined ist für Primitiven und unbekannte Elemente gedacht

// eineObjVariable2 = null; // geht auch nicht, weil Object ist nicht nullable



// ======================================================================================
// VOID
// umfasst undefined und null
// normalerweise als Return-Typ bei Funktionen verwendet
let myVoid: void;

console.log('myVoid :>> ', myVoid); // undefined, wie bei anderen Primitiven ohne Initialisierung

// darf nicht als Wert verwendet werden
// myVoid = void; // Expression expected



// ======================================================================================
// NEVER

let myNever: never;
// bekommt nicht mal undefined als Default-Wert
// console.log('myNever :>> ', myNever); // Variable 'myNever' is used before being assigned.ts(2454)

// myNever = undefined; // akzeptiert auch kein undefined

// myNever = null; // akzeptiert auch kein null

//#region withNever
// function werfeFehlerNever(message:string): never {
//     throw new Error(message);
// }

// function testeNever2() {
//     return werfeFehlerNever("Test Fehlermeldung 2")
// }
// document.getElementById('outp2')!.textContent += testeNever2() + " string";
// document.getElementById('outp2')!.textContent += typeof testeNever2() + " string";
// console.log('testeNever2() :>> ', testeNever2()); // Uncaught Error: Test Fehlermeldung 2
//#endregion withNever

/* todo #1 */

//#region withoutNever
function werfeFehler(message:string) {
    throw new Error(message);
}

function testeNever() {
    return werfeFehler("Test Fehlermeldung")
}
// document.getElementById('outp1')!.textContent += testeNever() + " string";
// document.getElementById('outp1')!.textContent += typeof testeNever() + " string"; 

// console.log('testeNever() :>> ', testeNever()); // primitives.js:60 Uncaught Error: Test Fehlermeldung
//#endregion withoutNever


// 

