import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import { Container, Root, Content, Button, Text, Form, Item, Input, Label, Toast} from 'native-base';
export default class Login_screen extends Component {

  state={
    email: '',
    passwd: '',

  }

  login=(email, passwd)=>{

    if(this.state.email==='' || this.state.passwd===''){
      Toast.show({
        text: "Please enter your credentials",
        buttonText: "Okay",
        type: "danger",
        position: 'top',
        duration: 5000,
      })
    }
    else{
      auth().signInWithEmailAndPassword(email, passwd)
      .then(() => { 
        this.props.navigation.navigate("Mainmenu");
      })
      .catch(error => {
        if(error.code === 'auth/invalid-email'){
          Toast.show({
            text: "Invalid E-mail address",
            buttonText: "Okay",
            type: "danger",
            position: 'top',
            duration: 5000,
          })
        }
        if(error.code === 'auth/wrong-password'){
          Toast.show({
            text: "Incorrect Password",
            buttonText: "Okay",
            type: "danger",
            position: 'top',
            duration: 5000,
          })
        }
        if(error.code === 'auth/user-not-found'){
          Toast.show({
            text: "User does not exist",
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
          
          <Image source={require('../assets/logo.png')} style={{height: 250, width: 250, alignSelf: 'center',}}/>
          <Text style={{fontWeight: 'bold', textAlign:'center', fontSize:50, marginTop: -60, marginBottom:100, color: '#2b6777'}}>UTechA</Text>
          <Text style={{fontWeight: 'bold', textAlign:'center'}}>Sign in to continue</Text>
          <Form >

            <Item floatingLabel>
              <Label>E-mail Address</Label>
              <Input 
              onChangeText={(email)=>this.setState({email})}

              autoCorrect={false} 
              autoCapitalize={'none'}
              /> 
            </Item>

            <Item floatingLabel>
              <Label>Password</Label>
              <Input 
              onChangeText={(passwd)=>this.setState({passwd})}

              secureTextEntry={true} 
              autoCorrect={false} 
              autoCapitalize={'none'}
              />
            </Item>

          </Form>

          <Button rounded block style={styles.btn} onPress={()=> this.login(this.state.email, this.state.passwd)}>
            <Text>Login</Text>
          </Button>
          
          <Text note style={{textAlign: 'center', marginTop: 30}}>
            Don't have an account? 
          </Text>
          <Button transparent small style={{alignSelf: 'center'}} onPress={()=> this.props.navigation.navigate("Signup")}>
            <Text>Sign up</Text>
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
    marginTop:80,
    backgroundColor: '#52ab98',
  }
})