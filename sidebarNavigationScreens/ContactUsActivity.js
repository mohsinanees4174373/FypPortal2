import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import email from 'react-native-email';

export default class ContactUsActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '',
      message: '',
    };
  }

  render() {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://paperpks.com/wp-content/uploads/2018/12/pucit.png',
            }}
          />

          <View style={styles.line} />

          <Text style={styles.heading}>
            {'\n'}Get in Touch{'\n'}
          </Text>

          <View style={styles.inputContainer}>
            <Image
              style={styles.inpIcons}
              source={{
                uri:
                  'https://cdn1.iconfinder.com/data/icons/communication-bold-line-4/48/167-512.png',
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Subject"
              returnKeyType="next"
              onChangeText={subject => this.setState({subject})}
            />
          </View>

          <View style={styles.inputMsgContainer}>
            <Image
              style={styles.inpIcons}
              source={{
                uri:
                  'https://cdn4.iconfinder.com/data/icons/devine_icons/Black/PNG/System%20and%20Internet/JAVA.png',
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Your Message Here"
              returnKeyType="go"
              multiline={true}
              onChangeText={message => this.setState({message})}
            />
          </View>

          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.handleEmail.bind(this)}>
            <Text style={styles.buttonText}>Send Email</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  handleEmail = () => {
    const to = ['bsef16m010@pucit.edu.pk', 'mahroosh16hashmi@gmail.com']; // string or array of email addresses
    email(to, {
      subject: this.state.subject,
      body: this.state.message,
    }).catch(console.error);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
  line: {
    flex: 1,
    backgroundColor: 'black',
    height: 1,
    width: 175,
    marginTop: 20,
  },
  contactContainer: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  contact: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2B60DE',
    fontSize: 22,
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
  inputMsgContainer: {
    borderColor: '#2B60DE',
    //backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 1,
    //width:300,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    height: 150,
    marginBottom: 15,
    flexDirection: 'row',
    //alignItems: 'center',
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
  loginButton: {
    backgroundColor: '#2B60DE',
  },
  buttonText: {
    color: 'white',
  },
});
