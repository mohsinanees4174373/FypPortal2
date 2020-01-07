import React, {Component} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import Stars from 'react-native-stars';
import {Icon, Button, ListItem, Divider} from 'react-native-elements';
import SwitchToggle from 'react-native-switch-toggle';
import {styles} from '../styles/ProfileStyles';
const winWidth = Dimensions.get('window').width;
export default class Adv_AdvisorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: 0,
      availableSwitch: false,
      stars: 0,
    };
  }
  navigateToEditProfile = item =>
    this.props.navigation.navigate('AppointmentView');
  navigateToAppointmentView = item =>
    this.props.navigation.navigate('AppointmentView');

  navigateToFYPForm = item => this.props.navigation.navigate('AppointmentForm');

  onPress1 = () => {
    this.setState({availableSwitch: !this.state.availableSwitch});
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <ListItem
      title={item.name}
      titleStyle={styles.subtitle}
      // eslint-disable-next-line no-undef
      leftIcon={(name = 'laptop')}
      bottomDivider
    />
  );
  render() {
    return (
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.top}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flex: 1}} />
              <View style={{flex: 1}}>
                <Text style={styles.profileText}>Profile</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  marginEnd: 5,
                  marginTop: 3,
                }}>
                <Icon
                  color="#FFF"
                  name="account-edit"
                  size={35}
                  type="material-community"
                  onPress={this.navigateToEditProfile}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.container}
              activeOpacity={0.5}
              onPress={() => console.log('Works!')}>
              <Image
                source={require('../assets/images/pic2.jpg')}
                style={styles.circleImageLayout}
                showEditButton
                onPress={() => console.log('Works!')}
                editButton={{name: 'edit', size: 50}}
              />
            </TouchableOpacity>
            <Text style={styles.text}>
              {this.props.navigation.getParam('name', 'abc')}
            </Text>
            <Text style={styles.descriptionText}>
              {this.props.navigation.getParam('description', 'kkk')}
            </Text>
          </View>

          <View style={styles.Container}>
            <View style={{alignItems: 'center', margin: 15}}>
              <Stars
                default={0}
                update={val => {
                  this.setState({stars: val});
                }}
                spacing={4}
                starSize={32}
                backingColor="white"
                count={5}
                fullStar={require('../assets/images/green.png')}
                emptyStar={require('../assets/images/red.png')}
              />

              <Text style={styles.slotText}>
                {'Available Slots:  '}
                {this.state.stars}
                {'/5'}
              </Text>
            </View>

            <View
              style={
                this.state.availableSwitch
                  ? styles.switch
                  : [styles.switch, styles.onSwitch]
              }>
              <View style={styles.switchText}>
                <Text
                  style={
                    this.state.availableSwitch
                      ? styles.AvailableText
                      : [styles.AvailableText, styles.NotAvailableText]
                  }>
                  {this.state.availableSwitch
                    ? 'Currently Available'
                    : 'Currently Unavailable'}
                </Text>
                <Text style={styles.TimeText}>
                  {'Visiting Hours: 2:00 PM - 4:00 PM'}
                </Text>

                <SwitchToggle
                  containerStyle={{
                    marginVertical: 30,
                    marginHorizontal: 10,
                    width: 70,
                    height: 35,
                    borderRadius: 25,
                    backgroundColor: '#ccc',
                    padding: 5,
                  }}
                  backgroundColorOn="#FFF"
                  backgroundColorOff="#FFF"
                  circleColorOff="#c10909"
                  circleColorOn="#0f8790"
                  circleStyle={{
                    backgroundColor: 'white',
                    width: 25,
                    height: 25,
                    borderRadius: 15,
                  }}
                  switchOn={this.state.availableSwitch}
                  onPress={this.onPress1}
                />
              </View>

              <View style={styles.buttons}>
                <Button
                  icon={{name: 'visibility', size: 25, color: '#FFF'}}
                  buttonStyle={styles.buttonStyle}
                  title="View Appointments"
                  onPress={this.navigateToAppointmentView}
                />
                <Button
                  icon={{name: 'visibility', size: 25, color: '#FFF'}}
                  buttonStyle={styles.buttonStyle}
                  title="View Requests"
                  onPress={this.navigateToFypForm}
                />
              </View>

              <Divider
                style={{
                  elevation: 2,
                  backgroundColor: 'grey',
                  width: winWidth,
                  height: 1,
                }}
              />

              <View style={{width: winWidth, flex: 1}}>
                <ListItem
                  title="Technology"
                  subtitle="C++ , Python Javaq"
                  leftIcon={{name: 'laptop', color: '#2b60de'}}
                  bottomDivider
                />
                <ListItem
                  title="Previous FYP"
                  subtitle="C++ , Python Javaq"
                  leftIcon={{name: 'done', color: '#2b60de'}}
                />
              </View>
              <Divider
                style={{
                  elevation: 2,
                  backgroundColor: 'grey',
                  width: winWidth,
                  height: 1,
                }}
              />
              <Text>Uploads</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
