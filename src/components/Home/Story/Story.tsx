import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AvatarCircle from '../../AvatarCircle';

export default function Story({ imageUri, name }: any) {
  return (
    <View>
      <AvatarCircle uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  name: {
    textAlign: 'center',
  },
});
