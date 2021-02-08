"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mensch = /** @class */ (function () {
    function Mensch(firstName, lastName, middleInitial) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.fullName = firstName + " " + middleInitial +
            " " + lastName;
    }
    return Mensch;
}());
var Max = new Mensch('Max', 'Mustermann');
console.log('Max.firstName :>> ', Max.firstName);
console.log('Max.fullName :>> ', Max.fullName);
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(university, firstName, lastName, middleInitial) {
        var _this = _super.call(this, firstName, lastName, middleInitial) || this;
        _this.university = university;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.middleInitial = middleInitial;
        _this.age = 0;
        return _this;
    }
    Student.prototype.giveAge = function () {
        return this.age >= 18 ? 'volljährig' : 'unvolljährig';
    };
    Student.prototype.setAge = function (a) {
        this.age = a;
    };
    return Student;
}(Mensch));
var newStudent = new Student('HTWK', 'Vadzim', 'Naumchyk', 'Kazimirowitsch');
newStudent.setAge(36);
console.log('newStudent.giveAge() :>> ', newStudent.giveAge());
// Klassen implementieren Interfaces
var Hipster = /** @class */ (function () {
    function Hipster() {
        this.firstName = '';
        this.lastName = '';
        this.fullName = '';
    }
    return Hipster;
}());
