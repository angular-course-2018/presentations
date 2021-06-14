import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  template: `
        <div>
            <input type="checkbox" (change)="display = !display" />
            <span *ngIf="display">seconds passed: {{ time$ | async }}</span>
            <hr/>
            <span *ngIf="display">seconds passed delayed: {{ numberDelayed }}</span>
        </div>
    `
})
export class TimerComponent implements OnInit, OnDestroy {
  private timerSubscription: Subscription;
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
  numberDelayed: string;

  ngOnInit(): void {
    setTimeout(()=>(
      this.timerSubscription = this.time$.subscribe(num => this.numberDelayed = num)
    ), 6000);
  }
  display = false;
  time$ = interval(1000).pipe(
    map( num => `${Math.floor(num / 60)}:${num % 60}`)
  )
}

