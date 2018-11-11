export enum UserType {
  SIMPLE = 'SIMPLE',
  PRIVELEGED = 'PRIVELEGED'
}

export enum Numbered {
  ZERO,
  ONE,
  TWO
}


export interface CanWalk {
  walk(): void;
}
