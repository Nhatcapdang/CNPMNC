import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ProfilePicture from '../components/Home/ProfilePicture';

export default function HomeScreenGame({ navigation }) {
  return (
    // <View>
    //   <Text>sadsa</Text>
    //   <ProfilePicture
    //     uri={
    //       'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg'
    //     }
    //   />
    //   </View>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 18 }}>Hello John Doe</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            {/* <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            /> */}
            <ProfilePicture
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
          <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium' }}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: '#0aada8' }}>See all</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
