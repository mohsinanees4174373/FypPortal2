import React, { Component } from 'react';
import faker from 'faker';
import {View, FlatList,StyleSheet,} from 'react-native';
import {SearchBar,ListItem} from 'react-native-elements';



export default class   AppointmentsActivity  extends Component {
 
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
      name : "Sir Fareed",
      description: "Sir Fareed accepted your appointment request",    
    },
    {
      id : i,
      avatar_url: faker.image.avatar(),
      name : "Sir Anzar",
      description: "Sir Anzar accepted your appointment request",    
    },
    {
      id : i,
      avatar_url: faker.image.avatar(),
      name : "Sir Murtaza",
      description: "Sir Fareed rejected your appointment request",    
    },
    {
      id : i,
      avatar_url: faker.image.avatar(),
      name : "Sir Fareed",
      description: "Sir Fareed rejected your appointment request",    
    },
    {
      id : i,
      avatar_url: faker.image.avatar(),
      name : "Sir Kashif",
      description: "Sir Fareed accepted your appointment request",    
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
      bottomDivider
    />
    
  )
  render() {
    const { search } = this.state.search;
  
      return (
        <View  style={{flex: 1}}>  
          
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










