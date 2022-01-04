import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface Iprops {
  backgroundColor: string;
  textColor: string;
  content: string;
  onPress: () => void;
}
const StyledButton = (props: Iprops) => {
  const { backgroundColor, textColor, content, onPress } = props;

  //   const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  //   const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
