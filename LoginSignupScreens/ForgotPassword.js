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
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
class ForgotPassword extends Component {
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
            <Image
              style={styles.fpasswordIcon}
              source={{
                uri:
                  'https://tse4.mm.bing.net/th?id=OIP.-Of0VjQL5FFB-DYzDlQPigHaHa&pid=Api&P=0&w=300&h=300',
              }}
            />
            <TouchableHighlight style={styles.headingContainer}>
              <Text style={styles.signin}>Recover your Password{'\n'}</Text>
            </TouchableHighlight>
            <View style={styles.line} />

            <View style={styles.inputContainer}>
              <Image
                style={styles.inpIcons}
                source={{
                  uri:
                    'https://i.dlpng.com/static/png/287100_thumb.png',
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

            <TouchableOpacity
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() =>
                this.props.navigation.navigate('StudentHomeScreen')
              }>
              <Text style={styles.loginText}>Get Verification Code</Text>
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
  fpasswordIcon: {
    flex: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    height: 40,
    width: 40,
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
    marginBottom: 13,
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
export default ForgotPassword;
