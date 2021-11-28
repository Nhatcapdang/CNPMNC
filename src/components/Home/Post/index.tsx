import React from 'react';
import {View} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = ({post}: any) => (
  <View>
    <Header imageUri={post.user.imageUri} name={post.user.name} />
    <Body imageUri={post.image} />
    <Footer
      likeCount={post.like}
      caption={post.caption}
      postedAt={post.createdAt}
    />
  </View>
);

export default Post;
