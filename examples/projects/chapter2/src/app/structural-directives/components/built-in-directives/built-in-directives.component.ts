import { Component, OnInit } from '@angular/core';
import { Item } from './components/item.model';
@Component({
  selector: 'app-built-in-structural-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.scss']
})
export class BuiltInDirectivesComponent {
  items: Item[] = [];

  push() {
    this.items = [
      ...this.items.map(item => ({...item})),
      {name: '' + this.items.length, id: this.items.length}
    ];
  }

  pop() {
    this.items = this.items.filter((item, i) => i !== this.items.length - 1);
  }

  trackByTrackId(index, item: Item) {
    return item.id;
  }
}
