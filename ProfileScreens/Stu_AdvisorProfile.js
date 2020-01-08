import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import Stars from 'react-native-stars';
import {Icon, Button, ListItem, Divider} from 'react-native-elements';
import {styles} from '../styles/ProfileStyles';
const winWidth = Dimensions.get('window').width;
export default class Stu_AdvisorProfile extends Component {
  constructor(props) {
    super(props);
  }

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

  navigateToAppointmentForm = item =>
    this.props.navigation.navigate('AppointmentForm');

  navigateToFYPForm = item => this.props.navigation.navigate('AppointmentForm');

  render() {
    return (
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.top}>
            <Text style={styles.profileText}>Profile</Text>
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
                value={this.props.navigation.getParam('slots', 0)}
                spacing={4}
                count={5}
                starSize={32}
                backingColor="white"
                fullStar={require('../assets/images/green.png')}
                emptyStar={require('../assets/images/red.png')}
              />
              <Text style={styles.slotText}>
                {'Available Slots:  '}
                {this.props.navigation.getParam('slots', 0)}
                {'/5'}
              </Text>
            </View>

            <View
              pointerEvents="none"
              style={
                this.props.navigation.getParam('available', false)
                  ? styles.stu_switch
                  : [styles.stu_switch, styles.onSwitch]
              }>
              <Text
                // eslint-disable-next-line no-undef
                style={
                  this.props.navigation.getParam('available', false)
                    ? styles.AvailableText
                    : [styles.AvailableText, styles.NotAvailableText]
                }>
                {this.props.navigation.getParam('available', false)
                  ? 'Currently Available'
                  : 'Currently Unavailable'}
              </Text>
              <Text style={styles.TimeText}>
                {'Visiting Hours: 2:00 PM - 4:00 PM'}
              </Text>
            </View>

            <View style={styles.buttons}>
              <Button
                icon={{name: 'send', size: 25, color: '#FFF'}}
                buttonStyle={styles.buttonStyle}
                title="Send Appointment"
                onPress={this.navigateToAppointmentForm}
              />
              <Button
                icon={{name: 'send', size: 25, color: '#FFF'}}
                buttonStyle={styles.buttonStyle}
                title="Send Request"
                onPress={() => this.props.navigation.navigate('FypForm')}
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
          </View>
        </View>
      </ScrollView>
    );
  }
}
