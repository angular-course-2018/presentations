import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
    counter = 0;

    constructor() {
        console.log('GameService instance created');
    }

    startGame() {
        console.log('startGame called. counter: ', this.counter++);
    }
}
