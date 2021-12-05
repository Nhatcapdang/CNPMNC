import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import DrawerContent from './src/DrawerContent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackScreen } from './src/StackNavigation';
import { Favourite, History, Home, Profile } from './src/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from './src/common/context';
import { IUsers } from './src/const';
import { ILoginState } from './src/interface';

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

function App() {
  const initialLoginState: ILoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (
    prevState: any,
    action: { type: string; token?: string | null; id?: string },
  ) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );
  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser: IUsers[]) => {
        const userToken = foundUser[0].userToken;
        const userName = foundUser[0].username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'LOGIN', id: userName, token: userToken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'LOGOUT' });
      },
      signUp: () => {},
    }),
    [],
  );
  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);
  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaView
        style={{ flex: 1 }}
        edges={['top']}
        // mode="margin"
      >
        <NavigationContainer>
          {loginState.userToken !== null ? (
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
            <RootStackScreen />
          )}
        </NavigationContainer>
      </SafeAreaView>
    </AuthContext.Provider>
  );
}

export default App;
