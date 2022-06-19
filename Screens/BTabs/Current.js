import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import { firebase } from '@react-native-firebase/database';
import { Container, Content, Accordion, Button, Body, Text, Card, CardItem, Left, Right, ListItem, List} from 'native-base';



export default class Current_tab extends Component {

  constructor(){
    super();
    this.state = ({
      offer: '',
      orderArr: [],

      

    })
  }
  
  componentDidMount(){
    this.forceUpdate();
    const myitems = firebase.database().ref('offered');
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
              <CardItem header>
                <Left>
                  <Text style={styles.text}>ZAB Waterworks</Text>
                </Left>
                <Right>
                  <Mticon.Button name="call" size={25} color='#ffffff' backgroundColor='#52ab98' 
                    onPress={()=> 
                      RNImmediatePhoneCall.immediatePhoneCall('03361348903')}>
                  <Text style={{color: '#ffffff'}}>Call</Text>
                  </Mticon.Button>
                </Right>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  Total Cost :
                </Text>
                <Text style={{fontSize: 25}}>
                    Rs.{item.offer}
                </Text>
              </CardItem>
              <CardItem footer bordered>
                <Text style={{color: 'black', fontWeight: 'bold'}}></Text>
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