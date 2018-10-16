import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-title1',
  templateUrl: './title1.component.html',
  // changeDetection: ChangeDetectionStrategy.Default, // this is the default
})
export class Title1Component {
  get title() {
    console.log('%c Change Detection called on Title1Component', 'font-size: 20px; color: #1ccaff; background-color: #333;');
    return 'This is Title 1 Component';
  }
}
