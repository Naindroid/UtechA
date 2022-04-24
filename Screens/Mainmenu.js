import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import FAicon from 'react-native-vector-icons/FontAwesome';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import MtCicon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Content, Card, Footer, FooterTab, Button, Icon, Text, Col, Row, Grid, CardItem } from 'native-base';
export default class Mainmenu_screen extends Component {
  render() {
    return (
      <Container>
        <Content padder style={{backgroundColor: '#ffffff'}}>
          <Text>Git testing</Text>
        <Text style={{fontWeight: 'bold', fontSize: 30, marginTop: 10, marginHorizontal: 15}}>Main Menu</Text>
        <Text note style={{fontSize: 17, marginBottom: 30, marginHorizontal: 15}}>Choose a category</Text> 
        
        <Card style={{borderRadius:15}}>
            <CardItem style={{backgroundColor: '#52ab98', borderRadius: 15, height: 150}} button onPress={()=> this.props.navigation.navigate("Buyer")}>
                <Mticon name="home-repair-service" size={50} color='#ffffff' />
                <Text style={styles.text}>Looking for a Service</Text>
            </CardItem>  
        </Card>
        <Card style={{borderRadius:15}}>
            <CardItem style={{backgroundColor: '#2b6777', borderRadius: 15, height: 150}} button onPress={()=> this.props.navigation.navigate("Seller")}>
                <Mticon name="business" size={50} color='#ffffff' />
                <Text style={styles.text}>Providing a Service</Text>
            </CardItem>  
        </Card>
        </Content>
      </Container>
    );
  }
}

const styles=StyleSheet.create({

  text:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
    marginLeft: 20,
  },

})