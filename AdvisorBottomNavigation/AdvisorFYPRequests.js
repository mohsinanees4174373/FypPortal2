/* eslint-disable no-undef */
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  YellowBox,
  Image,
  TouchableOpacity,
} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

class AdvisorFypRequestActivity extends Component {
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
        <Text style={{fontSize: 29}}>Advisor FYP Request Activity </Text>
      </View>
    );
  }
}
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
    width: 28,
    height: 28,
    marginRight: 10,
    marginLeft: 20,
  },

  menuText: {
    fontSize: 15,
    color: '#222222',
  },
});

export default AdvisorFypRequestActivity;
