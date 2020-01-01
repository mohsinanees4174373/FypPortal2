/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
<<<<<<< HEAD

=======
>>>>>>> b663787b2935002be1cc0eff4703224687152b00
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Dimensions,
  Image,
  YellowBox,
} from 'react-native';
import Button from 'react-native-button';
import {AppStyles} from '../styles/RequestFormStyle';
import {styles} from '../styles/AppointmentRequestStyles';
import DatePicker from 'react-native-datepicker';
<<<<<<< HEAD

=======
>>>>>>> b663787b2935002be1cc0eff4703224687152b00
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class AppointmentRequestScreen extends React.Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: Failed prop type',
      'Warning: componentWillReceiveProps has been renamed',
      'Warning: DatePickerAndroid has been merged with DatePickerIOS',
      'Warning: TimePickerAndroid has been merged with DatePickerIOS',
    ]);
    this.state = {
      loading: true,
      fullname: '',
      date: '',
      time: '',
      reason: '',
      members: '',
    };
  }
  render() {
    return (
      <ScrollView>
<<<<<<< HEAD

=======
>>>>>>> b663787b2935002be1cc0eff4703224687152b00
        <View style={styles.container}>
          <View style={styles.InputContainer}>
            <View style={styles.SectionStyle}>
              <Image
                source={require('../assets/icons/person.png')}
                style={styles.Icon}
              />
              <TextInput
                style={styles.body}
                placeholder="Full Name"
                onChangeText={text => this.setState({fullname: text})}
                value={this.state.fullname}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
            </View>
<<<<<<< HEAD
            </View>           
        
        <View style={styles.InputContainer}>
          <View style={styles.SectionStyle}>
          <Image source = {require('../assets/icons/person.png')} style={styles.Icon}/>
            <TextInput
              style={styles.body}
              placeholder="Full Name"
              onChangeText={text => this.setState({ fullname: text })}
              value={this.state.fullname}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />

          </View>
        </View>

=======
          </View>
>>>>>>> b663787b2935002be1cc0eff4703224687152b00
          <View style={styles.InputContainer}>
            <View style={styles.SectionStyle}>
              <Image
                source={require('../assets/icons/count.png')}
                style={styles.Icon}
              />
              <TextInput
                style={styles.body}
                placeholder="Members Count"
                onChangeText={text => this.setState({members: text})}
                value={this.state.members}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
            </View>
<<<<<<< HEAD
            </View>

        <View style={styles.InputContainer}>
          <View style={styles.SectionStyle}>
          <Image source = {require('../assets/icons/count.png')} style={styles.Icon}/>
            <TextInput
              style={styles.body}
              placeholder="Members Count"
              onChangeText={text => this.setState({ members: text })}
              value={this.state.members}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />

          </View>
          </View>

=======
          </View>
>>>>>>> b663787b2935002be1cc0eff4703224687152b00
          <View style={styles.DateTimeContainer}>
            <View style={styles.DateSectionStyle}>
              <Image
                source={require('../assets/icons/date.png')}
                style={styles.Icon}
              />
              <DatePicker
                style={styles.date}
                value={this.state.date}
                date={this.state.date}
                format="DD-MM-YYYY"
                minDate="01-01-2020"
                onDateChange={date => {
                  this.setState({date: date});
                }}
                placeholder="Date"
                placeholderTextColor={AppStyles.color.grey}
                iconSource=""
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    height: 42,
                    paddingRight: 20,
                  },
                  placeholder: {
                    color: AppStyles.color.grey,
                  },
                }}
              />
            </View>
            <View style={styles.TimeSectionStyle}>
              <Image
                source={require('../assets/icons/time.png')}
                style={styles.Icon}
              />
              <DatePicker
                style={styles.date}
                placeholder="Time"
                placeholderTextColor={AppStyles.color.grey}
                mode="time"
                iconSource=""
                value={this.state.time}
                date={this.state.time}
                onDateChange={time => {
                  this.setState({time: time});
                }}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                iconSource=""
                customStyles={{
                  dateInput: {
                    height: 42,
                    paddingRight: 20,
                    borderWidth: 0,
                  },
                }}
              />
            </View>
<<<<<<< HEAD
            </View>

        <View style={styles.DateTimeContainer}>
          <View style={styles.DateSectionStyle}>
            <Image source = {require('../assets/icons/date.png')} style={styles.Icon}/>
            <DatePicker
              style={styles.date}
              value={this.state.date}
              date={this.state.date}
              format="DD-MM-YYYY"
              minDate="01-01-2020"
              onDateChange={(date) => {this.setState({date: date})}}
              placeholder='Date'
              placeholderTextColor={AppStyles.color.grey}
              iconSource=''
              customStyles={{
                dateInput: {
                  borderWidth:0,
                  height: 42,
                  paddingRight: 20,
                },
                placeholder:
                {
                  color:AppStyles.color.grey
                }
              }}
            />
            </View>

            <View style={styles.TimeSectionStyle}>
          <Image source = {require('../assets/icons/time.png')} style={styles.Icon}/>
          <DatePicker
            style={styles.date}
            placeholder="Time"
            placeholderTextColor={AppStyles.color.grey}
            mode='time'
            iconSource=""
            
            value={this.state.time}
            date={this.state.time}
            onDateChange={(time) => {this.setState({time: time})}}
            
            iconSource=''
            customStyles={{
              dateInput: {
                height: 42,
                paddingRight: 20,
                borderWidth:0
              }
            }}
          />

          </View>
          </View>

=======
          </View>
>>>>>>> b663787b2935002be1cc0eff4703224687152b00
          <View style={styles.InputContainer}>
            <View style={styles.description}>
              <Image
                source={require('../assets/icons/pen.png')}
                style={styles.Icon}
              />
              <TextInput
                style={styles.purpose}
                placeholder="Meeting Purpose"
                securnpx
                eTextEntry={true}
                onChangeText={text => this.setState({reason: text})}
                value={this.state.reason}
                placeholderTextColor={AppStyles.color.grey}
                multiline={true}
                underlineColorAndroid="transparent"
              />
            </View>
<<<<<<< HEAD
            </View>

        <View style={styles.InputContainer} >
        <View style={styles.description}>
          <Image source = {require('../assets/icons/pen.png')} style={styles.Icon}/>
          <TextInput
            style={styles.purpose}
            placeholder="Meeting Purpose"
            securnpx eTextEntry={true}
            onChangeText={text => this.setState({ reason: text })}
            value={this.state.reason}
            placeholderTextColor={AppStyles.color.grey}
            multiline={true}
            
            underlineColorAndroid="transparent"
          />
=======
>>>>>>> b663787b2935002be1cc0eff4703224687152b00
          </View>
          </View>

          <Button
            containerStyle={[
              styles.facebookContainer,
              {marginTop: 50, marginBottom: 20},
            ]}
            style={styles.facebookText}
            onPress={() => this.props.navigation.goBack()}>
            Submit Request
          </Button>
        </View>
      </ScrollView>
    );
  }
}
export default AppointmentRequestScreen;
