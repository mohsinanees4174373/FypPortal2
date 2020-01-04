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
class StudentEditProfileActivity extends Component {
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
              style={styles.image}
              source={require('../assets/icons/a.jpg')}
            />
            <TouchableOpacity
              style={[styles.uploadbuttonContainer, styles.loginButton]}
              onPress={() => this.props.navigation.navigate('')}>
              <Text style={styles.loginText}>Upload Image</Text>
            </TouchableOpacity>
            <TouchableHighlight style={styles.headingContainer}>
              <Text style={styles.signin}>Name{'\n'}</Text>
            </TouchableHighlight>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inpIcons}
                source={{
                  uri:
                    'https://www.flaticon.com/premium-icon/icons/svg/2217/2217312.svg',
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Mohsin Anees"
                placeholderTextColor="#000000"
                returnKeyType="next"
                keyboardType="email-address"
                //underlineColorAndroid='transparent'
                onChangeText={email => this.setState({email})}
              />
            </View>
            <TouchableHighlight style={styles.headingContainer}>
              <Text style={styles.signin}>Email Address{'\n'}</Text>
            </TouchableHighlight>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inpIcons}
                source={{
                  uri:
                    'https://www.flaticon.com/premium-icon/icons/svg/2217/2217312.svg',
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="mochinanees@gmail.com"
                placeholderTextColor="#000000"
                secureTextEntry={true}
                returnKeyType="go"
                //underlineColorAndroid='transparent'
                onChangeText={password => this.setState({password})}
              />
            </View>
            <TouchableHighlight style={styles.headingContainer}>
              <Text style={styles.signin}>Phone Number{'\n'}</Text>
            </TouchableHighlight>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inpIcons}
                source={{
                  uri:
                    'https://www.flaticon.com/premium-icon/icons/svg/2217/2217312.svg',
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="+923204174373"
                placeholderTextColor="#000000"
                secureTextEntry={true}
                returnKeyType="go"
                //underlineColorAndroid='transparent'
                onChangeText={password => this.setState({password})}
              />
            </View>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.props.navigation.navigate('')}>
              <Text style={styles.loginText}>Save Changes</Text>
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
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    resizeMode: 'contain',
    alignItems: 'center',
  },
  headingContainer: {
    flex: 1,
    height: 22,
    //width: 200,
    flexDirection: 'row',
  },

  signin: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //height: 150,
    //width: 150,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#2B60DE',
    marginLeft: 20,

    //textDecorationLine: 'underline'
  },
  image: {
    marginTop: 20,
    height: 128,
    width: 128,
    borderRadius: 64,
  },
  inpIcons: {
    padding: 10,
    marginLeft: 7,
    height: 23,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  inputContainer: {
    borderColor: '#2B60DE',
    //backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    //width:300,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    height: 32,
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
    borderRadius: 10,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
  },
  uploadbuttonContainer: {
    height: 37,
    //marginBottom:10,
    //width:300,
    borderRadius: 10,
    width: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 15,
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
export default StudentEditProfileActivity;
