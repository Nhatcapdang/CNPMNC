import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import DrawerContent from './src/DrawerContent';

import {RootStackScreen} from './src/StackNavigation';
import {Favourite, History, Home, Profile} from './src/components';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function mainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FA4A0C"
      inactiveColor="#ADADAF"
      labeled={false}
      barStyle={{backgroundColor: '#9A9A9D'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarColor: '#9A9A9D',
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({color}) => (
            <IconFontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="user" size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="history" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        drawerContent={(props: any) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={mainTab} /> */}
      {/* <Drawer.Screen name="Search" component={SearchStackScreen} />
      <Drawer.Screen name="Favourite" component={FavouriteStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} /> */}
      {/* </Drawer.Navigator> */}
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default App;
