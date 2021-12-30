import { IUsers } from '../interface';

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

export const Users: IUsers[] = [
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
export const sliderData = [
  {
    title: 'First Game',
    image:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
  },
  {
    title: 'Second Game',
    image:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
  },
  {
    title: 'Third Game',
    image:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
  },
];

export const paidGames = [
  {
    poster:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    title: 'Spider-Man',
    subtitle: 'Marvel',
    isFree: 'No',
    price: '$25.99',
    id: '1',
  },
  {
    poster:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    title: 'Battlefield 2042',
    subtitle: 'EA',
    isFree: 'No',
    price: '$19.99',
    id: '2',
  },
  {
    poster:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    title: 'Spider-Man: Miles Morales',
    subtitle: 'Marvel',
    isFree: 'No',
    price: '$29.99',
    id: '3',
  },
  {
    poster:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    title: 'Halo Infinite',
    subtitle: 'Xbox Game',
    isFree: 'No',
    price: '$24.99',
    id: '4',
  },
  {
    poster:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    title: 'Far Cry 6',
    subtitle: 'Ubisoft',
    isFree: 'No',
    price: '$15.99',
    id: '5',
  },
];

export const freeGames = [
  {
    poster:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    title: 'Altos Odyssey',
    subtitle: 'Noodlecake Studios',
    isFree: 'Yes',
    id: '1',
  },
  {
    poster:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    title: 'Asphalt 9',
    subtitle: 'Gameloft',
    isFree: 'Yes',
    id: '2',
  },
  {
    poster:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    title: 'Genshin Impact',
    subtitle: 'miHoYo',
    isFree: 'Yes',
    id: '3',
  },
  {
    poster:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    title: 'Fortnite',
    subtitle: 'Epic Games',
    isFree: 'Yes',
    id: '4',
  },
  {
    poster:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    title: 'Pokémon Unite',
    subtitle: 'The Pokémon Company',
    isFree: 'Yes',
    id: '5',
  },
  {
    poster:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    title: 'Diablo 4',
    subtitle: 'Blizzard Entertainment',
    isFree: 'No',
    id: '6',
  },
];
