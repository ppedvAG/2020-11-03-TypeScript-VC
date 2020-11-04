// ====================================================
// MAP(_action)
// nicht zu verwechseln mit Objekt Map und seinem Konstruktor Map()
// yourArray.map(el => _changedEl)
let stringsArr: string[] = ['d', 'ddd', 'ddddddd']
let results: number[] = stringsArr.map(el => el.length)
console.log('results :>> ', results)


// ====================================================
// Kopie vom Array in älteren ES-Versionen: mit slice()
let firstArray: number[] = [1, 2, 3]
let secondArray: number[] = firstArray.slice()

let sindGleich: boolean = firstArray === secondArray ? true : false
console.log('sindGleich :>> ', sindGleich); // false


// ====================================================
// Kopie vom Array in neueren ES-Versionen: mit spread
let arrayOne: string[] = ['f', 'd', 't']
let arrayTwo: string[] = [...arrayOne]

sindGleich = arrayOne === arrayTwo ? true : false
console.log('sindGleich :>> ', sindGleich); // false


// ====================================================
// Array zusammenfügen mit einem weiteren Element
let arrayThree: string[] = [...arrayTwo, 'u']

console.log('arrayThree :>> ', arrayThree);


// ====================================================
// array-ähnliche Strukturen zum Array überführen
let imagesCollection: HTMLCollectionOf<HTMLImageElement> = document.images // Type 'HTMLCollectionOf<HTMLImageElement>' is not assignable to type '[]'.ts(2322)
console.log('imagesCollection :>> ', imagesCollection);
let imagesArray: Array<HTMLImageElement> = imagesCollection as unknown as Array<HTMLImageElement>
console.log('imagesArray :>> ', imagesArray); // HTMLCollection

// bis ES5 inclusive
imagesArray = [].slice.call(imagesCollection)
console.log('imagesArray :>> ', imagesArray); // Array

// oder bei neueren ES (target in tsconfig muss auch entsprechend auf ^ES2015 umgestellt werden)
// imagesArray = Array.from(imagesCollection)
// console.log('imagesArray :>> ', imagesArray); // Array

// oder
// imagesArray = [...imagesCollection]
// console.log('imagesArray :>> ', imagesArray); // Array
