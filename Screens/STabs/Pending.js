import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import { firebase } from '@react-native-firebase/database';
import { Container, Content, Accordion, Button, Body, Text, Card, CardItem, Left, Right, ListItem, List} from 'native-base';



export default class Pending_tab extends Component {

  constructor(){
    super();
    this.state = ({
      name: '',
      address: '',
      details: '',
      contact: '',
      orderArr: []

    })
  }
  
  componentDidMount(){
    const myitems = firebase.database().ref('Orders');
    myitems.on('value', datasnap => {
      if(datasnap.val()){
        this.setState({orderArr: Object.values(datasnap.val()) })
      }
    })
  }

  render() {
    console.log(this.state)
  
    const myitems = this.state.orderArr.map(item => {
      return(

          <TouchableOpacity onPress={() => this.props.navigation.navigate('SOrDet')}>
            <Card style={styles.order}>
              <CardItem header>
                <Left>
                  <Text style={styles.text}>{item.name}</Text>
                </Left>
                <Right>
                  <Mticon.Button name="call" size={25} color='#ffffff' backgroundColor='#52ab98' 
                    onPress={()=> 
                      RNImmediatePhoneCall.immediatePhoneCall(item.contact)}>
                  <Text style={{color: '#ffffff'}}>Call</Text>
                  </Mticon.Button>
                </Right>
              </CardItem>
              <CardItem>
                <Text>
                  {item.details}
                </Text>
              </CardItem>
              <CardItem footer bordered>
                <Text style={{color: 'black', fontWeight: 'bold'}}>{item.address}</Text>
              </CardItem>
            </Card>
          </TouchableOpacity> 
      )
    })


    return (
      <Container >
        <Content>
          {myitems} 
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