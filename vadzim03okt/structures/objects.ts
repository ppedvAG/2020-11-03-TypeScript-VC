// ============================================
// Object & object
let myObject1: Object = new Object()
console.log('myObject :>> ', myObject1);
console.log('typeof myObject :>> ', typeof myObject1); // object


let myObject2: object = {}

console.log('myObject :>> ', myObject2);
console.log('typeof myObject :>> ', typeof myObject2); // object



// ============================================
// Methoden von Object
let myCar: {model: string, baujahr?: number} = {model: 'BMW', baujahr: 2005}
console.log('myCar :>> ', myCar);

// in TS geht is mit nicht optionalen Eigenschaften nicht, deswegen 'baujahr?'
delete myCar.baujahr;
console.log('myCar :>> ', myCar);

// gelöscht wurde die Property nur bei der Instanz BMW. Datentyp ist weiterhin mit 2 Props verwendbar
myCar = {model: 'Audi', baujahr: 2010}
console.log('myCar :>> ', myCar);


// ---------------------------------------------------
// Object.seal()
// am Object selbst die Methode aufrufen, weil sie beim Constructor gespeichert wurde
Object.seal(myCar)
// durch seal sind die Änderungen an der Structur vom Objekt nicht mehr möglich
// delete myCar.baujahr; // Console: objects.js:22 Uncaught TypeError: Cannot delete property 'baujahr' of #<Object>
console.log('myCar :>> ', myCar);

// Die Werte von den Props sind aber weiterhin änderbar
myCar.baujahr = 2015
console.log('myCar :>> ', myCar);


// ---------------------------------------------------
// Object.freeze()
// die Props zu read only Props umwandeln
Object.freeze(myCar)
// myCar.baujahr = 2020 // Uncaught TypeError: Cannot assign to read only property 'baujahr' of object '#<Object>'
console.log('myCar :>> ', myCar);


// ---------------------------------------------------
// Object.entries(), in ES2019
// let entries = Object.entries(myCar) // liefert Array of Arrays(2) mit key als string und value
// console.log('entries :>> ', entries);


// ---------------------------------------------------
// Object.assign() in ES2019
let otherCar: {model: string, baujahr?: number} = {model: 'dies', baujahr: 5}
// Object.assign(otherCar, myCar)
console.log('otherCar :>> ', otherCar); // {model: "Audi", baujahr: 2015}
