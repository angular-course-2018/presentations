import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
    selector: 'app-unsaved-changes',
    template: `
        <router-outlet></router-outlet>
    `
})
export class UnsavedChangesComponent {
    content: string;
    isDirty = false;

    constructor(private location: Location) { }

    onChange(newVal) {
        this.isDirty = true;
        this.content = newVal;
    }

    goBack() {
        this.location.back();
    }

    save() {
        this.isDirty = false;
    }

    canDeactivate(): Observable<boolean> | boolean {
        return !this.isDirty;
    }
}
