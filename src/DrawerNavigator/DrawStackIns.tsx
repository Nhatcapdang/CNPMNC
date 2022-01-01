import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  FavouriteScreen,
  HistoryScreen,
  HomeScreenIns,
  ProfileScreen,
} from '../screens';
import DrawContentIns from './\bDrawContentIns';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function mainTab() {
  return (
    <Tab.Navigator
      initialRouteName="something"
      activeColor="#FA4A0C"
      inactiveColor="#ADADAF"
      labeled={false}
      barStyle={{ backgroundColor: '#9A9A9D' }}
    >
      <Tab.Screen
        name="HomeScreenIns"
        component={HomeScreenIns}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarColor: '#9A9A9D',
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IconFontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="something"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function DrawStackIns() {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <DrawContentIns {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="HomeDrawer" component={mainTab} />
      {/* <Drawer.Screen name="Search" component={SearchStackScreen} />
      <Drawer.Screen name="Favourite" component={FavouriteStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} /> */}
    </Drawer.Navigator>
  );
}
