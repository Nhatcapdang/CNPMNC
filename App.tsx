import React, { useEffect, useMemo, useReducer, useState } from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import DrawerContent from './src/DrawerContent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackScreen } from './src/StackNavigation';
import { Favourite, History, Home, Profile } from './src/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext, IAuthContext } from './src/common/context';
import { ILoginState } from './src/interface';
import { IUsers } from './src/const';
import { ActionKind } from './src/interface/enum';
import Spinner from './src/common/spinner';
import { loginReducer } from './src/reducer';
import { StatusBar } from 'react-native';
import AuthStack from './src/StackNavigation/AuthStack';
import Tabs from './src/TabNavigation/AuthTab';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function mainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FA4A0C"
      inactiveColor="#ADADAF"
      labeled={false}
      barStyle={{ backgroundColor: '#9A9A9D' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarColor: '#9A9A9D',
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ color }) => (
            <IconFontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#ffffff',
    text: '#333333',
  },
};

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#333333',
    text: '#ffffff',
  },
};
function App() {
  const initialLoginState: ILoginState = {
    isLoading: true,
    userName: undefined,
    userToken: undefined,
  };
  const [IsDarkTheme, setIsDarkTheme] = useState(false);
  const theme = IsDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

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
        {/* <SafeAreaView
          style={{ flex: 1 }}
          edges={['top']}
          // mode="margin"
        > */}
        <StatusBar translucent backgroundColor="transparent" />
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            {loginState.userToken != null ? (
              <Drawer.Navigator
                drawerContent={(props: any) => <DrawerContent {...props} />}
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Drawer.Screen name="HomeDrawer" component={mainTab} />
                {/* <Drawer.Screen name="Search" component={SearchStackScreen} />
      <Drawer.Screen name="Favourite" component={FavouriteStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} /> */}
              </Drawer.Navigator>
            ) : (
              // <RootStackScreen />
              <AuthStack />
            )}
          </NavigationContainer>
        </PaperProvider>
        {/* </SafeAreaView> */}
      </AuthContext.Provider>
    </Spinner>
  );
}

export default App;
