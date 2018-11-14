import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
    selector: 'app-timer',
    template: `
        <div>
            <input type="checkbox" (change)="display = !display" />
            <span *ngIf="display">seconds passed: {{ time$ | async }}</span>
        </div>
    `
})
export class TimerComponent {
    display = false;
    time$ = interval(1000);
}
