import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import {firebase} from '@react-native-firebase/database';
import { Container, Root, Toast, Content, Button, Left, Icon, Right, Text, Form, Item, Label, Input, Textarea, Card, CardItem} from 'native-base';


export default class createShop_screen extends Component {

  constructor(){
    super();
    this.state = ({
        shopName: '',
        coordinateslat: '',
        coordinateslong: '',
        rating: '',
        contact: '',
        shopsArr: []
    })
  }

  componentDidMount(){
    const myitems = firebase.database().ref('Shops');
    myitems.on('value', datasnap => {
      if(datasnap.val()){
        this.setState({shopsArr: Object.values(datasnap.val()) })
      }
    })
  }

  inputValueUpdate=(val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeitem(){
    const shops = firebase.database().ref('Shops');
    shops.push().set({
      shopName:this.state.shopName,
      coordinateslat:this.state.coordinateslat,
      coordinateslong:this.state.coordinateslong,
      rating:this.state.rating,
      contact:this.state.contact,
    }).then((res) =>{
      this.setState({
        shopName: '',
        coordinateslat: '',
        coordinateslong: '',
        rating: '',
        contact: '',
      })
    })
  }

  render() {
    return (
      <Root>
      <Container >
        <Content contentContainerStyle={styles.pview}>
          
        <Text style={{fontWeight: 'bold', fontSize: 27, marginTop: 10}}>Shop Registration</Text> 
          <Form >

            
            <Text style={styles.text}>Shop Name:</Text>
            <Item disabled>
                <Input
                value={this.state.shopName}
                onChangeText={(val) => this.inputValueUpdate(val, 'shopName')}
                
                />
            </Item>
            
            <Text style={styles.text}>coordinates lat:</Text>
            <Input
            value={this.state.coordinateslat}
            onChangeText={(val) => this.inputValueUpdate(val, 'coordinateslat')}

            />

            <Text style={styles.text}>coordinates long:</Text>
            <Input
            value={this.state.coordinateslong}
            onChangeText={(val) => this.inputValueUpdate(val, 'coordinateslong')}

            />

            <Text style={styles.text}>Rating:</Text>
            <Item disabled>
                <Input
                value={this.state.rating}
                onChangeText={(val) => this.inputValueUpdate(val, 'rating')}
                
                keyboardType='numeric'
                />
            </Item>

            <Text style={styles.text}>Contact number:</Text>
            <Item disabled>
                <Input
                value={this.state.contact}
                onChangeText={(val) => this.inputValueUpdate(val, 'contact')}
                
                keyboardType='numeric'
                />
            </Item>

            {/* <Text style={styles.text}>Location:</Text>
            <Card>
              <CardItem bordered style={{height: 100, justifyContent:'center'}}>
                <Text>Map Placeholder</Text>
              </CardItem>
            </Card> */}

          </Form>

          <Button rounded block style={styles.btn} onPress={()=> {
            this.storeitem();
            Toast.show({
              text: "Your store has been registered!",
              buttonText: "Okay",
              type: "success",
              position: 'top',
              duration: 10000,
            })

            }}>
            <Text>Submit</Text>
          </Button>
            
        </Content>
      </Container>
      </Root>
    );
  }
}

const styles=StyleSheet.create({

  pview:{
    marginHorizontal:40,
    

  },
  btn:{
    alignSelf:'center',
    marginTop:30,
    backgroundColor: '#52ab98',
    marginBottom: 30,
  },

  text:{
    fontWeight: 'bold',
    marginTop: 20,
  },

})