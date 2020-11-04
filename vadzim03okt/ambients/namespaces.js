"use strict";
// Ohne Anlegen von zusätzlichen Gültigkeitbereichen, sind alle ts-Dateien im gleichen Namensraum
// let etwas: void; // Cannot redeclare block-scoped variable 'etwas'.ts(2451)
// primitives.ts(5, 5): 'etwas' was also declared here.
var myNewNamespace;
(function (myNewNamespace) {
    // ohne export ist die Variable in den benachbarten NS nicht verfügbar    
})(myNewNamespace || (myNewNamespace = {}));
var NS2;
(function (NS2) {
    etwas = 4; // die Variable aus dem höheren Scope, nicht aus dem benachbarten, wurde hier genommen
    var etw = myNewNamespace.etwas;
    etw = 'd';
})(NS2 || (NS2 = {}));
