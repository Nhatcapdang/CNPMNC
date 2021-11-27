/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BackIcon from 'react-native-vector-icons/Feather';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text style={styles.sectionContainer}>
      dsadaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
      <BackIcon name="chevron-left" size={30} color={'red'} />
    </Text>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
});

export default App;
