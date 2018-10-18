"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gender;
(function (Gender) {
    Gender[Gender["Female"] = 0] = "Female";
    Gender[Gender["Male"] = 1] = "Male";
})(Gender || (Gender = {}));
var GenderStr;
(function (GenderStr) {
    GenderStr["Female"] = "Female";
    GenderStr["Male"] = "Male";
})(GenderStr || (GenderStr = {}));
class Person {
    // last name will be also public and will be autoassigned to this.lastname
    constructor(firstname, lastname) {
        this.lastname = lastname;
        // public property with function as a value
        this.walk = () => {
        };
        this.firstname = firstname;
    }
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
    // public function
    talk() {
        console.log(`i'm person`);
    }
}
exports.Person = Person;
class Teacher extends Person {
    // readonly variables can only be set inside contructor and cannot be chaged later.
    constructor(school, firstname, lastname) {
        // must call super as it defines custom contructor
        super(firstname, lastname);
        this.school = school;
    }
    talk() {
        console.log(`i'm teacher`);
    }
}
exports.Teacher = Teacher;
const teacher = new Teacher('Awesome School', 'Michael', 'Jackson');
teacher.talk();
console.log(teacher.fullname);
// (teacher as Person).talk();
