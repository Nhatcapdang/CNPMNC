import * as React from 'react';
import Stories from './Stories';
import Post from './Post';
import {FlatList, RefreshControl} from 'react-native';
import {useState} from 'react';

const post = [
  {
    user: {
      imageUri:
        'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
      name: 'Dang',
    },
    image:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    caption: 'Beautiful',
    like: 123457,
    createdAt: '11 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
      name: 'Nhat',
    },
    image:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    caption: 'Beautiful',
    like: 123457,
    createdAt: '11 minutes ago',
  },
];

const wait = (timeout: any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function Home({navigation}: any) {
  const [refreshing, setrefreshing] = useState(false);
  const [data, setdata] = useState(post);

  const onRefresh = React.useCallback(() => {
    setrefreshing(true);
    wait(2000).then(() => setrefreshing(false));
  }, []);
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, idx) => idx.toString()}
      data={data}
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={<Stories />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}
