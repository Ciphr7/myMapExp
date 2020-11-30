

import React, { Component } from 'react';
 
import { StyleSheet, View, Button,Platform, Text} from 'react-native';

import Location from "./Location"

 
export default class TesterComponent extends Component{
 
  constructor(){
 
      super();
 
      this.state = {
 
          TextHolder:'This is Old Sample Text'
      }
 
  }
 
  ChangeTextFunction =()=> {
 
      this.setState({
 
        TextHolder: <Location />
 
      })
  }
 
   render(){
      return(
      <View style={styles.MainContainer}>
          <Location />
 
          <Text style={{marginBottom: 20, fontSize: 20}}> {this.state.TextHolder} </Text>
 
          <Button title="Change Text Component Text" onPress={this.ChangeTextFunction}/>
      
      </View>
      );
  }
}
   
 
const styles = StyleSheet.create(
{
 
MainContainer:
{
   justifyContent: 'center',
   alignItems: 'center',
   flex:1,
   marginTop: (Platform.OS) === 'ios' ? 20 : 0
}
 
});