import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { scan, tap, pluck, takeWhile } from 'rxjs/operators';

@Component({
    selector: 'app-fibonacci-generator-component',
    styleUrls: ['./fibonacci-generator.component.scss'],
    templateUrl: './fibonacci-generator.component.html'
})
export class FibonacciGeneratorComponent {
    series$: Observable<number[]>;
    numOfItems = 7;

    start() {
        this.series$ = interval(500)
            .pipe(
                takeWhile(val => val < this.numOfItems),
                scan(x => [x[1], x[0] + x[1]], [0, 1]),
                pluck('0'),
                scan((acc, curr) => [...acc, curr], []),
                tap(a => this.logger(a)),
            );
    }

    logger(message) {
        console.log('FibonacciGeneratorComponent: ', message);
    }
}

