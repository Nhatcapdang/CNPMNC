import CarItem from './CarItem';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { carItemData } from '../const';
import { windowHeight } from '../utils/Dimensions';

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={carItemData}
        renderItem={({ item }) => <CarItem {...item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={windowHeight}
      />
    </View>
  );
};

export default CarsList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
