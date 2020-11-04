"use strict";
// VARIABLEN 
// bei es5 wird es zu var kompiliert, bei ^es2015 bleibt auch in js als let
// werden im Objekt window nicht gespeichert
var etwas = 4;
// const verhält sich gleich wie let, was die Scopes angeht
// werden im Objekt window gespeichert
var wasAnderes = 3;
// wasDrittes = 43; // nicht in TS
// ======================================================================================
// STRINGS:
var zk1 = String("text");
var zk2 = "zeichenkette";
var zk3 = 'zeichenkette "zk in zk"';
var zk4 = "zeichenkette\n\u00FCber mehrere\nZeilen";
var zk5 = "3";
// ======================================================================================
// NUMBERS:
var nr1 = Number("45");
console.log('typeof nr1 :>> ', typeof nr1);
// Objekt 'Number'
var nr2 = new Number("45");
console.log('typeof nr1 :>> ', typeof nr2);
// Objekt zu einer Primitiven
nr1 = nr2.valueOf();
console.log('typeof nr1 aus nr2:>> ', typeof nr1);
var nr3 = NaN;
var nr4 = Infinity;
// string to number cast in ES6, mit + oder -
// mit Plus bekommt man eine positive Zahl, mit Minus - eine Negative
var nr5 = -zk5 + -zk5;
console.log('nr5 :>> ', nr5);
// ======================================================================================
// UNDEFINED & NULL
// der Werte bei Variablen bevor sie initialisiert sind
var einePrimVariable;
// Zuweisung auch möglich, kann aber irritierend sein
var einePrimVarOhneTyp;
einePrimVarOhneTyp = undefined;
// kann ich eine Primitiven null zuweisen?
einePrimVarOhneTyp = null; // ja
var eineObjVariable = new String(); // object mit leerem String
var eineObjVariable2 = Object;
// kann ich einem Objekt undefined zuweisen?
// eineObjVariable2 = undefined; // Fehler, undefined ist für Primitiven und unbekannte Elemente gedacht
// eineObjVariable2 = null; // geht auch nicht, weil Object ist nicht nullable
// ======================================================================================
// VOID
// umfasst undefined und null
// normalerweise als Return-Typ bei Funktionen verwendet
var myVoid;
console.log('myVoid :>> ', myVoid); // undefined, wie bei anderen Primitiven ohne Initialisierung
// darf nicht als Wert verwendet werden
// myVoid = void; // Expression expected
// ======================================================================================
// NEVER
var myNever;
// bekommt nicht mal undefined als Default-Wert
// console.log('myNever :>> ', myNever); // Variable 'myNever' is used before being assigned.ts(2454)
// myNever = undefined; // akzeptiert auch kein undefined
// myNever = null; // akzeptiert auch kein null
//#region withNever
function werfeFehlerNever(message) {
    throw new Error(message);
}
function testeNever2() {
    return werfeFehlerNever("Test Fehlermeldung 2");
}
// document.getElementById('outp2')!.textContent += testeNever2() + " string";
document.getElementById('outp2').textContent += typeof testeNever2() + " string";
// console.log('testeNever2() :>> ', testeNever2()); // Uncaught Error: Test Fehlermeldung 2
//#endregion withNever
/* todo #1 */
//#region withoutNever
function werfeFehler(message) {
    throw new Error(message);
}
function testeNever() {
    return werfeFehler("Test Fehlermeldung");
}
// document.getElementById('outp1')!.textContent += testeNever() + " string";
// document.getElementById('outp1')!.textContent += typeof testeNever() + " string"; 
// console.log('testeNever() :>> ', testeNever()); // primitives.js:60 Uncaught Error: Test Fehlermeldung
//#endregion withoutNever
// 
