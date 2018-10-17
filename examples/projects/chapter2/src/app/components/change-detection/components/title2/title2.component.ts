import { Component, ChangeDetectionStrategy } from '@angular/core';
import { colorfulLogger } from 'projects/common/colorful-logger/logger';

@Component({
  selector: 'app-title2',
  templateUrl: './title2.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Title2Component {

  private _title = 'This is Title 2 Component';

  set title(title: string) {
    colorfulLogger('SET title -- Title2Component', '#b2a5ff');
    this._title = title;
  }

  get title() {
    colorfulLogger('GET title -- Title2Component', '#ffeb01');
    return this._title;
  }

  changeTitle() {
    this.title = 'title 2 changed!';
  }
}
