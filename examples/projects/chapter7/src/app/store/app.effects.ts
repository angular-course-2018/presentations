import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AppAction, ValueChanged, SetWeather } from './app.actions';
import { debounceTime, switchMap, distinctUntilChanged, withLatestFrom, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { WeatherResponse } from '../weather-response.model';
import { AppSelectors } from './app.selectors';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient, private appSelectors: AppSelectors) { }

  @Effect() readonly firstnameEffect$ = this.actions$
    .ofType<ValueChanged>(AppAction.VALUE_CHANGED)
    .pipe(
      debounceTime(500),
      distinctUntilChanged((oldAction, newAction) => oldAction.payload.value === newAction.payload.value),
      switchMap(action => [new action.payload.ValueChangedAction(action.payload.value)])
    );

  @Effect() readonly fetchWeatherResults = this.actions$
    .ofType<ValueChanged>(AppAction.SET_CITY_NAME, AppAction.SET_COUTRY_CODE)
    .pipe(
      withLatestFrom(this.appSelectors.fullAddress$),
      switchMap(([_, fullAddress]) =>
        this.httpClient.get<WeatherResponse>(`http://api.openweathermap.org/data/2.5/weather?q=${fullAddress}&appid=f97b5a1b0e561f60a0fc3f06da7f3aef`)
          .pipe(
            map(response => new SetWeather(response)),
            catchError((error, caught) => { console.log(error); return of(new SetWeather()); }),
          )),
    );
    
}
