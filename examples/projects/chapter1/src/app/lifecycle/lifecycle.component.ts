import { Component } from '@angular/core';

@Component({
    selector: 'app-lifecycle',
    templateUrl: './lifecycle.component.html'
})
export class LifecycleComponent {
    title = 'Im child';

    update(title: string) {
        this.title = title;
    }

    clickAtParent(){
      console.log('clicked at parent');
    }
}
