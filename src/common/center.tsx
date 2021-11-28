import React from 'react';
import {View} from 'react-native';

interface AuxProps {
  children: React.ReactNode;
}

export default function Center(props: AuxProps) {
  return <View style={{flex: 1}}>{props.children}</View>;
}
