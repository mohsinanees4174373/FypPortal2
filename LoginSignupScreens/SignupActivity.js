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
  Picker,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginActivity from './LoginActivity';

var url = require('../url');

class SignupActivity extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
    this.state = {
      Name : '',
      Roll_number : '',
      email : '',
      phone : '',
      Degree: 'BSSE',
      address : '',
      password : '',
      cnfrmPassword: '',
    };
  }

  _storeStudentSignUpData = async () => {
    try {
      console.log('storing Data');
      await AsyncStorage.setItem('Name', this.state.Name);
      await AsyncStorage.setItem('Roll_number', this.state.Roll_number);
      await AsyncStorage.setItem('email', this.state.email);
      await AsyncStorage.setItem('phone', this.state.phone);
      await AsyncStorage.setItem('Degree', this.state.Degree);
      await AsyncStorage.setItem('address', this.state.address);
      await AsyncStorage.setItem('password', this.state.password);
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
    else if (this.state.Degree == '') {
      Alert.alert('Degree cannot be empty!');
    }
    else if (this.state.cnfrmPassword != this.state.password) {
      Alert.alert('Paswword and Confirm Password does not match!');
    }
    else if (!((/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/).test(this.state.Name)) && !((/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/).test(this.state.Name))){
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
                  if(mail[0].length == 10){
                      var rollNum = Array.from(mail[0]);
                      var dgre = rollNum[0] + rollNum[1] + rollNum[2];
                      if((dgre == 'bse' || dgre == 'bcs' || dgre == 'bit' || dgre == 'mcs') && rollNum[3] == 'f' && (rollNum[6] == 'm' || rollNum[6] == 'a')){
                          var yr = rollNum[4] + rollNum[5];
                          if(!isNaN(parseInt(yr))){
                              var rn = rollNum[7] + rollNum[8] + rollNum[9];
                              if(isNaN(parseInt(rn))){
                                  Alert.alert('Invalid Email!');
                              }else{
                                  if((dgre == 'bse' && this.state.Degree == 'BSSE') || (dgre == 'bcs' && this.state.Degree == 'BSCS') || (dgre == 'bit' && this.state.Degree == 'BSIT') || (dgre == 'mcs' && this.state.Degree == 'MCS')){
                                      fetch(url.base_url + "/checkStdAvailibility", {
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
                                              fetch(url.base_url + "/insertStudent", {
                                                method: 'POST',
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                              },
                                              body: JSON.stringify({
                                                  Name: this.state.Name,
                                                  Degree: this.state.Degree,
                                                  phone: this.state.phone,
                                                  email: this.state.email,
                                                  password: this.state.password,
                                                  address: this.state.address,
                                              })
                                            })
                                            .then((response) => response.json())
                                            .then((responseJson) => {
                                                  console.log(responseJson);
                                                  this._storeStudentSignUpData();
                                                  this.props.navigation.navigate('StudentHomeScreen');
                                              })
                                            }
                                          else{
                                              Alert.alert('Already Exist!');
                                          }
                                      })
                                      }
                                          
                                  else{
                                      Alert.alert('Invalid Email or Degree!');
                                  }
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
              source={require('../assets/images/Pu.png')}
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
                    'https://lh3.googleusercontent.com/proxy/BvbjW27NltRI6L4-rDQx1wHVayUfsFLtVXhOPk8hcyjxJLq6q4IPFyXffC8nRrm894PC65RFoX0GQeMNKbmJHoT9lGS86WDx7TY2EzF2xp1TvuoRJTA',
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Address"
                returnKeyType="next"
                //keyboardType="phone-pad"
                //underlineColorAndroid='transparent'
                onChangeText={address => this.setState({address})}
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
                    'https://www.konfest.com/wp-content/uploads/2019/06/Konfest-PNG-JPG-Image-Pic-Photo-Free-Download-Royalty-Unlimited-clip-art-sticker-cap-graduate-award-degree-ceremony-bachelor-graduation-46.png',
                }}
              />
              <Picker
                style={styles.inputs}
                //itemStyle={styles.inputs}
                //mode="dropdown"
                selectedValue={this.state.Degree}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({Degree: itemValue})
                }>
                <Picker.Item label="BSSE" value="BSSE" />
                <Picker.Item label="BSCS" value="BSCS" />
                <Picker.Item label="BSIT" value="BSIT" />
                <Picker.Item label="MCS" value="MCS" />
              </Picker>
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
    alignItems: 'center',
    justifyContent: 'center',
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

export default SignupActivity;
