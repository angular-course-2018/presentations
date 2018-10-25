import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-forbidden',
    template: `
        <h1 style="color: red">Forbidden!</h1>
        <button (click)="goBack()">Go Back</button>
    `
})
export class ForbiddenComponent {
    constructor(private location: Location) { }
    goBack() {
        this.location.back();
    }
}
