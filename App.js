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

import {createDrawerNavigator} from 'react-navigation-drawer';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import SecondActivity from './sidebarNavigationScreens/EditProfileActivity';
import ThirdActivity from './sidebarNavigationScreens/SettingsActivity';
import FourthActivity from './sidebarNavigationScreens/AboutUsActivity';
import FifthActivity from './sidebarNavigationScreens/ContactUsActivity';
import AdvisorsListActivity from './BottomNavigationScreens/AdvisorsListActivity';
import AppointmentsActivity from './BottomNavigationScreens/AppointmentsActivity';
import FypRequestActivity from './BottomNavigationScreens/FypRequestActivity';


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

class Custom_Side_Menu extends Component {
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <Image
          source={{
            uri:
              'https://steemitimages.com/DQmcek9BSHCeexVtcntZWju6f2AsM9zgoF4GGYRp5e1Dy4Z/PU-College-Of-Information-Technology-PUCIT-Entry-Test-Result-2017-NTS-Answer-Keys.png',
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
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image
              source={{
                uri:
                  'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg',
              }}
              style={styles.sideMenuIcon}
            />
            <Text
              style={styles.menuText}
              onPress={() => {
                this.props.navigation.navigate('First');}}>Home</Text>

          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image
              source={{
                uri:
                  'https://reactnativecode.com/wp-content/uploads/2018/08/promotions.jpg',
              }}
              style={styles.sideMenuIcon}
            />

            <Text
              style={styles.menuText}
              onPress={() => {
                this.props.navigation.navigate('Second');
              }}>
              {' '}
              Edit Profile{' '}
            </Text>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image
              source={{
                uri:
                  'https://reactnativecode.com/wp-content/uploads/2018/08/outbox.jpg',
              }}
              style={styles.sideMenuIcon}
            />

            <Text
              style={styles.menuText}
              onPress={() => {
                this.props.navigation.navigate('Third');
              }}>
              {' '}
              Settings{' '}
            </Text>
          </View>


          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image
              source={{
                uri:
                  'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg',
              }}
              style={styles.sideMenuIcon}
            />
            <Text
              style={styles.menuText}
              onPress={() => {
                this.props.navigation.navigate('Fourth');}}>About Us</Text>

          </View>


          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image
              source={{
                uri:
                  'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg',
              }}
              style={styles.sideMenuIcon}
            />
            <Text
              style={styles.menuText}
              onPress={() => {
                this.props.navigation.navigate('Fifth');}}>Contact Us</Text>

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


const AdvisorsListActivity_StackNavigator = createStackNavigator({
  First: {
    screen: AdvisorsListActivity,
    navigationOptions: ({navigation}) => ({
      title: 'AdvisorsList',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#2B60DE',
      },
      headerTintColor: '#fff',
    }),
  },
});







const TabNavigator = createMaterialBottomTabNavigator(
  {
    // Second: {
    //   screen: SecondActivity,
    // },
    // Third: {
    //   screen: ThirdActivity,
    // },
    AdvisorsList: {
      screen: AdvisorsListActivity,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Image
              source={{
                uri:
                  'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg',
              }}
              style={styles.sideMenuIcon}
            />
          </View>
        ),


      },
    },
    Appointments: {
      screen: AppointmentsActivity,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Image
              source={{
                uri:
                  'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg',
              }}
              style={styles.sideMenuIcon}
            />
          </View>
        ),


      },
    },
    FYPRequest:{
      screen: FypRequestActivity,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            {/* <Icon style={[{color: tintColor}]} size={25} name={'facebook'}/> */}

            <View>
            <Image
              source={{
                uri:
                  'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg',
              }}
              style={styles.sideMenuIcon}
            />
          </View>
          </View>
        ),


      },
    },

  },
  {
    initialRouteName: 'AdvisorsList',
    activeColor: '#fff',
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: '#2B60DE'},
  },
);




const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: TabNavigator,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#2B60DE',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  Second: {
    screen: SecondActivity,
        navigationOptions: ({navigation}) => ({
      title: 'Edit Profile',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#2B60DE',
      },
      headerTintColor: '#fff',
    }),
  },
});

const ThirdActivity_StackNavigator = createStackNavigator({
  Third: {
    screen: ThirdActivity,
    navigationOptions: ({navigation}) => ({
      title: 'Settings',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#2B60DE',
      },
      headerTintColor: '#fff',
    }),
  },
});

const FourthActivity_StackNavigator = createStackNavigator({
  Fourth: {
    screen: FourthActivity,
    navigationOptions: ({navigation}) => ({
      title: 'About Us',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#2B60DE',
      },
      headerTintColor: '#fff',
    }),
  },
});

const FifthActivity_StackNavigator = createStackNavigator({
  Fourth: {
    screen: FifthActivity,
    navigationOptions: ({navigation}) => ({
      title: 'About Us',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#2B60DE',
      },
      headerTintColor: '#fff',
    }),
  },
});









const MyDrawerNavigator = createDrawerNavigator({
  MainStack: {
    screen: FirstActivity_StackNavigator,
  },
  SecondStack: {
    screen: SecondActivity_StackNavigator,
  },

  ThirdStack: {
    screen: ThirdActivity_StackNavigator,
  },
  FourthStack: {
    screen: FourthActivity_StackNavigator,
  },
  FifthStack: {
    screen: FifthActivity_StackNavigator,
  },

},
  {
    contentComponent: Custom_Side_Menu,
    drawerWidth: Dimensions.get('window').width - 130,
  });
  const App = createAppContainer(MyDrawerNavigator);
  export default App;



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
