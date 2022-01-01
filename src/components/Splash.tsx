import React, { FC } from 'react';
import * as Animatable from 'react-native-animatable';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  COLOR_ORANGE,
  COLOR_GRAY,
  COLOR_WHITE,
  COLOR_ORANGE_DARK,
} from '../VariableCss';
import { SCREEN } from '../const';
import { height } from '../utils/Dimensions';
import { AuthContext } from '../common/context';

interface SplashProps {
  navigation?: any;
}

const SplashScreen: FC<SplashProps> = ({ navigation }) => {
  const { uiTheme } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View style={styles.header}>
          {/* <Animatable.Image
          duration={1400}
          animation="bounceIn"
          resizeMode="stretch"
          style={styles.logo}
          source={require('../../assets/hat.png')}
        /> */}
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                // fontFamily: 'Inter-Bold',
                fontWeight: 'bold',
                fontSize: 30,
                color: '#20315f',
              }}
            >
              GAMEON
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <ImageBackground
              source={require('../../assets/gaming.png')}
              style={{ width: 150, height: 150 }}
              imageStyle={{
                borderRadius: 25,
                transform: [{ rotate: '-15deg' }],
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#AD40AF',
              padding: 20,
              width: '90%',
              borderRadius: 10,
              marginBottom: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            onPress={() => uiTheme()}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold',
                // fontFamily: 'Roboto-MediumItalic',
              }}
            >
              Let's Begin
            </Text>
            <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Animatable.View
        animation="slideInUp"
        duration={1400}
        style={styles.footer}
      >
        <Animatable.View
          animation="bounceInLeft"
          duration={1400}
          easing="ease-out-quad"
        >
          <Text style={[styles.title]}>Food for everyone!</Text>
          <Text style={styles.text}>Sign in with account</Text>
        </Animatable.View>
        <Animatable.View
          animation="bounceInRight"
          duration={1400}
          easing="ease-out-quad"
          style={styles.button}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREEN.SCREEN_SIGN_IN)}
          >
            <LinearGradient
              colors={[COLOR_GRAY, COLOR_ORANGE]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons
                name="navigate-next"
                color={COLOR_ORANGE_DARK}
                size={20}
              />
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: COLOR_GRAY,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: COLOR_ORANGE_DARK,
    fontWeight: 'bold',
  },
});
