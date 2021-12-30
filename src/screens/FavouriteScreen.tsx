import * as React from 'react';
import { Button, Text, View } from 'react-native';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FavouriteScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>FAVOURITE</Text>
      <IconMaterialCommunityIcons name="heart-outline" />
      <Button
        title="Go to Tab Settings"
        onPress={() => navigation.navigate('TabHome')}
      />
    </View>
  );
}
