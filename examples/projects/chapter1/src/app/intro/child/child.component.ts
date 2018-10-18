import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child-component',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
    @Input() title = '';
    @Output() subtitleChange = new EventEmitter();
    subtitle = '';

    notifySubtitleChange(value) {
        this.subtitle = value;
        this.subtitleChange.emit(value);
    }
}
