import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import { firebase } from '@react-native-firebase/database';
import { Container, Content, Header, Grid, Col, Row, Button, Left, Right, Text, Form, Item, Label, Input, Textarea, Card, CardItem} from 'native-base';
export default class Rating_screen extends Component  {

  constructor(){
    super();
    this.state = ({
      offer: '',
      shopName: '',
      rating: '',
      orderArr: [],


      numofratings: 5,
      rating: 2.3,
      newrating: 5,
    })
  }

  componentDidMount(){
    //console.log(this.props.route.params.item.name)
    const myitems = firebase.database().ref('Shops');
    myitems.on('value', datasnap => {
      if(datasnap.val()){
        this.setState({orderArr: Object.values(datasnap.val()) })
      }
    })
    console.log('Rating: ', myitems);
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

rating(){
    this.state.numofratings = this.state.numofratings + 1
    var rating = (this.state.rating + this.state.newrating)/this.state.numofratings
    console.log(rating)
  }

  render() {
    return (
      <Container >
        <Header style={{backgroundColor: 'ffffff'}}>
            <Text style={{fontWeight: 'bold', fontSize: 27, marginTop: 10, color: '#52ab98'}}>ZAB Waterworks</Text>
        </Header>
        <Content contentContainerStyle={styles.pview}>

            <Text style={styles.head}>Rating</Text>
            
            <Item regular>
              <Input 
                value={this.state.offer}
                onChangeText={(val) => this.inputValueUpdate(val, 'offer')}
                placeholder='Enter'
                keyboardType='numeric'
              />
            </Item>
            <Button rounded block style={styles.btn} onPress={()=> this.rating()}>
                <Text>Submit</Text>
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
    fontSize: 30,
    marginTop: 30,
    textAlign: 'center'
  },

})