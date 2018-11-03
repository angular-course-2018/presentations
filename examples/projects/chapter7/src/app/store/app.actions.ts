import { Action } from '@ngrx/store';

export enum AppAction {
  SET_FIRSTNAME = '[app] set firstname',
  SET_LASTNAME = '[app] set lastname',
  VALUE_CHANGED = '[app] value changed'
}

export class SetFirstname implements Action {
  readonly type = AppAction.SET_FIRSTNAME;

  constructor(public payload: string) { }
}

export class SetLastname implements Action {
  readonly type = AppAction.SET_LASTNAME;

  constructor(public payload: string) { }
}

export class ValueChanged {
  readonly type = AppAction.VALUE_CHANGED;

  constructor(public payload: { value: string, ValueChangedAction: ActionType }) { }
}

export type AppActionsUnion = SetFirstname | SetLastname | ValueChanged;

type ActionType = new (value: string) => AppActionsUnion;
