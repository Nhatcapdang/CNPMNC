import * as React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export default function Search({navigation}: any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SEARCH</Text>
      {/* <Button
        title="Go to Tab Settings"
        onPress={() => navigation.navigate('TabProfile')}
      /> */}
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('Profile')}>
        Press me
      </Button>
    </View>
  );
}
