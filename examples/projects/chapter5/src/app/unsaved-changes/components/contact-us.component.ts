import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CanDeactivateHook } from '../interfaces/can-deactivate-hook.interface';
import { AppService } from '../app.service';

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
export class ContactUsComponent implements CanDeactivateHook {
    content = '';
    isDirty = false;

    constructor(private router: Router, private appService: AppService) {
        this.content = appService.contactUs;
     }

    onChange(newVal) {
        this.isDirty = true;
        this.content = newVal;
    }

    goBack() {
        this.router.navigate(['/third/settings']);
    }

    save() {
        this.appService.contactUs = this.content;
        this.isDirty = false;
    }

    canDeactivate(): Observable<boolean> | boolean {
        if (this.isDirty) {
            return window.confirm('Are you sure??');
        }
        return true;
    }
}
