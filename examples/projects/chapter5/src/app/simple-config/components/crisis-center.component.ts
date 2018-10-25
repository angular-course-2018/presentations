import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-crisis-center',
    template: `
        <h1>Welcome to the Crisis Center</h1>
        <button (click)="getWonderWoman()">Wonder Woman</button>
        <button (click)="getBatman()">Batman</button>
    `
})
export class CrisisCenterComponent {
    constructor(
        private router: Router,
    ) { console.log('---------------loadded!!'); }

    getWonderWoman() {
        this.router.navigate(['/first/hero', 122]);
    }

    getBatman() {
        this.router.navigate(['/first/hero', 323]);
    }
}
