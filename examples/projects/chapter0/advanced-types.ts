enum Gender {
    Female,
    Male
}

enum GenderStr {
    Female = 'Female',
    Male = 'Male'
}

export interface Talkable {
  talk(): void;
}

export abstract class Person implements Talkable {
    // public by default
    firstname: string;

    // public getter
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }

    // last name will be also public and will be autoassigned to this.lastname
    constructor(firstname: string, public lastname: string) {
        this.firstname = firstname;
    }

    // public function
    talk() {
        console.log(`i'm person`);
    }

    // public property with function as a value
    walk = () => {

    }
}

export class Teacher extends Person {

    // readonly variables can only be set inside contructor and cannot be chaged later.
    constructor(readonly school: string, firstname: string, lastname: string) {
        // must call super as it defines custom contructor
        super(firstname, lastname);
    }

    // this function will hide the function on parent
    talk() {
        console.log(`i'm teacher`);
    }

    teach() {

    }
}


const teacher = new Teacher('Awesome School', 'Michael', 'Jackson');
teacher.talk();
console.log(teacher.fullname);

// (teacher as Person).talk();
