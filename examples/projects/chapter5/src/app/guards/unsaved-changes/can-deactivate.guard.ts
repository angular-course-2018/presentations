import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { UnsavedChangesComponent } from './unsaved-changes.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<UnsavedChangesComponent> {
    canDeactivate(component: UnsavedChangesComponent) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
