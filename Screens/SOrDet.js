import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import { Container, Content, Header, Grid, Col, Row, Button, Left, Right, Text, Form, Item, Label, Input, Textarea, Card, CardItem} from 'native-base';
export default class ShDetails_screen extends Component {
  render() {
    return (
      <Container >
        <Header style={{backgroundColor: 'ffffff'}}>
            <Text style={{fontWeight: 'bold', fontSize: 27, marginTop: 10, color: '#52ab98'}}>Customer Name</Text>
        </Header>
        <Content contentContainerStyle={styles.pview}>

            <Text style={styles.head}>Details</Text>
            <Text style={{marginTop: 5}}>Order details here</Text>
            <Text style={styles.head}>Address and Location:</Text>
            <Text style={{marginTop: 5}}>SZABIST 100, 3rd Ave, Block 5 Clifton, Karachi</Text>
            

            <Button rounded block style={{marginTop:130, backgroundColor: '#2b6777'}}
            onPress={()=> 
              RNImmediatePhoneCall.immediatePhoneCall('03361348903')
              }>
                <Mticon name='phone' size={23} color='#ffffff'/>
                <Text>Contact</Text>
            </Button>
            <Button rounded block style={styles.btn} onPress={()=> this.props.navigation.navigate("PlaceOr")}>
                <Text>Accept</Text>
            </Button>
            <Button rounded block style={{alignSelf: 'center', marginTop: 30, backgroundColor: '#ff6961'}} onPress={()=> this.props.navigation.navigate("PlaceOr")}>
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