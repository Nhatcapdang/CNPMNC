import * as React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import CarsList from '../components/CarList';
export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <CarsList />
      <StatusBar
        // style="auto"
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'light-content'}
        showHideTransition={'slide'}
        hidden={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
