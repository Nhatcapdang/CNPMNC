import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackScreen } from './src/StackNavigation';
import { AuthContext, IAuthContext } from './src/common/context';
import { IUsers } from './src/interface';
import { ActionKind } from './src/interface/enum';
import Spinner from './src/common/spinner';
import { loginReducer, initialLoginState } from './src/reducer';
import { StatusBar } from 'react-native';
import DrawStackGame from './src/DrawerNavigator/DrawStackGame';
import Tabs from './src/TabNavigation/AuthTab';
import { DarkTheme } from './src/common/Theme';
import DrawStackIns from './src/DrawerNavigator/DrawStackIns';

function App() {
  const [IsDarkTheme, setIsDarkTheme] = useState(false);
  const [isUiGame, setIsUiGame] = useState(false);

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
  const authContext = useMemo<IAuthContext>(
    () => ({
      signIn: async (foundUser: IUsers[]) => {
        const userToken = foundUser[0].userToken;
        const userName = foundUser[0].username;

        try {
          await AsyncStorage.setItem('userToken', userToken as string);
        } catch (e) {
          console.log(e);
        }
        dispatch({
          type: ActionKind.LOGIN,
          payload: { userName, userToken },
        });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: ActionKind.LOGOUT });
      },
      signUp: () => {},
      toggleTheme: () => {
        setIsDarkTheme(IsDarkTheme => !IsDarkTheme);
      },
      uiTheme: () => {
        setIsUiGame(isUiGame => !isUiGame);
      },
    }),
    [],
  );
  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({
        type: ActionKind.RETRIEVE_TOKEN,
        payload: { userToken },
      });
    }, 1000);
  }, []);
  return (
    <Spinner isLoading={loginState.isLoading}>
      <AuthContext.Provider value={authContext}>
        <StatusBar translucent backgroundColor="transparent" />
        <PaperProvider theme={DarkTheme(IsDarkTheme)}>
          <NavigationContainer theme={DarkTheme(IsDarkTheme)}>
            {isUiGame ? (
              <DrawStackGame />
            ) : loginState.userToken != null ? (
              <DrawStackIns />
            ) : (
              <RootStackScreen />
            )}
          </NavigationContainer>
        </PaperProvider>
      </AuthContext.Provider>
    </Spinner>
  );
}

export default App;
