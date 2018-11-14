import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Card {
    id: number;
}

@Component({
    selector: 'app-simple-behavior-subject',
    template: `
        <div>{{source$ | async | json}}</div>
        <button (click)="addCard()">ADD</button>
    `
})
export class SimpleBehaviorSubjectComponent {
    id = 0;
    initialState: Card[] = [];

    source$ = new BehaviorSubject<Card[]>(this.initialState);

    addCard() {
        const currentState = this.source$.value;
        const newState = [...currentState, {id: this.id++}];
        this.source$.next(newState);
    }
}
