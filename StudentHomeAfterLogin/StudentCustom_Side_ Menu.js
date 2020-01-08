/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  YellowBox,
  Dimensions,
  Button,
} from 'react-native';

class Custom_Side_Menu extends Component {
    render() {
      return (
        <View style={styles.sideMenuContainer}>
          <Image
            source={{
              uri:
                
  
  'https://www.dontshake.org/media/k2/items/cache/71f67488b0857639cee631943a3fc6fa_XL.jpg',
            }}
            style={styles.sideMenuProfileIcon}
          />
  
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#e2e2e2',
              marginTop: 20,
            }}
          />
  
          <View style={{width: '100%'}}>
            <View
              style={{flexDirection: 'row', alignItems: 'center', marginTop: 
  
  20}}>
              <Image
              
                source={{
                  uri:
                    'https://image.flaticon.com/icons/png/512/2/2144.png',
                }}
                style={styles.sideMenuIcon}
              />
              <Text
                style={styles.menuText}
                onPress={() => {
                  this.props.navigation.navigate('StudentHome');}}>Home</Text>
  
            </View>
            <View
              style={{flexDirection: 'row', alignItems: 'center', marginTop: 
  
  20}}>
              <Image
                source={{
                  uri:
                    
  
  'https://image.flaticon.com/icons/png/512/149/149995.png',
                }}
                style={styles.sideMenuIcon}
              />
  
              <Text
                style={styles.menuText}
                onPress={() => {
                  this.props.navigation.navigate('StudentEditProfile');
                }}>
                View Profile{' '}
              </Text>
            </View>


  
            
  
  
            <View
              style={{flexDirection: 'row', alignItems: 'center', marginTop: 
  
  20}}>
              <Image
                source={{
                  uri:
                    'https://image.flaticon.com/icons/png/512/15/15659.png',
                }}
                style={styles.sideMenuIcon}
              />
              <Text
                style={styles.menuText}
                onPress={() => {
                  this.props.navigation.navigate('AboutUs');}}>About Us</Text>
  
            </View>
            <View
              style={{flexDirection: 'row', alignItems: 'center', marginTop: 
  
  20}}>
              <Image
                source={{
                  uri:
                    'https://image.flaticon.com/icons/png/512/15/15659.png',
                }}
                style={styles.sideMenuIcon}
              />
              <Text
                style={styles.menuText}
                onPress={() => {
                  this.props.navigation.navigate('ContactUs');}}>Contact Us</Text>
  
            </View>
            <View
              style={{flexDirection: 'row', alignItems: 'center', marginTop: 
  
  20}}>
              <Image
                source={{
                  uri:
                    'https://cdn3.iconfinder.com/data/icons/vector-icons-for-mobile-apps-2/512/Settings_black-512.png',
                }}
                style={styles.sideMenuIcon}
              />
              <Text
                style={styles.menuText}
                onPress={() => {
                  this.props.navigation.navigate('Settings');}}>Settings</Text>
  
            </View>
  
  
            
  
          </View>
  
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#e2e2e2',
              marginTop: 15,
            }}
          />
        </View>
      );
    }
  }
  
  class MainActivity extends Component {
    constructor(props) {
      super(props);
  
      YellowBox.ignoreWarnings([
        'Warning: componentWillMount is deprecated',
        'Warning: componentWillReceiveProps is deprecated',
      ]);
    }
  
    render() {
      return (
        <View style={styles.MainContainer}>
          <Text style={{fontSize: 23}}> Home Activity </Text>
  
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 20 : 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inpIcons: {
      padding: 10,
      marginLeft: 10,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
  
    sideMenuContainer: {
      width: '100%',
      height: '100%',
  
      alignItems: 'center',
      paddingTop: 20,
    },
  
    sideMenuProfileIcon: {
      resizeMode: 'center',
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
  
    },
  
    sideMenuIcon: {
      resizeMode: 'center',
      width: 25,
      height: 25,
      marginLeft: 15,
      marginRight: 20,
      marginBottom:8,
      
    },
  
    menuText: {
      fontSize: 15,
      color: '#222222',
      marginBottom:8,
  
    },
  });
  export default Custom_Side_Menu;
