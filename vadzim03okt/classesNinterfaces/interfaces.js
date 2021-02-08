"use strict";
var newMensch = {
    firstName: 'dd',
    lastName: 'sss',
    middleInitial: 'sss',
    fullName: 'adgsdfgfdg'
};
console.log('newMensch :>> ', newMensch);
var newMensch2 = new Mensch('dsf', 'asdf');
console.log('newMensch2 :>> ', newMensch2);
var newStudent2 = {
    firstName: 'dd',
    lastName: 'sss',
    middleInitial: 'sss',
    fullName: 'adgsdfgfdg',
    age: 34,
    university: 'dgfsdfg'
};
console.log('newStudent2 :>> ', newStudent2);
// kompatibilität von Datentypen 
newMensch2 = newStudent2;
console.log('newMensch2 :>> ', newMensch2);
// newStudent2 = newMensch // fehlende Props
