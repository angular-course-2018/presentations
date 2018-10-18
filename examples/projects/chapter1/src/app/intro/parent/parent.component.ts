import { Component } from '@angular/core';

@Component({
    selector: 'app-parent-component',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
    title = '';
    subtitle = '';

    onSubtitleChange(value) {
        this.subtitle = value;
    }
}
