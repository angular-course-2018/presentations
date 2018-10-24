import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contact-us',
    template: `
        <h1>Contact us</h1>
        <input type="text" [value]="content" (keyup)="onChange($event.currentTarget.value)" />
        <button (click)="goBack()">back</button>
        <button (click)="save()">save</button>
        <br>
        <i>is dirty: {{isDirty}}</i>
    `
})
export class ContactUsComponent {
    content = '';
    isDirty = false;

    constructor(private router: Router) { }

    onChange(newVal) {
        this.isDirty = true;
        this.content = newVal;
    }

    goBack() {
        this.router.navigate(['/settings']);
    }

    save() {
        this.isDirty = false;
    }

    canDeactivate(): Observable<boolean> | boolean {
        if (this.isDirty) {
            return window.confirm('Are you sure??');
        }
        return true;
    }
}
