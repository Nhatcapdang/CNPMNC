export enum ActionKind {
  RETRIEVE_TOKEN = 'RETRIEVE_TOKEN',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  REGISTER = 'REGISTER',
}

export interface Action<T> {
  type: ActionKind;
  payload?: T;
}
