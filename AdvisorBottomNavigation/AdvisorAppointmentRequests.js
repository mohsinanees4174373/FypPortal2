import React, { Component } from 'react';
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

