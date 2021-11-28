import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {
  HomeStackScreen,
  SearchStackScreen,
  FavouriteStackScreen,
  ProfileStackScreen,
} from '../StackNavigation';

const TAB = {
  HOME: 'TabHome',
  FAVOURITE: 'TabFavourite',
  PROFILE: 'TabProfile',
  HISTORY: 'TabHistory',
};

const TAB_SCREEN = [
  {
    name: TAB.HOME,
    component: HomeStackScreen,
    // iconName: <MaterialIcons name="home" size={30} />,
  },
  {
    name: TAB.FAVOURITE,
    component: FavouriteStackScreen,
    // iconName: <IconFontAwesome name="heart-o" size={25} />,
  },
  {
    name: TAB.PROFILE,
    component: ProfileStackScreen,
    // iconName: <EvilIcons name="user" size={30} />,
  },
  {
    name: TAB.HISTORY,
    component: SearchStackScreen,
    // iconName: <Ionicons name="search-sharp" size={30} />,
  },
];

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === TAB.HOME) {
            iconName = <MaterialIcons name="home" size={30} color={color} />;
          } else if (route.name === TAB.FAVOURITE) {
            iconName = (
              <IconFontAwesome name="heart-o" size={25} color={color} />
            );
          } else if (route.name === TAB.PROFILE) {
            iconName = <EvilIcons name="user" size={35} color={color} />;
          } else if (route.name === TAB.HISTORY) {
            iconName = <Ionicons name="search-sharp" size={30} color={color} />;
          }
          // You can return any component that you like here!
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FA4A0C',
        inactiveTintColor: '#ADADAF',
        showLabel: false,
        allowFontScaling: true,
        //   activeBackgroundColor: "blue",
        //   inactiveBackgroundColor: "green",
      }}>
      {TAB_SCREEN.map((val, idx) => (
        <Tab.Screen key={idx} name={val.name} component={val.component} />
      ))}
      {/* <Tab.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Tab.Navigator>
  );
}
