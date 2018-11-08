import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({})
export class SimpleBehaviorSubjectComponent implements OnInit {
    initialState = {
        cards: []
    };

    source = new BehaviorSubject(this.initialState);

    onChange() {
        this.source.next({})
    }


};