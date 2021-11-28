import React, {FC} from 'react';
import * as Animatable from 'react-native-animatable';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  COLOR_ORANGE,
  COLOR_GRAY,
  COLOR_WHITE,
  COLOR_ORANGE_DARK,
} from '../../VariableCss';
import {SCREEN} from '../../const';

interface SplashProps {
  navigation?: any;
}

const SplashScreen: FC<SplashProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          duration={1400}
          animation="bounceIn"
          resizeMode="stretch"
          style={styles.logo}
          source={require('../../../assets/hat.png')}
        />
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={1400}
        style={styles.footer}>
        <Animatable.View
          animation="bounceInLeft"
          duration={1400}
          easing="ease-out-quad">
          <Text style={[styles.title]}>Food for everyone!</Text>
          <Text style={styles.text}>Sign in with account</Text>
        </Animatable.View>
        <Animatable.View
          animation="bounceInRight"
          duration={1400}
          easing="ease-out-quad"
          style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREEN.SCREEN_SIGN_IN)}>
            <LinearGradient
              colors={[COLOR_GRAY, COLOR_ORANGE]}
              style={styles.signIn}>
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

const {height} = Dimensions.get('screen');
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
