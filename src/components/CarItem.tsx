import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { windowHeight } from '../utils/Dimensions';
import StyledButton from './StyledBtn';

interface IProps {
  title: string;
  subtitle: string;
  image: string;
  taglineCTA?: string;
}
export default function CarItem(props: IProps) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={{
          uri: props.image,
        }}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>
          {props.subtitle}{' '}
          <Text style={styles.subtitleCTA}>{props.taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          backgroundColor="#FFFFFFA6"
          textColor="#FFFFFF"
          content={'Custom Order'}
          onPress={() => {
            console.warn('Custom Order was pressed');
          }}
        />
        <StyledButton
          backgroundColor="#FFFFFF"
          textColor="#171A20"
          content={'Existing Inventory'}
          onPress={() => {
            console.warn(
              ' Existing Inventory was pressedCustom Order was pressed',
            );
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: windowHeight,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: '#fff',
    // fontweight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});
