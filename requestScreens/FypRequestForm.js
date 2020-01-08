/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Button  from "react-native-button";
import { AppStyles } from "../styles/RequestFormStyle";
import {styles } from "../styles/FYPRequestStyles";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Dimensions,
  Image,
  Picker,
  ScrollView,
  YellowBox,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class FYPRequestScreen extends React.Component {
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
      rollnumber: '',
      tech: '',
      description: '',
      projName: '',
      memberCount: '',
      member: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scroll}
          centerContent={true}
          contentContainerStyle={styles.CustomScroll}>
          <View style={styles.InputContainer}>
            <View style={styles.SectionStyle}>
              <Image
                source={require('../assets/icons/person.png')}
                style={styles.Icon}
              />
            <Image source = {require('../assets/icons/person.png')} style={styles.Icon}/>
              <Image
                source={require('../assets/icons/person.png')}
                style={styles.Icon}
              />

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
          </View>
          <View style={styles.InputContainer}>
            <View style={styles.SectionStyle}>
              <Image
                source={require('../assets/icons/id.jpg')}
                style={styles.idIcon}
              />
            <Image source = {require('../assets/icons/id.jpg')} style={styles.idIcon}/>
             <Image
                source={require('../assets/icons/id.jpg')}
                style={styles.idIcon}
              />
             <Image
                source={require('../assets/icons/id.jpg')}
                style={styles.idIcon}
              />
              <TextInput
                style={styles.body}
                placeholder="Roll Number"
                onChangeText={text => this.setState({rollnumber: text})}
                value={this.state.rollnumber}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View style={styles.InputContainer}>
            <View style={styles.SectionStyle}>
              <Image
                source={require('../assets/icons/project.jpg')}
                style={styles.Icon}
              />
            <Image source = {require('../assets/icons/project.jpg')} style={styles.Icon}/>
              <Image
                source={require('../assets/icons/project.jpg')}
                style={styles.Icon}
              />
              <Image
                source={require('../assets/icons/project.jpg')}
                style={styles.Icon}
              />
              <TextInput
                style={styles.body}
                placeholder="Project Name"
                onChangeText={text => this.setState({projName: text})}
                value={this.state.projName}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View style={styles.InputContainer}>
            <View style={styles.SectionStyle}>
              <Image
                source={require('../assets/icons/count.png')}
                style={styles.Icon}
              />
              <TextInput
                style={styles.body}
                placeholder="Group members count"
                onChangeText={text => this.setState({memberCount: text})}
                value={this.state.memberCount}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
            </View>
            </View>

          <View style={styles.SectionStyle}>
            <Image
              source={require('../assets/icons/count.png')}
              style={styles.Icon}
            />
            <TextInput
              style={styles.body}
              placeholder="Group members count"
              onChangeText={text => this.setState({memberCount: text})}
              value={this.state.memberCount}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
          </View>
         <View style={styles.InputContainer}>
            <View style={styles.SectionStyle}>
              <Image
                source={require('../assets/icons/group.png')}
                style={styles.groupIcon}
              />
              <Picker
                selectedValue={this.state.member}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({member: itemValue})
                }
                itemStyle={styles.menuItem}
                style={styles.picker}
                mode={'dropdown'}
                placeholder="Select a value">
                <Picker.Item label="Select Member" />
                <Picker.Item label="Aroob" value="Aroob" />
                <Picker.Item label="Fatima" value="Fatima" />
                <Picker.Item label="Mahroosh" value="Mahroosh" />
                <Picker.Item label="Mohsin" value="Mohsin" />
                <Picker.Item label="Taimoor" value="Taimoor" />
              </Picker>
            </View>
           </View>

        <View style={styles.InputContainer}>
          <View style={styles.SectionStyle}>
          <Image source = {require('../assets/icons/group.png')} style={styles.groupIcon}/>
            <Picker
            selectedValue={this.state.member}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({member: itemValue})     
            }
            itemStyle={styles.menuItem}
            style={styles.picker}
            mode={"dropdown"}
            placeholder="Select a value"
            
            >
              <Picker.Item label="Select Member"   />
              <Picker.Item label="Aroob" value="Aroob" />
              <Picker.Item label="Fatima" value="Fatima" />
              <Picker.Item label="Mahroosh" value="Mahroosh" />
              <Picker.Item label="Mohsin" value="Mohsin" />
              <Picker.Item label="Taimoor" value="Taimoor" />
            </Picker>
          </View>
          </View>

          <View style={styles.InputContainer}>
            <View style={styles.SectionStyle}>
              <Image
                source={require('../assets/icons/group.png')}
                style={styles.groupIcon}
              />
              <Picker
                selectedValue={this.state.member}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({member: itemValue})
                }
                itemStyle={styles.menuItem}
                style={styles.picker}
                mode={'dropdown'}
                placeholder="Select a value">
                >
                <Picker.Item label="Select Member" />
                <Picker.Item label="Aroob" value="Aroob" />
                <Picker.Item label="Fatima" value="Fatima" />
                <Picker.Item label="Mahroosh" value="Mahroosh" />
                <Picker.Item label="Mohsin" value="Mohsin" />
                <Picker.Item label="Taimoor" value="Taimoor" />
              </Picker>
            </View>
          </View>

          <View style={styles.InputContainer}>
            <View style={styles.SectionStyle}>
              <Image
                source={require('../assets/icons/group.png')}
                style={styles.groupIcon}
              />
              <Picker
                selectedValue={this.state.member}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({member: itemValue})
                }
                itemStyle={styles.menuItem}
                style={styles.picker}
                mode={'dropdown'}
                placeholder="Select a value">
                >
                <Picker.Item label="Select Member" />
                <Picker.Item label="Aroob" value="Aroob" />
                <Picker.Item label="Fatima" value="Fatima" />
                <Picker.Item label="Mahroosh" value="Mahroosh" />
                <Picker.Item label="Mohsin" value="Mohsin" />
                <Picker.Item label="Taimoor" value="Taimoor" />
              </Picker>
            </View>
          </View>
          <View style={styles.InputContainer}>
            <View style={styles.SectionStyle}>
              <Image
                source={require('../assets/icons/tech.png')}
                style={styles.techIcon}
              />
              <Image
                source={require('../assets/icons/tech.png')}
                style={styles.techIcon}
              />
            <Image source = {require('../assets/icons/tech.png')} style={styles.techIcon}/>
              <Image
                source={require('../assets/icons/tech.png')}
                style={styles.techIcon}
              />
              <TextInput
                style={styles.body}
                placeholder="Technology"
                onChangeText={text => this.setState({tech: text})}
                value={this.state.tech}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View style={styles.InputContainer}>
            <View style={styles.description}>
              <Image
                source={require('../assets/icons/pen.png')}
                style={styles.Icon}
              />
              <Image source = {require('../assets/icons/pen.png')} style={styles.Icon}/>
             <Image
                source={require('../assets/icons/pen.png')}
                style={styles.Icon}
              />
              <Image
                source={require('../assets/icons/pen.png')}
                style={styles.Icon}
              />
              <TextInput
                style={styles.purpose}
                placeholder="Project Description"
                securnpx
                eTextEntry={true}
                onChangeText={text => this.setState({description: text})}
                value={this.state.description}
                placeholderTextColor={AppStyles.color.grey}
                multiline={true}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <Button
            containerStyle={[
              styles.facebookContainer,
              {marginTop: 40, marginBottom: 20},
            ]}
            style={styles.facebookText}
            onPress={() => this.props.navigation.goBack()}>
            Submit Request
          </Button>
        </ScrollView>
      </View>
    );
  }
}
export default FYPRequestScreen;
