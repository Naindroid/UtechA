import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import { firebase } from '@react-native-firebase/database';
import { Container, Content, Accordion, Button, Body, Text, Card, CardItem, Left, Right, ListItem, List} from 'native-base';



export default class Completed_tab extends Component {

  constructor(){
    super();
    this.state = ({
      offer: '',
      name: '',
      address: '',
      contact: '',
      details: '',
      orderArr: [],

      

    })
  }
  
  componentDidMount(){
    this.forceUpdate();
    const myitems = firebase.database().ref('completed');
    myitems.on('value', datasnap => {
      if(datasnap.val()){
        this.setState({orderArr: Object.values(datasnap.val()) })
      }
    })
    //console.log(myitems);
  }

  render() {
    console.log('State: ', this.state)
  
    const myitems = this.state.orderArr.map(item => {
      return(

          <TouchableOpacity>
            <Card style={styles.order}>
              <CardItem header bordered>
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
              <CardItem bordered>
                <Text>
                  {item.details}
                </Text>
              </CardItem>
              <CardItem bordered>
                <Text style={{ fontWeight: 'bold'}}>{item.address}</Text>
              </CardItem>
              <CardItem bordered footer>
                  <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
                    Total Cost :
                  </Text>
                  <Text style={{color: 'black', fontWeight: 'bold', fontSize: 25}}>
                      Rs.{item.offer}
                  </Text>    
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