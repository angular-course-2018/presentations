import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class GameService {


    counter = 0;

    constructor(private logger: LoggerService) {
        logger.log('GameService instance created');
    }

    startGame() {
        this.logger.log('startGame called. counter: ' + this.counter++);
    }
}
