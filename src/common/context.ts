import React from 'react';
import { IUsers } from '../interface';

export interface IAuthContext {
  signIn: (foundUser: IUsers[]) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: () => void;
  toggleTheme: () => void;
  uiTheme: () => void;
}
export const AuthContext = React.createContext({} as IAuthContext);
