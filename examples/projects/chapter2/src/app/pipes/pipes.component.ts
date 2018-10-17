import { Component } from '@angular/core';

@Component({
    selector: 'app-pipes-component',
    templateUrl: './pipes.component.html'
})
export class PipesComponent {
    now = new Date();

    myObj = {
        first: 1,
        second: 2,
    };

}
