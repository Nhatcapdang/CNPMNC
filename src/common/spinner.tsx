import React from 'react';
import { View, ActivityIndicator } from 'react-native';

interface IProps {
  readonly isLoading: boolean;
  readonly children: React.ReactNode;
}
const Spinner = (props: IProps) => {
  return props.isLoading ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <View style={{ flex: 1 }}>{props.children}</View>
  );
};

export default Spinner;
