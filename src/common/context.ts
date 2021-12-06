import React from 'react';
import { IUsers } from '../const';

export interface IAuthContext {
  signIn: (foundUser: IUsers[]) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: () => void;
  toggleTheme: () => void;
}
export const AuthContext = React.createContext({} as IAuthContext);
