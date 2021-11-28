import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Search, Favourite, Profile} from '../components';
import {Text} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';

const HomeStack = createStackNavigator();

export function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator
    // screenOptions={{ header: () => null }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          // title: 'Nhat Cap Dang',
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerStyle: {
            backgroundColor: '#FA4A0C',
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          // headerLeft: () => <Feather name="camera" size={25} color={'#000'} />,
          headerLeft: () => (
            <Material
              name="menu-open"
              size={30}
              color={'#000'}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerTitle: () => (
            <Text style={{textAlign: 'center', fontSize: 20}}>
              Nhat Cap Dang
            </Text>
          ),
          headerRight: () => (
            <Ionicons name="paper-plane-outline" size={30} color={'#545454'} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

export function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FA4A0C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
}

export const FavouriteStack = createStackNavigator();

export function FavouriteStackScreen() {
  return (
    <FavouriteStack.Navigator>
      <FavouriteStack.Screen name="Favourite" component={Favourite} />
    </FavouriteStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

export function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}
