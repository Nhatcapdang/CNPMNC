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

export enum SCREEN {
  SCREEN_HOME = 'Home',
  SCREEN_FAVOURITE = 'Favourite',
  SCREEN_PROFILE = 'Profile',
  SCREEN_SEARCH = 'Search',
  SCREEN_SIGN_UP = 'SingUp',
  SCREEN_SIGN_IN = 'SingIn',
  SCREEN_SPLASH = 'Splash',
}

export enum GameType {
  FREE_TO_PLAY = 'free',
  PAID_GAME = 'paid',
}
