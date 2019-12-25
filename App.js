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
  Dimensions,
  Alert,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SignupActivity from './LoginSignupScreens/SignupActivity';
import LoginActivity from './LoginSignupScreens/LoginActivity';
import AppointmentsActivity from './BottomNavigationScreens/AppointmentsActivity';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SecondActivity from './sidebarNavigationScreens/EditProfileActivity';
import ThirdActivity from './sidebarNavigationScreens/SettingsActivity';
import FourthActivity from './sidebarNavigationScreens/AboutUsActivity';
import FifthActivity from './sidebarNavigationScreens/ContactUsActivity';
import AdvisorsListActivity from './BottomNavigationScreens/AdvisorsListActivity';
import FypRequestActivity from './BottomNavigationScreens/FypRequestActivity';
import Chats from './BottomNavigationScreens/Chats';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HamburgerIcon from './StudentHomeAfterLogin/HamburgerIcon';
import Custom_Side_Menu from './StudentHomeAfterLogin/Custom_Side_ Menu';

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
    FYPRequest: {
      screen: FypRequestActivity,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            {/* <Icon style={[{color: tintColor}]} size={25} name=

{'facebook'}/> */}

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

const MyDrawerNavigator = createDrawerNavigator(
  {
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
  },
);

const MainNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginActivity,
    },
    Signup: {
      screen: SignupActivity,
    },
    StudentHomeScreen: {
      screen: MyDrawerNavigator,
    },
  },
  {
    headerMode: 'none',
  },
);

const App = createAppContainer(MainNavigator);
export default App;

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
    fontSize: 22,
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
    marginBottom: 150,
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
    marginBottom: 8,
  },

  menuText: {
    fontSize: 15,
    color: '#222222',
    marginBottom: 8,
  },
});
