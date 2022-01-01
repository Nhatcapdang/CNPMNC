import { GameType } from '../interface/enum';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type Iprops = {
  selectionMode: GameType;
  option1: string;
  option2: string;
  onSelectSwitch: (value: GameType) => void;
};
export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}: Iprops) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value: GameType) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 44,
        width: '100%',
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        borderColor: '#AD40AF',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(GameType.FREE_TO_PLAY)}
        style={{
          flex: 1,
          backgroundColor:
            getSelectionMode === GameType.FREE_TO_PLAY ? '#AD40AF' : '#e4e4e4',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color:
              getSelectionMode === GameType.FREE_TO_PLAY ? 'white' : '#AD40AF',
            fontSize: 14,
            // fontFamily: 'Roboto-Medium',
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(GameType.PAID_GAME)}
        style={{
          flex: 1,
          backgroundColor:
            getSelectionMode === GameType.PAID_GAME ? '#AD40AF' : '#e4e4e4',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color:
              getSelectionMode === GameType.PAID_GAME ? 'white' : '#AD40AF',
            fontSize: 14,
            // fontFamily: 'Roboto-Medium',
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
