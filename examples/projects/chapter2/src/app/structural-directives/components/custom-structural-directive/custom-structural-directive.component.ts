import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-structural-directive',
    templateUrl: './custom-structural-directive.component.html'
})
export class CustomStructuralDirectivesComponent {
    times = 0;
    add() {
        this.times += 1;
    }
    sub() {
        if (this.times === 0) {
            return;
        }
        this.times -= 1;
    }
}
