import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import { firebase } from '@react-native-firebase/database';
import { Container, Content, Header, Grid, Col, Row, Button, Left, Right, Text, Form, Item, Label, Input, Textarea, Card, CardItem} from 'native-base';
export default class ShDetails_screen extends Component  {

  constructor(){
    super();
    this.state = ({
      offer: '',
    })
  }

  componentDidMount(){
    //console.log(this.props.route.params.item.name)
    const myitems = firebase.database().ref('offered');
    myitems.on('value', datasnap => {
      if(datasnap.val()){
        this.setState({orderArr: Object.values(datasnap.val()) })
      }
    })
  }

  inputValueUpdate=(val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
    //console.log("Entry:",this.state)
  }

  storeitem(){
    //console.log("userd data",userdata)
    const users = firebase.database().ref('offered');
    users.push().set({
      offer:this.state.offer,
      details:this.props.route.params.item.details,
      address:this.props.route.params.item.address,
      name:this.props.route.params.item.name,
      contact:this.props.route.params.item.contact,

    }).then((res) =>{
      this.deletedata();
    })
  }

deletedata(){
  firebase.database().ref('Orders').remove()
  .then((res)=>{
    this.props.navigation.navigate("Seller")
    this.forceUpdate()
  })
}

  render() {
    return (
      <Container >
        <Header style={{backgroundColor: 'ffffff'}}>
            <Text style={{fontWeight: 'bold', fontSize: 27, marginTop: 10, color: '#52ab98'}}>{this.props.route.params.item.name}</Text>
        </Header>
        <Content contentContainerStyle={styles.pview}>

            <Text style={styles.head}>Details:</Text>
            <Text style={{marginTop: 5}}>{this.props.route.params.item.details}</Text>
            <Text style={styles.head}>Home Address:</Text>
            <Text style={{marginTop: 5}}>{this.props.route.params.item.address}</Text>
            

            <Button rounded block style={{marginTop:50, marginBottom:80, backgroundColor: '#2b6777'}}
            onPress={()=> 
              RNImmediatePhoneCall.immediatePhoneCall(this.props.route.params.item.contact)
              }>
                <Mticon name='phone' size={23} color='#ffffff'/>
                <Text>Contact</Text>
            </Button>
            <Item regular>
              <Input 
                value={this.state.offer}
                onChangeText={(val) => this.inputValueUpdate(val, 'offer')}
                placeholder='Offer Price'
                keyboardType='numeric'
              />
            </Item>
            <Button rounded block style={styles.btn} onPress={()=> this.storeitem()}>
                <Text>Offer</Text>
            </Button>
            <Button rounded block style={{alignSelf: 'center', marginTop: 30, backgroundColor: '#ff6961'}} onPress={()=> this.deletedata()}>
                <Text>Reject</Text>
            </Button>
            
        </Content>
      </Container>
    );
  }
}

const styles=StyleSheet.create({

  pview:{
    marginHorizontal:40,

  },

  btn:{
    alignSelf:'center',
    backgroundColor: '#52ab98',
    marginTop: 30
  },

  text:{
    marginTop: 40,
    fontSize: 20,
  },

  head:{
    fontWeight:'bold',
    fontSize: 20,
    marginTop: 40,
  },

})