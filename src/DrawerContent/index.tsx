import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Avatar,
  Caption,
  Drawer,
  Paragraph,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function index(props: any) {
  return (
    <View style={{flex: 1, backgroundColor: '#FA4A0C'}}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1488381397757-59d6261610f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80',
              }}
              size={50}
            />
            <View
              style={{
                marginLeft: 15,
                marginTop: -2,
                flexDirection: 'column',
              }}>
              <Title style={styles.title}>Nhat Cap Dang</Title>
              <Caption style={styles.caption}>View</Caption>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.section}>
              <Caption style={styles.caption}>$</Caption>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                21,031,999.00
              </Paragraph>
            </View>
            <View style={styles.section}>
              <Caption style={styles.caption}>Points</Caption>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                22
              </Paragraph>
            </View>
          </View>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Profile"
          labelStyle={styles.labelStyle}
          icon={({color, size}) => (
            <EvilIcons
              name="user"
              color={color}
              size={size}
              style={styles.mleft}
            />
          )}
          inactiveTintColor="#FFF"
          onPress={() => {}}
        />
        <DrawerItem
          labelStyle={styles.labelStyle}
          label="Orders"
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="cart-arrow-down"
              color={color}
              size={size}
              style={styles.mleft}
            />
          )}
          inactiveTintColor="#FFF"
          onPress={() => {}}
        />
        <DrawerItem
          labelStyle={styles.labelStyle}
          label="Offer & promo"
          icon={({color, size}) => (
            <AntDesign
              name="tago"
              color={color}
              size={size}
              style={styles.mleft}
            />
          )}
          inactiveTintColor="#FFF"
          onPress={() => {}}
        />
        <DrawerItem
          labelStyle={styles.labelStyle}
          label="Privacy policy"
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="book-search-outline"
              color={color}
              size={size}
              style={styles.mleft}
            />
          )}
          inactiveTintColor="#FFF"
          onPress={() => {}}
        />
        <DrawerItem
          labelStyle={styles.labelStyleLast}
          label="Security"
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="security"
              color={color}
              size={size}
              style={styles.mleft}
            />
          )}
          inactiveTintColor="#FFF"
          onPress={() => {}}
        />
      </DrawerContentScrollView>
      <TouchableRipple onPress={() => {}} rippleColor="#FFF">
        <View style={styles.sectionLogout}>
          <Caption style={styles.caption}>Sign-Out</Caption>
          <AntDesign name="arrowright" color={'#FFF'} size={18} />
        </View>
        {/* <DrawerItem
          label="Sign-Out"
          icon={({color, size}) => (
            <AntDesign name="arrowright" color={color} size={size} />
          )}
          inactiveTintColor="#FFF"
          onPress={() => {}}
        /> */}
      </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({
  mleft: {
    marginRight: -25,
  },
  drawerContent: {
    flex: 0,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 18,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#FFF',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    paddingLeft: 3,
    color: '#FFF',
    letterSpacing: 1,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  section: {
    flexDirection: 'row',
    marginRight: 15,
    justifyContent: 'flex-end',
    height: 45,
    alignItems: 'center',
  },
  sectionLogout: {
    flexDirection: 'row',
    marginRight: 15,
    justifyContent: 'flex-end',
    height: 45,
    alignItems: 'center',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  labelStyle: {
    borderBottomWidth: 0.3,
    borderBottomColor: '#F4F4F8',
    height: 30,
    paddingLeft: 0,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  labelStyleLast: {
    paddingLeft: 0,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
