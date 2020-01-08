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
class ChangePwdActivity extends Component {
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
            
            <View style={styles.line} />
            <TouchableHighlight style={styles.headingContainer}>
              <Text style={styles.heading}>Change Password{'\n'}</Text>
            </TouchableHighlight>

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
                placeholder="Old Password"
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
                placeholder="New Password"
                secureTextEntry={true}
                returnKeyType="next"
                //underlineColorAndroid='transparent'
                onChangeText={password => this.setState({password})}
              />
            </View>

            <TouchableOpacity
              style={[styles.buttonContainer, styles.chngPwdButton]}
              //onPress={() =>
               // this.props.navigation.navigate('StudentHomeScreen')}
              >
              <Text style={styles.btnText}>Change Password</Text>
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
  heading: {
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
  chngPwdButton: {
    backgroundColor: '#2B60DE',
  },
  btnText: {
    color: 'white',
  },
  line: {
    flex: 0,
    backgroundColor: 'black',
    height: 1,
    width: 175,
    marginBottom: 20,
    marginTop: 20,
  },
});
export default ChangePwdActivity;
