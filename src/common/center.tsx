import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

interface CenterProps {
  style?: ViewStyle;
}

const Center: FC<CenterProps> = function ({style, children}) {
  return <View style={{flex: 1, ...style}}>{children}</View>;
};

export default Center;
