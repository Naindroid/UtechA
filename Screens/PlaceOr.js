import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import {firebase} from '@react-native-firebase/database';
import { Container, Root, Toast, Content, Button, Left, Icon, Right, Text, Form, Item, Label, Input, Textarea, Card, CardItem} from 'native-base';


export default class PlaceOr_screen extends Component {

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

  inputValueUpdate=(val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeitem(){
    const users = firebase.database().ref('Orders');
    users.push().set({
      name:this.state.name,
      address:this.state.address,
      details:this.state.details,
      contact:this.state.contact,
    }).then((res) =>{
      this.setState({
        name: '',
        address: '',
        details: '',
        contact: '',
      })
    })
  }

  render() {
    return (
      <Root>
      <Container >
        <Content contentContainerStyle={styles.pview}>
          
        <Text style={{fontWeight: 'bold', fontSize: 27, marginTop: 10}}>Order Placement</Text> 
        <Text style={{fontWeight: 'bold',fontSize: 24, marginTop: 5, marginBottom: 25, color: '#52ab98'}}>ZAB Waterworks</Text>
          <Form >

            
            <Text style={styles.text}>Name Reference:</Text>
            <Item disabled>
                <Input
                value={this.state.name}
                onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                
                />
            </Item>
            
            <Text style={styles.text}>Address:</Text>
            <Textarea 
            value={this.state.address}
            onChangeText={(val) => this.inputValueUpdate(val, 'address')}

            rowSpan={3} bordered placeholder='Enter your address here...'
            />

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

            <Text style={styles.text}>Details:</Text>
            <Textarea 
            value={this.state.details}
            onChangeText={(val) => this.inputValueUpdate(val, 'details')}
            
            rowSpan={5} bordered placeholder='Explain your problem...'
            />
            
            <Text style={styles.text}>Attach Picture:</Text>
            <Right>
              <Button bordered dark style={{marginTop: 15}}>
                <Mticon button name="photo-camera" size={40} color='black' />
              </Button>
            </Right>
              <Text note style={{textAlign: 'center'}}>Attach a picture related to your required work</Text>

          </Form>

          <Button rounded block style={styles.btn} onPress={()=> {
            this.storeitem();
            Toast.show({
              text: "Your order has been placed!",
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