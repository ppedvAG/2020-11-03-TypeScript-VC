"use strict";
// Arrow Function
var Person = /** @class */ (function () {
    function Person() {
        var _this = this;
        this.firstName = '';
        this.lastName = '';
        // ausführlich
        this.giveFullName = function () {
            return _this.firstName + _this.lastName;
        };
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
    return Person;
}());
// ======================================================================
// GENERIC FUNCTIONS
var myStringsArray = ['str1', 'str2'];
function createArray(el1, el2, el3) {
    // return [el1, el2, el3]
    return new Array(el1, el2, el3);
}
// wenn die Größe vom Array beliebig sein darf
// Das Szenario mit automatischem Array params wie in C# erreicht man in TS/JS durch Spread-Operator ...
/* function createAnyArray<T>(...someElements: T[]): Array<T> {
    let newArray: Array<T> = someElements;
    return newArray;
} */
// das Gleiche in Pfeil-Syntax
var createAnyArray = function () {
    var someElements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        someElements[_i] = arguments[_i];
    }
    var newArray = someElements;
    return newArray;
};
console.log('createAnyArray(1, 2) :>> ', createAnyArray(1, 2));
console.log('createAnyArray("d", "D", "e") :>> ', createAnyArray("d", "D", "e"));
