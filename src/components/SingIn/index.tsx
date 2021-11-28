import React, {FC} from 'react';
import * as Animatable from 'react-native-animatable';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Center from '../../common/center';
import {
  COLOR_GRAY,
  COLOR_WHITE,
  COLOR_ORANGE_DARK,
  COLOR_ORANGE,
  COLOR_BLACK,
} from '../../VariableCss';
import {TextInput, Button} from 'react-native-paper';
import {SCREEN} from '../../const';

// import Logo from '../../../assets/hat.png'
interface SignInProps {
  navigation?: any;
}

const SignInScreen: FC<SignInProps> = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
  });

  const textInputChange = val => {
    console.log('as', val);
    setData({
      ...data,
      username: val,
    });
  };

  const textInputPass = val => {
    setData({
      ...data,
      password: val,
    });
  };
  return (
    <Center style={styles.center}>
      <StatusBar backgroundColor={COLOR_WHITE} barStyle="light-content" />
      <Animatable.View animation="bounceInRight" style={styles.Header}>
        <Image
          resizeMode="stretch"
          style={styles.logo}
          //   source={{
          //     uri: 'https://images.unsplash.com/photo-1628778637004-8b346181ba8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=657&q=80',
          //   }}
          source={require('../../../assets/hat.png')}
        />
        <View style={styles.header_footer}>
          <Button
            labelStyle={{letterSpacing: 2}}
            color={COLOR_BLACK}
            style={styles.header_footer_btn}>
            Sign In
          </Button>
          <Button
            labelStyle={{letterSpacing: 2}}
            color={COLOR_BLACK}
            style={styles.header_footer_btn}>
            Sign Up
          </Button>
        </View>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.Footer}>
        <View>
          <TextInput
            style={styles.textInput}
            label="Email address"
            placeholder="vankiet.kn78@gmail.com"
            placeholderTextColor={COLOR_ORANGE}
            value={data.username}
            underlineColor={COLOR_ORANGE_DARK}
            onChangeText={val => textInputChange(val)}
          />
          <TextInput
            style={styles.textInput}
            label="Password"
            placeholderTextColor={COLOR_ORANGE}
            placeholder="******"
            value={data.password}
            underlineColor={COLOR_ORANGE_DARK}
            secureTextEntry={true}
            onChangeText={val => textInputPass(val)}
          />
          <Text style={styles.textForgot}>Forgot passcode?</Text>
        </View>
        <View>
          <Button
            style={styles.btnSignUp}
            mode="contained"
            onPress={() => navigation.navigate(SCREEN.SCREEN_SIGN_UP)}>
            Sign Up
          </Button>
        </View>
      </Animatable.View>
    </Center>
  );
};
export default SignInScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  center: {
    backgroundColor: COLOR_GRAY,
  },
  Header: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header_footer: {
    flexDirection: 'row',
  },
  header_footer_btn: {
    color: 'black',
    borderBottomWidth: 2.5,
    borderBottomColor: COLOR_ORANGE_DARK,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  Footer: {
    flex: 1,
    margin: 20,
    justifyContent: 'space-between',
  },
  textInput: {
    backgroundColor: COLOR_GRAY,
    marginBottom: 15,
  },
  textForgot: {
    color: COLOR_ORANGE_DARK,
    fontWeight: 'bold',
  },
  btnSignUp: {
    backgroundColor: COLOR_ORANGE_DARK,
    height: 50,
    borderRadius: 45,
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
});
