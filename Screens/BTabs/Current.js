import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import { Container, Content, Button, Body, Text, Card, CardItem, Left, Right} from 'native-base';
export default class Current_tab extends Component {
  render() {
    return (
      <Container >
        <Content>

          <Text style={{marginTop: 20, textAlign: 'center'}}>You currently have no active orders</Text>

        </Content>
      </Container>
    );
  }
}

const styles=StyleSheet.create({

  pview:{
    marginTop:50,
    marginHorizontal:40,
    

  },
  btn:{
    alignSelf:'center',
    marginTop:100,
    backgroundColor: '#52ab98',
  },

  order:{
      
  },

  text:{
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#52ab98',
  },

})