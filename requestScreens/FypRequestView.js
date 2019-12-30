/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View ,Platform , Dimensions, Image, Picker, YellowBox} from "react-native";
import Button  from "react-native-button";
import { AppStyles } from "../styles/RequestFormStyle";
import {styles} from "../styles/FYPViewStyles";


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class FypRequestViewScreen extends React.Component {
  static navigationOptions = {
    headerRight: () => (
      <Button

      containerStyle={styles.ConverseButton}
      style={styles.facebookText}
      onPress={() => alert('This is a button!')}
      title="Converse Request"
      color= '#2B60DE'
      />
    ),
  };
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
      fullname: "",
      rollnumber:"",
      tech:"",
      description:"",
      projName:"",
      memberCount:"",
      member:"",
      
    };
  }

  render() {
    return (  
      <View style={styles.container}>
       
        
        <ScrollView 
         style={styles.scroll}
        centerContent={true}
        contentContainerStyle={styles.CustomScroll}
        > 

        


        <View style={styles.sideBySideContainer}>
          <View style={styles.side1} >
              <Text style={styles.title}>Name:</Text>
          </View>

          <View style={styles.side2}>
              <Text style={styles.body} >Aroob Kausar </Text>
          </View>
        </View>

        <View style={styles.sideBySideContainer}>
          <View style={styles.side1} >
              <Text style={styles.title}>Section:</Text>
          </View>

          <View style={styles.side2}>
              <Text style={styles.body} >BSEF16 Morning </Text>
          </View>
        </View>

        <View style={styles.sideBySideContainer}>
          <View style={styles.side1}>
              <Text style={styles.title}>Project Title:</Text>
          </View>

          <View style={styles.side2} >
              <Text style={styles.body}>FYP Portal</Text>
          </View>
        </View>

        <View style={styles.sideBySideContainer}>
          <View style={styles.side1}>
              <Text style={styles.title}>Total Members:</Text>
          </View>

          <View style={styles.side2} >
              <Text style={styles.body}>5</Text>
          </View>
        </View>


        <View style={styles.sideBySideContainer}>
          <View style={styles.side1} >
              <Text style={styles.title}>Members:</Text>
          </View>

          <View style={styles.pickerSide} >
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
                  <Picker.Item label="Aroob Kausar" value="Aroob kausar" />
                  <Picker.Item label="Fatima Batool" value="Fatima" />
                  <Picker.Item label="Mahroosh Hashmi" value="Mahroosh" />
                  <Picker.Item label="Mohsin Anees" value="Mohsin" />
                  <Picker.Item label="Taimoor Hassan" value="Taimoor" />
                </Picker>
          </View>
        </View>

        <View style={styles.sideBySideContainer}>
          <View style={styles.side1}>
              <Text style={styles.title} >Technology:</Text>
          </View>

          <View style={styles.side2}>
              <Text style={styles.body}>React Native</Text>
          </View>
        </View>

        <View style={styles.InputContainer}>
          <View style={styles.side1}>
              <Text style={styles.title}>Description:</Text>
          </View>

          <View style={styles.description}>
              <Text style={styles.purpose}>Our project provides a distinct platform, developed for interaction between students and teachers to allow them to interact with each other through a single platform.</Text>
          </View>
        </View>

        
        <View style={styles.sideBySideButtonContainer}>
          <View >
            <Button
              containerStyle={styles.acceptButton}
              style={styles.facebookText}
              onPress={() =>this.props.navigation.goBack()}
            >
              Accept
            </Button>
          </View>
          
          <View >
            <Button
                containerStyle={styles.ConverseButton}
                style={styles.facebookText}
                onPress={() =>this.props.navigation.goBack()}
            >
              Converse
            </Button>
          </View>

          <View >
            <Button
                containerStyle={styles.DeleteButton}
                style={styles.facebookText}
                onPress={() =>this.props.navigation.goBack()}
            >
              Reject 
            </Button>
          </View>
        </View>

       

          
        </ScrollView>
      </View>
      
    );
  }
}

export default FypRequestViewScreen;
