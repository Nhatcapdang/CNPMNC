import * as React from 'react';
import {Button, Text, View} from 'react-native';

export default function Profile({navigation}: any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>PROFILE</Text>
      <Button
        title="Go to Tab Settings"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  );
}
