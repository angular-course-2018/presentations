import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';

@Injectable()
export class AppSelectors {
  constructor(private store: Store<AppState>) { }

  get cityName$() {
    return this.store.select(state => state.weather.cityName);
  }

  get countryCode$() {
    return this.store.select(state => state.weather.countryCode);
  }

  get fullAddress$() {
    return this.store.select(state => `${state.weather.cityName}${state.weather.countryCode ? ',' : ''} ${state.weather.countryCode}`);
  }

  get weather$() {
    return this.store.select(state => state.weather.weather);
  }
}
