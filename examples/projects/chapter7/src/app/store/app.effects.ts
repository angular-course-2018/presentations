import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AppAction, SetFirstname, ValueChanged } from './app.actions';
import { map, debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) { }

  @Effect() readonly firstnameEffect$ = this.actions$
    .ofType<ValueChanged>(AppAction.VALUE_CHANGED)
    .pipe(
      debounceTime(500),
      distinctUntilChanged((oldAction, newAction) => oldAction.payload.value === newAction.payload.value),
      switchMap(action => [new action.payload.ValueChangedAction(action.payload.value)])
    );
}
