import { Component } from '@angular/core';

@Component({
    selector: 'app-lifecycle',
    templateUrl: './lifecycle.component.html'
})
export class LifecycleComponent {
    title = 'Component Lifecycle';

    update(title: string) {
        this.title = title;
    }
}
