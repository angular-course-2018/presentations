import { User } from "./04_classes";

export class StackWithLogger<T> {
  private elements: T[] = [];

  push(element: T) {
    this.elements = [...this.elements, element];
    console.log(`pushed element ${JSON.stringify(element)}`);
  }

  pop(): T | undefined {
    const element = this.elements.pop();
    console.log(`popped element ${JSON.stringify(element)}`);

    return element;
  }

  peek(): T | undefined {
    if (this.elements.length === 0) {
      return undefined;
    }
    const element = this.elements[this.elements.length - 1];
    console.log(`peeked for ${JSON.stringify(element)}`);
    return element;
  }
}

const stackOfUsers = new StackWithLogger<User>();
stackOfUsers.push(new User('Danny'));
stackOfUsers.push(new User('Nabil'));

stackOfUsers.pop();
stackOfUsers.pop();
stackOfUsers.pop();
