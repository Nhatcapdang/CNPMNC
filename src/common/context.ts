import React from 'react';
import { IUsers } from '../const';

interface IAuthContext {
  signIn: (foundUser: IUsers[]) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: () => void;
}
export const AuthContext = React.createContext({} as IAuthContext);
