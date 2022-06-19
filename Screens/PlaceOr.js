import React, { Component, useState } from 'react';
import {StyleSheet, Image} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import {firebase} from '@react-native-firebase/database';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage'
import { Container, Root, Toast, Content, Button, Grid, Col, Row, Text, Form, Item, Label, Input, Textarea, Card, CardItem} from 'native-base';

pickAndUploadImage=()=>{
  launchImageLibrary({quality:0.5},(fileobj)=>{
    
    
    const uploadTask = storage().ref().child(`/orderpic/${Date.now()}`).putFile(fileobj.assets[0].uri)

    uploadTask.on('state_changed', 
      (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    if(progress==100) alert('Image Has Been Uploaded Successfully')
    
  }, 
  (error) => {
    alert('Error While Uploading Image')
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      setImage(downloadURL);
      this.state.imgpath = fileobj.assets[0].uri;
      console.log(imgpath);
    });
  }
);
  })
}

export default class PlaceOr_screen extends Component {

  

  constructor(){
    super();
    this.state = ({
      name: '',
      address: '',
      details: '',
      contact: '',
      orderArr: [],

      imgpath: ''
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
          
        <Text style={{fontWeight: 'bold', fontSize: 27, marginTop: 10, color: '#52ab98'}}>Order Placement</Text> 
        {/* <Text style={{fontWeight: 'bold',fontSize: 24, marginTop: 5, marginBottom: 25, color: '#52ab98'}}>ZAB Waterworks</Text> */}
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
            <Grid>
              <Col>
                <Row style={{justifyContent: 'center', alignItems: 'center'}}>
            
            
            
            
              <Button bordered dark style={{marginTop: 15, marginHorizontal: 20}} onPress={pickAndUploadImage}>
                <Mticon button name="image" size={40} color='#52ab98' />
              </Button>
                  </Row>
                </Col>
              </Grid>
            
            

            <Card>
              <CardItem bordered style={{height: 150, justifyContent:'center'}}>
                <Image source={{uri: this.state.imgpath}} style={{height: 150, width: null, flex: 1}}/>
              </CardItem>
            </Card>
              

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