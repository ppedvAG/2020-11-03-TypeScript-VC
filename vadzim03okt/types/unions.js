"use strict";
// ===========================================
// UNIONS
var datum;
datum = new Date();
console.log('typeof datum :>> ', typeof datum); // object
datum = '2020-11-04';
console.log('typeof datum :>> ', typeof datum); // string
// bei Objekten, die durch mehrere Konstruktoren angelegt werden können, 
// kann man die möglichen Werte für den Konstruktor in der gleichen Variable vom Union-Type abspeichern
datum = new Date(datum);
console.log('typeof datum :>> ', typeof datum); // object
console.log('datum :>> ', datum);
var datum2;
// ...
