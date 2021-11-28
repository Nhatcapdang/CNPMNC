import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const ProfilePicture = ({uri, size = 70}: {uri: any; size?: number}) => (
  <View style={[styles.container, {width: size + 6, height: size + 6}]}>
    <Image source={{uri}} style={[styles.image, {width: size, height: size}]} />
  </View>
);

export default ProfilePicture;
