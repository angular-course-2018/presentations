import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';

@Injectable()
export class AppSelectors {
  constructor(private store: Store<AppState>) { }

  get firstname$() {
    return this.store.select(state => state.user.firstname);
  }

  get lastname$() {
    return this.store.select(state => state.user.lastname);
  }

  get fullname$() {
    return this.store.select(state => `${state.user.firstname} ${state.user.lastname}`);
  }
}
