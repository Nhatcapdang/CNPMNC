import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const AvatarCircle = ({ uri, size = 70 }: { uri: any; size?: number }) => (
  <View style={[styles.container, { width: size + 6, height: size + 6 }]}>
    <Image
      source={{ uri }}
      style={[styles.image, { width: size, height: size }]}
    />
  </View>
);

export default AvatarCircle;
const styles = StyleSheet.create({
  container: {
    margin: 7,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#ae22e0',
  },
  image: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
});
