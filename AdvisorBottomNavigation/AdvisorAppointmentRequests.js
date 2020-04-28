/*import React, { Component } from 'react';
import faker from 'faker';
import {View, FlatList,StyleSheet,} from 'react-native';
import {SearchBar,ListItem} from 'react-native-elements';



export default class  AdvisorAppointmentsActivity extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      data: [],      
      search:'',
    };
    this.arrayholder = [];
    for (i=0 ; i <100 ; i++)
    {
      this.state.data.push(
    {
      id : i,
      avatar_url: faker.image.avatar(),
      name : "Aroob Kausar",
      description: "You have received appointment request from Aroob",    
    },
    {
      id : i,
      avatar_url: faker.image.avatar(),
      name : "Fatima Batool",
      description: "You have received appointment request from Fatima",    
    },
    {
      id : i,
      avatar_url: faker.image.avatar(),
      name : "Mohsin Anees",
      description: "You have received appointment request from Mohsin",    
    },
    {
      id : i,
      avatar_url: faker.image.avatar(),
      name : "Mahroosh Hashmi",
      description: "You have received appointment request from Mahroosh",    
    },
    {
      id : i,
      avatar_url: faker.image.avatar(),
      name : "Taimoor Hasaan",
      description: "You have received appointment request from Taimoor",    
    },

    
    )}
    this.arrayholder = this.state.data;
  }

  searchFilterFunction = text => {   
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.name[0].toUpperCase()}`;      
      const textData = text.toUpperCase();       
           return itemData.indexOf(textData) > -1;    
        });  
      this.setState({ data: newData ,search:text});  
      };

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      titleStyle={styles.title}
      subtitle={item.description}
      leftAvatar={{ source: { uri: item.avatar_url } ,size:70}}
      bottomDivider chevron={{
        color:'#2b60de', 
        raised:true, 
        name:'visibility',
        size:20, 
       }}
       onPress= {() => this.props.navigation.navigate('AppointmentView')}
    />
    
  )
  render() {
    const { search } = this.state.search;
  
      return (
        <View>  
          
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.data}
            renderItem={this.renderItem}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  title: {
    color:'#2b60de',fontWeight:'bold'
  },
  container: {
    backgroundColor:'#2b60de'
  },
});
*/

import React, { Component } from 'react';
import faker from 'faker';
import {View, FlatList,StyleSheet, AsyncStorage,YellowBox} from 'react-native';
import {SearchBar,ListItem} from 'react-native-elements';
var url = require('../url');



export default class  AdvisorAppointmentsActivity extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      data: [],      
      search:'',
    };
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: Failed prop type',
      'Warning: componentWillReceiveProps has been renamed',
      'Warning: DatePickerAndroid has been merged with DatePickerIOS',
      'Warning: TimePickerAndroid has been merged with DatePickerIOS',
      `can't perform a React state update on an unmounted component`,
    ]);
    
    
  }
  _retriveData = async () => {
    try {
      console.log('retrivingData')
      //await AsyncStorage.setItem('email', 'fareed@pucit.edu.pk');
      const value = await AsyncStorage.getItem("email");
  
  
      fetch( url.base_url + "/fetchAppointmentRequests", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: value,
          
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        if(responseJson)
        {
           this.setState({data: [{id : responseJson[0].app_ID,
            avatar_url: responseJson[0].profile_Pic,
            name :responseJson[0].Name,
            description: 'You have received appointment Request from '+ responseJson[0].Name,  }]})

          var i =0;
               for (i=1; i < Object.keys(responseJson).length ; i++)
                {
                    if(responseJson[i].profile_Pic == null) {
                     // alert(responseJson[i].app_ID
                     
                      this.state.data.push(
                        {
                      id : responseJson[i].app_ID,
                      avatar_url: responseJson[i].profile_Pic,
                      name : responseJson[i].Name,
                      description: 'You have received appointment request from '+ responseJson[i].Name,
                      })
                    }
                    else {
                      this.state.data.push(
                        {
                      id : responseJson[i].app_ID,
                      avatar_url: responseJson[i].profile_Pic.toString(),
                      name : responseJson[i].Name,
                      description: 'You have received appointment request from '+ responseJson[i].Name,  
                    })
                  }
                }
               
        }
        else
        {
          alert('war gye');
        }
        
      })
  
  
    
    } catch (error) {
      console.log(error.message);
    }
    
  }
 
  componentDidMount(){
    console.log('calling')
    setInterval(this._retriveData,60000);
    this.focusListener = this.props.navigation.addListener('didFocus', () => {this._retriveData()});
    this._retriveData();
  }
  componentWillUnmount() {
    
    clearInterval();
    this.focusListener.remove();
  }
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      titleStyle={styles.title}
      subtitle={item.description}
      leftAvatar={{ source: { uri: item.avatar_url } ,size:70}}
      onPress={ () => this.props.navigation.navigate('AppointmentView',{
        app_id: item.id,
      })}
      bottomDivider
    />
    
  )
  render() {
    const { search } = this.state.search;
  
      return (
        <View>  
          
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.data}
            renderItem={this.renderItem}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  title: {
    color:'#2b60de',fontWeight:'bold'
  },
  container: {
    backgroundColor:'#2b60de'
  },
});


