interface IMensch {
    firstName: string
    lastName: string
    middleInitial?: string
    fullName: string
}

interface IStudent extends IMensch {
    age: number // private nicht möglich bei Typdefinitionen
    university: string
}

let newMensch: IMensch = {
    firstName: 'dd', 
    lastName: 'sss',
    middleInitial: 'sss',
    fullName: 'adgsdfgfdg'
}
console.log('newMensch :>> ', newMensch);

let newMensch2: IMensch = new Mensch('dsf', 'asdf');
console.log('newMensch2 :>> ', newMensch2);

let newStudent2: IStudent = {
    firstName: 'dd', 
    lastName: 'sss',
    middleInitial: 'sss',
    fullName: 'adgsdfgfdg',
    age: 34,
    university: 'dgfsdfg'
}

console.log('newStudent2 :>> ', newStudent2);

// kompatibilität von Datentypen 
newMensch2 = newStudent2
console.log('newMensch2 :>> ', newMensch2);

// newStudent2 = newMensch // fehlende Props


