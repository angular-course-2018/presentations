import { Action } from '@ngrx/store';
import { WeatherResponse } from '../weather-response.model';

export enum AppAction {
  SET_CITY_NAME = '[app] set city name',
  SET_COUTRY_CODE = '[app] set country code',
  SET_WEATHER = '[app] set weather',
  VALUE_CHANGED = '[app] value changed',
}

export class SetCityName implements Action {
  readonly type = AppAction.SET_CITY_NAME;

  constructor(public payload: string) { }
}

export class SetCountryCode implements Action {
  readonly type = AppAction.SET_COUTRY_CODE;

  constructor(public payload: string) { }
}

export class SetWeather implements Action {
  readonly type = AppAction.SET_WEATHER;

  constructor(public payload: WeatherResponse) { }
}

export class ValueChanged {
  readonly type = AppAction.VALUE_CHANGED;

  constructor(public payload: { value: string, ValueChangedAction: ActionType }) { }
}

export type AppActionsUnion = SetCityName | SetCountryCode | SetWeather | ValueChanged;

type ActionType = new (value: string) => AppActionsUnion;
