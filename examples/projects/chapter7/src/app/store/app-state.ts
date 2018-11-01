export interface AppState {
  user: UserState;
}

export interface UserState {
  firstname: string;
  lastname: string;
  fullname: string;
}
