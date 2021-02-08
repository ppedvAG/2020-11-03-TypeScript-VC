class Mensch {
	fullName: string;
	constructor(public firstName: string, public lastName: string, public middleInitial?: string) {
		this.fullName = firstName + " " + middleInitial +
				 " " + lastName;
    }
    
}

let Max: Mensch = new Mensch('Max', 'Mustermann')

console.log('Max.firstName :>> ', Max.firstName);
console.log('Max.fullName :>> ', Max.fullName);


class Student extends Mensch {

    private age: number = 0

    constructor(public university: string, public firstName: string, public lastName: string, public middleInitial?: string) {
        super(firstName, lastName, middleInitial);        
    }
    public giveAge( ): string {
        return this.age >= 18 ? 'volljährig' : 'unvolljährig'         
    }
    public setAge(a: number): void {
        this.age = a
    }
}

let newStudent: Student = new Student('HTWK', 'Vadzim', 'Naumchyk', 'Kazimirowitsch')
newStudent.setAge(36)
console.log('newStudent.giveAge() :>> ', newStudent.giveAge());



// Klassen implementieren Interfaces

class Hipster implements IMensch { // extends nicht möglich
    firstName: string = ''
    lastName: string = ''
    middleInitial?: string | undefined;
    fullName: string = ''    
}
