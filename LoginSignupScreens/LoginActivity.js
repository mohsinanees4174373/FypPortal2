/* eslint-disable eqeqeq */
import React , {Component, useEffect} from 'react';
import {AsyncStorage, Navigator, BackHandler} from 'react-native'
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
var url = require('../url');
class LoginActivity extends Component {
  constructor(props) {
    super(props);

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: AsyncStorage has been extracted',
    ]);
    this.state = {
      email: '',
      password: '',
    };
  }
  _storeStudentData = async () => {
    try {
      console.log('storing Data');
      await AsyncStorage.setItem('email', this.state.email);
      await AsyncStorage.setItem('password', this.state.password);
      await AsyncStorage.setItem('user', 'student');
      const value = await AsyncStorage.getItem('user');
      console.log(value);
    } catch (error) {
      console.log('ethy v error bro');
      
    }
  };
  _storeAdvisorData = async () => {
    try {
      console.log('storing Data');
      await AsyncStorage.setItem('email', this.state.email);
      await AsyncStorage.setItem('password', this.state.password);
      await AsyncStorage.setItem('user', 'advisor');
    } catch (error) {
      console.log('ethy v error bro');
    }
  };
  _retriveData = async () => {
    try {
      console.log('retrivingData')
      //await AsyncStorage.removeItem("password");
      //await AsyncStorage.removeItem("user");
      //await AsyncStorage.removeItem("email");
      const value = await AsyncStorage.getItem("user");
      console.log(value);
      if (value !== null) {
        if(value === 'student')
        {
          this.props.navigation.navigate('StudentHomeScreen');
          
          
        }else if(value ==='advisor')
        {
          this.props.navigation.navigate('AdvisorHomeScreen'); 
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  checkLogin() {
    

    if (this.state.email== '') {
      Alert.alert('Email cannot be empty!');
    }
    else if (this.state.password == '') {

      Alert.alert('Password cannot be empty!');

    }
    else
    {
      
    fetch(url.base_url + "/checkStudentLogin", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        if(responseJson[0])
        {
          console.log(responseJson);

          this._storeStudentData();
          this.props.navigation.navigate('StudentHomeScreen');
        }
        else
        {
          fetch( url.base_url + "/checkAdvisorLogin", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: this.state.email,
              password: this.state.password,
          })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson[0])
            {
              this._storeAdvisorData();
              this.props.navigation.navigate('AdvisorHomeScreen'); 
            }
            else
            {
              Alert.alert('Invalid Username/Password');
            }
          })
    
    
        }
      })
      
  }

  }
  
  

  componentDidMount(){
    console.log('calling')
    this._retriveData();
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
                  uri: 'https://i.dlpng.com/static/png/287100_thumb.png',
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
                    'https://i.pinimg.com/originals/4d/eb/3c/4deb3c920b25c70288af20d66c559b72.png',
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
              onPress={() => this.checkLogin()}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainerForgetPwd}
              onPress={() =>
                this.props.navigation.navigate('ForgotPasswordScreen')
              }>
              <Text style={styles.forgetPwd}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableHighlight>
              <Text>New on FYP PORTAL?{'\n'}</Text>
            </TouchableHighlight>
            <View style={styles.sideBySideButtonContainer}>
              <TouchableOpacity
                style={[styles.Button1, styles.registerButton]}
                onPress={() => this.props.navigation.navigate('Signup')}>
                <Text>Register as Student</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.Button2, styles.registerButton]}
                onPress={() => this.props.navigation.navigate('AdvisorSignup')}>
                <Text>Register as Advisor</Text>
              </TouchableOpacity>
            </View>
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
    flex: 1,
    height: 45,
    //flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'right',
    //marginBottom:10,
    //width:300,
    //borderRadius: 50,
    alignSelf: 'stretch',
    //marginLeft: 220,
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
    marginBottom: 10,
  },
  sideBySideButtonContainer:
  {
    flexDirection:"row",
    width:"80%",
  },
  Button1: {
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom:10,
    //width:300,
    borderRadius: 50,
    alignSelf: 'stretch',
    height:45,
    width:"50%",
  },
  Button2: {
    justifyContent: 'center',
    alignItems: 'center',
    width:"50%",
    borderRadius: 50,
    alignSelf: 'stretch',
    marginLeft: 10,
    height:45
  },
});
export default LoginActivity;
