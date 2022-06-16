import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/database';
import { Container, Root, Toast, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
 //changes

export default class Signup_screen extends Component {

constructor(){
  super();
  this.state = ({
    email: '',
    password: '',
    name: '',
    contact: '',
    userArr: [],

    cpassword: '',
    uid: '',
  })
}

componentDidMount(){
  const myitems = firebase.database().ref('users/');
  myitems.on('value', datasnap => {
    if(datasnap.val()){
      this.setState({userArr: Object.values(datasnap.val()) })
    }
  })
}

inputValueUpdate=(val, prop) => {
  auth().onAuthStateChanged(user => {  if(user) {
    this.state.uid = user.uid
  }})
  const state = this.state;
  state[prop] = val;
  this.setState(state);
  console.log("Entry:",this.state)
}

storeitem(userdata){
  console.log("userd data",userdata)
  const users = firebase.database().ref('users/'+ userdata.user.uid);
  users.set({
    email:this.state.email,
    password:this.state.password,
    name:this.state.name,
    contact:this.state.contact,
    uid:userdata.user.uid,
  }).then((res) =>{
    console.log("Line 59:",res)
    this.setState({
      email: '',
      password: '',
      name: '',
      contact: '',

      cpassword: '',
    })
  })
}

  async signup(email, password){
    if(this.state.email==='' || this.state.password==='' || this.state.name==='' || this.state.contact===''){
      Toast.show({
        text: "Please fill all fields",
        buttonText: "Okay",
        type: "danger",
        position: 'top',
        duration: 5000,
      })
    }
    else if(this.state.password !== this.state.cpassword){
      Toast.show({
        text: "Password do not match",
        buttonText: "Okay",
        type: "danger",
        position: 'top',
        duration: 5000,
      })
    }
    else{
     await  auth().createUserWithEmailAndPassword(email, password)
     .then((userdata) => {
      console.log("Line 90:", JSON.stringify(userdata.user.uid))
      this.storeitem(userdata);
      Toast.show({
        text: "Account created successfully!",
        buttonText: "Okay",
        type: "success",
        position: 'top',
        duration: 5000,
      })
     })
      .catch(error => {
        if(error.code === 'auth/email-already-in-use'){
          Toast.show({
            text: "E-mail address is already in use",
            buttonText: "Okay",
            type: "danger",
            position: 'top',
            duration: 5000,
          })
        }
        if(error.code === 'auth/invalid-email'){
          Toast.show({
            text: "Invalid E-mail address",
            buttonText: "Okay",
            type: "danger",
            position: 'top',
            duration: 5000,
          })
        }
        if(error.code === 'auth/weak-password'){
          Toast.show({
            text: "Password must be atleast 6-characters long",
            buttonText: "Okay",
            type: "danger",
            position: 'top',
            duration: 5000,
          })
        }
      })

    }
  }

  render() {
    return (
      <Root>
      <Container >
        <Content contentContainerStyle={styles.pview}>

            <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 20}}>Create an Account</Text>
          <Form >

            <Item floatingLabel>
              <Label>E-mail Address</Label>
              <Input
                value={this.state.email}
                onChangeText={(val) => this.inputValueUpdate(val, 'email')}
                
                autoCapitalize={'none'}
              />
            </Item>
            
            <Item floatingLabel>
              <Label>Password</Label>
              <Input 
              value={this.state.password}
              onChangeText={(val) => this.inputValueUpdate(val, 'password')}
              
              secureTextEntry={true}
              autoCapitalize={'none'}
              />
            </Item>

            <Item floatingLabel>
              <Label>Confirm Password</Label>
              <Input 
              value={this.state.cpassword}
              onChangeText={(val) => this.inputValueUpdate(val, 'cpassword')}
              
              secureTextEntry={true}
              />
            </Item>

            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input
              value={this.state.name}
              onChangeText={(val) => this.inputValueUpdate(val, 'name')}

              />
            </Item>

            <Item floatingLabel>
              <Label>Contact number</Label>
              <Input
              value={this.state.contact}
              onChangeText={(val) => this.inputValueUpdate(val, 'contact')}
              
              keyboardType='numeric'
              />
            </Item>

          </Form>

          <Button rounded block style={styles.btn} onPress={()=> 
            this.signup(this.state.email, this.state.password)

            }>
            <Text>Sign Up</Text>
          </Button>
          
          <Text note style={{textAlign: 'center', marginTop: 30}}>
            Already have an account? 
          </Text>
          <Button transparent small style={{alignSelf: 'center'}} onPress={()=> this.props.navigation.navigate("Login")}>
            <Text>Log In</Text>
          </Button>
            
        </Content>
      </Container>
      </Root>
    );
  }
}

const styles=StyleSheet.create({

  pview:{
    marginTop:135,
    marginHorizontal:40,

  },

  btn:{
    alignSelf:'center',
    marginTop:100,
    backgroundColor: '#52ab98',
  }

})