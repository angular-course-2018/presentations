import { CanWalk } from './03_interfaces_enums';

export class User implements CanWalk {
  constructor(public name?: string) { }

  walk(meters: number = 10) {
    console.log(`user ${this.name} is walking ${meters} meters`);
  }
}


const user = new User('Danny');
user.walk();
user.walk(20);
