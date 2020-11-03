// Arrow Function

class Person {

    firstName: string = '';
    lastName: string = '';

    // ausführlich
    giveFullName: Function = (): string => {
        return this.firstName + this.lastName
    }

    // verkürzt
    // giveFullName: Function =  (): string => this.firstName + this.lastName


/*  klassische anonyme Funktion:
constructor() {
        this.giveFullName2 = this.giveFullName2.bind(this);
    }
    giveFullName2: Function = function (): string {
        return this.firstName + this.lastName
    }
 */
}

// ======================================================================
// GENERIC FUNCTIONS

let myStringsArray: Array<string> = ['str1', 'str2']

function createArray<T>(el1: T, el2: T, el3: T): Array<T> {
    // return [el1, el2, el3]
    return new Array(el1, el2, el3)
}

// wenn die Größe vom Array beliebig sein darf
// Das Szenario mit automatischem Array params wie in C# erreicht man in TS/JS durch Spread-Operator ...
/* function createAnyArray<T>(...someElements: T[]): Array<T> {
    let newArray: Array<T> = someElements;
    return newArray;
} */

// das Gleiche in Pfeil-Syntax
let createAnyArray: Function = <T>(...someElements: T[]): Array<T> => {
    let newArray: Array<T> = someElements;
    return newArray;
}

console.log('createAnyArray(1, 2) :>> ', createAnyArray(1, 2));
console.log('createAnyArray("d", "D", "e") :>> ', createAnyArray("d", "D", "e"));




