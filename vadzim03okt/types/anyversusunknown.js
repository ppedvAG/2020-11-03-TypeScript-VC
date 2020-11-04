"use strict";
// beide akzeptieren alle weiteren Daten
var myAny;
myAny = "  asfdgdfg   ";
myAny.trim(); // Kein Type-Checking eingebaut
myAny = 346;
myAny = false;
var myUnknown;
myUnknown = "asfdgdfg";
// myUnknown.trim() // Verfügt über Type-Cheking: Object is of type 'unknown'.ts(2571)
myUnknown = 346;
myUnknown = false;
// Zuweisung von any und unknown anderen Datentypen:
var myString = myAny;
// myString = myUnknown; // Type 'unknown' is not assignable to type 'string'.ts(2322)
// Assertion
myUnknown = "  text " + new Date() + " text  ";
console.log('myUnknown.toUpperCase() :>> ', myUnknown.toUpperCase());
console.log('myUnknown.trim() :>> ', myUnknown.trim());
