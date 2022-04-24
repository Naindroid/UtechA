import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import { Container, Content, Button, Left, Right, Text, Form, Item, Label, Input, Textarea, Card, CardItem} from 'native-base';
export default class Setup_screen extends Component {

  state={
      dropDown:'',
  }
  render() {
    return (
      <Container >
        <Content contentContainerStyle={styles.pview}>
          
        <Text style={{fontWeight: 'bold', fontSize: 27, marginTop: 10}}>Register as a Technician!</Text>
        <Text style={{ marginBottom: 30, marginTop: 10}}>Have a utility business? Join UtechA's community of technicians and take your business to the next level!</Text> 
          <Form >

            
            <Text style={styles.text}>Service Type:</Text>
            <Item regular>
              <Input placeholder='Plumber, Cerpenter etc...' />
            </Item>
            
            <Text style={styles.text}>Shop Address:</Text>
            <Textarea rowSpan={3} bordered placeholder='Enter your shop address here...'/>

            <Text style={styles.text}>Shop Location:</Text>
            <Card>
              <CardItem bordered style={{height: 100, justifyContent:'center'}}>
                <Text>Map Placeholder</Text>
              </CardItem>
            </Card>
            
            
              <Text style={styles.text}>Picture of shop:</Text>
            
            <Right>
              <Button bordered dark style={{marginTop: 15}}>
                <Mticon button name="photo-camera" size={40} color='black' />
              </Button>
            </Right>
              <Text note style={{textAlign: 'center'}}>Attach a photo of your shop</Text>

          </Form>

          <Button rounded block style={styles.btn} onPress={()=> this.props.navigation.navigate("Seller")}>
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
    marginTop:50,
    backgroundColor: '#52ab98',
  },

  text:{
    fontWeight: 'bold',
    marginTop: 30,
  },

})