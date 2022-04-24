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
            <Text style={{fontWeight: 'bold', fontSize: 27, marginTop: 10}}>ZAB Waterworks</Text>
        </Header>
        <Content contentContainerStyle={styles.pview}>
            <Grid>
                <Col>
                   <Text style={styles.head}>Rating:</Text> 
                   <Text style={styles.head}>Service Type:</Text>
                </Col>
                <Col>
                    <Text style={styles.text}>
                        <Mticon name="star" size={20} color='#ffcc00' />
                        4.5
                    </Text>
                    <Text style={styles.text}>Plumbing</Text>
                </Col>
            </Grid>

            <Text style={styles.head}>Shop Address and Location:</Text>
            <Text style={{marginTop: 5}}>SZABIST 100, 3rd Ave, Block 5 Clifton, Karachi</Text>
            <Card>
              <CardItem bordered style={{height: 150, justifyContent:'center'}}>
                <Text>Map Placeholder</Text>
              </CardItem>
            </Card>

            <Button rounded block style={{marginTop:80, backgroundColor: '#2b6777'}}
            onPress={()=> 
              RNImmediatePhoneCall.immediatePhoneCall('03313799814')
              }>
                <Mticon name='phone' size={23} color='#ffffff'/>
                <Text>Contact</Text>
            </Button>
            <Button rounded block style={styles.btn} onPress={()=> this.props.navigation.navigate("PlaceOr")}>
                <Text>Place Order</Text>
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