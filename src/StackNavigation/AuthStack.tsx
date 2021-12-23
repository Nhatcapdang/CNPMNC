import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';
import Tabs from '../TabNavigation/AuthTab';
import HomeScreenGame from '../screens/HomeScreenGame';

export const OnboardingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>OnboardingScreen</Text>
    </View>
  );
};

export const LoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
    </View>
  );
};
export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen Screen</Text>
    </View>
  );
};
export const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ProfileScreen Screen</Text>
    </View>
  );
};
export const SettingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SettingScreen Screen</Text>
    </View>
  );
};
interface IProps {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
}

const CustomDrawer = (props: IProps) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#011E5F' }}
      >
        <ImageBackground
          //   source={URL('https://images.unsplash.com/photo-1533113354171-490d836238e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')}
          style={{ padding: 20 }}
          source={{
            uri: 'https://media.istockphoto.com/photos/global-communication-network-picture-id1317845608?b=1&k=20&m=1317845608&s=170667a&w=0&h=YhLfY3fbUiKVV1-9m4hlSCqF2eMaYrUdl_6mtaRoXQ4=',
          }}
        >
          <Image
            source={{
              uri: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/252350446_2137205683078247_6646826652705572048_n.jpg?_nc_cat=111&cb=c578a115-c1c39920&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bWOu-JyooroAX9GkGu5&tn=aGsWsRMMRAf3pdE2&_nc_ht=scontent.fsgn5-11.fna&oh=00149ab8075bdc730713a7d1e8fc7ff3&oe=61B3C847',
            }}
            style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 1 }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            John Doe
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: '#fff',
                // fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}
            >
              280 Coins
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                // fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                // fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// const Stack = createNativeStackNavigator();
export type IRootDrawerNavigator = {
  Login: undefined;
  Game: undefined;
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SettingScreen: undefined;
};
const Drawer = createDrawerNavigator<IRootDrawerNavigator>();

const AuthStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Game"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerStatusBarAnimation: 'slide',
        drawerType: 'front',
        drawerLabelStyle: {
          marginLeft: -25,
          //   fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Login"
        component={Tabs}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Game"
        component={HomeScreenGame}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthStack;
