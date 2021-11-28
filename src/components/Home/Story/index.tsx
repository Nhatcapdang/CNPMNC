import React from 'react';
import {Text, View} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './Styles';

export default function Story({imageUri, name}: any) {
  return (
    <View>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}
