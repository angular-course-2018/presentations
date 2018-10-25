import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CanDeactivateHook } from './interfaces/can-deactivate-hook.interface';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateHook> {
    canDeactivate(component: CanDeactivateHook) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
