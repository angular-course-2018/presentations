import { Action } from '@ngrx/store';

export enum AppAction {
  SET_FIRSTNAME = '[app] set firstname',
  SET_LASTNAME = '[app] set lastname'
}

export class SetFirstname implements Action {
  readonly type = AppAction.SET_FIRSTNAME;

  constructor(public payload: string) { }
}

export class SetLastname implements Action {
  readonly type = AppAction.SET_LASTNAME;

  constructor(public payload: string) { }
}

export type AppActionsUnion = SetFirstname | SetLastname;
