import React from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';
import styles from './styles';

const data = [
  {
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Dang',
  },
  {
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Nhat',
  },
  {
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Cap',
  },
  {
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Phuong',
  },
  {
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Cam',
  },
  {
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Pham',
  },
  {
    imageUri:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    name: 'Ngoc',
  },
];
export default function Stories() {
  //   const e = data.map((item, index) => {
  //     return <Story imageUri={item.imageUri} name={item.name} key={index} />;
  //   });
  return (
    <FlatList
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
}
