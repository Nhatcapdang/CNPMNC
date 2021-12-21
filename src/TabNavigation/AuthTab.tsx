import React from 'react';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  LoginScreen,
  OnboardingScreen,
  ProfileScreen,
  SettingScreen,
} from '../StackNavigation/AuthStack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }: BottomTabBarButtonProps) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45',
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#e32f45',
        tabBarInactiveTintColor: '#748c94',
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          //   backgroundColor: 'navy',
          borderRadius: 15,
          height: 75,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={OnboardingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Entypo
                name="home"
                // style={{
                //   width: 25,
                //   height: 25,
                //   //   tintColor: color,
                // }}
                size={25}
                color={color}
              />
              <Text style={{ color: color, fontSize: 12 }}>HOME</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Foundation
                name="heart"
                // style={{
                //   width: 25,
                //   height: 25,
                //   //   tintColor: color,
                // }}
                size={25}
                color={color}
              />
              <Text style={{ color: color, fontSize: 12 }}>Favourite</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="plus-circle"
              // style={{
              //   width: 25,
              //   height: 25,
              //   //   tintColor: color,
              // }}
              size={25}
              color={focused ? 'black' : 'navy'}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Ionicons
                name="ios-settings"
                // style={{
                //   width: 25,
                //   height: 25,
                //   //   tintColor: color,
                // }}
                size={25}
                color={color}
              />
              <Text style={{ color: color, fontSize: 12 }}>Settings</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <AntDesign
                name="questioncircle"
                // style={{
                //   width: 25,
                //   height: 25,
                //   //   tintColor: color,
                // }}
                size={25}
                color={color}
              />
              <Text style={{ color: color, fontSize: 12 }}>Chat</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'red',
    shadowRadius: 3.5,
    // android
    elevation: 5,
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
export default Tabs;
