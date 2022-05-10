import React, { Component } from 'react';
import {StyleSheet, ScrollView, Animated, View, Image, TouchableOpacity} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import { Container, Content, Button, Text, Card, CardItem, Left, Right} from 'native-base';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { firebase } from '@react-native-firebase/database';

export default class Map_screen extends Component {

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
  
  render() {
    console.log(this.state)
    
    

    const myitems = this.state.shopsArr.map(item => {
    return (
      
          <Card style={{borderRadius: 15, padding: 10}}>
            <CardItem button onPress={()=> this.props.navigation.navigate("ShDetails")}>
              <Left>
                <Text style={{fontSize: 17, fontWeight: 'bold', color: '#52ab98'}}>{item.shopName}</Text>
              </Left>
              <Right>
                <Mticon name="star" size={25} color='#ffcc00' />
                <Text>{item.rating}</Text>
              </Right>
            </CardItem>
          </Card>      
    )
    })

    const markers = this.state.shopsArr.map(item => {
      var lat = parseFloat(item.coordinateslat);
      var long = parseFloat(item.coordinateslong);
      return (
        <Marker
            coordinate={{
              latitude: lat, 
              longitude: long,
            }}
            title={item.shopName}
            description="For your 100 plumbing needs"
          />
                  
      )
      })

    return (
      <Container >
        <Content contentContainerStyle={styles.container}>
          
          <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: 24.820351,
            longitude: 67.030435,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          >
          {markers}
          
          </MapView> 
        </Content>
        <Content>
          {myitems}
        </Content> 
      </Container>
    );

  }
}

const styles=StyleSheet.create({

  scrollView: {

  },

  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  pview:{
    marginTop:50,
    marginHorizontal:40,
    

  },

  btn:{
    alignSelf:'center',
    marginTop:100,
    backgroundColor: '#52ab98',
  },

  map:{
    ...StyleSheet.absoluteFillObject,
  },
})