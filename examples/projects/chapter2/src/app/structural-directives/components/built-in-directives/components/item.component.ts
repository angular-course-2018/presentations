import { Component, Input } from '@angular/core';
import { Item } from './item.model';

@Component({
    selector: 'app-item',
    template: `
        <div class="item">{{item.name}}</div>
    `,
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    @Input() item: Item;
}
