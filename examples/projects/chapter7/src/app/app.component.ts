import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app-state';
import { SetFirstname, SetLastname } from './store/app.actions';
import { AppSelectors } from './store/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chapter7';

  constructor(private store: Store<AppState>, public appSelectors: AppSelectors) { }

  onFirstnameChange($event: KeyboardEvent) {
    const content = ($event.target as HTMLInputElement).value;
    this.store.dispatch(new SetFirstname(content));
  }

  onLastnameChange($event: KeyboardEvent) {
    const content = ($event.target as HTMLInputElement).value;
    this.store.dispatch(new SetLastname(content));
  }
}
