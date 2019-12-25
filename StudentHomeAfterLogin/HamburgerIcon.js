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

class HamburgerIcon extends Component {
    toggleDrawer = () => {
      console.log(this.props.navigationProps);
  
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <Image
              source={{
                uri:
                  'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{width: 25, height: 25, marginLeft: 5}}
            />
          </TouchableOpacity>
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
  export default HamburgerIcon;
