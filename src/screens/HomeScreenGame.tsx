import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AvatarCircle from '../components/AvatarCircle';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { windowwidth } from '../utils/Dimensions';
import CustomSwitch from '../components/CustomSwitch';
import ItemGame from '../components/Item';
import { freeGames, paidGames, sliderData } from '../const';
// import {  NativeStackScreenProps } from 'react-navigation-stack';

function BannerSlider({ data }: any) {
  return (
    <View>
      <Image
        source={{
          uri: data.image,
        }}
        style={{ height: 150, width: 300, borderRadius: 10 }}
      />
    </View>
  );
}

interface IProps {
  navigation: any;
}
const HomeScreenGame = ({ navigation }: IProps) => {
  const carouselRef = useRef(null);
  const [index, setIndex] = React.useState(0);
  const [gamesTab, setGamesTab] = useState(1);

  const onSelectSwitch = (value: number) => {
    setGamesTab(value);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18 }}>Hello John Doe</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            {/* <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            /> */}
            <AvatarCircle
              uri={
                'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg'
              }
              size={35}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
        >
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{ marginRight: 5 }}
          />
          <TextInput placeholder="Search" />
        </View>

        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 18 }}>Upcoming Games</Text>
          <TouchableOpacity onPress={() => console.log('ok')}>
            <Text style={{ color: '#0aada8' }}>See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={carouselRef}
          data={sliderData}
          renderItem={({ item }) => <BannerSlider data={item} />}
          sliderWidth={windowwidth - 40}
          itemWidth={300}
          loop={true}
          layout={'default'}
          //   useScrollView={true}
          onSnapToItem={index => setIndex(index)}
        />
        <Pagination
          dotsLength={sliderData.length}
          //   renderDots={(activeIndex: number) => {
          //     setIndex(activeIndex);
          //     return null;
          //   }}
          activeDotIndex={index}
          dotStyle={{
            width: 15,
            height: 5,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
          animatedTension={1}
          delayPressInDots={0}
          //   duration={1400}
          carouselRef={carouselRef}
          containerStyle={{ paddingVertical: 10 }}
        />
        <View style={{ marginBottom: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {gamesTab === 1 &&
          freeGames.map(item => (
            <ItemGame
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={undefined}
            />
          ))}
        {gamesTab === 2 &&
          paidGames.map(item => (
            <ItemGame
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreenGame;
