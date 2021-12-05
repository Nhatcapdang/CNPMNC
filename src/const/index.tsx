export const TAB = {
  HOME: 'TabHome',
  FAVOURITE: 'TabFavourite',
  PROFILE: 'TabProfile',
  HISTORY: 'TabHistory',
};

export const SCREEN = {
  SCREEN_HOME: 'Home',
  SCREEN_FAVOURITE: 'Favourite',
  SCREEN_PROFILE: 'Profile',
  SCREEN_SEARCH: 'Search',
  SCREEN_SIGN_UP: 'SingUp',
  SCREEN_SIGN_IN: 'SingIn',
  SCREEN_SPLASH: 'Splash',
};

export interface IUsers {
  readonly id: number;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly userToken: string;
}
export const Users = [
  {
    id: 1,
    email: 'user1@email.com',
    username: 'User1',
    password: '123456',
    userToken: 'token123',
  },
  {
    id: 2,
    email: 'user2@email.com',
    username: 'User2',
    password: '123456',
    userToken: 'token12345',
  },
  {
    id: 3,
    email: 'testuser@email.com',
    username: 'User3',
    password: '123456',
    userToken: 'testtoken',
  },
];
