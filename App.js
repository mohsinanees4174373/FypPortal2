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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import SecondActivity from './sidebarNavigationScreens/EditProfileActivity';
import ThirdActivity from './sidebarNavigationScreens/SettingsActivity';
import FourthActivity from './sidebarNavigationScreens/AboutUsActivity';
import FifthActivity from './sidebarNavigationScreens/ContactUsActivity';
import AdvisorsListActivity from './BottomNavigationScreens/AdvisorsListActivity';
import AppointmentsActivity from './BottomNavigationScreens/AppointmentsActivity';
import FypRequestActivity from './BottomNavigationScreens/FypRequestActivity';
import Chats from './BottomNavigationScreens/Chats';


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
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
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
                this.props.navigation.navigate('First');}}>Home</Text>

          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
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
                  'https://image.flaticon.com/icons/png/512/60/60473.png',
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
                  'https://image.flaticon.com/icons/png/512/15/15659.png',
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
                  'https://image.flaticon.com/icons/png/512/1898/1898105.png',
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
                  'https://www.iconsdb.com/icons/preview/color/2B60DE/conference-call-xxl.png',
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
                  'https://www.iconsdb.com/icons/preview/color/2B60DE/appointment-reminders-xxl.png',
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
                  'https://www.iconsdb.com/icons/preview/color/2B60DE/decision-xxl.png',
              }}
              style={styles.sideMenuIcon}
            />
          </View>
          </View>
        ),


      },
    },
    Chats: {
      screen: Chats,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Image
            source={{
              uri:
                'https://www.iconsdb.com/icons/preview/color/2B60DE/chat-4-xxl.png',
            }}
              style={styles.sideMenuIcon}
            />
          </View>
        ),


      },
    },

  },
  {
    initialRouteName: 'AdvisorsList',
    activeColor: '#000',
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: '#fff'},
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
