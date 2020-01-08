import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

export default class AboutUsActivity extends Component {
  render() {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://paperpks.com/wp-content/uploads/2018/12/pucit.png',
            }}
          />
          <Text style={styles.missionHeading}>{'\n'}Our Mission</Text>
          <Text style={styles.mission}>
            To reduce manual work and moves toward Smart Campus
          </Text>
          <View style={styles.line} />
        
          <View style={styles.developerContainer}>
            <Text>
              <Image source={require('./mahroosh.jpg')} style={styles.myPic} />
            </Text>
              <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'     '}Mahroosh Hashmi{'\n'}{'    '}
                "Student of PUCIT. Developing{'\n'}{'    '}this app as FYP and to provide{'\n'}{'    '}a digitized solution of FYP{'\n'}{'    '}interaction problems."
            </Text>
          </View>

          <View style={styles.developerContainer}>
            <Text>
              <Image source={require('./mypic.jpg')} style={styles.myPic} />
            </Text>
            <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}{'     '} Mohsin Anees{'\n'}{'    '}
                "Student of PUCIT. Developing{'\n'}{'    '}this app as FYP and to provide{'\n'}{'    '}a digitized solution of FYP{'\n'}{'    '}interaction problems."
            </Text>
          </View>

          <View style={styles.developerContainer}>
            <Text>
              <Image source={require('./mypic.jpg')} style={styles.myPic} />
            </Text>
            <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}{'     '} Aroob Kausar{'\n'}{'    '}
                "Student of PUCIT. Developing{'\n'}{'    '}this app as FYP and to provide{'\n'}{'    '}a digitized solution of FYP{'\n'}{'    '}interaction problems."
            </Text>
          </View>

          <View style={styles.developerContainer}>
            <Text>
              <Image source={require('./mypic.jpg')} style={styles.myPic} />
            </Text>
            <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}{'     '} Taimoor Hassan{'\n'}{'    '}
                "Student of PUCIT. Developing{'\n'}{'    '}this app as FYP and to provide{'\n'}{'    '}a digitized solution of FYP{'\n'}{'    '}interaction problems."
            </Text>
          </View>

          <View style={styles.developerContainer}>
            <Text>
              <Image source={require('./mypic.jpg')} style={styles.myPic} />
            </Text>
            <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}{'     '} Fatima Batool{'\n'}{'    '}
                "Student of PUCIT. Developing{'\n'}{'    '}this app as FYP and to provide{'\n'}{'    '}a digitized solution of FYP{'\n'}{'    '}interaction problems."
            </Text>
          </View>

          <View style={styles.line} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
  missionHeading: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'serif',
    color: 'black',
  },
  mission: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'serif',
    color: 'grey',
  },
  line: {
    flex: 1,
    backgroundColor: 'black',
    height: 1,
    width: 175,
    marginTop: 20,
  },
  developerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  myPic: {
    flex: 1,
    height: 150,
    width: 110,
    marginLeft: 20,
  },
});