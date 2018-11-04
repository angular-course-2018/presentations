import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app-state';
import { SetCityName, SetCountryCode, ValueChanged } from './store/app.actions';
import { AppSelectors } from './store/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chapter7';

  constructor(private store: Store<AppState>, public appSelectors: AppSelectors) { }

  onCityNameChange($event: KeyboardEvent) {
    const value = ($event.target as HTMLInputElement).value;

    this.store.dispatch(new ValueChanged({
      value,
      ValueChangedAction: SetCityName,
    }));
  }

  onCountryCodeChange($event: KeyboardEvent) {
    const value = ($event.target as HTMLInputElement).value;
    this.store.dispatch(new ValueChanged({
      value,
      ValueChangedAction: SetCountryCode,
    }));
  }
}
