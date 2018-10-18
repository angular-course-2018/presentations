import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    constructor() {
        this.log('LoggerService instance created');
    }
    log(message: string) {
        console.log(message);
    }
}
