"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// ====================================================
// MAP(_action)
// nicht zu verwechseln mit Objekt Map und seinem Konstruktor Map()
// yourArray.map(el => _changedEl)
var stringsArr = ['d', 'ddd', 'ddddddd'];
var results = stringsArr.map(function (el) { return el.length; });
console.log('results :>> ', results);
// ====================================================
// Kopie vom Array in älteren ES-Versionen: mit slice()
var firstArray = [1, 2, 3];
var secondArray = firstArray.slice();
var sindGleich = firstArray === secondArray ? true : false;
console.log('sindGleich :>> ', sindGleich); // false
// ====================================================
// Kopie vom Array in neueren ES-Versionen: mit spread
var arrayOne = ['f', 'd', 't'];
var arrayTwo = __spreadArrays(arrayOne);
sindGleich = arrayOne === arrayTwo ? true : false;
console.log('sindGleich :>> ', sindGleich); // false
// ====================================================
// Array zusammenfügen mit einem weiteren Element
var arrayThree = __spreadArrays(arrayTwo, ['u']);
console.log('arrayThree :>> ', arrayThree);
// ====================================================
// array-ähnliche Strukturen zum Array überführen
var imagesCollection = document.images; // Type 'HTMLCollectionOf<HTMLImageElement>' is not assignable to type '[]'.ts(2322)
console.log('imagesCollection :>> ', imagesCollection);
var imagesArray = imagesCollection;
console.log('imagesArray :>> ', imagesArray); // HTMLCollection
// bis ES5 inclusive
imagesArray = [].slice.call(imagesCollection);
console.log('imagesArray :>> ', imagesArray); // Array
// oder bei neueren ES (target in tsconfig muss auch entsprechend auf ^ES2015 umgestellt werden)
// imagesArray = Array.from(imagesCollection)
// console.log('imagesArray :>> ', imagesArray); // Array
// oder
// imagesArray = [...imagesCollection]
// console.log('imagesArray :>> ', imagesArray); // Array
