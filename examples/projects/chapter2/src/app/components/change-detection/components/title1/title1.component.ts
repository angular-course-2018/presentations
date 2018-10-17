import { Component, ChangeDetectionStrategy } from '@angular/core';
import { colorfulLogger } from 'projects/common/colorful-logger/logger';

@Component({
  selector: 'app-title1',
  templateUrl: './title1.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Title1Component {
  get title() {
    colorfulLogger('Change Detection called on Title1Component', '#1ccaff');
    return 'This is Title 1 Component';
  }
}
