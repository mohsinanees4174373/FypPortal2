import React, {Component} from 'react';
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
  Alert,
  ImageBackground,
  YellowBox,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginActivity from './LoginActivity';

var url = require('../url');

class AdvSignupActivity extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
    this.state = {
      Name : '',
      email : '',
      phone : '',
      password : '',
      cnfrmPassword: '',
      Qualification: '',
      Designation: '',
    };
  }

  _storeAdvisorSignUpData = async () => {
    try {
      console.log('storing Data');
      await AsyncStorage.setItem('Name', this.state.Name);
      await AsyncStorage.setItem('email', this.state.email);
      await AsyncStorage.setItem('phone', this.state.phone);
      await AsyncStorage.setItem('password', this.state.password);
      await AsyncStorage.setItem('Qualification', this.state.Qualification);
      await AsyncStorage.setItem('Designation', this.state.Designation);
      //await AsyncStorage.setItem('user', 'student');
      //const value = await AsyncStorage.getItem('user');
      //console.log(value);
    } catch (error) {
      console.log('ethy v error bro');
      
    }
  };
   
  checkSignup() {
    if (this.state.Name== '') {
      Alert.alert('Name cannot be empty!');
    }
    else if (this.state.email== '') {
      Alert.alert('Email cannot be empty!');
    }
    else if (this.state.phone== '') {
      Alert.alert('Phone # cannot be empty!');
    }
    else if (this.state.password== '') {
      Alert.alert('Password cannot be empty!');
    }
    else if (this.state.cnfrmPassword== '') {
      Alert.alert('Confirm Password cannot be empty!');
    }
    else if (this.state.Qualification == '') {
      Alert.alert('Qualification cannot be empty!');
    }
    else if (this.state.Designation == '') {
      Alert.alert('Designation cannot be empty!');
    }
    else if (this.state.cnfrmPassword != this.state.password) {
      Alert.alert('Paswword and Confirm Password does not match!');
    }
    else if (!((/^[a-zA-Z]+ [a-zA-Z]+$/).test(this.state.Name)) && !((/^[A-Za-z]+$/).test(this.state.Name))){
        Alert.alert('Invalid Name!');
    }
    else if (this.state.phone.length != 5 || isNaN(parseInt(this.state.phone))){
      Alert.alert('Invalid Phone #!');
    }
    else if(this.state.email != ''){
      if(this.state.email.includes("@pucit.edu.pk")){
          var mail = this.state.email.split("@");
          if(mail.length == 2){
              if(mail[1] == "pucit.edu.pk"){
                  fetch(url.base_url + "/checkAdvAvailibility", {
                      method: 'POST',
                      headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  },
                      body: JSON.stringify({
                      email: this.state.email,
                      })
                  })
                  .then((response) => response.json())
                  .then((responseJson) => {
                      if(!responseJson[0])
                      {
                          fetch(url.base_url + "/insertAdvisor", {
                          method: 'POST',
                          headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                          Name: this.state.Name,
                          phone: this.state.phone,
                          email: this.state.email,
                          password: this.state.password,
                          Qualification: this.state.Qualification,
                          Designation: this.state.Designation,
                      })
                  })
                  .then((response) => response.json())
                  .then((responseJson) => {
                  console.log(responseJson);
                  this._storeAdvisorSignUpData();
                  this.props.navigation.navigate('AdvisorHomeScreen');
                  })
                  }
                  else{
                       Alert.alert('Already Exist!');
                  }
                  })
              }
              else{
                  Alert.alert('Invalid Email!');
              }
          }
          else{
              Alert.alert('Invalid Email!');
          }
      }
      else{
          Alert.alert('Invalid Email!');
      }
    }
  };

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
              <Text style={styles.signin}>Create Account{'\n'}</Text>
            </TouchableHighlight>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inpIcons}
                source={{
                  uri: 'https://image.flaticon.com/icons/png/128/44/44948.png',
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Person Name"
                returnKeyType="next"
                //keyboardType="email-address"
                //underlineColorAndroid='transparent'
                onChangeText={Name => this.setState({Name})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inpIcons}
                source={{
                  uri: 'https://i.dlpng.com/static/png/287100_thumb.png',
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Email Address"
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
                    'https://cdn1.iconfinder.com/data/icons/web-62/48/23-512.png',
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Phone Number"
                returnKeyType="next"
                keyboardType="phone-pad"
                //underlineColorAndroid='transparent'
                onChangeText={phone => this.setState({phone})}
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
                returnKeyType="next"
                //underlineColorAndroid='transparent'
                onChangeText={password => this.setState({password})}
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
                placeholder="Confirm Password"
                secureTextEntry={true}
                returnKeyType="next"
                //underlineColorAndroid='transparent'
                onChangeText={cnfrmPassword => this.setState({cnfrmPassword})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inpIcons}
                source={{
                  uri:
                    'https://www.bendutter.com/wp-content/uploads/2014/08/graduation-cap.png',
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Qualification"
                returnKeyType="next"
                //keyboardType="email-address"
                //underlineColorAndroid='transparent'
                onChangeText={Qualification => this.setState({Qualification})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inpIcons}
                source={{
                  uri:
                    'https://www.vippng.com/png/detail/4-45539_label-shapes-png-transparent-background-white-label-icon.png',
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Designation"
                returnKeyType="go"
                //underlineColorAndroid='transparent'
                onChangeText={Designation => this.setState({Designation})}
              />
            </View>

            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.checkSignup()}>
              <Text style={styles.signupText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableHighlight>
              <Text>Already Have Account?{'\n'}</Text>
            </TouchableHighlight>

            <TouchableOpacity
              style={[styles.buttonContainer, styles.signinButton]}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text>SIGN IN</Text>
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
    fontSize: 21,
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
    marginBottom: 15,
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
  signupButton: {
    backgroundColor: '#2B60DE',
    marginBottom: 20,
  },
  signinButton: {
    flex: 0,
    borderWidth: 1,
    borderColor: '#2B60DE',
    marginBottom: 150,
  },
  signupText: {
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

export default AdvSignupActivity;
