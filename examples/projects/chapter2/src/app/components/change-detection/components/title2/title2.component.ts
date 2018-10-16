import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-title2',
  templateUrl: './title2.component.html',
  // changeDetection: ChangeDetectionStrategy.Default, // this is the default
})
export class Title2Component {

  private _title = 'This is Title 2 Component';

  set title(title: string) {
    this._title = title;
  }

  get title() {
    console.log('%c Change Detection called on Title2Component', 'font-size: 20px; color: #ffeb01; background-color: #333;');
    return this._title;
  }

  changeTitle() {
    console.log('%c ----- Changing the title in Title2Component -----', 'font-size: 20px; color: #b2a5ff; background-color: #333;');
    this.title = 'title 2 changed!';
  }
}
