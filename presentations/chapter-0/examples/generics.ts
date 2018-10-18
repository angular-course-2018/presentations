import { Teacher, Person, Talkable } from './advanced-types';

export class Group<T> {
    constructor(public group: T[]) {

    }

    makeThemTalk() {
        // talk function won't be available
        // this.group[0].talk();
    }
}

const groupOfTeachers = new Group<Teacher>([
    new Teacher('Awesome School', 'Elvis', 'Presley')
]);


groupOfTeachers.group[0].talk();
groupOfTeachers.group[0].teach();

export class GroupOfPeople<T extends Person>{
    constructor(public group: T[]) {

    }

    makeThemTalk() {
        // talk function is ok because T must extend Person
        for (const person of this.group) {
            person.talk();

            // teach does not exist on person
            // person.teach();
        }
    }
}


function tryToTalk(maybeWillTalk: unknown) {
    // this can't work as it is currently unknown
    // maybeWillTalk.talk();

    if (maybeWillTalk instanceof Person) {
        maybeWillTalk.talk();
    }
}

//this function returns tuple with defined types.
function tryPower(maybeNumber: unknown): [Error | null, number] {
    if (typeof maybeNumber !== 'number') {
        return [new Error('variable is not a number'), 0];
    }

    return [null, maybeNumber * maybeNumber];
}

const [powError, result] = tryPower(5);
const [powError2, result2] = tryPower('Awesomness');

type TeacherPoco = Pick<Teacher, 'firstname' | 'lastname'>;

