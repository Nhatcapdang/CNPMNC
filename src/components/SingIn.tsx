import React, { FC } from 'react';
import * as Animatable from 'react-native-animatable';
import {
  Alert,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Center from '../common/center';
import {
  COLOR_GRAY,
  COLOR_WHITE,
  COLOR_ORANGE_DARK,
  COLOR_ORANGE,
  COLOR_BLACK,
} from '../VariableCss';
import { TextInput, Button } from 'react-native-paper';
import { Users } from '../const';
import { AuthContext } from '../common/context';
import Feather from 'react-native-vector-icons/Feather';
import { SCREEN } from '../interface/enum';

// import Logo from '../../../assets/hat.png'
interface SignInProps {
  navigation?: any;
}

const SignInScreen: FC<SignInProps> = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val: string) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const textInputPass = (val: string) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const loginHandle = (userName: string, password: string) => {
    const foundUser = Users.filter(item => {
      return userName === item.username && password === item.password;
    });

    if (data.username.length === 0 || data.password.length === 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{ text: 'Okay' }],
      );
      return;
    }

    if (foundUser.length === 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        { text: 'Okay' },
      ]);
      return;
    }
    signIn(foundUser);
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
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
          source={require('../../assets/hat.png')}
        />
        <View style={styles.header_footer}>
          <Button
            labelStyle={{ letterSpacing: 2 }}
            color={COLOR_BLACK}
            style={styles.header_footer_btn}
          >
            Sign In
          </Button>
          <Button
            labelStyle={{ letterSpacing: 2 }}
            color={COLOR_BLACK}
            // style={styles.header_footer_btn}
            onPress={() => navigation.navigate(SCREEN.SCREEN_SIGN_UP)}
          >
            Sign Up
          </Button>
        </View>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.Footer}>
        <View>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              label="Email address"
              placeholder="vankiet.kn78@gmail.com"
              placeholderTextColor={COLOR_ORANGE}
              value={data.username}
              underlineColor={COLOR_ORANGE_DARK}
              // keyboardType="numeric"
              onChangeText={val => textInputChange(val)}
            />
            {data.check_textInputChange && (
              <Animatable.View
                animation="bounceIn"
                style={{ position: 'absolute', right: 0 }}
              >
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            )}
          </View>
          {/* {!data.isValidUser && (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username must be 4 characters long.
              </Text>
            </Animatable.View>
          )} */}
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              label="Password"
              placeholderTextColor={COLOR_ORANGE}
              placeholder="******"
              value={data.password}
              underlineColor={COLOR_ORANGE_DARK}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={val => textInputPass(val)}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
              style={{ position: 'absolute', right: 0 }}
            >
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {/* {true ?? (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )} */}
          <Text style={styles.textForgot}>Forgot passcode?</Text>
        </View>
        <View>
          <Button
            style={styles.btnSignUp}
            mode="contained"
            onPress={() => {
              loginHandle(data.username, data.password);
            }}
            // onPress={() => navigation.navigate(SCREEN.SCREEN_SIGN_UP)}
          >
            Sign Up
          </Button>
        </View>
      </Animatable.View>
    </Center>
  );
};
export default SignInScreen;

const { height } = Dimensions.get('screen');
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
    width: '100%',
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
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  action: {
    position: 'relative',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
});
