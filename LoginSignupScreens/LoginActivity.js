import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  YellowBox,
  Alert,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {SignupActivity} from './SignupActivity';

class LoginActivity extends Component {
  constructor(props) {
    super(props);

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={{
                uri:
                  'https://paperpks.com/wp-content/uploads/2018/12/pucit.png',
              }}
            />
            <TouchableHighlight style={styles.headingContainer}>
              <Text style={styles.header}>FYP PORTAL</Text>
            </TouchableHighlight>
            <View style={styles.line} />
            <TouchableHighlight style={styles.headingContainer}>
              <Text style={styles.signin}>LOGIN{'\n'}</Text>
            </TouchableHighlight>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inpIcons}
                source={{
                  uri:
                    'https://i7.pngguru.com/preview/787/587/583/computer-icons-email-icon-design-email.jpg',
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Your Email Address"
                returnKeyType="next"
                keyboardType="email-address"
                //underlineColorAndroid='transparent'
                onChangeText={email => this.setState({email})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inpIcons}
                source={{
                  uri:
                    'https://library.kissclipart.com/20180829/iae/kissclipart-password-icon-clipart-password-computer-icons-clip-d813f06606bcdc9a.png',
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                returnKeyType="go"
                //underlineColorAndroid='transparent'
                onChangeText={password => this.setState({password})}
              />
            </View>

            <TouchableOpacity
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.onClickListener('login')}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainerForgetPwd}
              onPress={() => this.onClickListener('restore_password')}>
              <Text style={styles.forgetPwd}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableHighlight>
              <Text>New on FYP PORTAL?{'\n'}</Text>
            </TouchableHighlight>

            <TouchableOpacity
              style={[styles.buttonContainer, styles.registerButton]}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    height: 150,
    width: 150,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  headingContainer: {
    flex: 1,
    height: 50,
    //width: 200,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //height: 150,
    //width: 150,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: 'black',
    //textDecorationLine: 'underline'
  },
  signin: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //height: 150,
    //width: 150,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#2B60DE',
    //textDecorationLine: 'underline'
  },
  inpIcons: {
    padding: 10,
    marginLeft: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  inputContainer: {
    borderColor: '#2B60DE',
    //backgroundColor: '#FFFFFF',
    borderRadius: 50,
    borderWidth: 1,
    //width:300,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    height: 35,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    //marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom:10,
    //width:300,
    borderRadius: 50,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
  },
  buttonContainerForgetPwd: {
    flex: 0,
    height: 45,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    //marginBottom:10,
    //width:300,
    borderRadius: 50,
    //alignSelf: 'stretch',
    marginLeft: 220,
    marginRight: 10,
  },
  forgetPwd: {
    flex: 1,
    textAlign: 'right',
    textDecorationLine: 'underline',
    alignSelf: 'stretch',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#2B60DE',
  },
  registerButton: {
    flex: 0,
    borderWidth: 1,
    borderColor: '#2B60DE',
    marginBottom: 150,
  },
  loginText: {
    color: 'white',
  },
  line: {
    flex: 0,
    backgroundColor: 'black',
    height: 1,
    width: 175,
    marginBottom: 20,
  },
});
export default LoginActivity;
